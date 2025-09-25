import React, {useState} from 'react'

const Navbar = () => {

  const [isClick, setisClick] = useState(false);
  
  const toggleNav = () => 
    setisClick(!isClick);
 
  return (
    <nav className="w-full bg-slate-900 px-2 pb-3">
      <div className="w-full mx-auto px-3 sm:px-4 lg:px-4">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0">
              <span className="text-xl font-bold text-gray-100">
                Baary Portfolio
              </span>
              <br />
            </div>
          </div>
          <br />
          <br />
          <div className="hidden md:block">
            <div className="ml-7 flex items-center justify-between px-3 space-x-3">
              <a href="#" className="text-gray-100 hover:bg-green-600 hover:text-gray-100 rounded-md p-3">
                Home
              </a>
              <a href="#" className="text-gray-100 hover:bg-green-600 hover:text-gray-100 rounded-md p-3">
                About
              </a>
              <a href="#" className="text-gray-100 hover:bg-green-600 hover:text-gray-100 rounded-md p-3">
                Skills
              </a>
              <a href="#" className="text-gray-100 hover:bg-green-600 hover:text-gray-100 rounded-md p-3">
                Projects
              </a>
              <a href="#" className="text-gray-100 hover:bg-green-600 hover:text-gray-100 rounded-md p-3">
                Blogs
              </a>
              <a href="#" className="text-gray-100 hover:bg-green-600 hover:text-gray-100 rounded-md p-3">
                Work Experience
              </a>
              <a href="#" className="text-gray-100 hover:bg-green-600 hover:text-gray-100 rounded-md p-3">
                Services
              </a>
              <a href="#" className="text-gray-100 hover:bg-green-600 hover:text-gray-100 rounded-md p-3">
                Contact
              </a>
              <a href="#" className="text-gray-100 hover:bg-green-600 hover:text-gray-100 rounded-md p-3">
                Footer
              </a>
            </div>
          </div>
          <div className="md:hidden flex items-center justify-between">
            <button 
            className="inline-flex items-center justify-center p-3 rounded-md text-gray-100 md:text-gray-100 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-600" 
            onClick={toggleNav}
            >
              {isClick ? (
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke-width="1.5" 
                  stroke="currentColor" 
                  class="size-6"
                >

              <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" 
                />
              </svg>
              ): (
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke-width="1.5" 
                stroke="currentColor" 
                class="size-6"
              >

              <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                d="M6 18 18 6M6 6l12 12" 
              />
              </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {
        isClick && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-2 space-y-2 sm:px-2">
              <a 
                href="#" className="text-gray-100 block text-center justify-between hover:bg-green-600 hover:text-gray-100 rounded-md p-3">
                  Home
                </a>
                <a 
                href="#" className="text-gray-100 block text-center justify-between hover:bg-green-600 hover:text-gray-100 rounded-md p-3">
                  About
                </a>
                <a 
                href="#" className="text-gray-100 block text-center justify-between hover:bg-green-600 hover:text-gray-100 rounded-md p-3">
                  Skills
                </a>
                <a 
                href="#" className="text-gray-100 block text-center justify-between hover:bg-green-600 hover:text-gray-100 rounded-md p-3">
                  Projects
                </a>
                <a 
                href="#" className="text-gray-100 block text-center justify-between hover:bg-green-600 hover:text-gray-100 rounded-md p-3">
                  Blogs
                </a>
                <a 
                href="#" className="text-gray-100 block text-center justify-between hover:bg-green-600 hover:text-gray-100 rounded-md p-3">
                  Work Experience
                </a>
                <a 
                href="#" className="text-gray-100 block text-center justify-between hover:bg-green-600 hover:text-gray-100 rounded-md p-3">
                  Services
                </a>
                <a 
                href="#" className="text-gray-100 block text-center justify-between hover:bg-green-600 hover:text-gray-100 rounded-md p-3">
                  Contact
                </a>
                <a 
                href="#" className="text-gray-100 block text-center justify-between hover:bg-green-600 hover:text-gray-100 rounded-md p-3">
                  Footer
                </a> 
            </div>
        </div>
        )
      }
    </nav>
  );
};

export default Navbar;