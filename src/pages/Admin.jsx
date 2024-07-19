import NavSmall from "../components/NavSmall";
import { useSelector } from "react-redux";
import ThemeToggle from "../components/ThemeToggle";
import admin from "../assets/admin.png";
import { Link } from "react-router-dom";

const Admin = () => {
  const theme = useSelector((state) => state.theme.value);

  // Determine theme-based classes
  const textColorClass = theme === "light" ? "text-black" : "text-white";
  const bgColorClass = theme === "dark" ? "bg-admin-dark" : "bg-admin-light";

  return (
    <section
      className={`w-full h-screen flex flex-col items-center justify-between ${bgColorClass} text-white font-[jura]`}
    >
      <ThemeToggle />
      <NavSmall />
      <div className="formContainer flex-1 flex items-center justify-center w-full h-full">
        <form
          action="#"
          className="flex flex-col items-center gap-4 bg-transparent border border-white/25 backdrop-blur-md shadow-[0_0_45px_black] shadow-black/65 min-h-[4/5] w-4/5 md:w-1/3 rounded-2xl p-4"
        >
          {/* Header Section */}
          <div className="pt-12 text-3xl max-lg:text-lg flex flex-col items-center">
            <img src={admin} alt="admin" className="rounded-xl w-1/2" />
            <p
              className={`uppercase text-4xl max-lg:text-2xl -mt-6 drop-shadow-[0_0_30px_black] ${textColorClass}`}
            >
              Administrator
            </p>
          </div>

          {/* Email Field */}
          <div className="field flex flex-col w-full px-12">
            <label htmlFor="email" className={textColorClass}>
              E-mail Address
            </label>
            <input
              type="text"
              name="email"
              placeholder="admin@gmail.com"
              className="focus:ring-0 border text-lg text-white/70 border-white/50 bg-black/50 shadow-[0_0_25px_black] rounded-xl placeholder:text-lg placeholder:text-white/70 p-1 px-4 w-full"
            />
          </div>

          {/* Password Field */}
          <div className="field flex flex-col gap-1 w-full px-12">
            <label htmlFor="password" className={textColorClass}>
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="********"
              className="focus:ring-0 border text-lg text-white/70 border-white/50 bg-black/50 shadow-[0_0_25px_black] rounded-xl placeholder:text-lg placeholder:text-white/70 p-1 px-4 w-full"
            />
          </div>

          {/* Change Password Link */}
          <Link
            to="/change_password"
            className={`text-left w-full px-12 ${textColorClass}`}
          >
            Change Password?
          </Link>

          {/* Submit Button */}
          <button
            type="submit"
            className="text-xl max-sm:text-lg bg-black/50 hover:bg-black/70 shadow-[0_0_35px_black] uppercase rounded-xl border border-white/70 w-4/5 p-1 px-12"
          >
            Update Details
          </button>
        </form>
      </div>
    </section>
  );
};

export default Admin;
