import './Home.css'
import Typed from "typed.js";
import React, { useEffect, useRef } from "react";
import profile from "../data/profile.json";

function Home(){
    const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my Data Analytics portfolio!!",
        "Hi, I’m Snehal Desai",
        "Data Analyst with 2.8+ years of experience leveraging Power BI, SQL, Python, and Excel to convert complex data into clear insights, build impactful dashboards, and drive informed business decisions.",
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
                <a href="/pdf/SnehalDAcv.pdf"  download="SnehalDAcv.pdf" className="btn btn-outline-warning">Download Resume</a>
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