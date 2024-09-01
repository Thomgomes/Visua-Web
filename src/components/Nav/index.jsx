import { Menu, X } from "lucide-react";
import { useState } from "react";
import NavLinks from "../NavLinks";

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleNavBar = () => {
        setIsOpen(!isOpen)
  
    }

  return (
    <nav className="">
      <div className="hidden md:flex justify-between">
        <NavLinks/>
      </div>
      <div className="md:hidden flex justify-center">
        <button onClick={toggleNavBar}>{isOpen ? <X/> : <Menu/>}</button>
      </div>
    </nav>
  );
}
