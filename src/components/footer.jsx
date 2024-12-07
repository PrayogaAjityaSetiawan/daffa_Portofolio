import { useState, useEffect } from "react"

const Footer = () => {

  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  useEffect(() => {
      const year = new Date().getFullYear();
      setCurrentYear(year);
  }, []);

  const sosialMedia = ['LinkedIn', 'Instagram', 'Dribbble', 'GitHub']
  const pages = ['Project', 'About']

  return (
    <footer>
      <div  className="flex justify-between py-[60px] px-[120px] mt-[60px] border-t-[1px] border-t[#737373]">
      <div className="flex flex-col justify-between">
        <a href="/"><span className="text-[16px] leading-6 font-bold">Daffa Naufal</span> Portfolio</a>
        <span>© Copyright {currentYear} Daffa Naufal</span>
      </div>
      <div className="flex flex-col gap-4">
        <span className="font-medium">Pages</span>
        {pages.map((page) => (
          <span>{page}</span>
        ))}
      </div>
      <div className="flex flex-col gap-4">
        <span className="font-medium">Social Media</span>
        {sosialMedia.map((sosial) => (
          <span>{sosial}</span>
        ))}
      </div>
      <div className="flex flex-col gap-4">
        <span className="font-medium">Contact</span>
        <span>Email</span>
      </div>    
      </div>
    </footer>
  )
}

export default Footer