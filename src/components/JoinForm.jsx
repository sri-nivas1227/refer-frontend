

const JoinForm = ({ handleClick}) => {
    const handleSubmit = async ()=>{

        const form = document.getElementById("form");
        const formData = new FormData(form);
        const name = formData.get("name");
        const email = formData.get("email");
        const phone = formData.get("phone");
        let referral = formData.get("referral");
        if (!name || !email || !phone) {
            alert("Please fill in all the fields");
            return;
        }
        if (referral === ""){
            referral = "Null";
        }
        const data = {
            "name" : name,
            "email" : email,
            "phone" : phone,
            "referral" : referral
        }  
        console.log(data)
        // send a get request to /api/v1/user/<phone>
        const url = `http://127.0.0.1:5000/api/v1/signup/send`;
        await fetch(url, {
            method: 'POST',
            mode : 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify({
                "phone" : phone
            })
            })
            .then(res => res.json())
            .then(response_data => {
                console.log(response_data);
                if (response_data.status == 'success') {
                    alert("Message sent successfully");
                    handleClick(data);
                }
                else {
                    alert("Message not sent");
                }
            })
            .catch(err => {
                console.log(err);
            })
    }
  return (
    <div>
       <div className="">
        {/* font color white with black shadow */}
        <div id="subtext" className=" text-center text-white">
            <p className="text-4xl font-semibold my-4">Join the program and get access to our exclusive content</p>
            <p className="text-2xl font-semibold my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, suscipit dolorem iure fuga quasi nesciunt ad accusamus aut voluptatum sit.</p>
        </div>
        <div className="m-4 flex justify-center items-center">
            <form id="form" className="w-1/3 flex flex-col justify-center items-center">
                <input type="text" name="name" id="first_name" className="text-center font-semibold bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-2xl m-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-3 " placeholder="Your Name" required />

                <input type="email" name="email" id="email" className="text-center font-semibold bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-2xl m-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-3 " placeholder="Your Email" required />

                <input type="tel" name="phone" id="phone" className="text-center font-semibold bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-2xl m-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-3 " placeholder="Your Phone Number" required />

                <div className="flex text-sm -left-1/4 relative text-gray-50 rounded-lg" role="alert">
                    <svg aria-hidden="true" className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" ></path></svg>
                    <span className="sr-only">Info</span>
                    <div>
                        <span className="font-medium">you&#39;ll receive an OTP for verification</span> 
                    </div>
                </div>

                <input type="text" name="referral" id="referral" className="text-center font-semibold bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-2xl m-2 focus:ring-blue-500 focus:border-blue-500 block w-full p-3 " placeholder="Referral Code (Optional)" />

                
                <button type="button" onClick={handleSubmit}  className="text-white bg-yellow-500 hover:text-base focus:bg-yellow-400 font-medium rounded-lg text-sm px-10 py-2.5 m-2 text-center inline-flex items-center ">
                    Join Waitlist
                    <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
            </form>
        </div>
    </div>
    </div>
  )
}

export default JoinForm
