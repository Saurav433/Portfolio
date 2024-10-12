import React, { useState } from 'react'

import { toast } from "react-toastify";
const Contact = () => {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorData, seterrorData] = useState({});

  const validation = () => {
    let errorData = {};
    if (!formData.name.trim()) {
      errorData.name = "Name is required.";
    }
    if (!formData.email.trim()) {
      errorData.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errorData.email = "Email is invalid.";
    }
    if (!formData.message.trim()) {
      errorData.message = "Message is required.";
    }
    return errorData;
  };

  const URL = "https://api.durlavparajuli.com.np/api/form/contact";

  const postMessage = async () => {
    try {
      const res = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        const res_data = await res.json();
        console.log(res_data);
        // toast.success("submitted");
        setformData({ name: "", email: "", message: "" });
      } else {
        // toast.error("failed");
      }
    } catch (error) {
      // toast.error("server error");
      console.log(error);
    }
  };

  function handlesubmmit(e) {
    e.preventDefault();
    const validationerror = validation();

    if (Object.keys(validationerror).length === 0) {
      console.log(formData);
      postMessage();
      toast.success("submitted");
    } else {
      console.log(validationerror);
      seterrorData(validationerror);
      toast.error("failed");
    }
  }
  const inputsubmmit = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };
  return (
    <div className='bg-[#020617] h-screen p-5'>
      <div className=' grid items-center text-center  justify-center space-y-8 pt-2 '>
        <p className='text-4xl font-bold max-w-full text-center text-blue-600'>Contact Me <span className='text-red-500 text-4xl font-Londrina'>.</span> <span className='text-yellow-500 text-4xl font-Londrina'>.</span>  <span className='text-green-700 text-4xl font-Londrina'>.</span></p>
        <p className='max-w-2xl  text-xl text-white font-light'>Let’s connect! If you have an exciting opportunity or simply want to discuss ideas, don’t hesitate to get in touch.</p>
        </div>
        {/* <div  className='bg-red-600'> */}
        <div className=" grid items-center justify-center font-poppins ">
        <div className=" lg:w-[600px] w-[390px] lg:h-max-full rounded-lg grid">
          <div className="grid p-5 lg:p-0">
            
            {/* name input */}
            <div className="h-24 ">
              <label className=" text-indigo-600 text-xl space-y-2" htmlFor="name">
                Name:
              </label>
              <input
                className="w-full h-12 p-4 rounded-md text-xl outline hover:outline-green-400 outline-2"
                type="text"
                placeholder="Your Name"
                onChange={inputsubmmit}
                name="name"
                value={formData.name}
                required
              />
              {errorData.name && (
                <p className="text-red-600 text-sm">{errorData.name}</p>
              )}
            </div>

            {/* email input */}
            <div className="h-24">
              <label className="block text-indigo-600 text-xl" htmlFor="email">
                Email:
              </label>
              <input
                className="w-full  h-12 p-4 rounded-md text-xl outline hover:outline-green-400 outline-2"
                type="email"
                placeholder="Your email"
                onChange={inputsubmmit}
                name="email"
                value={formData.email}
                required
              />
              {errorData.email && (
                <p className="text-red-600 text-sm">{errorData.email}</p>
              )}
            </div>

            {/* msg btn */}

            <div className="h-28">
              <label className="block text-indigo-500 text-xl" htmlFor="message">
                Message:
              </label>

              <textarea
                className="w-full  p-4 rounded-md text-xl outline hover:outline-green-400 outline-2"
                type="messsage"
                placeholder="Your message"
                onChange={inputsubmmit}
                name="message"
                value={formData.message}
                required
              ></textarea>

              {errorData.message && (
                <p className="text-red-600 text-sm">{errorData.message}</p>
              )}
            </div>
          </div>

          {/* submmit button */}
          <div className="flex items-center justify-center p-10 lg:p-6">
            <button
              className="bg-indigo-600 py-3 px-14  text-white hover:scale-105 transition-transform bg-gradient-to-l from-blue-600 to-cyan-500 hover:bg-gradient-to-r from-blue-600 to-cyan-500 duration-75 text-center rounded-lg text-xl font-semibold "
              onClick={handlesubmmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Contact
