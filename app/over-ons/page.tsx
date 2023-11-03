import Checkbox from "../Checkbox";
import Footer from "../Footer";
import Header from "../Header";

const about = () => {
  return (
    <>
      <Header option="other" />
      <section className="h-full bg-[#333541]">
        <div className="container mx-auto">
          <div className="grid grid-cols-5">
            <div></div>
            <div className="text-center mb-16 col-span-3">
              <h2 className="text-5xl font-bold mt-12">Over ons</h2>
              <p className="my-8">
                Kiest u voor kwaliteit, dan kiest u voor Kompleet
                Trap-renovatie. Wij zijn de specialist in het renoveren van
                bestaande trappen. Een trap die aansluit bij uw wensen en een
                geheel vormt met de rest van uw interieur?
              </p>
              <p className="my-8">
                <u>Geen hak- en breekwerk!</u> Wij maken gebruik maken
                overzettreden. Deze kunnen we leveren met materialen en
                uitstralingen welk overeenkomen met uw interieur. De
                mogelijkheden zijn eindeloos. Wij hebben de trap-renovatie die
                bij u past. Onze trap-renovatie specialist kan bij u langskomen
                met alle voorbeelden. Zo ziet u direct wat het beste bij uw
                interieur past.
              </p>
              <p className="my-8">
                Tijdens het vrijblijvende adviesgesprek bespreken wij uw wensen
                en de mogelijkheden. Met onze jarenlange ervaring denken wij
                graag met u mee, om zo tot de beste oplossing te komen.
              </p>
              <p className="my-8">
                Wij werken uitsluitend met de hoogste kwaliteit materialen. Wij
                bieden dan ook 12 jaar garantie op de montage en de materialen.
                Zo weet u zeker dat u zorgeloos kunt genieten van uw
                trap-renovatie. Mocht er na oplevering toch nog iets zijn, dan
                lossen we dit direct voor u op. Dat is de service waarop u kunt
                rekenen.
              </p>
              <div className="mt-24">
                <h2 className="text-3xl font-bold mt-12 mb-8">
                  Geniet van ons “Kompleet” voordeel
                </h2>
                <ul className="text-left">
                  <li className="my-2 flex">
                    <Checkbox />
                    Professioneel en ambachtelijk vakmanschap
                  </li>
                  <li className="my-2 flex">
                    <Checkbox />
                    Vaste all-in prijs (geen verrassingen achteraf)
                  </li>
                  <li className="my-2 flex">
                    <Checkbox />
                    Traprenovatie één trap in één dag klaar
                  </li>
                  <li className="my-2 flex">
                    <Checkbox />
                    Inclusief milieuvriendelijk afvoer overtollige materialen
                  </li>
                  <li className="my-2 flex">
                    <Checkbox />
                    12 jaar garantie op materiaal en montage
                  </li>
                  <li className="my-2 flex">
                    <Checkbox />
                    Gratis offerte en informatie/ een afspraak is snel gemaakt
                  </li>
                </ul>
              </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default about;
