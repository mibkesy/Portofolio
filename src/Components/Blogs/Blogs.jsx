import React from 'react'
import { BLOGS } from "../../utills/Data/Data";

const Blogs = () => {
  return (
    <section className="w-full bg-zinc-950 px-5 mx-auto py-5 md:py-20" id="blogs">
      <h1 className="text-gray-100 text-4xl md:text-4xl font-extrabold text-center justify-center pb-2 md:pb-2">
        Blogs
      </h1>
      <p className="text-xl text-gray-100 font-light py-2 mt-2 md:flex items-center text-center justify-center leading-5 pb-4">
        This is are my blogs which one I ever posts it of few years ago
      </p>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {BLOGS.map((blog) => (
        <div key={blog.id} className="bg-purple-700 p-5 rounded-lg hover:shadow-lg transform transition-transform duration-1000 hover:scale-95">
          <img src={blog.img} className="rouded-lg mb-5 w-full object-cover" alt="blog"/>
          <h2 className="text-2xl text-gray-100 font-semibold mb-3 text-center justify-center">{blog.title}</h2>
          <a href={blog.url} className="inline-block btn bg-primary border-2 border-[#32cd32] text-gray-100 px-5 py-2 hover:bg-transparent md:flex items-center justify-center pb-2 mt-2 mb-0">
            Read More
          </a>
        </div>
      ))}
      </div>
      </section>
  );
};

export default Blogs;