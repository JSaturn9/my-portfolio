import React, { useEffect, useState } from 'react';
import sanityClient from '../client.js';
import image from '../img/david-clode-lmLgrnxIALI-unsplash.jpg';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source)
}

export default function About () {
    const [author, setAuthor] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "author"]{
                name,
                bio,
                "authorImage": image.asset->url
            }`)
            .then((data) => setAuthor(data[0]))
            .catch(console.error);
    }, []);

    if (!author) return <div>Loading...</div>;

    return (
        <main className="">
            <img src={image} alt="Pink Bubbles" className="absolute object-cover w-full h-full"/>
            <div className="p-10 lg:pt-48 container mx-auto relative">
                <section className="bg-indigo-900 flex rounded-lg shadow-2xl lg:flex p-20 bg-opacity-90">
                  <img src={urlFor(author.authorImage).url()} className="rounded w-32 h-32 lg:w-80 lg:h-80 mr-8" alt={author.name}/>
                  <div className="text-sm lg:text-lg flex flex-col justify-center">
                    <h1 className="cursive text-5xl md:text-6xl text-pink-400 mb-4">
                        Hey there. I'm{" "}
                        <span className="text-pink-400">{author.name}.</span>
                    </h1>
                    <div className="prose lg:prose-xl text-pink-100 leading-loose tracking-wide sans-serif">
                        <BlockContent blocks={author.bio} projectId="g6b87v7g" dataset="production" />
                    </div>  
                  </div>  
                </section>
            </div>
        </main>
    )
}