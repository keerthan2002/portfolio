import "./contact.css";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { useForm, ValidationError } from '@formspree/react'
import contactSvg from '../props/contact.svg'
import { motion } from 'framer-motion'

function Contact() {
  const [state, handleSubmit] = useForm("xyyaoogk");
  return (
    <div id="contact" className="container contact-container">
      <h1><span>Contact Me</span></h1>
      <div className="contact-form rounded-lg flex flex-col md:flex-row">
          <form onSubmit={handleSubmit} className='p-4 grid text-slate-200 w-full lg:w-96'>
            <div>
              <input className='bg-slate-600/40 my-2 rounded-md h-12 w-full border-2 px-4'
              id="name"
              type="text" 
              name="name"
              placeholder='Name'
            /></div>
            <div>
              <input className='bg-slate-600/40 my-2 rounded-md h-12 w-full border-2 px-4'
              id="email"
              type="email" 
              name="email"
              placeholder='Email'
            /></div>
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
            <div>
              <textarea className='bg-slate-600/40 my-2 rounded-md h-32 w-full border-2 px-4 pt-2'
              id="message"
              name="message"
              placeholder='Message'
            /></div>
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
            <button className='bg-gradient-to-t from-indigo-700 to-blue-500 rounded-md text-lg font-semibold active:bg-violet-900 active:scale-[0.95] transition-all duration-100' type="submit" disabled={state.submitting}>Submit</button>
          </form>
      </div>
    </div>
  );
}

export default Contact;
