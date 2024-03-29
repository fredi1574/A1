import Footer from "./Footer";
import ThemeSwitcher from "./ThemeSwitcher";

const MainLayout = ({ children, backgroundColor }) => {
  return (
    <div
      className={`min-h-screen ${backgroundColor} select-none font-fredoka overflow-x-auto`}
    >
      <div className="absolute md:top-32 md:left-4 top-4 left-4">
        <ThemeSwitcher />
      </div>
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
