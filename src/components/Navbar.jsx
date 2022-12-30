import { useEffect, useState } from "react";

const Navbar = () => {
  const [show, handleShow] = useState(false)

  const transitionNavbar = () => {
    if(window.scrollY > 100){
      handleShow(true)
    }else{
      handleShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', transitionNavbar)
    return () => window.removeEventListener('scroll', transitionNavbar);
  },[])

  return (
    <div className={`fixed top-0 w-[100%] p-2 h-16 z-1 transition-all ${show && "bg-[#111]"}`}>
      <div className="flex justify-between">
        <img
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="netflix_logo"
          className="fixed left-0 object-cover w-32 h-10 cursor-pointer posi"
        />

        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="background_home"
          className="fixed w-10 h-10 cursor-pointer right-5"
        />
      </div>
    </div>
  );
};

export default Navbar;
