// import { BrouserRoter as useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "./r.components/Button";

const links = [
  { path: "./", label: "Home" },
  { path: "/about-us", label: "About Us" },
  { path: "/services", label: "Services" },
  { path: "/training", label: "Training" },
  { path: "/blog", label: "Blog" },
  { path: "/contact", label: "Contact" },
];

const NavBar = () => {
  // const navigate = useNavigate();

  return (
    <header className="p-10 bg-[#D1E5E4]">
      <nav className="flex items-center justify-between">
        <Link to="/">
          <span className="capitalize font-roboto font-bold text-3xl cursor-pointer">
            mavenAide
          </span>
        </Link>
        <ul className="flex items-center justify-between gap-10 font-serif text-lg">
          {links.map((link, index) => (
            <li key={index}>
              <Link to={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <div
          className="flex
        items-center gap-2 font-semibold  "
        >
          <Button
            btnText={"Login In"}
            btnStyle={
              "rounded-full px-5 py-3 cursor-pointer border-2 border-black"
            }
          />

          <Button
            btnText={"Get Started"}
            btnStyle={
              "rounded-full px-5 py-3 cursor-pointer border-2 border-black"
            }
          />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
