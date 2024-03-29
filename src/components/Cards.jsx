import Card from "./Card";
import Header from "./Header";

const Container = () => {
  const cards = [
    {
      name: "Water intake",
      path: "/waterIntake",
      image: "../../water_glass.png",
    },
    {
      name: "Activity monitor",
      path: "/activity",
      image: "../../running.png",
      imageDark: "../../running-dark.png",
    },
    {
      name: "Blood pressure",
      path: "/bloodPressure",
      image: "../../heart.png",
    },
    { name: "Sleep tracker", path: "/sleep", image: "../../panda.png" },
    {
      name: "Blood Glucose",
      path: "/bloodGlucose",
      image: "../../blood-test2.png",
    },
    { name: "Weight tracker", path: "/weight", image: "../../scales.png" },
  ];

  return (
    <div>
      <Header
        backgroundColor="bg-[#2686BA]"
        darkBackgroundColor="dark:bg-[#2e6c8d]"
        hoverColor="hover:bg-[#45A5D9]"
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="dark:text-white sm:text-xl lg:text-5xl md:text-4xl text-center mt-8 mb-12">
          Welcome to{" "}
          <b className="text-waterIntake-primary dark:text-[#2e6c8d]">
            Health Monitor!
          </b>
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
          {cards.map(({ name, path, image, imageDark }) => (
            <Card
              key={path}
              cardName={name}
              imagePath={image}
              imageDark={imageDark}
              alt={name.toLowerCase()}
              path={path}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Container;
