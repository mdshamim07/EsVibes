import { DashboardNavData } from "@/app/info/DashboardNavJson";
import DashboardNavItem from "../_components/DashboardNavItem";
import AnimationContainer from "@/app/components/AnimationContainer";

export default function layout({ children }) {
  return (
    <AnimationContainer>
      <main className="min-h-screen">
        <div className="flex justify-center mt-8" />
        <div>
          <div className="w-[100px] mx-auto h-[100px] rounded-full bg-secondary flex justify-center items-center text-4xl">
            R
          </div>
          <div className="contents pt-4 text-center">
            <h1 className="">Md Shamim Mia</h1>
            <p className="text-sm text-gray-300">General User</p>
          </div>
          <div>
            <ul className="flex justify-center items-center gap-2 mt-2">
              {DashboardNavData.map((navItem) => (
                <DashboardNavItem target={navItem?.link} key={navItem?.id}>
                  {navItem?.title}
                </DashboardNavItem>
              ))}
            </ul>
          </div>
        </div>
        {children}
      </main>
    </AnimationContainer>
  );
}
