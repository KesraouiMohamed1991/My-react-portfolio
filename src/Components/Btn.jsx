import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Btn({ url, name }) {
  return (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      className="sm:mb-8 rounded-3xl px-8 py-3 text-slate-950 border-[0.4px]  font-semibold text-xs sm:text-base mt-8 bg-white hover:text-white hover:bg-black"
      to={url}
    >
      {name}
    </Link>
  );
}

export default Btn;
