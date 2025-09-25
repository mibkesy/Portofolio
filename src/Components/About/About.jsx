import React from 'react'
import Heroimg from '../../assets/heroimg/heroimg.jpg'

const About = () => {
  return (
    <section className="w-full bg-zinc-950 px-5 mx-auto py-5 md:py-20" id="about">
      <h1 className="text-gray-100 text-4xl md:text-4xl font-extrabold text-center justify-center pb-3 md:pb-5">
        About Me
      </h1>
      <p className="text-xl font-extralight text-gray-100 py-2 mt-2 text-center justify-center md:flex-item-center text-center justify-center leading-5 pb-4" >
        This is are my Bio profile and as well as information of my bio profile
        </p>
      <div className="grid grid-cols-2 md:grid-cols-3 md:gap-4">
        <img className="w-full object-cover rounded-md mb-5 md:mb-5" src={Heroimg} alt="profile-picture-portfolio"/>
        <div className="cols-span-1 cols-span-2 bg-gradient-to-br from to-zinc-950 to to-zinc-950  border from-slate-900 p-3">
          <p className="text-gray-100 text-xs md:text-[16px] font-medium text-justify justify-between leading-6">
            Hi everyone, I want to introducing myself my name is Muhammad Irfan Baari and you can call me (Irfan) was born sept 26 2000, and I from son second to two of brothers.
            And I personally is already have a background because my background is computer science I personally is fresh graduates from college NIIT College of Information Technology (I-Tech) at Indonesia Jakarta, and I personally is already taking Informatics Engineering, and I personally is still ever don't have a jobs.
            And I personally is more interested to computer science which especially is are IT, and I personally is already doing makes a coding programs using programming languages between both like ("HTML, CSS, PHP, MySQL Database, (Laravel, CodeIgniter, and ReactJS is Frameworks Programming Languages), including also Tailwind CSS, photos editing, videos editing, animation editing, and VLOG editings, and including also Computer Networking like (Cisco)"), and many more but which important is doing much learn and excercise doing well.
          </p>
          <p className="text-gray-100 text-xs md:text-[16px] font-medium text-justify justify-between leading-6">
            And I personally is already have a skills, so my skills is are Code (Codings) programming languages, between all both like ("HTML, JavaScript, CSS, PHP, MySQL Database, ("Laravel, CodeIgniter, ReactJS Framework Programming Languages"), including also Tailwind CSS, photos editing, videos editing, animation editing, and VLOG editings, and including also Computer Networking like (Cisco)") and many more. 
            And I personally is already prepare for my career job as Full Stack Web Developer, which should be consistent which especially is IT Web Developer Field. As well as also should be have attitude behavior which good, and willing to be able for accepted suggestion or conclusion and critical from other person during jobs.
          </p>
            </div>
          <br />
            <br />
          <br />
            <br />
          <br />
            <b><h1 className="text-3xl font-bold text-gray-100 text-center justify-center">Percentage Skill improvement</h1></b>
          <div className="space-y-7 md:rounded--full-lg">
            <div className="flex items-center justify-center">
              <label className="w-8/12 text-gray-100 font-bold" htmlFor="htmlandcss">
                HTML
              </label>
                <div className="grow  bg-gray-100 rounded-full h-3.5">
                  <div className="bg-gradient-to-br from bg-green-600 to-green-600 h-3.5 rounded-full transform transition-transform duration-1000 hover:scale-75 w-9/12">
                  </div>
                </div>
            </div>
            <div className="flex items-center">
              <label className="w-8/12 text-gray-100 font-bold" htmlFor="htmlandcss">
                CSS
              </label>
                <div className="grow  bg-gray-100 rounded-full h-3.5">
                  <div className="bg-gradient-to-br from bg-green-600 to to-green-600 h-3.5 rounded-full transform transition-transform duration-1000 hover:scale-75 w-7/12">
                  </div>
                </div>
            </div>
            <div className="flex items-center">
              <label className="w-8/12 text-gray-100 font-bold" htmlFor="htmlandcss">
                JavaScript
              </label>
                <div className="grow  bg-gray-100 rounded-full h-3.5">
                  <div className="bg-gradient-to-br from bg-green-600 to to-green-600 h-3.5 rounded-full transform transition-transform duration-1000 hover:scale-75 w-7/12">
                  </div>
                </div>
            </div>
            <div className="flex items-center">
              <label className="w-8/12 text-gray-100 font-bold" htmlFor="htmlandcss">
                ReactJS
              </label>
                <div className="grow  bg-gray-100 rounded-full h-3.5">
                  <div className="bg-gradient-to-br from bg-green-600 to to-green-600 h-3.5 rounded-full transform transition-transform duration-1000 hover:scale-75 w-9/12">
                  </div>
                </div>
            </div>
            <div className="flex items-center">
              <label className="w-8/12 text-gray-100 font-bold" htmlFor="htmlandcss">
               NodeJS
              </label>
                <div className="grow  bg-gray-100 rounded-full h-3.5">
                  <div className="bg-gradient-to-br from bg-green-600 to to-green-600 h-3.5 rounded-full transform transition-transform duration-1000 hover:scale-75 w-9/12">
                  </div>
                </div>
            </div>
            <div className="flex items-center">
              <label className="w-8/12 text-gray-100 font-bold" htmlFor="htmlandcss">
                PHP
              </label>
                <div className="grow  bg-gray-100 rounded-full h-3.5">
                  <div className="bg-gradient-to-br from bg-green-600 to to-green-600 h-3.5 rounded-full transform transition-transform duration-1000 hover:scale-75 w-8/12">
                  </div>
                </div>
                </div>
                <div className="flex items-center">
              <label className="w-8/12 text-gray-100 font-bold" htmlFor="htmlandcss">
                MySQL Database
              </label>
                <div className="grow  bg-gray-100 rounded-full h-3.5">
                  <div className="bg-gradient-to-br from bg-green-600 to to-green-600 h-3.5 rounded-full transform transition-transform duration-1000 hover:scale-75 w-7/12">
                  </div>
                </div>
            </div>
          </div>
        </div>
    </section>
  )
}
export default About;