import Nav from "../../components/Nav";

export default function Header() {

  return (
    <header className="top-0 h-32 z-[1] mx-auto flex w-full items-center justify-between border-b border-Visua-Grey p-8 md:p-16">
        <h1 className='text-2xl font-semibold'>Visua</h1>
        <Nav/>
    </header>
  )
}
