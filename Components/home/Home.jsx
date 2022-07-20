import React from 'react';
import "./Home.css";
import Me from "../../assets/home-avatar.svg";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';

const Home = () => {
    return (
        <section className="home container" id="home">
            <div className='intro'>
                <img src={Me} alt='Homeavatar' className='home_img' />
                <h1 className='home_name'>Yeli Smith</h1>
                <span className='home_education'>I'm a front-end developer</span>
                
                <HeaderSocials />
                
                <a href="#contact" className="btn">Hire Me</a>
                <ScrollDown />
            </div>
            
        </section>
    )
}

export default Home
