import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
    { to: "/portfolio", label: "Portfolio" },
  ];

  return (
    <nav className="top-0 w-full bg-[#C60F7B] text-3xl p-4">
      {/* Container */}
      <div className="flex flex-col sm:flex-row sm:justify-end items-start sm:items-center gap-4">
        {links.map((link) => {
          const isActive = location.pathname === link.to;

          return (
            <Link
              key={link.to}
              to={link.to}
              className={`w-full sm:w-auto text-center sm:text-left p-2 rounded transition-all duration-300
                ${isActive 
                  ? "bg-[#E5ECE9]/30 text-[#980B5D] pointer-events-none" 
                  : "text-[#E2DBBE] hover:text-[#980B5D] hover:bg-[#E5ECE9]/30 hover:backdrop-blur-sm cursor-pointer"}`
              }
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
