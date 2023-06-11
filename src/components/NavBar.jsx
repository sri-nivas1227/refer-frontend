

function NavBar() {
  return (  
    <div className="h-[10vh]">
        {/* Logo and About button */}
        <div className="p-2 flex justify-between items-center text-white">
            <div id="logo" className="">
                <h1 className="text-2xl font-bold">Referral Program</h1>
            </div>
            <div id="about" className="">
                <div className="p-3 rounded-2xl">About</div>
            </div>
        </div>
    </div>
  )
}

export default NavBar
