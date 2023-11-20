import Image from "next/image";
import Header from "./Header";
import Footer from "./Footer";
import Checkbox from "./Checkbox";
import Reviews from "./Reviews";

export default function Home() {
  return (
    <>
      <Header option="main" />
      <section className="bg-white w-full">
        <div className="container mx-auto flex justify-center h-[350px] py-[80px]">
          <div className="">
            <h2 className="text-3xl font-extrabold text-black text-center">
              Ontdek de wereld van trappen
            </h2>
            <hr className="border-red-700 border-solid border-t-[6px] mt-6 w-48 mx-auto" />
            <p className="text-black pt-8 text-center xl:px-96 lg:px-48">
              Met gepersonaliseerde trappenrenovatieservices komen schoonheid en
              functionaliteit samen. Laat uw trap omtoveren tot een prachtig
              pronkstuk dat de aandacht trekt en uw interieur leven inblaast.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[#eaeaf2] w-full">
        <div className="grid md:grid-cols-2 grid-rows-1 gap-4 md:h-[500px] pt-12 md:py-[84px] container mx-auto">
          <div className="md:mr-8 text-left">
            <h2 className="text-3xl font-extrabold text-black">
              Ontwerp de trap van uw dromen
            </h2>
            <hr className="border-red-700 border-solid border-t-[6px] mt-6 w-48" />
            <p className="text-black pt-8">
              Ontdek de grenzeloze mogelijkheden van trappenrenovatie terwijl u
              wordt omringd door design en vakmanschap. Laat de showroom u
              inspireren en u helpen bij het visualiseren van uw ideale trap.
            </p>
          </div>
          <div className="flex md:ml-8 m-8 md:m-0 justify-center">
            <Image
              src="/Trap met verlichting en antraciete treden.png"
              alt=""
              width="600"
              height="150"
            />
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="grid md:grid-cols-2 grid-row-1 gap-4 md:h-[500px] pt-12 md:py-[84px] container mx-auto">
          <div className="flex md:mr-8 p-8 md:p-0 order-2 md:order-1 pb-12 justify-center">
            <Image
              src="/Trap met bruine treden.png"
              alt=""
              width="600"
              height="150"
            />
          </div>
          <div className="md:ml-8 order-1 md:order-2 text-left">
            <h2 className="text-3xl font-extrabold text-black">
              Betreed uw nieuwe trap
            </h2>
            <hr className="border-red-700 border-solid border-t-[6px] mt-6 w-48" />
            <p className="text-black pt-8">
              Ontdek de grenzeloze mogelijkheden van trappenrenovatie terwijl u
              wordt omringd door design en vakmanschap. Laat onze configurator u
              inspireren en u helpen bij het visualiseren van uw ideale trap.
              Ervaar de luxe materialen, voel de verfijnde afwerkingen en krijg
              persoonlijk advies.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[#333541]">
        <div className="grid md:grid-cols-2 grid-row-1 gap-4 md:h-[400px] md:py-[84px] pt-12 container mx-auto">
          <div className="md:mr-8">
            <h2 className="text-3xl font-extrabold text-white text-center">
              De compleetheid van Kompleet Traprenovatie
            </h2>
            <hr className="border-red-700 border-solid border-t-[6px] mt-6 w-48 mx-auto" />
            <p className="text-white mx-4 mb-4 pt-8 text-center">
              Ervaar de perfecte combinatie van vakmanschap, kwaliteit en
              klantgerichtheid. Met jarenlange ervaring en een ongeëvenaarde
              passie voor trappenrenovatie, is Kompleet Traprenovatie de ideale
              keuze om uw trap naar nieuwe hoogten te brengen.
            </p>
          </div>
          <div className="md:ml-8 grid grid-cols-2 gap-6 mx-4 pb-12 text-white">
            <div className="col-span-2 md:col-span-1">
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
            <div className="col-span-2 md:col-span-1">
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
      <section className="bg-white">
        <div className="flex justify-centerw-full h-[350px] py-[60px] my-8 md:my-0 container mx-auto">
          <div className="mx-4 md:mx-0">
            <h2 className="text-3xl font-extrabold text-black text-center">
              Verhalen van onze klanten
            </h2>
            <hr className="border-red-700 border-solid border-t-[6px] mt-6 w-48 mx-auto" />
            <Reviews></Reviews>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
