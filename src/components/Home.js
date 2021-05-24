import React from 'react';
import image from '../img/sharon-mccutcheon-om4O_x_qWD8-unsplash.jpg';

export default function Home () {
    return (
        <main>
            <img src={image} alt="Purple Bubbles and Liquid" className="absolute object-cover w-full h-full" />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
            <article className="prose lg:prose-xl space-y-8 space-x-7">
                <h1 className="text-6xl text-pink-100 font-bold cursive text-center leading-none lg:leading-snug home-name">
                    Hi! I'm Joanna,
                </h1> 
                <h2 className="text-6xl text-pink-100 font-bold sans-serif text-right leading-none lg:leading-snug tracking-wide">
                   a front-end web developer.
                </h2>
                </article>
            </section>
        </main>
    );
}