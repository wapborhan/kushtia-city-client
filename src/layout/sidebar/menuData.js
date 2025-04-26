export const menuData = [
  {
    label: "ড্যাশবোর্ড",
    icon: "MdOutlineDashboard",
    path: "/dashboard",
  },
  {
    label: "রক্ত",
    icon: "BiDonateBlood",
    subMenu: [
      {
        label: "ডোনার যুক্ত",
        path: "blood/donar/add",
      },
      {
        label: "ডোনার তালিকা",
        path: "blood/donar/list",
      },
      {
        label: "রক্তের অনুরোধ",
        path: "blood/request/list",
      },
    ],
  },
];
