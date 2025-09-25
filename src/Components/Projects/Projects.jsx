import React from 'react'
import {PROJECTS} from '../../utills/Data/Data'

const Projects = () => {
  return (
  <section className="w-full bg-zinc-950 px-5 mx-auto py-5 md:py-20" id="projects">
    <h1 className="text-gray-100 text-4xl md:text-4xl font-extrabold text-center justify-center pb-2 md:pb-2">
      Projects
    </h1>
    <p className="text-xl font-extralight text-gray-100 py-2 mt-2 text-center justify-center md:flex-item-center text-center justify-center leading-5 pb-4">
      This is are my projects which one I ever doing making a Web based programs and using programming languages
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {PROJECTS.map((project) => (
          <div key={project.id} className="bg-purple-700 p-5 rounded-lg hover:shadow-lg transform transition-transform duration-1000 hover:scale-95">
            <img src={project.img} className="rouded-lg mb-5 w-full object-cover" alt="projects"/>
            <h2 className="text-2xl text-gray-100 font-semibold mb-3 text-center justify-center">{project.title}</h2>
            <p className="text-xl text-gray-100 mb-3 text-justify justify-between">{project.desc}</p>
            <a href={project.url} className="inline-block bg-gradient-to-br from  bg-green-600 to bg-green-600 text-gray-100 px-20 py-3 rounded-full md:flex items-center justify-center" target="_blank" rel="noopener noreferrer">Github</a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects;