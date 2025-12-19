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
          label: "Product Management",
          href: "/business-solutions/product-management",
          description: "Strategic product planning and roadmap development.",
        },
        {
          label: "AI & ML Solutions",
          href: "/business-solutions/artificial-intelligence-machine-learning",
          description: "Harness the power of AI to automate and innovate.",
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
      ],
    } satisfies NavGroup,
  },
} as const;
