import Footer from "../Footer";
import Header from "../Header";

const contact = () => {
  return (
    <>
      <Header option="other" />
      <div className="container mx-auto flex flex-col">
        <div className="grow">
          <h2 className="text-center text-5xl font-bold mt-12">Contact</h2>
          <p className="text-center my-6">
            Neem contact met ons op voor al uw vragen. Wij helpen u graag bij al
            uw trap-renovatie vragen. Of het nu gaat om het renoveren van uw
            oude trap of een nieuwbouw trap. Wij bieden professionele en
            betrouwbare diensten, om uw trap om te zetten in een prachtig en
            veilig onderdeel van uw huis.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default contact;
