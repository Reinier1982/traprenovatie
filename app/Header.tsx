import Image from "next/image";
import Link from "next/link";

interface options {
  option: string;
}

const Header = ({ option }: options) => {
  if (option === "main") {
    return (
      <header>
        <div className="h-16 bg-[#222222]">
          <div className="container mx-auto flex justify-center md:justify-end">
            <div className="flex text-xs md:text-lg py-6 pr-2 md:p-5 space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 md:w-6 md:h-6"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              <a href="mail:info@kompleettraprenovatie.nl">
                info@kompleettraprenovatie.nl
              </a>
            </div>
            <div className="flex text-xs md:text-lg py-6 pl-2 md:p-5 space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 md:w-6 md:h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd"
                />
              </svg>
              <a href="tel:0612345678">06 - 39 70 23 31</a>
            </div>
          </div>
        </div>
        <div className="relative w-full h-full">
          <div className="absolute h-[600px] w-full bg-heroImage bg-cover bg-no-repeat z-0"></div>
          <div className="absolute h-[600px] w-full bg-black opacity-70 z-0"></div>
        </div>
        <div className="container mx-auto">
          <div className="relative h-[114px] w-full z-10 flex flex-row justify-between items-center">
            <div>
              <Link href="/">
                <Image
                  src="/logo witte letters.png"
                  alt=""
                  width="200"
                  height="50"
                  className=""
                />
              </Link>
            </div>
            <div className="hidden space-x-8 md:block">
              <Link href="/gallery" className="text-lg">
                Gallery
              </Link>
              <Link className="text-lg" href="/over-ons">
                Over ons
              </Link>
              <Link className="text-lg" href="/contact">
                Contact
              </Link>
              <Link
                className="inline-flex items-center justify-center w-full px-4 py-2 text-base font-bold leading-6 text-white bg-red-700 border border-transparent rounded-full md:w-auto hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700"
                href="/configureer"
              >
                Configureer trap
              </Link>
            </div>
            <button className="md:hidden block py-3 px-4 mx-2 rounded focus:outline-none hover-bg-gray-200 group">
              <div className="w-5 h-1 bg-white mb-1"></div>
              <div className="w-5 h-1 bg-white mb-1"></div>
              <div className="w-5 h-1 bg-white"></div>
              <div className="absolute top-0 -right-full opacity-0 h-screen w-10/12 bg-gray-800 transform group-focus:right-[-20px] group-focus:opacity-100 transition-all duration-300">
                <ul className="flex flex-col font-medium m-4">
                  <li className="mx-auto">
                    <Link href="/">
                      <Image
                        src="/logo witte letters.png"
                        alt=""
                        width="200"
                        height="50"
                        className="my-[-45px]"
                      />
                    </Link>
                  </li>
                  <li className="text-center m-1 p-2 rounded-lg hover:cursor-pointer hover:bg-gray-600">
                    <Link href="/gallery" className="text-lg">
                      Gallery
                    </Link>
                  </li>
                  <li className="text-center m-1 p-2 rounded-lg hover:cursor-pointer hover:bg-gray-600">
                    <Link className="text-lg" href="/over-ons">
                      Over ons
                    </Link>
                  </li>
                  <li className="text-center m-1 p-2 rounded-lg hover:cursor-pointer hover:bg-gray-600">
                    <Link className="text-lg" href="/contact">
                      Contact
                    </Link>
                  </li>
                  <li className="text-center m-1 hover:cursor-pointer">
                    <Link
                      className="inline-flex items-center justify-center w-full px-4 py-2 text-base font-bold leading-6 text-white bg-red-700 border border-transparent rounded-full md:w-auto hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700"
                      href="/configureer"
                    >
                      Configureer trap
                    </Link>
                  </li>
                </ul>
              </div>
            </button>
          </div>
          <div className="relative h-[482px] w-full flex flex-col">
            <h1 className="text-4xl my-8 font-extrabold text-center md:text-left md:ml-4 xl:ml-1">
              Geef uw trap een nieuwe look
            </h1>
            <p className="text-center md:w-[40%] md:text-left md:ml-4 xl:ml-1">
              Transformeer uw trap tot een meesterwerk van stijl, vakmanschap en
              tijdloze schoonheid.
            </p>
            <p className="text-center md:w-[40%] md:text-left py-4 ml-2 md:ml-4 xl:ml-1">
              Met de handige configurator kunt u eenvoudig de gewenste stijl,
              materialen en afwerkingen kiezen, zodat u direct een beeld krijgt
              van hoe uw trap eruit zal zien.
            </p>
            <div className="inline-flex space-x-8 py-8 justify-center md:justify-normal md:ml-4 xl:ml-1">
              <button className="inline-flex items-center justify-center px-4 py-2 text-base font-bold leading-6 text-white border-2 border-white rounded-full">
                Neem contact op
              </button>
              <button className="inline-flex items-center justify-center px-4 py-2 text-base font-bold leading-6 text-white bg-red-700 border border-transparent rounded-full md:w-auto hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700">
                Configureer trap
              </button>
            </div>
          </div>
        </div>
      </header>
    );
  } else if (option === "other") {
    return (
      <header>
        <div className="h-16 bg-[#222222]">
          <div className="container mx-auto flex justify-center md:justify-end">
            <div className="flex text-xs md:text-lg py-6 pr-2 md:p-5 space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 md:w-6 md:h-6"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              <a href="mail:info@kompleettraprenovatie.nl">
                info@kompleettraprenovatie.nl
              </a>
            </div>
            <div className="flex text-xs md:text-lg py-6 pl-2 md:p-5 space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 md:w-6 md:h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd"
                />
              </svg>
              <a href="tel:0612345678">06 - 39 70 23 31</a>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="relative h-[114px] w-full z-10 flex flex-row justify-between items-center">
            <div>
              <Link href="/">
                <Image
                  src="/logo witte letters.png"
                  alt=""
                  width="200"
                  height="50"
                  className=""
                />
              </Link>
            </div>
            <div className="hidden space-x-8 md:block">
              <Link href="/gallery" className="text-lg">
                Gallery
              </Link>
              <Link className="text-lg" href="/over-ons">
                Over ons
              </Link>
              <Link className="text-lg" href="/contact">
                Contact
              </Link>
              <Link
                className="inline-flex items-center justify-center w-full px-4 py-2 text-base font-bold leading-6 text-white bg-red-700 border border-transparent rounded-full md:w-auto hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700"
                href="/configureer"
              >
                Configureer trap
              </Link>
            </div>
            <button className="md:hidden block py-3 px-4 mx-2 rounded focus:outline-none hover-bg-gray-200 group">
              <div className="w-5 h-1 bg-white mb-1"></div>
              <div className="w-5 h-1 bg-white mb-1"></div>
              <div className="w-5 h-1 bg-white"></div>
              <div className="absolute top-0 -right-full opacity-0 h-screen w-10/12 bg-gray-800 transform group-focus:right-[-20px] group-focus:opacity-100 transition-all duration-300">
                <ul className="flex flex-col font-medium">
                  <li className="mx-auto">
                    <Image
                      src="/logo witte letters.png"
                      alt=""
                      width="200"
                      height="50"
                      className="my-[-45px]"
                    />
                  </li>
                  <li className="text-center m-4 hover:cursor-pointer hover:bg-gray-600">
                    <a className="text-lg">Gallery</a>
                  </li>
                  <li className="text-center m-4 hover:cursor-pointer hover:bg-gray-600">
                    <a className="text-lg">Over ons</a>
                  </li>
                  <li className="text-center m-4 hover:cursor-pointer hover:bg-gray-600">
                    <a className="text-lg">Contact</a>
                  </li>
                  <li className="text-center m-4 hover:cursor-pointer">
                    <a className="inline-flex items-center justify-center w-full px-4 py-2 text-base font-bold leading-6 text-white bg-red-700 border border-transparent rounded-full md:w-auto hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700">
                      Configureer trap
                    </a>
                  </li>
                </ul>
              </div>
            </button>
          </div>
        </div>
      </header>
    );
  }
};

export default Header;
