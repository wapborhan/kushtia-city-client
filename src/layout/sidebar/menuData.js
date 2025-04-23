export const menuData = [
  {
    label: "ড্যাশবোর্ড",
    icon: "pi-chart-bar",
    path: "/dashboard",
  },
  {
    label: "রক্ত",
    icon: "pi-users",
    subMenu: [
      {
        label: "রক্ত ডোনার",
        path: "/blood/donar/list",
      },
      {
        label: "Add Suppliers",
        path: "/contact/supplier/add",
      },
      {
        label: "View Lead",
        path: "/contact/lead/view",
      },
      {
        label: "View Suppliers",
        path: "/contact/supplier/view",
      },
    ],
  },

  {
    label: "উদ্যোক্তা",
    icon: "pi-box",
    subMenu: [
      {
        label: "Add Product",
        path: "/products/add",
      },
      {
        label: "View Products",
        path: "/products/view",
      },
    ],
  },
  {
    label: "ডাক্তার",
    icon: "pi-arrow-circle-up",
    subMenu: [
      {
        label: "Add Purchase",
        path: "/purchase/add",
      },
      {
        label: "View Purchase",
        path: "/purchase/view",
      },
    ],
  },
  {
    label: "হাসপাতাল",
    icon: "pi-arrow-circle-down",
    subMenu: [
      {
        label: "Credit Sale",
        path: "/sale/credit",
      },
      {
        label: "Cash Sale",
        path: "/sale/cash",
      },
      {
        label: "Return Sale",
        path: "/sale/return",
      },
    ],
  },
  {
    label: "ডায়াগনস্টিক",
    icon: "pi-user",
    subMenu: [
      {
        label: "Running Customers",
        path: "/customer/running",
      },

      {
        label: "Seized Customer",
        path: "/customer/seized",
      },
    ],
  },

  {
    label: "ফায়ার সার্ভিস",
    icon: "pi-user-plus",
    subMenu: [
      {
        label: "Add Staff",
        path: "/staff/add",
      },
      {
        label: "View Staff",
        path: "/staff/view",
      },
    ],
  },
  {
    label: "থানা-পুলিশ",
    icon: "pi-database",
    subMenu: [
      {
        label: "Customer Due",
        path: "/customer/due/cardno",
      },
    ],
  },
];
