import React from 'react'
import {CgWebsite} from 'react-icons/cg'
import {RiCustomerService2Line} from 'react-icons/ri'
import {BsFillBugFill, BsShieldPlus} from "react-icons/bs"
import {CgFileDocument} from "react-icons/cg"
import {FiSettings} from "react-icons/fi"
import lockImage from "../resources/images/electronic-img-1-1-1.png";
import watcher from "../resources/images/approach-img-1-1-1.jpg";
import Testimonials from './Testimonials'
const SecondPage = ()=>{
    return(
        <>
            <section className = 'page-two'>
                <section className = 'page-two-content'>
                    <div className = 'page-two-slider'>

                    </div>
                    <div className = 'page-two-highlight'>
                            <h1>Complete Website Security</h1>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Doloribus quam neque quibusdam corrupti aspernatur
                            corporis alias nisi dolorum expedita veritatis voluptates minima sapiente.
                        </p>
                    </div>
                    <div className = 'page-two-cards'>
                        <ul>
                            <li>

                                <div className = 'grid-content-area'>
                                    <span className = 'b-icon'><CgWebsite /></span>

                                    <div className = 'grid-content-area-content'>
                                    <h1>Managed Web Application</h1>
                                    <p>
                                        sed do eiusmod tempo
                                        consectetur adipiscing elit, sed do eiusmod tempo
                                    </p>

                                    </div>
                                </div>
                            </li>
                            <li>

                                <div className = 'grid-content-area'>
                                    <span className = 'b-icon'><RiCustomerService2Line /></span>
                                    <div className = 'grid-content-area-content'>
                                        <h1>Managed Web Application</h1>
                                        <p>
                                            sed do eiusmod tempo
                                            consectetur adipiscing elit, sed do eiusmod tempo
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li>

                                <div className = 'grid-content-area'>
                                <span className = 'b-icon'><CgWebsite /></span>
                                <div className = 'grid-content-area-content'>
                                    <h1>Managed Web Application</h1>
                                    <p>
                                        sed do eiusmod tempo
                                        consectetur adipiscing elit, sed do eiusmod tempo
                                    </p>
                                    </div>
                                </div>
                            </li>
                            <li>

                                <div className = 'grid-content-area'>
                                    <span className = 'b-icon'><BsFillBugFill /></span>
                                    <div className = 'grid-content-area-content'>
                                    <h1>Managed Web Application</h1>
                                    <p>
                                        sed do eiusmod tempo
                                        consectetur adipiscing elit, sed do eiusmod tempo
                                    </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className = 'pathed-area'>
                        <div className = 'area-left'>
                            <h1>Our Approach to Security</h1>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
                            </p>
                            <ul>
                                <li>
                                    <div className = 'list-content-side'>
                                            <h2>Secure By Design</h2>
                                            <p>
                                            Lorem ipsum dolor sit amet, 
                                            consectetur adipiscing elit, 
                                            sed do eiusmod tempor incididunt ut 
                                            suspendisse ultrices
                                            </p>
                                    </div>
                                    <span className = 'list-icon-side'>
                                        <BsShieldPlus />
                                    </span>
                                </li>

                                <li>
                                <div className = 'list-content-side'>
                                            <h2>Compliant By Design</h2>
                                            <p>
                                            Lorem ipsum dolor sit amet, 
                                            consectetur adipiscing elit, 
                                            sed do eiusmod tempor incididunt ut 
                                            suspendisse ultrices
                                            </p>
                                    </div>
                                    <span className = 'list-icon-side'>
                                        <BsShieldPlus />
                                    </span>
                                </li> 

                                <li>
                                <div className = 'list-content-side'>
                                            <h2>Continuous Monitoring</h2>
                                            <p>
                                            Lorem ipsum dolor sit amet, 
                                            consectetur adipiscing elit, 
                                            sed do eiusmod tempor incididunt ut 
                                            suspendisse ultrices
                                            </p>
                                    </div>
                                    <span className = 'list-icon-side'>
                                        <CgFileDocument />
                                    </span>
                                </li>                                
                            </ul>
                        </div>
                        <div className = 'area-right'>
                            <img src = {watcher} />
                        </div>
                    </div>


                    <div className = 'page-two-highlight'>
                            <h1>High-Performance Solutions</h1>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Doloribus quam neque quibusdam corrupti aspernatur
                            corporis alias nisi dolorum expedita veritatis voluptates minima sapiente.
                        </p>
                    </div>

                    <div className = 'page-two-grid-area'>
                        <ul className='f-1-ul'>
                            <li id = 'f11'>
                                <div className = 'p-t-g-a-text-area'>
                                    <h2>Secure Managed IT</h2>
                                    <p>
                                    Lorem ipsum dolor sit amet sed, consectetur adipiscing elit
                                    </p>
                                </div>
                            </li>

                            <li id = 'f12'>
                            <div className = 'p-t-g-a-text-area'>
                                    <h2>Incident Responder</h2>
                                    <p>
                                    Lorem ipsum dolor sit amet sed, consectetur adipiscing elit
                                    </p>
                                </div>
                            </li>

                            <li id = 'f13'>
                            <div className = 'p-t-g-a-text-area'>
                                    <h2>Threat Hunter</h2>
                                    <p>
                                    Lorem ipsum dolor sit amet sed, consectetur adipiscing elit
                                    </p>
                                </div>
                            </li>
                        </ul>

                        <ul className = 'f-2-ul'>
                            <li id = 'f21'>
                            <div className = 'p-t-g-a-text-area'>
                                    <h2>Incident Responder</h2>
                                    <p>
                                    Lorem ipsum dolor sit amet sed, consectetur adipiscing elit
                                    </p>
                                </div>
                            </li>
                            <li id = 'f22'>
                            <div className = 'p-t-g-a-text-area'>
                                    <h2>Incident Responder</h2>
                                    <p>
                                    Lorem ipsum dolor sit amet sed, consectetur adipiscing elit
                                    </p>
                                </div>
                            </li>
                            <li id = 'f23'>
                            <div className = 'p-t-g-a-text-area'>
                                    <h2>Incident Responder</h2>
                                    <p>
                                    Lorem ipsum dolor sit amet sed, consectetur adipiscing elit
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
            </section>
            <DarkDiv />
            <ThirdDiv />
            <Testimonials />
        </>
    )
}


