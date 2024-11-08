import LoggedNavigationAction from "./LoggedNavigationAction";
import Logo from "./Logo";
import { TopbarActionDat } from "../info/TopbarActionsJson";
import TopbarItem from "./TopbarItem";
import { auth } from "@/auth";
import NavbarActions from "./NavbarActions";

// import NavbarActions from "./NavbarActions";

export default async function TopNavigation() {
  const loggedAuth = await auth();
  const user = loggedAuth && loggedAuth?.user;
  return (
    <nav className="flex justify-between items-center ">
      <Logo />

      {loggedAuth ? (
        <LoggedNavigationAction>
          <div className="w-[40px] h-[40px] rounded-full bg-secondary flex justify-center items-center">
            {user?.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <h1 className="text-sm">{user?.name}</h1>
            <p className="text-xs text-gray-300">
              {user?.role ? user.role : "User"}
            </p>
          </div>
        </LoggedNavigationAction>
      ) : (
        <NavbarActions />
      )}
    </nav>
  );
}
