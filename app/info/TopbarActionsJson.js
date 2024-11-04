export const TopbarActionDat = [
  {
    id: 1,
    title: "Profile",
    link: "/dashboard",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-user"
      >
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx={12} cy={7} r={4} />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Orders",
    link: "/dashboard/orders",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-list"
      >
        <path d="M3 12h.01" />
        <path d="M3 18h.01" />
        <path d="M3 6h.01" />
        <path d="M8 12h13" />
        <path d="M8 18h13" />
        <path d="M8 6h13" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Address",
    link: "/dashboard/address",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-book-user"
      >
        <path d="M15 13a3 3 0 1 0-6 0" />
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
        <circle cx={12} cy={8} r={2} />
      </svg>
    ),
  },
];
