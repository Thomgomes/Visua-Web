// import Logo from "../../components/Logo";
import Nav from "../../components/Nav";

export default function Header() {

  return (
    <header className="top-0 h-32 z-[1] mx-auto flex w-full items-center justify-between border-b border-Visua-Grey p-8 md:p-16">
        {/* <Logo/> */}
        <Nav/>
    </header>
  )
}
