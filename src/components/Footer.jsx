import Instagram from "../assets/instagram-dark.png";
import Twitter from "../assets/twitter-dark.png";
import Linkedin from "../assets/linkedin-logo-dark.png";

const Footer = () => {
  return (
    <div className="">
      <div id="social-icons" className="w-1/4 m-auto  flex justify-between">
            <a href="https://instagram.com/sri_nivas1227" className=""><img src={Instagram} className="w-10" alt="" /></a>
            <a href="https://twitter.com/sri_nivas1227" className=""><img src={Twitter} className="w-10" alt="" /></a>
            <a href="https://linkedin.com/in/sri-nivas1227" className=""><img src={Linkedin} className="w-10" alt="" /></a>
        </div>
    </div>
  )
}

export default Footer
