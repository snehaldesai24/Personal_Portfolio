// import "./NavBar.css";
// import { Link } from "react-router-dom";

// function NavBar(){
//     return(
//         <div className="navcontainer" data-aos="fade-down"
//         data-aos-duration="1000">
//             <div className="left nav_item">Portfolio</div>
//             <div className="right">
//                 <Link to="/" className="nav_item">Home</Link>
//                 <Link to="/experience" className="nav_item">Experience</Link>
//                 <Link to="/skill" className="nav_item">Skill</Link>
//                 <Link to="/project" className="nav_item">Project</Link>
//                 <Link to="/contact" className="nav_item">Contact</Link>
//             </div>

//         </div>
//     )
// }

// export default NavBar;

import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navcontainer" data-aos="fade-down" data-aos-duration="1000">
      <div className="left nav_item">Portfolio</div>
      <div className="menu-icon" onClick={toggleMenu}>
        {/* Hamburger menu icon */}
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <div className={`right ${isMenuOpen ? "open" : ""}`}>
        <Link to="/" className="nav_item">Home</Link>
        <Link to="/experience" className="nav_item">Experience</Link>
        <Link to="/skill" className="nav_item">Skill</Link>
        <Link to="/project" className="nav_item">Project</Link>
        <Link to="/certificates" className="nav_item">Certificates</Link>
        <Link to="/contact" className="nav_item">Contact</Link>
      </div>
    </div>
  );
}

export default NavBar;
