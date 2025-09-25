import React from 'react'
import {  
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaYoutube,
  FaTiktok,
} 
from "react-icons/fa";
import { 
  BsTwitterX
 } 
 from "react-icons/bs";
import HeroImg from '../../assets/heroimg/heroimg.jpg'

const Home = () => {
  
  return (
    <section className="bg-zinc-950 px-3 text-gray-100 py-32">
      <div className="container mx-auto grid md:grid-cols-2 flex items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <div className="hero-img">
            <img src={HeroImg} alt="heroimgprofilepic" className="mx-auto mb-5 w-40 h-40 mx-auto rounded-full object-cover transform transition-transform duration-1000 hover:scale-95 flex justify-self-center mr-5"/>
          <h1 className="text-2xl lg text-3xl text-justify justify-center ml-6  mt-5 pb-0">
            Hi, <br />I am <span className="text-4xl text-yellow-400 font-semibold justify-center">M. Irfan Baari</span> <br />
            Full Stack Developer
          </h1>
          <p className="text-xl font-light py-4 mt-5 md:flex items-center text-justify justify-between ml-9">
            Hi, I want to be a Developer which especially is are Web Developer but I personally will choosing position as a Full Stack Developer, why I choose this position for my job because I personally is very like a Programming Languages and still much learn and excercise doing well, if I personally is already proficient in programming languages but I personally is still doing much learn and excercise doing well. or any progamming languages and anything and others.
            As well as also should much learn new technologies as well which the more thrive along with the changing times which are now increasing developing which especially is are information technology (IT).
          </p>
          <center><button className="text-xl text-gray-100 font-extrabold bg-green-600 primary-btn">Hire Me</button></center>
          <br />
            <div className="flex py-4">
              <a href="https://m.facebook.com/people/Muhammad-Irfan-Baari/100022537582850/" className="space-x-0 px-3 py-3 pr-4 inline-block text-gray-100 hover:text-green-500 mr-2">
                <FaFacebook size={40}/>
              </a>
              <a href="https://x.com/irfanbaari" className="space-x-0 px-3 py-3 pr-4 inline-block text-gray-100 hover:text-green-500 mr-2">
                <BsTwitterX size={40}/>
              </a>
              <a href="https://www.instagram.com/m_irfan.baary2000/" className="space-x-0 px-3 py-3 pr-4 inline-block text-gray-100 hover:text-green-500 mr-2">
                <FaInstagramSquare size={40}/>
              </a>
              <a href="https://id.linkedin.com/in/m-irfan-baari-905b48222/in" className="space-x-0 px-3 py-3 pr-4 inline-block text-gray-100 hover:text-green-500 mr-2">
                <FaLinkedin size={40}/>
              </a>
              <a href="https://www.youtube.com/@newgamingprograms2780" className="space-x-0 px-3 py-3 pr-4 inline-block text-gray-100 hover:text-green-500 mr-2">
                <FaYoutube size={40}/>
              </a>
              <a href="https://www.tiktok.com/@mirfanbaari2000" className="space-x-0 px-3 py-3 pr-4 inline-block text-gray-100 hover:text-green-500 mr-2">
                <FaTiktok size={40}/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home;