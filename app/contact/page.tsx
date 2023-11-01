import Footer from "../Footer";
import Header from "../Header";

const contact = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header option="other" />
        <div className="flex-grow">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2">
              <div className="mx-8">
                <h2 className="text-center text-5xl font-bold mt-12">
                  Neem contact met ons op
                </h2>
                <p className="text-center my-6 mx-16">
                  Neem contact met ons op voor al uw vragen. Wij helpen u graag
                  bij al uw trap-renovatie vragen. Of het nu gaat om het
                  renoveren van uw oude trap of een nieuwbouw trap. Wij bieden
                  professionele en betrouwbare diensten, om uw trap om te zetten
                  in een prachtig en veilig onderdeel van uw huis.
                </p>
              </div>
              <div>
                <form>
                  <div className="grid grid-cols-2 gap-4 mt-12">
                    <div className="">
                      <input
                        type="text"
                        placeholder="Naam"
                        className="relative w-full h-14 py-4 px-3 m-2 border text-black border-gray-400 hover:border-white focus-within:border-green-500 rounded-lg"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="E-mail"
                        name="email"
                        id="email"
                        className="relative w-full h-14 py-4 px-3 m-2 border text-black border-gray-400 hover:border-white focus-within:border-green-500 rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1">
                    <input
                      type="text"
                      placeholder="Telefoonnummer"
                      className="relative w-full h-14 py-4 px-3 m-2 border text-black border-gray-400 hover:border-white focus-within:border-green-500 rounded-lg"
                    />
                    <input
                      type="number"
                      placeholder="Aantal benodigde treden"
                      name="number"
                      id="number"
                      className="relative w-full h-14 py-4 px-3 m-2 border text-black border-gray-400 hover:border-white focus-within:border-green-500 rounded-lg"
                    />
                    <textarea
                      placeholder="Stel je vraag"
                      name="question"
                      id="question"
                      rows={4}
                      className="relative w-full h-14 py-4 px-3 m-2 border min-h-[150px] text-black border-gray-400 hover:border-white focus-within:border-green-500 rounded-lg resize"
                    ></textarea>
                  </div>
                  <div className="text-right m-2">
                    <button className="bg-red-700 py-2 px-8 text-lg rounded-full">
                      Verstuur
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="grid grid-cols-3 ml-16 mt-16">
              <div className="col-span-2 mr-2">
                <p className="mb-4">
                  <b className="text-xl">Kompleet Trap-Renovatie</b>
                </p>
                <p>Maanzaadstraat 76</p>
                <p className="mb-4">1446 ET Purmerend</p>
                <p>Telefoonummer: 0299 123 456</p>
                <p>
                  E-mail:{" "}
                  <a href="mailto:info@kompleettraprenovatie.nl">
                    info@kompleettraprenovatie.nl
                  </a>
                </p>
                <p>WhatsApp: 06 3970 2331</p>
                <p className="mt-2">
                  Een bezoek brengen aan onze showroom? Dat kan! Maak een
                  afspraak met onze medewerkers en breng een bezoek aan onze
                  rijkgevulde showroom.
                </p>
                <p className="mt-16">
                  U kunt telefonisch / per mail / appen met een medewerker / met
                  ons in contact komen.
                </p>
                <p className="mt-2">
                  <b>Telefonisch</b> maandag t/m vrijdag 8:00-17:00 uur.
                  Zaterdag 8:00 - 14:00 uur.
                </p>
                <p className="mt-2">
                  <b>E-mail</b> uiterlijk de volgende werkdag reactie. Kan ook
                  via het contactformulier.
                </p>
                <p className="mt-2">
                  <b>WhatsApp</b> maandag t/m zaterdag 08:00 - 17:00 uur.
                </p>
                <p className="mt-2 mb-16">
                  <i>
                    Wij lezen en behandelen uw geappte vragen binnen 4 uur.
                    Appen buiten die tijden mag natuurlijk, het antwoord komt
                    dan de volgende werkdag.
                  </i>
                </p>
              </div>
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d370040.2443463447!2d4.713377625965879!3d52.461379038499445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1snl!2snl!4v1698859415563!5m2!1snl!2snl"
                  width="490"
                  height="360"
                  loading="lazy"
                  className="p-4"
                ></iframe>
                <p className="p-4">
                  Ons werkgebied: Noord Holland, Utrecht, Regio Almere, Regio
                  Lelystad, Regio Den Haag
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default contact;
