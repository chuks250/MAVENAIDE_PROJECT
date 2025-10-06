import { Link, useNavigate } from "react-router-dom";
import Button from "./r.components/Button";
import { BsCart3 } from "react-icons/bs";
import { SearchIcon } from "lucide-react";
import { FaChevronDown } from "react-icons/fa6";

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
        <div className="flex font-bricolageGrotesque items-center">
          <p className="flex text-end capitalize py-3 px-10 gap-2 text-[#0000007A] text-[20px] font-normal cursor-pointer">
            explore <FaChevronDown className="grid items-baseline" />
          </p>
          <div className="flex justify-center">
            <p className="text-left capitalize py-3 px-64 rounded-full border-2 text-black text-[16px] font-bold cursor-pointer gap-2">
              <SearchIcon classname="w-[14px] h-[14px]" />
            </p>
          </div>
        </div>
        {/* <ul className="flex items-center justify-between gap-10 font-serif text-lg">
          {links.map((link, index) => (
            <li key={index}>
              <Link to={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul> */}
        <div
          className="flex
        items-center gap-2 font-semibold"
        >
          <BsCart3 className="cursor-pointer w-5 h-5" />
          <Button
            btnText={"Login"}
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
