import Footer from "../Footer";
import Header from "../Header";

const contact = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header option="other" />
        <div className="flex-grow">
          <div className="container mx-auto">
            <div className="grid grid-cols-2">
              <div className="mx-8">
                <h2 className="text-center text-5xl font-bold mt-12">
                  Neem contact met ons op
                </h2>
                <p className="text-center my-6">
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
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default contact;
