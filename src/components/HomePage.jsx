import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HomePage = () => {
  const theme = useSelector((state) => state.theme.value);
  return (
    <section
      className={` ${
        theme === "dark" ? "bg-black" : "bg-homepage"
      } h-[70vh] z-[2] w-full flex flex-col justify-center px-16 max-lg:px-8`}
      id="home"
    >
      <div className=" flex flex-col justify-center gap-8 items-start my-12">
        <div className="text-4xl max-lg:text-xl">
          Welcome to <span className="text-pinkPrimary font-[700]">Go</span>
          <span className="text-[#2a3b63] font-[700]">CPT</span> BETA <br />{" "}
          Your Path to Effortless CPT Coding!
        </div>
        <p className="text-xl max-lg:text-sm font-extralight">
          We’re excited to introduce you to <br />
          the BETA version of GoCPT Your free pass to <br /> a simplified and
          efficient CPT coding experience <br /> designed exclusively for
          <br />
          mental health professionals like you.
        </p>
        <Link
          to="/upload"
          className="signupButton bg-gradient-to-b from-bluePrimary px-24 rounded-md border border-white/50 flex shadow-[0_0_50px_#ffffff99]"
          style={{ cursor: "pointer", zIndex: 10, pointerEvents: "auto" }}
        >
          Start Testing
        </Link>
      </div>
    </section>
  );
};

export default HomePage;
