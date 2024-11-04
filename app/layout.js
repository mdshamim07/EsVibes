import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import TopNavigation from "./components/TopNavigation";
import "./globals.css";
import CommonProviders from "./src/providers/CommonProviders";

export const metadata = {
  title: "Esvibes - Home",
  description:
    "Esvibes - Find stylish, high-quality T-shirts with unique designs to elevate your style. Shop now for comfort, originality, and everyday vibes!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen pb-[100px] dark:bg-[#000] dark:text-white max-w-5xl mx-auto py-6 px-6">
        <CommonProviders>
          {/* top navbar start  */}
          <TopNavigation />
          {/* top navbar end  */}
          {/*bottom navbar start  */}
          <Navigation />

          {/*bottom navbar end */}
          {children}

          <Footer />
        </CommonProviders>
      </body>
    </html>
  );
}
