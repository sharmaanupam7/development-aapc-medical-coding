import fs from "fs";
import path from "path";

import { Metadata } from "libphonenumber-js/core";
import type { CountryCode } from "libphonenumber-js";
import metadata from "libphonenumber-js/metadata.full.json";

interface CountryMobileRule {
  country_code: string;
  mobileMinLength: number;
  mobileMaxLength: number;
  mobilePattern: string | null;
}

/**
 * Use the Metadata class from `libphonenumber-js/core`
 * because it accepts custom metadata as a constructor argument.
 */
const phoneMetadata = new Metadata(metadata);

const rules: CountryMobileRule[] = [];

/**
 * metadata.countries contains ISO-2 country codes.
 *
 * Object.keys() normally returns string[],
 * so explicitly tell TypeScript that these are CountryCode values.
 */
const countryCodes = Object.keys(metadata.countries) as CountryCode[];

console.log(`Found ${countryCodes.length} countries in phone metadata.`);

for (const countryCode of countryCodes) {
  try {
    phoneMetadata.selectNumberingPlan(countryCode);

    const numberingPlan = phoneMetadata.numberingPlan;

    if (!numberingPlan) {
      console.warn(`No numbering plan found for country: ${countryCode}`);

      continue;
    }

    const possibleLengths = numberingPlan.possibleLengths();

    if (!possibleLengths || possibleLengths.length === 0) {
      console.warn(`No possible lengths found for country: ${countryCode}`);

      continue;
    }

    /*
     * IMPORTANT:
     *
     * libphonenumber-js Metadata exposes possibleLengths()
     * for the country's numbering plan.
     *
     * We are using the metadata only to generate a static
     * seed snapshot.
     *
     * Runtime validation will use MySQL.
     */

    const mobileMinLength = Math.min(...possibleLengths);
    const mobileMaxLength = Math.max(...possibleLengths);

    rules.push({
      country_code: countryCode,
      mobileMinLength,
      mobileMaxLength,
      mobilePattern: null,
    });
  } catch (error) {
    console.warn(`Failed to process country ${countryCode}:`, error instanceof Error ? error.message : error);
  }
}

rules.sort((a, b) => a.country_code.localeCompare(b.country_code));

const output = `/**
 * Country mobile-number validation rules.
 *
 * IMPORTANT:
 * This file is a seed-data snapshot.
 *
 * Runtime application validation MUST use the database.
 *
 * Do not import libphonenumber-js from application/server
 * validation code.
 */

export interface CountryMobileRule {
  country_code: string;
  mobileMinLength: number;
  mobileMaxLength: number;
  mobilePattern: string | null;
}

export const COUNTRY_MOBILE_RULES: CountryMobileRule[] = ${JSON.stringify(rules, null, 2)};
`;

const outputPath = path.join(process.cwd(), "prisma", "country-mobile-rules.ts");

fs.writeFileSync(outputPath, output, "utf8");

console.log("--------------------------------------");
console.log(`Generated ${rules.length} country mobile rules.`);
console.log(`Skipped ${countryCodes.length - rules.length} countries.`);
console.log(`Output: ${outputPath}`);
console.log("--------------------------------------");
