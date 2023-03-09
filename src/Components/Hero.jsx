import React from "react";
import {BsShieldCheck} from "react-icons/bs";
import {GiPadlock} from "react-icons/gi";
import {BiCertification} from "react-icons/bi";
import {BsFillPlayFill} from "react-icons/bs";

const Hero = () =>{
    return (
        <>
            <section className = 'hero'>
                
                <ul className = 'animated'>
                    <li>
                        <div className='white-bar bar1'></div>
                    </li>
                    <li>
                        <div className='white-bar bar2'></div>
                    </li>
                    <li>
                        <div className='white-bar bar3'></div>
                    </li>
                </ul>
                <section className = 'hero-content'>

                
                <div className = 'hero-left'>
                    <span className = 'hero-left-top'>
                        Lorem ipsum dot silu ammet ipsum ipsum
                    </span>
                    <span className = 'hero-left-mid'>
                    MODERN INFORMATION PROTECTION FROM HACKERS
                    </span>
                    <span className = 'hero-left-bottom'>
                    Careful Watchers offers comprehensive cyber 
                    security solutions to help Businesses, 
                    Organizations and Individuals protect 
                    themselves from digital threats.                    </span>
                    <span className = 'hero-left-buttons'>
                        <input type = 'button' className = 'g-started' value = 'Get Started' />
                        <input type = 'button' value = 'About us' className = 'abt-us' />
                    </span>
                </div>

                <div className = 'hero-right'>
                    <div className = 'twt-btn-frame'>
                    
                        <div className = 'hero-btn-play-twitt'>
                            <button className = 'play-btn'> <BsFillPlayFill/> </button>

                        </div>
                        
                    </div>


                </div>



                </section>

                <div className = 'hero-bottom'>
                    <div className = 'hero-bottom-items'>
                        <span className = 'hbi-title'>
                            <BsShieldCheck /> <span class = 'text-side'>Security</span>
                        </span>
                        <span className = 'hbi-content'>
                                orem ipsum dolor sit amet, 
                                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                        </span>
                    </div>

                    <div className = 'hero-bottom-items'>

                        <span className = 'hbi-title'>
                            <GiPadlock /><span className='text-side'>Privacy</span>
                        </span>
                        <span className = 'hbi-content'>
                            orem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore.
                        </span>
                    </div>


                    <div className = 'hero-bottom-items'>
                        {/*<div className = 'item-overlay'></div>*/}
                        <span className = 'hbi-title'>
                            <BiCertification /><span className='text-side'>Industry Certified</span>
                        </span>
                        <span className = 'hbi-content'>
                            orem ipsum dolor sit amet, consectetur 
                            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.                           
                        </span>
                    </div>                                        
                </div>                
            </section>
        </>
    );
}


export default Hero;