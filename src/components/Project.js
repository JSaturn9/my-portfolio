import React, { useState, useEffect } from 'react';
import sanityClient from "../client.js";
import image from '../img/julian-hochgesang-39BKKhuy11k-unsplash.jpg';

export default function Project () {
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient
        .fetch(`*[_type == "project"]{
            title,
            date,
            place,
            description,
            projectType,
            link,
            tags


        }`)
        .then((data) => setProjectData(data))
        .catch(console.error);
    }, []);
    
    return (
        <main>
            <img src={image} alt="Bubbles Against a Mixed Blue and Pink Background" className="absolute object-cover w-full h-screen" />
            <section className="container mx-auto">
                <h1 className="text-7xl relative text-center cursive underline text-white p-20">
                   Projects
                </h1>
                <section className="grid grid-cols-2 gap-10 p-12">
                    {projectData && projectData.map((project, index)=> (
                    <article className="relative rounded-lg shadow-xl bg-pink-100 bg-opacity-80 p-12">
                      <h3 className="text-pink-600 text-3xl font-bold sans-serif mb-2 hover:text-pink-500">
                          <a
                            href={project.link}
                            alt={project.title}
                            target="_blank"
                            rel="noopener noreferrer"
                          >{project.title}</a>
                      </h3>
                        <div className="text-indigo-900 sans-serif text-xs space-x-4">
                          <span>
                              <strong className="font-bold">
                                  Finished on
                                  </strong>
                                  :{" "}
                              {new Date(project.date).toLocaleDateString()}
                          </span>
                          <span>
                              <strong className="font-bold">
                                  Company
                              </strong>
                              :{" "}
                              {project.place}
                          </span>
                          <span>
                              <strong className="font-bold">
                                  Type
                              </strong>
                              :{" "}
                              {project.projectType}
                          </span>
                          <p className="my-6 text-lg text-indigo-900 leading-relaxed">
                              {project.description}
                          </p>
                            <a href={project.link} 
                            rel="noopener noreferrer" 
                            target="_blank" 
                            className="text-pink-600 font-bold hover:underline hover:text-indigo-400 text-xl">
                                View the project{" "}
                                <span role="img" aria-label="right pointer">
                                    👉
                                </span>
                            </a>      
                        </div>
                    </article>
                    ))}
                </section>
            </section>
        </main>
    )
}