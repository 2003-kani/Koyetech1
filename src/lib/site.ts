export const site = {
  name: "Koyetech",
  legalName: "Koyetech",
  tagline: "Staff augmentation, digital solutions, and business consulting to help teams scale with confidence.",
  email: "info@koyetech.com",
  locations: {
    us: {
      label: "US Office",
      phone: "+1 860-414-6902",
      addressLines: ["28 Main St", "Farmington, CT 06032-2242"],
      country: "USA",
    },
    india: {
      label: "Indian Office",
      phone: "+91 7207210071",
      addressLines: [
        "4th Floor, Kapil Towers",
        "ISB Rd, Financial District, Nanakramguda",
        "Hyderabad, Telangana 500032",
      ],
      country: "India",
    },
  },
  social: {
    linkedin: 'https://www.linkedin.com/company/koyetech/',
  },
  brand: {
    primary: {
      name: "Blue",
      from: "#0B4DB8",
      to: "#1D6CFF",
    },
  },
} as const;
