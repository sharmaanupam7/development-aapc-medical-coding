export const LOCATION_DATA = {
  india: {
    country: {
      country_name: "India",
      country_code: "IN",
      phoneCode: "+91",
    },

    states: [
      {
        state_name: "Andhra Pradesh",
        cities: [
          {
            city_name: "Visakhapatnam",
            postal_codes: ["530001", "530002"],
          },
          {
            city_name: "Vijayawada",
            postal_codes: ["520001", "520002"],
          },
        ],
      },

      {
        state_name: "Arunachal Pradesh",
        cities: [
          {
            city_name: "Itanagar",
            postal_codes: ["791111"],
          },
        ],
      },

      {
        state_name: "Assam",
        cities: [
          {
            city_name: "Guwahati",
            postal_codes: ["781001", "781003"],
          },
        ],
      },

      {
        state_name: "Bihar",
        cities: [
          {
            city_name: "Patna",
            postal_codes: ["800001", "800004"],
          },
        ],
      },

      {
        state_name: "Delhi",
        cities: [
          {
            city_name: "New Delhi",
            postal_codes: ["110001", "110002"],
          },
        ],
      },

      {
        state_name: "Gujarat",
        cities: [
          {
            city_name: "Ahmedabad",
            postal_codes: ["380001", "380002"],
          },
        ],
      },

      {
        state_name: "Haryana",
        cities: [
          {
            city_name: "Gurugram",
            postal_codes: ["122001", "122002"],
          },
        ],
      },

      {
        state_name: "Karnataka",
        cities: [
          {
            city_name: "Bengaluru",
            postal_codes: ["560001", "560002"],
          },
        ],
      },

      {
        state_name: "Madhya Pradesh",
        cities: [
          {
            city_name: "Bhopal",
            postal_codes: ["462001", "462002"],
          },
        ],
      },

      {
        state_name: "Maharashtra",
        cities: [
          {
            city_name: "Mumbai",
            postal_codes: ["400001", "400002"],
          },
          {
            city_name: "Pune",
            postal_codes: ["411001", "411002"],
          },
        ],
      },

      {
        state_name: "Punjab",
        cities: [
          {
            city_name: "Amritsar",
            postal_codes: ["143001", "143002"],
          },
        ],
      },

      {
        state_name: "Rajasthan",
        cities: [
          {
            city_name: "Jaipur",
            postal_codes: ["302001", "302002"],
          },
        ],
      },

      {
        state_name: "Tamil Nadu",
        cities: [
          {
            city_name: "Chennai",
            postal_codes: ["600001", "600002"],
          },
        ],
      },

      {
        state_name: "Telangana",
        cities: [
          {
            city_name: "Hyderabad",
            postal_codes: ["500001", "500002"],
          },
        ],
      },

      {
        state_name: "Uttar Pradesh",
        cities: [
          {
            city_name: "Meerut",
            postal_codes: ["250001", "250002"],
          },
          {
            city_name: "Lucknow",
            postal_codes: ["226001", "226002"],
          },
          {
            city_name: "Noida",
            postal_codes: ["201301", "201302"],
          },
          {
            city_name: "Agra",
            postal_codes: ["282001", "282002"],
          },
          {
            city_name: "Kanpur",
            postal_codes: ["208001", "208002"],
          },
          {
            city_name: "Varanasi",
            postal_codes: ["221001", "221002"],
          },
        ],
      },

      {
        state_name: "Uttarakhand",
        cities: [
          {
            city_name: "Dehradun",
            postal_codes: ["248001", "248002"],
          },
        ],
      },

      {
        state_name: "West Bengal",
        cities: [
          {
            city_name: "Kolkata",
            postal_codes: ["700001", "700002"],
          },
        ],
      },
    ],
  },

  australia: {
    country: {
      country_name: "Australia",
      country_code: "AU",
      phoneCode: "+61",
    },

    states: [
      {
        state_name: "New South Wales",
        cities: [
          {
            city_name: "Sydney",
            postal_codes: ["2000", "2001"],
          },
          {
            city_name: "Newcastle",
            postal_codes: ["2300", "2302"],
          },
          {
            city_name: "Wollongong",
            postal_codes: ["2500", "2502"],
          },
        ],
      },

      {
        state_name: "Victoria",
        cities: [
          {
            city_name: "Melbourne",
            postal_codes: ["3000", "3001"],
          },
          {
            city_name: "Geelong",
            postal_codes: ["3220", "3221"],
          },
          {
            city_name: "Ballarat",
            postal_codes: ["3350", "3352"],
          },
        ],
      },

      {
        state_name: "Queensland",
        cities: [
          {
            city_name: "Brisbane",
            postal_codes: ["4000", "4001"],
          },
          {
            city_name: "Gold Coast",
            postal_codes: ["4217", "4218"],
          },
          {
            city_name: "Cairns",
            postal_codes: ["4870", "4871"],
          },
        ],
      },

      {
        state_name: "Western Australia",
        cities: [
          {
            city_name: "Perth",
            postal_codes: ["6000", "6001"],
          },
          {
            city_name: "Fremantle",
            postal_codes: ["6160", "6161"],
          },
        ],
      },

      {
        state_name: "South Australia",
        cities: [
          {
            city_name: "Adelaide",
            postal_codes: ["5000", "5001"],
          },
          {
            city_name: "Mount Gambier",
            postal_codes: ["5290", "5291"],
          },
        ],
      },

      {
        state_name: "Tasmania",
        cities: [
          {
            city_name: "Hobart",
            postal_codes: ["7000", "7001"],
          },
          {
            city_name: "Launceston",
            postal_codes: ["7250", "7251"],
          },
        ],
      },

      {
        state_name: "Australian Capital Territory",
        cities: [
          {
            city_name: "Canberra",
            postal_codes: ["2600", "2601"],
          },
        ],
      },

      {
        state_name: "Northern Territory",
        cities: [
          {
            city_name: "Darwin",
            postal_codes: ["0800", "0801"],
          },
          {
            city_name: "Alice Springs",
            postal_codes: ["0870", "0871"],
          },
        ],
      },
    ],
  },
} as const;
