import React from 'react';
import { NavLink } from "react-router-dom";

export default function NavBar () {
    return (
       <header className="bg-pink-600"> 
           <div className="container mx-auto flex justify-between">
               <nav>
                  <NavLink to="/" exact>
                    Home
                  </NavLink>
                  <NavLink to="/about">
                    About Me
                  </NavLink> 
                  <NavLink to="/project">
                    Projects
                  </NavLink>
                  <NavLink to="/post">
                    Blog Posts
                  </NavLink>   
               </nav>
           </div>
       </header> 
    )
}