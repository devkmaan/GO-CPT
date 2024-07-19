import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../redux/theme/themeSlice";

const ThemeToggle = () => {
  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggle());
  };

  return (
    <div className="absolute right-4 top-14 z-[2]">
      <label className="switch drop-shadow-md shadow-gray-800">
        <input
          type="checkbox"
          id="theme-toggle-checkbox"
          onChange={handleToggle}
          checked={theme === "dark"}
        />
        <span
          className={`slider round backdrop-blur-lg ${
            theme === "dark" ? "before:bg-black" : "before:bg-white"
          }`}
        ></span>
      </label>
    </div>
  );
};

export default ThemeToggle;
