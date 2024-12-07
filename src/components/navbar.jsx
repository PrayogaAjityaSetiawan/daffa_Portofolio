import { GoArrowUpRight } from "react-icons/go";

const Navbar = () => {

  const navbars = [
    {id: 1,name: 'project'},
    {id: 2,name: 'resume', icon: <GoArrowUpRight />},
    {id: 3,name: 'about'},
  ]

  return (
    <nav>
        <div className="flex justify-between items-center py-4 px-[100px] border-b-[1px] border-b[#737373]">
            <a href="/"><span className="text-[16px] leading-6 font-bold">Daffa Naufal</span> Portfolio</a>
            <ul className="capitalize flex items-center gap-5 text-[#737373]">
              {navbars.map((navbar) => (
                <li key={navbar.id}><a className="flex items-start" href={`/${navbar.name}`}>{navbar.name}{navbar.icon}</a></li>
              ))}
                <a className="hidden md:block bg-black text-white px-3 py-[6px] rounded-md" href="/contact">Get in Touch</a>
            </ul>
        </div>
    </nav>
  )
}
export default Navbar