const DarkDiv = ()=>{
    return(
        <>
            <section className = 'dark-div'>
                <section className = 'dark-div-content'>

                    <div className = 'dark-div-right'>
                        <h1>

                        Innovative Electronic Protection Of 
                        Your Office And Home Control Online

                        </h1>
                        <div className = 'dd-scrolls'>
                            <div className = 'dd-scrolls-header'>
                                <ul>
                                    <li>Our Goal</li>
                                    <li>Encryption</li>
                                    <li>GDPR</li>
                                    <li>CCTV</li>
                                    <li>Intercom System</li>
                                </ul>
                                
                            </div>
                            <div className = 'text-side'>
                                    <p>
                                    Lorem ipsum dolor, 
                                    sit amet consectetur adipisicing elit. Illo 
                                    ducimus vero, vero corporis voluptates 
                                    beatae pariatur laudantium, fugiat illum ab 
                                    deserunt nostrum aliquid quisquam esse? 
                                    Voluptatibus quia velit numquam esse porro 
                                    ipsum dolor, sit amet consectetur adipisicing elit. 
                                    Illo ducimus vero, corporis.
                                    </p>
                                    <p>
                                    Lorem ipsum dolor, 
                                    sit amet consectetur adipisicing elit. Illo 
                                    ducimus vero, vero corporis voluptates 
                                    beatae pariatur laudantium, fugiat illum ab 
                                    deserunt nostrum aliquid quisquam esse? 
                                    Voluptatibus quia
                                    </p>
                                    <br />
                                    <button className = 'anim-btn'>Learn More</button>
                                </div>
                        </div>
                    </div>

                    <div className = 'dark-div-left'>
                        <img src = {lockImage} />
                    </div>
                </section>
            </section>
        </>
    )

}



const ThirdDiv = ()=>{
    return(
        <>
            <section className = 'third-div'>
                <section className = 'third-div-content'>
                <div className = 'page-two-highlight'>
                            <h1>
                            Complete And Effective 
                            Protection For Your Home And Office
                            </h1>
                            <p>
                            Careful Watchers offers comprehensive cyber security solutions to help Businesses, Organizations and Individuals protect themselves from digital threats.
                            </p>
                    </div>


                    <div className = 'page-two-highlight'>
                            <h1>
                            The Problem
                            </h1>
                            <p>
                            Cyber attacks are becoming more prevalent, which might have far-reaching effects on individuals, companies, and society at large. It is crucial to take preventative measures to safeguard against cyber threats, such as investing in cybersecurity, raising public awareness and educating people about cyber threats, 
                            and creating plans for defending against cyberattacks.                            
                            </p>
                    </div>

                    <div className = 'page-two-highlight'>
                            <h1>
                            Our Solution
                            </h1>
                            <p>
                            Careful Watchers solve a range of problems related to protecting digital systems and data from unauthorized access, theft, damage, and other forms of cyber threats. These threats can come in various forms, such as hacking, malware, phishing, ransomware, and social engineering attacks.                            </p>
                    </div>


                    


                    <div className = 'page-cards'>
                        <div className = 'each-card'>
                                <span className = 'card-icon'>
                                <FiSettings />
                                </span>
                                <div className = 'card-contents'>
                                    <h1>
                                    24/7 Support And Remote Admit

                                    </h1>
                                    <p>
                                    Lorem ipsum dolor sit 
                                    amet, consectetur 
                                    adipiscing elit, 
                                    sed do eiusmod tempor
                                    </p>
                                </div>
                        </div>
                        <div className = 'each-card'>
                                <span className = 'card-icon'>
                                <FiSettings />
                                </span>
                                <div className = 'card-contents'>
                                    <h1>
                                    24/7 Support And Remote Admit

                                    </h1>
                                    <p>
                                    Lorem ipsum dolor sit 
                                    amet, consectetur 
                                    adipiscing elit, 
                                    sed do eiusmod tempor
                                    </p>
                                </div>
                        </div>
                        <div className = 'each-card'>
                                <span className = 'card-icon'>
                                <FiSettings />
                                </span>
                                <div className = 'card-contents'>
                                    <h1>
                                    24/7 Support And Remote Admit

                                    </h1>
                                    <p>
                                    Lorem ipsum dolor sit 
                                    amet, consectetur 
                                    adipiscing elit, 
                                    sed do eiusmod tempor
                                    </p>
                                </div>
                        </div>
                        <div className = 'each-card'>
                                <span className = 'card-icon'>
                                <FiSettings />
                                </span>
                                <div className = 'card-contents'>
                                    <h1>
                                    24/7 Support And Remote Admit

                                    </h1>
                                    <p>
                                    Lorem ipsum dolor sit 
                                    amet, consectetur 
                                    adipiscing elit, 
                                    sed do eiusmod tempor
                                    </p>
                                </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}
export {SecondPage, ThirdDiv, DarkDiv}