import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "/vite.svg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [buttonAnimate, setButtonAnimate] = useState(false);
  const [roundPosition, setRoundPosition] = useState({
    top: "5px",
    left: "10px",
  });
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const handleMouseEnter = (event) => {
    const buttonRect = event.currentTarget.getBoundingClientRect();
    const buttonX = event.clientX - buttonRect.left;
    const buttonY = event.clientY - buttonRect.top;

    setButtonAnimate(true);
    setRoundPosition({
      top: buttonY < 24 ? "0px" : buttonY > 30 ? "48px" : "5px",
      left: `${buttonX}px`,
    });
  };

  const handleMouseLeave = () => {
    setButtonAnimate(false);
  };

  return (
    <nav
      className={`
        fixed top-5 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl
        py-2 px-4 z-50 flex justify-between items-center
        bg-[rgba(196,235,245,0.52)] backdrop-blur-[6.3px]
        border border-[rgb(108,209,235)] rounded-[50px]
        transition-all duration-300 ease-in-out
        ${scrolled ? 'top-0 w-[99%] max-w-full rounded-none' : ''}
        ${isLoginPage ? 'bg-[rgb(196,235,245)]' : ''}
      `}
    >
      <Link to="/" className="h-[30px]">
        <img src={logo} alt="Logo" className="h-full" />
      </Link>

      <div className="flex justify-center items-center gap-8">
        {['Shop', 'Shop', 'Shop'].map((item, index) => (
          <Link
            key={index}
            to={`/shop${index + 1}`}
            className="group relative px-4 py-2.5 text-[#0d80dd9f] text-lg no-underline z-0"
          >
            <span className="relative inline-block">
              {item}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#0d80dd9f] shadow-[0_0_8px_white] 
                transition-width duration-300 ease-out group-hover:w-full" />
            </span>
          </Link>
        ))}
      </div>

      <div className="flex items-center">
        <Link
          to="/login"
          className={`
            relative w-[150px] h-[48px] overflow-hidden
            border-2 border-[#0d80dd9f] rounded-[500px]
            bg-transparent uppercase text-[#0d80dd9f]
            text-sm font-bold font-['Rubik']
            flex justify-center items-center
            hover:border-[#0197f6] hover:text-white
            transition-colors duration-300
          `}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span className="relative z-[2]">Login</span>
          <div
            className={`
              absolute rounded-full bg-[#0197f6] z-[1]
              w-[1px] h-[1px]
              ${buttonAnimate ? 'animate-scaleUp' : 'animate-scaleDown'}
            `}
            style={{
              top: roundPosition.top,
              left: roundPosition.left,
            }}
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;