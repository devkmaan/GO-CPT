import { useSelector } from "react-redux";
import ThemeToggle from "../components/ThemeToggle";
import NavSmall from "../components/NavSmall";

const ChangePassword = () => {
  const theme = useSelector((state) => state.theme.value);

  // Determine theme-based classes
  const textColorClass = theme === "light" ? "text-black" : "text-white";
  const bgColorClass = theme === "dark" ? "bg-admin-dark" : "bg-admin-light";

  return (
    <main
      className={`w-full h-screen flex flex-col items-center justify-between ${bgColorClass} text-white font-[jura]`}
    >
      <ThemeToggle />
      <NavSmall />
      <div className="formContainer flex-1 flex items-center justify-center w-full h-full">
        <form
          action="#"
          className="flex flex-col items-center gap-4 border border-white/25 backdrop-blur-md shadow-[0_0_45px_black] shadow-black/65 min-h-[4/5] w-4/5 md:w-1/3 bg-[#ffffff02] rounded-2xl p-4 py-12"
        >
          {/* Header Section */}
          <div className="pt-12 text-3xl max-lg:text-lg flex flex-col items-center">
            <p
              className={`uppercase text-4xl max-lg:text-2xl -mt-6 drop-shadow-[0_0_30px_black] ${textColorClass}`}
            >
              Change Password
            </p>
          </div>

          {/* Old Password Field */}
          <div className="field flex flex-col w-full px-12">
            <label htmlFor="oldPassword" className={textColorClass}>
              Old Password
            </label>
            <input
              type="password"
              name="oldPassword"
              placeholder="***************"
              className="focus:ring-0 border text-lg text-white/70 border-white/50 bg-black/50 shadow-[0_0_25px_black] rounded-xl placeholder:text-lg placeholder:text-white/70 p-1 px-4 w-full"
            />
          </div>

          {/* New Password Field */}
          <div className="field flex flex-col gap-1 w-full px-12">
            <label htmlFor="newPassword" className={textColorClass}>
              New Password
            </label>
            <input
              type="password"
              name="newPassword"
              placeholder="***************"
              className="focus:ring-0 border text-lg text-white/70 border-white/50 bg-black/50 shadow-[0_0_25px_black] rounded-xl placeholder:text-lg placeholder:text-white/70 p-1 px-4 w-full"
            />
          </div>

          {/* Forgot Password Link */}
          <p className={`text-left w-full px-12 ${textColorClass}`}>
            Forgot Password?
          </p>

          {/* Submit Button */}
          <button
            type="submit"
            className="text-xl max-sm:text-lg bg-black/50 hover:bg-black/70 shadow-[0_0_35px_black] uppercase rounded-xl border border-white/70 w-[90%] p-1"
          >
            Update Details
          </button>
        </form>
      </div>
    </main>
  );
};

export default ChangePassword;
