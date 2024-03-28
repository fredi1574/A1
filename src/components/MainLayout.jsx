import Footer from "./Footer";
import ThemeSwitcher from "./ThemeSwitcher";

const MainLayout = ({ children, backgroundColor }) => {
  return (
    <div
      className={`min-h-screen ${backgroundColor} select-none font-fredoka overflow-x-auto`}
    >
      <div className="absolute md:top-28 md:left-4 top-2 left-2">
        <ThemeSwitcher />
      </div>
      <main className="flex-grow">{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
