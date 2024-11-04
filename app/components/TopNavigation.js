import Logo from "./Logo";
// import { TopbarActionDat } from "../info/TopbarActionsJson";

import NavbarActions from "./NavbarActions";

export default function TopNavigation() {
  return (
    <nav className="flex justify-between items-center ">
      <Logo />
      <NavbarActions />
      {/* <LoggedNavigationAction>
        <ul className=" text-sm select-none space-y-2">
          {TopbarActionDat.map((item) => (
            <TopbarItem target={item?.link} key={item?.key} title={item?.title}>
              {item?.svg}
            </TopbarItem>
          ))}
          <li className="flex items-center gap-2 hover:bg-black w-full py-[2px] cursor-pointer px-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={18}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-log-out"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1={21} x2={9} y1={12} y2={12} />
            </svg>
            Log Out
          </li>
        </ul>
      </LoggedNavigationAction> */}
    </nav>
  );
}
