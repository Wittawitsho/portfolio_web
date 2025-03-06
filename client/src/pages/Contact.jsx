import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { createMessage } from '../api/visitor';
const Contact = () => {
  const [form, setForm] = useState({
    name:"",
    email:"",
    message:""
})
const handleOnChange =(e)=>{
    setForm({
        ...form,
        [e.target.name]:e.target.value
        
    })
}
const handleSubmit = async (e) =>{
    e.preventDefault()
   
    console.log(form)
    try {
        const res = await createMessage(form);
        console.log(res.data)
        toast.success(res.data)
        setForm({
          name: "",
          email: "",
          message: "",
        });
    } catch(err) {
        const errMsg = err.response?.data?.message
        toast.error(errMsg)
        console.log(err)
    }
}
  return (
    <div className="bg-white w-full min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
        {/* Left Side */}
        <div className="flex flex-col justify-center items-start p-6 text-black">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 ">Let’s talk for</h1>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 ">Something special</h1>
          <p className="mb-4 text-base md:text-lg">
            If you want to contact me, you can send me a message!
          </p>
          <p className="text-lg font-bold ">Email: wittawitsho@gmail.com</p>
          <p className="text-lg font-bold ">Phone: +66 982693962</p>
        </div>
        {/* Right Side */}
        <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-6 p-6">
        
          <div className="w-full md:w-5/6">
            <label htmlFor="name" className="block text-lg font-medium mb-2">
              Your Name
            </label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleOnChange}
              className="w-full border-black border-2 p-2 rounded-md"
              placeholder="Enter your name"
            />
          </div>
    
          <div className="w-full md:w-5/6">
            <label htmlFor="email" className="block text-lg font-medium mb-2">
              Your Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleOnChange} 
              className="w-full border-black border-2 p-2 rounded-md"
              placeholder="Enter your email"
            />
          </div>

          <div className="w-full md:w-5/6">
            <label htmlFor="message" className="block text-lg font-medium mb-2">
              How can I help?
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={form.message}
              onChange={handleOnChange}
              className="w-full border-black border-2 p-2 rounded-md"
              placeholder="Describe your needs"
            />
          </div>
          
          <div className="flex justify-center items-center -mt-5 space-x-7">
          <button type="submit"  className="bg-black text-white p-2 rounded-md hover:bg-white hover:text-black hover:border-2 hover:border-black">
              Get In Touch!
            </button>
            <div className="group border-2 rounded-md border-black p-4 text-center hover:bg-black relative">
              <img
                src="https://res.cloudinary.com/dtszdlqut/image/upload/v1739989420/PortWeb/yht5dbxyrd7ua3zjeowv.png"
                className="group-hover:hidden"
                alt="github"
              />
              <img
                src="https://res.cloudinary.com/dtszdlqut/image/upload/v1739989548/PortWeb/tditrs0tsyvzeylmlzht.png"
                className="hidden group-hover:block"
                alt="github-hover"
              />
            </div>
            <div className="group border-2 rounded-md border-black p-4 text-center hover:bg-black relative">
              <img
                src="https://res.cloudinary.com/dtszdlqut/image/upload/v1739989420/PortWeb/jyon8rx57hgeiepctpro.png"
                className="group-hover:hidden"
                alt="facebook"
              />
              <img
                src="https://res.cloudinary.com/dtszdlqut/image/upload/v1739989548/PortWeb/qxlefperlixfzlbflmcr.png"
                className="hidden group-hover:block"
                alt="facebook-hover"
              />
            </div>
            <div className="group border-2 rounded-md border-black p-4 text-center hover:bg-black relative">
              <img
                src="https://res.cloudinary.com/dtszdlqut/image/upload/v1739989420/PortWeb/tmi3fqsk831lia8qnax9.png"
                className="group-hover:hidden"
                alt="line"
              />
              <img
                src="https://res.cloudinary.com/dtszdlqut/image/upload/v1739989547/PortWeb/umfywaiieaqhyl6uefe9.png"
                className="hidden group-hover:block"
                alt="line-hover"
              />
            </div>
            <div className="group border-2 rounded-md border-black p-4 text-center hover:bg-black relative">
              <img
                src="https://res.cloudinary.com/dtszdlqut/image/upload/v1739989420/PortWeb/cjwuukcgcmzv9kpqmld8.png"
                className="group-hover:hidden"
                alt="ig"
              />
              <img
                src="https://res.cloudinary.com/dtszdlqut/image/upload/v1739989547/PortWeb/ahjdp0x1jshieqapen79.png"
                className="hidden group-hover:block"
                alt="ig-hover"
              />
            </div>
            
          
          
          </div>
          </form>
      </div>
    </div>
  );
};

export default Contact;
