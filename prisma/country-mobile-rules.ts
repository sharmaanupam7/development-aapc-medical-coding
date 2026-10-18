/**
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

export const COUNTRY_MOBILE_RULES: CountryMobileRule[] = [
  {
    "country_code": "AC",
    "mobileMinLength": 5,
    "mobileMaxLength": 6,
    "mobilePattern": null
  },
  {
    "country_code": "AD",
    "mobileMinLength": 6,
    "mobileMaxLength": 9,
    "mobilePattern": null
  },
  {
    "country_code": "AE",
    "mobileMinLength": 5,
    "mobileMaxLength": 12,
    "mobilePattern": null
  },
  {
    "country_code": "AF",
    "mobileMinLength": 9,
    "mobileMaxLength": 9,
    "mobilePattern": null
  },
  {
    "country_code": "AG",
    "mobileMinLength": 10,
    "mobileMaxLength": 10,
    "mobilePattern": null
  },
  {
    "country_code": "AI",
    "mobileMinLength": 10,
    "mobileMaxLength": 10,
    "mobilePattern": null
  },
  {
    "country_code": "AL",
    "mobileMinLength": 6,
    "mobileMaxLength": 9,
    "mobilePattern": null
  },
  {
    "country_code": "AM",
    "mobileMinLength": 8,
    "mobileMaxLength": 8,
    "mobilePattern": null
  },
  {
    "country_code": "AO",
    "mobileMinLength": 9,
    "mobileMaxLength": 9,
    "mobilePattern": null
  },
  {
    "country_code": "AR",
    "mobileMinLength": 10,
    "mobileMaxLength": 11,
    "mobilePattern": null
  },
  {
    "country_code": "AS",
    "mobileMinLength": 10,
    "mobileMaxLength": 10,
    "mobilePattern": null
  },
  {
    "country_code": "AT",
    "mobileMinLength": 4,
    "mobileMaxLength": 13,
    "mobilePattern": null
  },
  {
    "country_code": "AU",
    "mobileMinLength": 5,
    "mobileMaxLength": 12,
    "mobilePattern": null
  },
  {
    "country_code": "AW",
    "mobileMinLength": 7,
    "mobileMaxLength": 7,
    "mobilePattern": null
  },
  {
    "country_code": "AX",
    "mobileMinLength": 5,
    "mobileMaxLength": 12,
    "mobilePattern": null
  },
  {
    "country_code": "AZ",
    "mobileMinLength": 9,
    "mobileMaxLength": 9,
    "mobilePattern": null
  },
  {
    "country_code": "BA",
    "mobileMinLength": 8,
    "mobileMaxLength": 9,
    "mobilePattern": null
  },
  {
    "country_code": "BB",
    "mobileMinLength": 10,
    "mobileMaxLength": 10,
    "mobilePattern": null
  },
  {
    "country_code": "BD",
    "mobileMinLength": 6,
    "mobileMaxLength": 10,
    "mobilePattern": null
  },
  {
    "country_code": "BE",
    "mobileMinLength": 8,
    "mobileMaxLength": 9,
    "mobilePattern": null
  },
  {
    "country_code": "BF",
    "mobileMinLength": 8,
    "mobileMaxLength": 8,
    "mobilePattern": null
  },
  {
    "country_code": "BG",
    "mobileMinLength": 6,
    "mobileMaxLength": 12,
    "mobilePattern": null
  },
  {
    "country_code": "BH",
    "mobileMinLength": 8,
    "mobileMaxLength": 8,
    "mobilePattern": null
  },
  {
    "country_code": "BI",
    "mobileMinLength": 8,
    "mobileMaxLength": 8,
    "mobilePattern": null
  },
  {
    "country_code": "BJ",
    "mobileMinLength": 8,
    "mobileMaxLength": 10,
    "mobilePattern": null
  },
  {
    "country_code": "BL",
    "mobileMinLength": 9,
    "mobileMaxLength": 9,
    "mobilePattern": null
  },
  {
    "country_code": "BM",
    "mobileMinLength": 10,
    "mobileMaxLength": 10,
    "mobilePattern": null
  },
  {
    "country_code": "BN",
    "mobileMinLength": 7,
    "mobileMaxLength": 7,
    "mobilePattern": null
  },
  {
    "country_code": "BO",
    "mobileMinLength": 8,
    "mobileMaxLength": 9,
    "mobilePattern": null
  },
  {
    "country_code": "BQ",
    "mobileMinLength": 7,
    "mobileMaxLength": 7,
    "mobilePattern": null
  },
  {
    "country_code": "BR",
    "mobileMinLength": 8,
    "mobileMaxLength": 11,
    "mobilePattern": null
  },
  {
    "country_code": "BS",
    "mobileMinLength": 10,
    "mobileMaxLength": 10,
    "mobilePattern": null
  },
  {
    "country_code": "BT",
    "mobileMinLength": 7,
    "mobileMaxLength": 8,
    "mobilePattern": null
  },
  {
    "country_code": "BW",
    "mobileMinLength": 7,
    "mobileMaxLength": 10,
    "mobilePattern": null
  },
  {
    "country_code": "BY",
    "mobileMinLength": 6,
    "mobileMaxLength": 11,
    "mobilePattern": null
  },
  {
    "country_code": "BZ",
    "mobileMinLength": 7,
    "mobileMaxLength": 11,
    "mobilePattern": null
  },
  {
    "country_code": "CA",
    "mobileMinLength": 7,
    "mobileMaxLength": 10,
    "mobilePattern": null
  },
  {
    "country_code": "CC",
    "mobileMinLength": 6,
    "mobileMaxLength": 12,
    "mobilePattern": null
  },
  {
    "country_code": "CD",
    "mobileMinLength": 7,
    "mobileMaxLength": 10,
    "mobilePattern": null
  },
  {
    "country_code": "CF",
    "mobileMinLength": 8,
    "mobileMaxLength": 8,
    "mobilePattern": null
  },
  {
    "country_code": "CG",
    "mobileMinLength": 9,
    "mobileMaxLength": 9,
    "mobilePattern": null
  },
  {
    "country_code": "CH",
    "mobileMinLength": 9,
    "mobileMaxLength": 12,
    "mobilePattern": null
  },
  {
    "country_code": "CI",
    "mobileMinLength": 10,
    "mobileMaxLength": 10,
    "mobilePattern": null
  },
  {
    "country_code": "CK",
    "mobileMinLength": 5,
    "mobileMaxLength": 5,
    "mobilePattern": null
  },
  {
    "country_code": "CL",
    "mobileMinLength": 9,
    "mobileMaxLength": 11,
    "mobilePattern": null
  },
  {
    "country_code": "CM",
    "mobileMinLength": 8,
    "mobileMaxLength": 9,
    "mobilePattern": null
  },
  {
    "country_code": "CN",
    "mobileMinLength": 7,
    "mobileMaxLength": 12,
    "mobilePattern": null
  },
  {
    "country_code": "CO",
    "mobileMinLength": 8,
    "mobileMaxLength": 11,
    "mobilePattern": null
  },
  {
    "country_code": "CR",
    "mobileMinLength": 8,
    "mobileMaxLength": 10,
    "mobilePattern": null
  },
  {
    "country_code": "CU",
    "mobileMinLength": 6,
    "mobileMaxLength": 10,
    "mobilePattern": null
  },
  {
    "country_code": "CV",
    "mobileMinLength": 7,
    "mobileMaxLength": 7,
    "mobilePattern": null
  },
  {
    "country_code": "CW",
    "mobileMinLength": 7,
    "mobileMaxLength": 8,
    "mobilePattern": null
  },
  {
    "country_code": "CX",
    "mobileMinLength": 6,
    "mobileMaxLength": 12,
    "mobilePattern": null
  },
  {
    "country_code": "CY",
    "mobileMinLength": 8,
    "mobileMaxLength": 8,
    "mobilePattern": null
  },
  {
    "country_code": "CZ",
    "mobileMinLength": 9,
    "mobileMaxLength": 12,
    "mobilePattern": null
  },
  {
    "country_code": "DE",
    "mobileMinLength": 4,
    "mobileMaxLength": 15,
    "mobilePattern": null
  },
  {
    "country_code": "DJ",
    "mobileMinLength": 8,
    "mobileMaxLength": 8,
    "mobilePattern": null
  },
  {
    "country_code": "DK",
    "mobileMinLength": 8,
    "mobileMaxLength": 8,
    "mobilePattern": null
  },
  {
    "country_code": "DM",
    "mobileMinLength": 10,
    "mobileMaxLength": 10,
    "mobilePattern": null
  },
  {
    "country_code": "DO",
    "mobileMinLength": 10,
    "mobileMaxLength": 10,
    "mobilePattern": null
  },
  {
    "country_code": "DZ",
    "mobileMinLength": 8,
    "mobileMaxLength": 9,
    "mobilePattern": null
  },
  {
    "country_code": "EC",
    "mobileMinLength": 8,
    "mobileMaxLength": 11,
    "mobilePattern": null
  },
  {
    "country_code": "EE",
    "mobileMinLength": 7,
    "mobileMaxLength": 10,
    "mobilePattern": null
  },
  {
    "country_code": "EG",
    "mobileMinLength": 8,
    "mobileMaxLength": 10,
    "mobilePattern": null
  },
  {
    "country_code": "EH",
    "mobileMinLength": 9,
    "mobileMaxLength": 9,
    "mobilePattern": null
  },
  {
    "country_code": "ER",
    "mobileMinLength": 7,
    "mobileMaxLength": 7,
    "mobilePattern": null
  },
  {
    "country_code": "ES",
    "mobileMinLength": 9,
    "mobileMaxLength": 9,
    "mobilePattern": null
  },
  {
    "country_code": "ET",
    "mobileMinLength": 9,
    "mobileMaxLength": 9,
    "mobilePattern": null
  },
  {
    "country_code": "FI",
    "mobileMinLength": 5,
    "mobileMaxLength": 12,
    "mobilePattern": null
  },
  {
    "country_code": "FJ",
    "mobileMinLength": 7,
    "mobileMaxLength": 11,
    "mobilePattern": null
  },
  {
    "country_code": "FK",
    "mobileMinLength": 5,
    "mobileMaxLength": 5,
    "mobilePattern": null
  },
  {
    "country_code": "FM",
    "mobileMinLength": 7,
    "mobileMaxLength": 7,
    "mobilePattern": null
  },
  {
    "country_code": "FO",
    "mobileMinLength": 6,
    "mobileMaxLength": 6,
    "mobilePattern": null
  },
  {
    "country_code": "FR",
    "mobileMinLength": 9,
    "mobileMaxLength": 9,
    "mobilePattern": null
  },
  {
    "country_code": "GA",
    "mobileMinLength": 7,
    "mobileMaxLength": 8,
    "mobilePattern": null
  },
  {
    "country_code": "GB",
    "mobileMinLength": 7,
    "mobileMaxLength": 10,
    "mobilePattern": null
  },
  {
    "country_code": "GD",
    "mobileMinLength": 10,
    "mobileMaxLength": 10,
    "mobilePattern": null
  },
  {
    "country_code": "GE",
    "mobileMinLength": 9,
    "mobileMaxLength": 9,
    "mobilePattern": null
  },
  {
    "country_code": "GF",
    "mobileMinLength": 9,
    "mobileMaxLength": 9,
    "mobilePattern": null
  },
  {
    "country_code": "GG",
    "mobileMinLength": 7,
    "mobileMaxLength": 10,
    "mobilePattern": null
  },
  {
    "country_code": "GH",
    "mobileMinLength": 8,
    "mobileMaxLength": 9,
    "mobilePattern": null
  },
  {
    "country_code": "GI",
    "mobileMinLength": 8,
    "mobileMaxLength": 8,
    "mobilePattern": null
  },
  {
    "country_code": "GL",
    "mobileMinLength": 6,
    "mobileMaxLength": 6,
    "mobilePattern": null
  },
  {
    "country_code": "GM",
    "mobileMinLength": 7,
    "mobileMaxLength": 9,
    "mobilePattern": null
  },
  {
    "country_code": "GN",
    "mobileMinLength": 8,
    "mobileMaxLength": 9,
    "mobilePattern": null
  },
  {
    "country_code": "GP",
    "mobileMinLength": 9,
    "mobileMaxLength": 9,
    "mobilePattern": null
  },
  {
    "country_code": "GQ",
    "mobileMinLength": 9,
    "mobileMaxLength": 9,
    "mobilePattern": null
  },
  {
    "country_code": "GR",
    "mobileMinLength": 10,
    "mobileMaxLength": 12,
    "mobilePattern": null
  },
  {
    "country_code": "GT",
    "mobileMinLength": 8,
    "mobileMaxLength": 11,
    "mobilePattern": null
  },
  {
    "country_code": "GU",
    "mobileMinLength": 10,
    "mobileMaxLength": 10,
    "mobilePattern": null
  },
  {
    "country_code": "GW",
    "mobileMinLength": 7,
    "mobileMaxLength": 9,
    "mobilePattern": null
  },
  {
    "country_code": "GY",
    "mobileMinLength": 7,
    "mobileMaxLength": 7,
    "mobilePattern": null
  },
  {
    "country_code": "HK",
    "mobileMinLength": 5,
    "mobileMaxLength": 11,
    "mobilePattern": null
  },
  {
    "country_code": "HN",
    "mobileMinLength": 8,
    "mobileMaxLength": 11,
    "mobilePattern": null
  },
  {
    "country_code": "HR",
    "mobileMinLength": 7,
    "mobileMaxLength": 9,
    "mobilePattern": null
  },
  {
    "country_code": "HT",
    "mobileMinLength": 8,
    "mobileMaxLength": 8,
    "mobilePattern": null
  },
  {
    "country_code": "HU",
    "mobileMinLength": 8,
    "mobileMaxLength": 9,
    "mobilePattern": null
  },
  {
    "country_code": "ID",
    "mobileMinLength": 7,
    "mobileMaxLength": 17,
    "mobilePattern": null
  },
  {
    "country_code": "IE",
    "mobileMinLength": 7,
    "mobileMaxLength": 10,
    "mobilePattern": null
  },
  {
    "country_code": "IL",
    "mobileMinLength": 7,
    "mobileMaxLength": 12,
    "mobilePattern": null
  },
  {
    "country_code": "IM",
    "mobileMinLength": 10,
    "mobileMaxLength": 10,
    "mobilePattern": null
  },
  {
    "country_code": "IN",
    "mobileMinLength": 8,
    "mobileMaxLength": 13,
    "mobilePattern": null
  },
  {
    "country_code": "IO",
    "mobileMinLength": 7,
    "mobileMaxLength": 7,
    "mobilePattern": null
  },
  {
    "country_code": "IQ",
    "mobileMinLength": 8,
    "mobileMaxLength": 10,
    "mobilePattern": null
  },
  {
    "country_code": "IR",
    "mobileMinLength": 4,
    "mobileMaxLength": 10,
    "mobilePattern": null
  },
  {
    "country_code": "IS",
    "mobileMinLength": 7,
    "mobileMaxLength": 9,
    "mobilePattern": null
  },
  {
    "country_code": "IT",
    "mobileMinLength": 6,
    "mobileMaxLength": 12,
    "mobilePattern": null
  },
  {
    "country_code": "JE",
    "mobileMinLength": 10,
    "mobileMaxLength": 10,
    "mobilePattern": null
  },
  {
    "country_code": "JM",
    "mobileMinLength": 10,
    "mobileMaxLength": 10,
    "mobilePattern": null
  },
  {
    "country_code": "JO",
    "mobileMinLength": 8,
    "mobileMaxLength": 9,
    "mobilePattern": null
  },
  {
    "country_code": "JP",
    "mobileMinLength": 8,
    "mobileMaxLength": 17,
    "mobilePattern": null
  },
  {
    "country_code": "KE",
    "mobileMinLength": 7,
    "mobileMaxLength": 10,
    "mobilePattern": null
  },
  {
    "country_code": "KG",
    "mobileMinLength": 9,
    "mobileMaxLength": 10,
    "mobilePattern": null
  },
  {
    "country_code": "KH",
    "mobileMinLength": 8,
    "mobileMaxLength": 10,
    "mobilePattern": null
  },
  {
    "country_code": "KI",
    "mobileMinLength": 5,
    "mobileMaxLength": 8,
    "mobilePattern": null
  },
  {
    "country_code": "KM",
    "mobileMinLength": 7,
    "mobileMaxLength": 7,
    "mobilePattern": null
  },
  {
    "country_code": "KN",
    "mobileMinLength": 10,
    "mobileMaxLength": 10,
    "mobilePattern": null
  },
  {
    "country_code": "KP",
    "mobileMinLength": 8,
    "mobileMaxLength": 10,
    "mobilePattern": null
  },
  {
    "country_code": "KR",
    "mobileMinLength": 5,
    "mobileMaxLength": 14,
    "mobilePattern": null
  },
  {
    "country_code": "KW",
    "mobileMinLength": 7,
    "mobileMaxLength": 8,
    "mobilePattern": null
  },
  {
    "country_code": "KY",
    "mobileMinLength": 10,
    "mobileMaxLength": 10,
    "mobilePattern": null
  },
  {
    "country_code": "KZ",
    "mobileMinLength": 10,
    "mobileMaxLength": 14,
    "mobilePattern": null
  },
  {
    "country_code": "LA",
    "mobileMinLength": 8,
    "mobileMaxLength": 10,
    "mobilePattern": null
  },
  {
    "country_code": "LB",
    "mobileMinLength": 7,
    "mobileMaxLength": 8,
    "mobilePattern": null
  },
  {
    "country_code": "LC",
    "mobileMinLength": 10,
    "mobileMaxLength": 10,
    "mobilePattern": null
  },
  {
    "country_code": "LI",
    "mobileMinLength": 7,
    "mobileMaxLength": 9,
    "mobilePattern": null
  },
  {
    "country_code": "LK",
    "mobileMinLength": 9,
    "mobileMaxLength": 9,
    "mobilePattern": null
  },
  {
    "country_code": "LR",
    "mobileMinLength": 7,
    "mobileMaxLength": 9,
    "mobilePattern": null
  },
  {
    "country_code": "LS",
    "mobileMinLength": 8,
    "mobileMaxLength": 8,
    "mobilePattern": null
  },
  {
    "country_code": "LT",
    "mobileMinLength": 8,
    "mobileMaxLength": 8,
    "mobilePattern": null
  },
  {
    "country_code": "LU",
    "mobileMinLength": 4,
    "mobileMaxLength": 11,
    "mobilePattern": null
  },
  {
    "country_code": "LV",
    "mobileMinLength": 8,
    "mobileMaxLength": 8,
    "mobilePattern": null
  },
  {
    "country_code": "LY",
    "mobileMinLength": 9,
    "mobileMaxLength": 9,
    "mobilePattern": null
  },
  {
    "country_code": "MA",
    "mobileMinLength": 9,
    "mobileMaxLength": 9,
    "mobilePattern": null
  },
  {
    "country_code": "MC",
    "mobileMinLength": 8,
    "mobileMaxLength": 9,
    "mobilePattern": null
  },
  {
    "country_code": "MD",
    "mobileMinLength": 8,
    "mobileMaxLength": 8,
    "mobilePattern": null
  },
  {
    "country_code": "ME",
    "mobileMinLength": 8,
    "mobileMaxLength": 9,
    "mobilePattern": null
  },
  {
    "country_code": "MF",
    "mobileMinLength": 9,
    "mobileMaxLength": 9,
    "mobilePattern": null
  },
  {
    "country_code": "MG",
    "mobileMinLength": 9,
    "mobileMaxLength": 9,
    "mobilePattern": null
  },
  {
    "country_code": "MH",
    "mobileMinLength": 7,
    "mobileMaxLength": 7,
    "mobilePattern": null
  },
  {
    "country_code": "MK",
    "mobileMinLength": 8,
    "mobileMaxLength": 8,
    "mobilePattern": null
  },
  {
    "country_code": "ML",
    "mobileMinLength": 8,
    "mobileMaxLength": 8,
    "mobilePattern": null
  },
  {
    "country_code": "MM",
    "mobileMinLength": 6,
    "mobileMaxLength": 10,
    "mobilePattern": null
  },
  {
    "country_code": "MN",
    "mobileMinLength": 8,
    "mobileMaxLength": 10,
    "mobilePattern": null
  },
  {
    "country_code": "MO",
    "mobileMinLength": 7,
    "mobileMaxLength": 8,
    "mobilePattern": null
  },
  {
    "country_code": "MP",
    "mobileMinLength": 10,
    "mobileMaxLength": 10,
    "mobilePattern": null
  },
  {
    "country_code": "MQ",
    "mobileMinLength": 9,
    "mobileMaxLength": 9,
    "mobilePattern": null
  },
  {
    "country_code": "MR",
    "mobileMinLength": 8,
    "mobileMaxLength": 8,
    "mobilePattern": null
  },
  {
    "country_code": "MS",
    "mobileMinLength": 10,
    "mobileMaxLength": 10,
    "mobilePattern": null
  },
  {
    "country_code": "MT",
    "mobileMinLength": 8,
    "mobileMaxLength": 8,
    "mobilePattern": null
  },
  {
    "country_code": "MU",
    "mobileMinLength": 7,
    "mobileMaxLength": 10,
    "mobilePattern": null
  },
  {
    "country_code": "MV",
    "mobileMinLength": 7,
    "mobileMaxLength": 10,
    "mobilePattern": null
  },
  {
    "country_code": "MW",
    "mobileMinLength": 7,
    "mobileMaxLength": 9,
    "mobilePattern": null
  },
  {
    "country_code": "MX",
    "mobileMinLength": 10,
    "mobileMaxLength": 10,
    "mobilePattern": null
  },
  {
    "country_code": "MY",
    "mobileMinLength": 8,
    "mobileMaxLength": 10,
    "mobilePattern": null
  },
  {
    "country_code": "MZ",
    "mobileMinLength": 8,
    "mobileMaxLength": 9,
    "mobilePattern": null
  },
  {
    "country_code": "NA",
    "mobileMinLength": 8,
    "mobileMaxLength": 9,
    "mobilePattern": null
  },
  {
    "country_code": "NC",
    "mobileMinLength": 6,
    "mobileMaxLength": 6,
    "mobilePattern": null
  },
  {
    "country_code": "NE",
    "mobileMinLength": 8,
    "mobileMaxLength": 8,
    "mobilePattern": null
  },
  {
    "country_code": "NF",
    "mobileMinLength": 6,
    "mobileMaxLength": 6,
    "mobilePattern": null
  },
  {
    "country_code": "NG",
    "mobileMinLength": 10,
    "mobileMaxLength": 14,
    "mobilePattern": null
  },
  {
    "country_code": "NI",
    "mobileMinLength": 8,
    "mobileMaxLength": 8,
    "mobilePattern": null
  },
  {
    "country_code": "NL",
    "mobileMinLength": 5,
    "mobileMaxLength": 11,
    "mobilePattern": null
  },
  {
    "country_code": "NO",
    "mobileMinLength": 5,
    "mobileMaxLength": 8,
    "mobilePattern": null
  },
  {
    "country_code": "NP",
    "mobileMinLength": 8,
    "mobileMaxLength": 11,
    "mobilePattern": null
  },
  {
    "country_code": "NR",
    "mobileMinLength": 7,
    "mobileMaxLength": 7,
    "mobilePattern": null
  },
  {
    "country_code": "NU",
    "mobileMinLength": 4,
    "mobileMaxLength": 7,
    "mobilePattern": null
  },
  {
    "country_code": "NZ",
    "mobileMinLength": 5,
    "mobileMaxLength": 10,
    "mobilePattern": null
  },
  {
    "country_code": "OM",
    "mobileMinLength": 7,
    "mobileMaxLength": 9,
    "mobilePattern": null
  },
  {
    "country_code": "PA",
    "mobileMinLength": 7,
    "mobileMaxLength": 11,
    "mobilePattern": null
  },
  {
    "country_code": "PE",
    "mobileMinLength": 8,
    "mobileMaxLength": 9,
    "mobilePattern": null
  },
  {
    "country_code": "PF",
    "mobileMinLength": 6,
    "mobileMaxLength": 9,
    "mobilePattern": null
  },
  {
    "country_code": "PG",
    "mobileMinLength": 7,
    "mobileMaxLength": 8,
    "mobilePattern": null
  },
  {
    "country_code": "PH",
    "mobileMinLength": 6,
    "mobileMaxLength": 13,
    "mobilePattern": null
  },
  {
    "country_code": "PK",
    "mobileMinLength": 8,
    "mobileMaxLength": 12,
    "mobilePattern": null
  },
  {
    "country_code": "PL",
    "mobileMinLength": 6,
    "mobileMaxLength": 10,
    "mobilePattern": null
  },
  {
    "country_code": "PM",
    "mobileMinLength": 6,
    "mobileMaxLength": 9,
    "mobilePattern": null
  },
  {
    "country_code": "PR",
    "mobileMinLength": 10,
    "mobileMaxLength": 10,
    "mobilePattern": null
  },
  {
    "country_code": "PS",
    "mobileMinLength": 8,
    "mobileMaxLength": 10,
    "mobilePattern": null
  },
  {
    "country_code": "PT",
    "mobileMinLength": 9,
    "mobileMaxLength": 9,
    "mobilePattern": null
  },
  {
    "country_code": "PW",
    "mobileMinLength": 7,
    "mobileMaxLength": 7,
    "mobilePattern": null
  },
  {
    "country_code": "PY",
    "mobileMinLength": 6,
    "mobileMaxLength": 11,
    "mobilePattern": null
  },
  {
    "country_code": "QA",
    "mobileMinLength": 7,
    "mobileMaxLength": 11,
    "mobilePattern": null
  },
  {
    "country_code": "RE",
    "mobileMinLength": 9,
    "mobileMaxLength": 9,
    "mobilePattern": null
  },
  {
    "country_code": "RO",
    "mobileMinLength": 6,
    "mobileMaxLength": 9,
    "mobilePattern": null
  },
  {
    "country_code": "RS",
    "mobileMinLength": 6,
    "mobileMaxLength": 12,
    "mobilePattern": null
  },
  {
    "country_code": "RU",
    "mobileMinLength": 10,
    "mobileMaxLength": 14,
    "mobilePattern": null
  },
  {
    "country_code": "RW",
    "mobileMinLength": 8,
    "mobileMaxLength": 9,
    "mobilePattern": null
  },
  {
    "country_code": "SA",
    "mobileMinLength": 9,
    "mobileMaxLength": 10,
    "mobilePattern": null
  },
  {
    "country_code": "SB",
    "mobileMinLength": 5,
    "mobileMaxLength": 7,
    "mobilePattern": null
  },
  {
    "country_code": "SC",
    "mobileMinLength": 7,
    "mobileMaxLength": 7,
    "mobilePattern": null
  },
  {
    "country_code": "SD",
    "mobileMinLength": 9,
    "mobileMaxLength": 9,
    "mobilePattern": null
  },
  {
    "country_code": "SE",
    "mobileMinLength": 6,
    "mobileMaxLength": 12,
    "mobilePattern": null
  },
  {
    "country_code": "SG",
    "mobileMinLength": 8,
    "mobileMaxLength": 11,
    "mobilePattern": null
  },
  {
    "country_code": "SH",
    "mobileMinLength": 4,
    "mobileMaxLength": 5,
    "mobilePattern": null
  },
  {
    "country_code": "SI",
    "mobileMinLength": 5,
    "mobileMaxLength": 8,
    "mobilePattern": null
  },
  {
    "country_code": "SJ",
    "mobileMinLength": 5,
    "mobileMaxLength": 8,
    "mobilePattern": null
  },
  {
    "country_code": "SK",
    "mobileMinLength": 6,
    "mobileMaxLength": 9,
    "mobilePattern": null
  },
  {
    "country_code": "SL",
    "mobileMinLength": 8,
    "mobileMaxLength": 8,
    "mobilePattern": null
  },
  {
    "country_code": "SM",
    "mobileMinLength": 8,
    "mobileMaxLength": 10,
    "mobilePattern": null
  },
  {
    "country_code": "SN",
    "mobileMinLength": 9,
    "mobileMaxLength": 9,
    "mobilePattern": null
  },
  {
    "country_code": "SO",
    "mobileMinLength": 6,
    "mobileMaxLength": 9,
    "mobilePattern": null
  },
  {
    "country_code": "SR",
    "mobileMinLength": 6,
    "mobileMaxLength": 7,
    "mobilePattern": null
  },
  {
    "country_code": "SS",
    "mobileMinLength": 9,
    "mobileMaxLength": 9,
    "mobilePattern": null
  },
  {
    "country_code": "ST",
    "mobileMinLength": 7,
    "mobileMaxLength": 7,
    "mobilePattern": null
  },
  {
    "country_code": "SV",
    "mobileMinLength": 7,
    "mobileMaxLength": 11,
    "mobilePattern": null
  },
  {
    "country_code": "SX",
    "mobileMinLength": 10,
    "mobileMaxLength": 10,
    "mobilePattern": null
  },
  {
    "country_code": "SY",
    "mobileMinLength": 8,
    "mobileMaxLength": 9,
    "mobilePattern": null
  },
  {
    "country_code": "SZ",
    "mobileMinLength": 8,
    "mobileMaxLength": 9,
    "mobilePattern": null
  },
  {
    "country_code": "TA",
    "mobileMinLength": 4,
    "mobileMaxLength": 4,
    "mobilePattern": null
  },
  {
    "country_code": "TC",
    "mobileMinLength": 10,
    "mobileMaxLength": 10,
    "mobilePattern": null
  },
  {
    "country_code": "TD",
    "mobileMinLength": 8,
    "mobileMaxLength": 8,
    "mobilePattern": null
  },
  {
    "country_code": "TG",
    "mobileMinLength": 8,
    "mobileMaxLength": 8,
    "mobilePattern": null
  },
  {
    "country_code": "TH",
    "mobileMinLength": 8,
    "mobileMaxLength": 13,
    "mobilePattern": null
  },
  {
    "country_code": "TJ",
    "mobileMinLength": 9,
    "mobileMaxLength": 9,
    "mobilePattern": null
  },
  {
    "country_code": "TK",
    "mobileMinLength": 4,
    "mobileMaxLength": 7,
    "mobilePattern": null
  },
  {
    "country_code": "TL",
    "mobileMinLength": 7,
    "mobileMaxLength": 8,
    "mobilePattern": null
  },
  {
    "country_code": "TM",
    "mobileMinLength": 8,
    "mobileMaxLength": 8,
    "mobilePattern": null
  },
  {
    "country_code": "TN",
    "mobileMinLength": 8,
    "mobileMaxLength": 8,
    "mobilePattern": null
  },
  {
    "country_code": "TO",
    "mobileMinLength": 5,
    "mobileMaxLength": 7,
    "mobilePattern": null
  },
  {
    "country_code": "TR",
    "mobileMinLength": 7,
    "mobileMaxLength": 13,
    "mobilePattern": null
  },
  {
    "country_code": "TT",
    "mobileMinLength": 10,
    "mobileMaxLength": 10,
    "mobilePattern": null
  },
  {
    "country_code": "TV",
    "mobileMinLength": 5,
    "mobileMaxLength": 7,
    "mobilePattern": null
  },
  {
    "country_code": "TW",
    "mobileMinLength": 7,
    "mobileMaxLength": 11,
    "mobilePattern": null
  },
  {
    "country_code": "TZ",
    "mobileMinLength": 9,
    "mobileMaxLength": 9,
    "mobilePattern": null
  },
  {
    "country_code": "UA",
    "mobileMinLength": 9,
    "mobileMaxLength": 10,
    "mobilePattern": null
  },
  {
    "country_code": "UG",
    "mobileMinLength": 9,
    "mobileMaxLength": 9,
    "mobilePattern": null
  },
  {
    "country_code": "US",
    "mobileMinLength": 10,
    "mobileMaxLength": 10,
    "mobilePattern": null
  },
  {
    "country_code": "UY",
    "mobileMinLength": 4,
    "mobileMaxLength": 13,
    "mobilePattern": null
  },
  {
    "country_code": "UZ",
    "mobileMinLength": 9,
    "mobileMaxLength": 9,
    "mobilePattern": null
  },
  {
    "country_code": "VA",
    "mobileMinLength": 6,
    "mobileMaxLength": 12,
    "mobilePattern": null
  },
  {
    "country_code": "VC",
    "mobileMinLength": 10,
    "mobileMaxLength": 10,
    "mobilePattern": null
  },
  {
    "country_code": "VE",
    "mobileMinLength": 10,
    "mobileMaxLength": 10,
    "mobilePattern": null
  },
  {
    "country_code": "VG",
    "mobileMinLength": 10,
    "mobileMaxLength": 10,
    "mobilePattern": null
  },
  {
    "country_code": "VI",
    "mobileMinLength": 10,
    "mobileMaxLength": 10,
    "mobilePattern": null
  },
  {
    "country_code": "VN",
    "mobileMinLength": 7,
    "mobileMaxLength": 10,
    "mobilePattern": null
  },
  {
    "country_code": "VU",
    "mobileMinLength": 5,
    "mobileMaxLength": 7,
    "mobilePattern": null
  },
  {
    "country_code": "WF",
    "mobileMinLength": 6,
    "mobileMaxLength": 9,
    "mobilePattern": null
  },
  {
    "country_code": "WS",
    "mobileMinLength": 5,
    "mobileMaxLength": 10,
    "mobilePattern": null
  },
  {
    "country_code": "XK",
    "mobileMinLength": 8,
    "mobileMaxLength": 12,
    "mobilePattern": null
  },
  {
    "country_code": "YE",
    "mobileMinLength": 7,
    "mobileMaxLength": 9,
    "mobilePattern": null
  },
  {
    "country_code": "YT",
    "mobileMinLength": 9,
    "mobileMaxLength": 9,
    "mobilePattern": null
  },
  {
    "country_code": "ZA",
    "mobileMinLength": 5,
    "mobileMaxLength": 10,
    "mobilePattern": null
  },
  {
    "country_code": "ZM",
    "mobileMinLength": 9,
    "mobileMaxLength": 9,
    "mobilePattern": null
  },
  {
    "country_code": "ZW",
    "mobileMinLength": 7,
    "mobileMaxLength": 10,
    "mobilePattern": null
  }
];
