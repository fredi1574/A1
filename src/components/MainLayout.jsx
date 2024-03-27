import Footer from "./Footer";
import ThemeSwitcher from "./ThemeSwitcher";

const MainLayout = ({ children, backgroundColor }) => {
  return (
    <div
      className={`min-h-screen ${backgroundColor} select-none font-fredoka overflow-x-auto`}
    >
      <div className="absolute top-28 left-4">
        <ThemeSwitcher />
      </div>
      <main className="flex-grow">{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
