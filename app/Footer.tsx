import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-300">
      <div className="grid md:grid-cols-2 grid-row-1 gap-12 md:gap-4 md:h-[150px] py-12 md:py-[64px] container mx-auto">
        <div className="md:mr-8 text-black order-2 md:order-1 md:text-left text-center">
          © 2023 Kompleet Traprenovatie
        </div>
        <div className="md:ml-8 space-x-8 text-black order-1 md:order-2 md:text-left text-center">
          <Link href="/gallery" className="text-lg">
            Gallerij
          </Link>
          <Link className="text-lg" href="/over-ons">
            Over ons
          </Link>
          <Link className="text-lg" href="/contact">
            Contact
          </Link>
          <Link
            className="inline-flex items-center justify-center px-4 py-2 text-base font-bold leading-6 text-white bg-red-700 border border-transparent rounded-full w-[200px] md:w-auto hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700"
            href="/configureer"
          >
            Configureer trap
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
