import React from 'react';
import emailjs from 'emailjs-com';
import image from '../img/malcolm-lightbody-x_shYslWRes-unsplash.jpg';

export default function Contact() {

    function sendEmail(e) {
      e.preventDefault();
  
      emailjs.sendForm('service_h97e6hv', 'template_9zly852', e.target, 'user_1Kzlvpks6evBTqmdl5Diu')
        .then((result) => {
            console.log(result.text);
            
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return (
    <main>
   <img src={image} alt="Purple and Pink Bubbles with Black Outlines" className="absolute object-cover w-full h-full" />
        <section className="container mx-auto">
            <h1 className="text-7xl relative text-center cursive underline text-white p-20">Contact</h1>
       <section className="form ">
            <div className="container">
                <form onSubmit={sendEmail} className="flex items-center">
                    <div className="row pt-2 mx-auto border-2 border-white rounded bg-white bg-opacity-90 space-y-5 pt-5 pb-5 pl-3 pr-3 z-0">
                        <div className="col-8 form-group mx-auto py-2 px-3">
                            <input type="text" className="form-control text-center py-3 px-20 bg-purple-200 sans-serif" placeholder="Name" name="name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto py-2 px-3">
                            <input type="email" className="form-control text-center py-3 px-20 bg-purple-200 sans-serif" placeholder="Email Address" name="email" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto py-2 px-3">
                            <input type="text" className="form-control text-center py-3 px-20 bg-purple-200 sans-serif" placeholder="Subject" name="subject" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto py-2 px-3">
                            <textarea className="form-control text-center bg-purple-200 sans-serif pt-3" id="" cols="40" rows="8" placeholder="Message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 pb-3 pl-3 mx-auto">
                            <button type="submit" className="border-2 border-purple-300 py-2 px-3 p-4 rounded bg-purple-100 sans-serif text-pink-600 uppercase text-lg hover:bg-purple-300" value="Send Message">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
            </section>
      </section>
    </main>
    );
  }


