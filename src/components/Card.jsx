import { useNavigate } from "react-router-dom";

const Card = ({ cardName, imagePath, alt, path }) => {
  const navigate = useNavigate();

  const handlePath = () => {
    navigate(path);
  };

  return (
    <button
      onClick={handlePath}
      className="border-2 border-waterIntake-primary rounded-xl p-4 h-60 duration-150 hover:-translate-y-5 active:scale-95 hover:bg-waterIntake-hover dark:hover:bg-[#2e6c8d] active:bg-waterIntake-active dark:active:bg-[#398bb8]"
    >
      <div className="flex items-center justify-center">
        <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-waterIntake-primary dark:text-waterIntake-active font-fredoka">
          {cardName}
        </div>
        <img
          src={imagePath}
          alt={alt}
          className="w-12 sm:w-16 md:w-20 lg:w-24 ml-2"
        />
      </div>
    </button>
  );
};

export default Card;
