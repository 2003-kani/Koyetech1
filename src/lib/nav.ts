export type NavItem = {
  label: string;
  href: string;
  description?: string;
};

export type NavGroup = {
  label: string;
  items: NavItem[];
};

export const nav = {
  primary: [
    {
      label: "Home",
      href: "/",
      description: "Return to the homepage",
    },
    {
      label: "Company",
      href: "/company",
      description: "About KoyeTech",
    },
    {
      label: "Business Solutions",
      href: "/business-solutions/product-management", // Default to first item
    },
    {
      label: "Accelerators",
      href: "/accelerators",
    },
    {
      label: "Talent Solution",
      href: "/talent-solution/contract-staff-augmentation",
    },
    {
      label: "Career",
      href: "/career",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ] satisfies NavItem[],

  mega: {
    businessSolutions: {
      label: "Business Solutions",
      items: [
        {
          label: "Product Management Consulting",
          href: "/business-solutions/product-management",
          description: "Strategic product planning and roadmap development.",
        },
        {
          label: "Product Development Consulting",
          href: "/business-solutions/product-development",
          description: "End-to-end design, development, and launch of digital products.",
        },
        {
          label: "AIML Solution",
          href: "/business-solutions/artificial-intelligence-machine-learning",
          description: "Harness AI to automate and make smarter decisions.",
        },
        {
          label: "Health Care Interoperability Solution",
          href: "/business-solutions/interop-solutions",
          description: "Seamless connections, stronger performance.",
        },
        {
          label: "Data Analytics",
          href: "/business-solutions/data-analytics",
          description: "From data overload to data clarity.",
        },
      ],
    } satisfies NavGroup,

    talentSolution: {
      label: "Talent Solution",
      items: [
        {
          label: "Contract Staff Augmentation",
          href: "/talent-solution/contract-staff-augmentation",
          description: "Scale your team quickly with skilled IT professionals.",
        },
        {
          label: "Firm Hire Services",
          href: "/talent-solution/firm-hire-services",
          description: "Hire full-time talent that drives long-term success.",
        },
        {
          label: "Contract to Hire",
          href: "/talent-solution/contract-to-hire",
          description: "Build agile, scalable teams with expert talent on demand.",
        },
      ],
    } satisfies NavGroup,
  },
} as const;
