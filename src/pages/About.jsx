import Header from "../components/Header";

const About = () => {
  return (
    <div>
      <Header
        backgroundColor="bg-[#2686BA]"
        darkBackgroundColor="dark:bg-[#2e6c8d]"
        hoverColor="hover:bg-[#45A5D9]"
      />
      <div className="w-[80%] lg:w-1/2 m-[0_auto] mt-10 font-[fredoka] text-lg text-[#45A5D9] dark:text-[#c8ecff]">
        <p>
          Welcome to Health Monitor, your ultimate destination for personalized
          health tracking and management. Health Monitor is dedicated to
          empowering you to track and manage your health metrics effortlessly,
          providing you with valuable insights and tools to optimize your
          well-being.
        </p>
        <h1 className="text-3xl mt-10">Our Mission</h1>
        <p>
          At Health Monitor, our mission is to simplify the process of tracking
          and managing your health data. We strive to offer a user-friendly
          platform that enables individuals to input and monitor vital health
          metrics such as weight, blood pressure, glucose levels, sleep
          patterns, activity levels, and water intake. By providing
          comprehensive tracking capabilities, we empower our users to make
          informed decisions about their health journey.
        </p>
        <h1 className="text-3xl mt-10">What We Offer</h1>
        <p>
          Health Monitor offers a comprehensive range of features to support
          your health tracking needs: Effortless Data Input: Easily input your
          health data through our intuitive interface. Whether it's weight,
          blood pressure, glucose levels, sleep duration, activity levels, or
          water intake, Health Monitor simplifies the process of recording your
          vital health metrics.
        </p>
        <p className="mb-4">
          <u>
            <b>Insightful Analytics</b>
          </u>
          : Gain valuable insights into your health trends with our advanced
          analytics tools. Our platform generates easy-to-understand graphs and
          charts that visualize your progress over time, enabling you to
          identify patterns and make informed decisions about your health.
        </p>
        <p>
          <u>
            <b>Personalized Recommendations</b>
          </u>
          : Receive personalized recommendations based on your health data and
          goals. Whether you're aiming to lose weight, improve sleep quality, or
          manage blood pressure, Health Monitor provides actionable insights
          tailored to your individual needs.
        </p>
        <p>
          <u>
            <b>Goal Tracking</b>
          </u>
          : Set and track your health goals effortlessly. Whether it's achieving
          a target weight, lowering blood pressure, or increasing daily water
          intake, Health Monitor helps you stay motivated and accountable on
          your journey to better health.
        </p>
        <h1 className="text-3xl mt-10">Get Started Today</h1>
        <p>
          Ready to take charge of your health? Sign up for Health Monitor today
          and begin tracking your well-being with ease. Whether you're looking
          to improve fitness, manage a chronic condition, or lead a healthier
          lifestyle, Health Monitor is here to support you every step of the
          way. Join our community of health-conscious individuals and embark on
          your journey to a happier, healthier you with Health Monitor.
        </p>
      </div>
    </div>
  );
};

export default About;
