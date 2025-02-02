import './Home.css'
import Typed from "typed.js";
import React, { useEffect, useRef } from "react";
import profile from "../data/profile.json";

function Home(){
    const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to My Profile",
        "My Name is Snehal Desai",
        "I'm MEARN Stack Developer",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

    
    return(
        <div className="container home">
            <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
                <h1 ref={typedRef}></h1>
                <a href="/pdf/Snehalcv.pdf"  download="Resume.pdf" className="btn btn-outline-warning">Download Resume</a>
            </div>
            <div className="right">
                <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
                     <img src={`/assets/${profile.imgSrc}`} alt="" />
                </div>
            </div>
            
        </div>
    )
}

export default Home;