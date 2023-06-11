import NavBar from "./NavBar"
import Footer from "./Footer";
import JoinForm from "./JoinForm";
import { useState } from "react";
import Otp from "./Otp";
import bg from "../assets/bg/bg-img.jpg"
// we need to send the form data to the backend through an API request to /api/v1/join



const Home = () => {
    const [renderOtpPage, setRenderOtpPage] = useState(false);
    const [userData, setUserData] = useState(null)
    const handleClick = (data) => {
        console.log(data)
        setUserData(data)
        setRenderOtpPage(true)
    }
    
  return ( 
    <div className="bg-black h-screen" style={{backgroundImage: `url(${bg})`}}>
    <NavBar />
    <div className="">

    {renderOtpPage ? (<Otp data={userData}/>) : (<JoinForm handleClick={handleClick}/>)} 
    <Footer />
    </div>
    </div>
  )
}

export default Home
