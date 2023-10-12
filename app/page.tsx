import Image from "next/image";

export default function Home() {
  function Checkbox() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 22 22"
        strokeWidth={2}
        stroke="currentColor"
        className="w-6 h-6 mr-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12.75l6 6 9-13.5"
        />
      </svg>
    );
  }
  return (
    <>
      <header className="container mx-auto">
        <div className="flex h-16 bg-[#222222] justify-end pr-24">
          <div className="flex text-lg p-5 space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
            <a>info@kompleettraprenovatie.nl</a>
          </div>
          <div className="flex text-lg p-5 space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                clipRule="evenodd"
              />
            </svg>
            <a>012 - 34 56 789</a>
          </div>
        </div>
        <div className="relative w-full h-full">
          <div className="absolute h-[600px] w-full bg-heroImage object-cover z-0"></div>
          <div className="absolute h-[600px] w-full bg-black opacity-70 z-0"></div>
        </div>
        <div className="relative h-[114px] w-full z-10 px-[10%] flex flex-row justify-between items-center">
          <div>
            <Image
              src="/logo witte letters.png"
              alt=""
              width="200"
              height="50"
              className=""
            />
          </div>
          <div></div>
          <div className="space-x-8">
            <button className="text-lg">Gallery</button>
            <button className="text-lg">Over ons</button>
            <button className="text-lg">Contact</button>
            <button className="inline-flex items-center justify-center w-full px-4 py-2 text-base font-bold leading-6 text-white bg-red-700 border border-transparent rounded-full md:w-auto hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700">
              Configureer trap
            </button>
          </div>
        </div>
        <div className="relative h-[482px] w-full z-10 px-[10%] flex flex-col">
          <h1 className="text-4xl my-8 font-extrabold">
            Geef uw trap een nieuwe look
          </h1>
          <p className="w-[40%]">
            Transformeer uw trap tot een meesterwerk van stijl, vakmanschap en
            tijdloze schoonheid.
          </p>
          <p className="w-[40%] py-4">
            Met de handige configurator kunt u eenvoudig de gewenste stijl,
            materialen en afwerkingen kiezen, zodat u direct een beeld krijgt
            van hoe uw trap eruit zal zien.
          </p>
          <div className="inline-flex space-x-8 py-8">
            <button className="inline-flex items-center justify-center  px-4 py-2 text-base font-bold leading-6 text-white border-2 border-white rounded-full">
              Neem contact op
            </button>
            <button className="inline-flex items-center justify-center w-full px-4 py-2 text-base font-bold leading-6 text-white bg-red-700 border border-transparent rounded-full md:w-auto hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700">
              Configureer trap
            </button>
          </div>
        </div>
      </header>
      <section className="container mx-auto">
        <div className="flex justify-center bg-white w-full h-[350px] px-[10%] py-[80px]">
          <div className="">
            <h2 className="text-3xl font-extrabold text-black text-center">
              Ontdek de wereld van trappen
            </h2>
            <hr className="border-red-700 border-solid border-t-[6px] mt-6 w-48 mx-auto" />
            <p className="text-black pt-8 text-center">
              Met gepersonaliseerde trappenrenovatieservices komen schoonheid en
              functionaliteit samen. Laat uw trap omtoveren tot een prachtig
              pronkstuk dat de aandacht trekt en uw interieur leven inblaast.
            </p>
          </div>
        </div>
      </section>
      <section className="container mx-auto">
        <div className="grid grid-cols-2 gap-4 bg-[#eaeaf2] h-[500px] px-[10%] py-[84px] ">
          <div className="mr-8">
            <h2 className="text-3xl font-extrabold text-black text-center">
              Ontwerp de trap van uw dromen
            </h2>
            <hr className="border-red-700 border-solid border-t-[6px] mt-6 w-48 mx-auto" />
            <p className="text-black pt-8 text-center">
              Ontdek de grenzeloze mogelijkheden van trappenrenovatie terwijl u
              wordt omringd door design en vakmanschap. Laat de showroom u
              inspireren en u helpen bij het visualiseren van uw ideale trap.
              Ervaar de luxe materialen, voel de verfijnde afwerkingen en krijg
              persoonlijk advies.
            </p>
          </div>
          <div className="ml-8">
            <Image
              src="/Trap met verlichting en antraciete treden.png"
              alt=""
              width="600"
              height="150"
            />
          </div>
        </div>
      </section>
      <section className="container mx-auto">
        <div className="grid grid-cols-2 gap-4 bg-white h-[500px] px-[10%] py-[84px] ">
          <div className="mr-8">
            <Image
              src="/Trap met bruine treden.png"
              alt=""
              width="600"
              height="150"
            />
          </div>
          <div className="ml-8">
            <h2 className="text-3xl font-extrabold text-black text-center">
              Treed binnen in onze showroom
            </h2>
            <hr className="border-red-700 border-solid border-t-[6px] mt-6 w-48 mx-auto" />
            <p className="text-black pt-8 text-center">
              Ontdek de grenzeloze mogelijkheden van trappenrenovatie terwijl u
              wordt omringd door design en vakmanschap. Laat de showroom u
              inspireren en u helpen bij het visualiseren van uw ideale trap.
              Ervaar de luxe materialen, voel de verfijnde afwerkingen en krijg
              persoonlijk advies.
            </p>
          </div>
        </div>
      </section>
      <section className="container mx-auto">
        <div className="grid grid-cols-2 gap-4 bg-[#333541] h-[400px] px-[10%] py-[84px] ">
          <div className="mr-8">
            <h2 className="text-3xl font-extrabold text-white text-center">
              De compleetheid van Kompleet Traprenovatie
            </h2>
            <hr className="border-red-700 border-solid border-t-[6px] mt-6 w-48 mx-auto" />
            <p className="text-white pt-8 text-center">
              Ervaar de perfecte combinatie van vakmanschap, kwaliteit en
              klantgerichtheid. Met jarenlange ervaring en een ongeëvenaarde
              passie voor trappenrenovatie, is Kompleet Traprenovatie de ideale
              keuze om uw trap naar nieuwe hoogten te brengen.
            </p>
          </div>
          <div className="ml-8 grid grid-cols-2 gap-6">
            <div>
              <span className="flex mb-6">
                <Checkbox /> Traprenovatie op maat
              </span>
              <span className="flex mb-6">
                <Checkbox /> Gratis advies aan huis
              </span>
              <span className="flex mb-6">
                <Checkbox /> Duurzame oplossingen
              </span>
              <span className="flex mb-6">
                <Checkbox /> Geen hak- en breekwerk nodig
              </span>
            </div>
            <div>
              <span className="flex mb-6">
                <Checkbox /> Zeer onderhoudsvriendelijk
              </span>
              <span className="flex mb-6">
                <Checkbox /> Geschikt voor beschadigde trappen
              </span>
              <span className="flex mb-6">
                <Checkbox /> 1 trap in 1 dag geplaatst
              </span>
              <span className="flex mb-6">
                <Checkbox /> Uiterst antislip en geluiddempend
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto">
        <div className="flex justify-center bg-white w-full h-[350px] px-[10%] py-[80px]">
          <div className="">
            <h2 className="text-3xl font-extrabold text-black text-center">
              Verhalen van onze klanten
            </h2>
            <hr className="border-red-700 border-solid border-t-[6px] mt-6 w-48 mx-auto" />
            <p className="text-black pt-8 text-center">
              Met gepersonaliseerde trappenrenovatieservices komen schoonheid en
              functionaliteit samen. Laat uw trap omtoveren tot een prachtig
              pronkstuk dat de aandacht trekt en uw interieur leven inblaast.
            </p>
          </div>
        </div>
      </section>
      <footer className="container mx-auto">
        <div className="grid grid-cols-2 gap-4 h-[200px] px-[10%] py-[84px] bg-gray-300">
          <div className="mr-8 text-black">© 2023 Kompleet Traprenovatie</div>
          <div className="ml-8">
            <div className="space-x-8 text-black">
              <button className="text-lg ">Gallery</button>
              <button className="text-lg">Over ons</button>
              <button className="text-lg">Contact</button>
              <button className="inline-flex items-center justify-center w-full px-4 py-2 text-base font-bold leading-6 text-white bg-red-700 border border-transparent rounded-full md:w-auto hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700">
                Configureer trap
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
