"use client";
import Footer from "../Footer";
import Header from "../Header";
import { submitForm } from "./form";
import { useFormState } from "react-dom";

const initialState = {
  message: "",
};

const contact = () => {
  const [state, formAction] = useFormState(submitForm, initialState);
  return (
    <>
      <div className="min-h-screen flex flex-col bg-black text-white">
        <Header option="other" />
        <div className="flex-grow">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2">
              <div className="mx-8">
                <h2 className="text-center text-5xl font-bold mt-12">
                  Neem contact met ons op
                </h2>
                <p className="text-center my-6 md:mx-16">
                  Neem contact met ons op voor al uw vragen. Wij helpen u graag
                  bij al uw trap-renovatie vragen. Of het nu gaat om het
                  renoveren van uw oude trap of een nieuwbouw trap. Wij bieden
                  professionele en betrouwbare diensten, om uw trap om te zetten
                  in een prachtig en veilig onderdeel van uw huis.
                </p>
              </div>
              <div className="ml-4 mr-8 md:ml-0 md:mr-0">
                <form action={formAction}>
                  <div
                    className={`bg-green-100 border-l-4 border-green-500 text-green-700 p-4 ${
                      state?.message == "true" ? "" : "hidden"
                    }`}
                    role="alert"
                  >
                    <p className="font-bold">Bericht verstuurd</p>
                    <p>
                      U krijgt uiterlijk voor het einde van de volgende werkdag
                      bericht van ons.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 mt-4">
                    <div className="">
                      <input
                        type="text"
                        name="name"
                        placeholder="Naam"
                        className="relative w-full h-11 py-4 px-3 m-2 border text-black border-gray-400 hover:border-white focus-within:border-green-500 rounded-lg"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="E-mail"
                        name="email"
                        id="email"
                        className="relative w-full h-11 py-4 px-3 m-2 border text-black border-gray-400 hover:border-white focus-within:border-green-500 rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1">
                    <input
                      type="text"
                      name="phone"
                      placeholder="Telefoonnummer"
                      className="relative w-full h-11 py-4 px-3 m-2 border text-black border-gray-400 hover:border-white focus-within:border-green-500 rounded-lg"
                    />
                    <textarea
                      placeholder="Stel je vraag"
                      name="question"
                      id="question"
                      rows={3}
                      className="relative w-full h-11 py-4 px-3 m-2 border min-h-[110px] text-black border-gray-400 hover:border-white focus-within:border-green-500 rounded-lg resize"
                    ></textarea>
                  </div>
                  <div className="md:text-right md:m-2 ml-4 mt-2">
                    <button
                      className={`bg-red-700 py-2 px-8 text-lg rounded-full w-full md:w-36 hover:bg-red-600 ${
                        state?.message == "true" ? "hidden" : ""
                      }`}
                    >
                      Verstuur
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="grid grid-cols-3 mx-4 md:ml-16 mt-16">
              <div className="col-span-3 md:col-span-2 mr-2">
                <p className="mb-4">
                  <b className="text-xl">Kompleet Trap-Renovatie</b>
                </p>
                <p>Maanzaadstraat 76</p>
                <p className="mb-4">1446 ET Purmerend</p>
                <p>Telefoonummer: 06 3970 2331</p>
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
              <div className="col-span-3 md:col-span-1">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d370040.2443463447!2d4.713377625965879!3d52.461379038499445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1snl!2snl!4v1698859415563!5m2!1snl!2snl"
                  width="490"
                  height="360"
                  loading="lazy"
                  className="p-4 md:w-[490px] w-[360px]"
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
