import React from 'react';
import image from '../sharon-mccutcheon-om4O_x_qWD8-unsplash.jpg'

export default function Home () {
    return (
        <main>
            <img src={image} alt="Liquid and bubbles" className="absolute object-cover w-full h-full" />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-pink-100 font-bold cursive leading-none lg:leading-snug home-name">Hi! I'm Joanna.</h1>
            </section>
        </main>
    );
}