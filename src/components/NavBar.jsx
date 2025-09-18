import { Link, useNavigate } from "react-router-dom";
import Button from "./r.components/Button";
import { BarChart3Icon} from "lucide-react";
import { BsCart3 } from "react-icons/bs";

const links = [
  { path: "/", label: "Home" },
  { path: "/about-us", label: "About Us" },
  { path: "/services", label: "Services" },
  { path: "/training", label: "Training" },
  { path: "/blog", label: "Blog" },
  { path: "/contact", label: "Contact" },
];

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <header className="p-10">
      <nav className="flex items-center justify-between">
        <Link to="/">
          <span className="capitalize flex font-roboto font-bold text-3xl cursor-pointer">
            maven<p className="text-red-700">Aide</p>
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
        items-center gap-2 font-semibold">
          <BarChart3Icon className="w-[14px] h-[14px] text-green-400"/>
          <Button
            btnText={"Login In"}
            btnStyle={
              "rounded-full px-5 py-3 cursor-pointer border-2 border-black hover:bg-red-700 hover:text-white hover:border-white"
            }
            btnFunc={() => navigate("/log-in")}
          />

          <Button
            btnText={"Get Started"}
            btnStyle={
              "rounded-full px-5 py-3 cursor-pointer border-2 border-black hover:bg-red-700 hover:text-white hover:border-white"
            }
            btnFunc={() => navigate("/get-started")}
          />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;

// import { useState } from "react";
// import { Link } from "react-router-dom";
// // import Button from "./r.components/Button";

// const links = [
//   { path: "/", label: "Home" },
//   { path: "/about-us", label: "About Us" },
//   { path: "/services", label: "Services" },
//   { path: "/training", label: "Training" },
//   { path: "/blog", label: "Blog" },
//   { path: "/contact", label: "Contact" },
// ];

// const NavBar = () => {
//   const [navOpen, setNavOpen] = useState(false);

//   return (
//     <header className="relative p-10 bg-[#D1E5E4]">
//       <nav className="flex items-center justify-between">
//         <Link to="/" className="uppercase text-3xl font-bold">
//           maven Aid
//         </Link>

//         {/* Hamburger Menu Button */}
//         <button className="text-xl" onClick={() => setNavOpen(!navOpen)}>
//           {navOpen ? "✖" : "☰"}
//         </button>
//       </nav>

//       {/* Full-Screen Navigation Menu */}
//       {navOpen && (
//         <ul className="show_nav">
//           {links.map((link, index) => (
//             <li key={index}>
//               <Link to={link.path} onClick={() => setNavOpen(false)}>
//                 {link.label}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       )}
//     </header>
//   );
// };

// export default NavBar;
