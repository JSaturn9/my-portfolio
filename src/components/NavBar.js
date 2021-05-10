import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';


export default function NavBar () {
    return (
       <header className="bg-pink-600"> 
           <div className="container mx-auto flex justify-between">
               <nav className="flex">
                  <NavLink 
                  to="/" 
                  exact
                  activeClassName="text-pink-800"
                  className="inline-flex items-center py-6 px-3 mr-4 text-purple-100 hover:text-pink-800 text-4xl font-bold cursive tracking-widest"
                  >
                    Home
                  </NavLink>
                  <NavLink 
                  to="/about"
                  activeClassName="text-pink-800" 
                  className="inline-flex items-center py-3 px-3 my-6 rounded text-purple-200 hover:text-pink-800 sans-serif"
                  >
                    About Me
                  </NavLink> 
                  <NavLink 
                  to="/project"
                  activeClassName="text-pink-800" 
                  className="inline-flex items-center py-3 px-3 my-6 rounded text-purple-200 hover:text-pink-800 sans-serif" 
                  >
                    Projects
                  </NavLink>
                  <NavLink 
                  to="/post"
                  className="inline-flex items-center py-3 px-3 my-6 rounded text-purple-200 hover:text-pink-800 sans-serif"
                  activeClassName="text-pink-800"  
                  >
                    Blog Posts
                  </NavLink>   
               </nav>
               <div className="inline-flex py-3 px-3 my-6">
                <SocialIcon 
                url="https://linkedin.com/" 
                className="mr-4" 
                target="_blank" 
                fgColor="#fff" 
                style={{ height: 35, width: 35 }}
                />
                <SocialIcon 
                url="https://github.com/JSaturn9" 
                className="mr-4" 
                target="_blank" 
                fgColor="#fff" 
                style={{ height: 35, width: 35 }}
                />
                <SocialIcon 
                url="" 
                className="mr-4" 
                target="_blank" 
                fgColor="#fff" 
                style={{ height: 35, width: 35 }}
                />
                
               </div>
           </div>
       </header> 
    )
}