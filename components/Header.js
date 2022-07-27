import Image from "next/image";
import HeaderItem from "./HeaderItem";
function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 items-center h-auto">
    <Image className=""
        src="https://www.logo.wine/a/logo/Netflix/Netflix-Logo.wine.svg"
        width={175} height={50}
    />
    <div className="flex flex-grow justify-evenly max-w-2xl mt-3 whitespace-nowrap space-x-10 sm:space-x-20">
    
        <HeaderItem title='TV Shows' />
        <HeaderItem title='Movies' />
        <HeaderItem title='Recently Added' />
        <HeaderItem title='My List' />
    </div>
    
    </header>
  )
}

export default Header