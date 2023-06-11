import { useState } from 'react';
import { useRef } from "react";
import Instagram from "../assets/instagram-dark.png";
import Twitter from "../assets/twitter-dark.png";
import Linkedin from "../assets/linkedin-logo-dark.png";
function Otp(props) {
  const otpField = useRef();
  const [modaldata, setModaldata] = useState(null)
  const handleSubmit = async () => {
    const name = props.data.name;
    const email = props.data.email;
    const phone = props.data.phone;
    const referred_by = props.data.referral;
    const otp = otpField.current.value;
    
    // send a POST request to /api/v1/user/<phone> to verify the OTP
    const url = `http://127.0.0.1:5000/api/v1/signup/verify`;
    const body = {
      "phone" : phone,
      "otp" : otp
    }
    await fetch(url, {
      method: "POST",
      mode : "cors",
      headers: {
        "Content-Type": "application/json"
        },        
      body: JSON.stringify(body)
    }).then(res => res.json())
    .then(async (data) => {
      if (data.status == 'success') {
        // make a POST request to /api/v1/user to save the user details to the database
        const url = `http://127.0.0.1:5000/api/v1/users/user`;
        const body = {
          "name" : name,
          "email" : email,
          "phone" : phone,
          "referred_by" : referred_by
        }
        await fetch(url, {
          method: "POST",
          mode : "cors",
          headers: {
            "Content-Type": "application/json"
            },
                    
          body: JSON.stringify(body)
        }).then(res => res.json())
        .then(user_response => {
          if (user_response.status == 'success') {
            console.log(user_response);
            setModaldata(user_response);
          } else {
            alert("Something went wrong");
          }
        

        })

      }
    })

    console.log(props.data.name);
    setModal(!modal);
  }
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal(!modal);
    console.log(modal);
    window.location.reload();
  }


  


  return (
    <div className="flex justify-center items-center text-white">
      <div className="w-1/4 flex flex-col justify-center items-center">
        <h1 className="text-center">Verify OTP</h1>
        <input type="number" ref={otpField} name="name" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-2xl m-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-3 "  pattern="\d6" placeholder="Enter OTP" required />
        
        <button type="button" onClick={handleSubmit}  className="text-white bg-yellow-500 hover:text-base focus:bg-yellow-400 font-medium rounded-lg text-sm px-10 py-2.5 m-2 text-center inline-flex items-center ">
            Submit
            <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </button>
      </div>
    {modal && 
    
      <div id="modal" className="w-screen h-screen top-0 left-0 right-0 bottom-0  fixed  ">
        <div id="overlay" className="w-screen h-screen top-0 left-0 right-0 bottom-0 bg-black opacity-50 fixed  "></div>
        <div id="content" className="absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[50%] h-[50%] bg-red-300">
          <div className="absolute top-[20%]">
            <p>Hey {modaldata.name}! you joined the Waitlist🥳 and  {modaldata.referred_by != '' ? `kudos to your friend ${modaldata.referred_by} who brought you here.`: ''}</p>
            <p>Here is your Referrl Code: {modaldata.referral_code}</p>
            Share👇🏻
            <div id="social-icons" className="w-1/4 m-auto  flex justify-between">
            <a href="https://instagram.com/sri_nivas1227" className=""><img src={Instagram} className="w-10" alt="" /></a>
            <a href="https://twitter.com/sri_nivas1227" className=""><img src={Twitter} className="w-10" alt="" /></a>
            <a href="https://linkedin.com/in/sri-nivas1227" className=""><img src={Linkedin} className="w-10" alt="" /></a>
        </div>
          </div>
          <button onClick={handleModal} className="absolute bg-gray-800 top-4 right-4 rounded-2xl p-3">CLOSE</button>
        </div>
      </div>
    }
      
    </div>
  )
}

export default Otp
