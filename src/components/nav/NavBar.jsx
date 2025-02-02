import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar(){
    return(
        <div className="navcontainer" data-aos="fade-down"
        data-aos-duration="1000">
            <div className="left nav_item">Portfolio</div>
            <div className="right">
                <Link to="/" className="nav_item">Home</Link>
                <Link to="/experience" className="nav_item">Experience</Link>
                <Link to="/skill" className="nav_item">Skill</Link>
                <Link to="/project" className="nav_item">Project</Link>
                <Link to="/contact" className="nav_item">Contact</Link>
            </div>

        </div>
    )
}

export default NavBar;