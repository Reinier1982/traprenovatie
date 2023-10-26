import Image from "next/image";
import Footer from "../Footer";
import Header from "../Header";

const configurator = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header option="other" />
      <section className="flex-grow">
        <div className="bg-white w-full">
          <div className="container mx-auto py-8">
            <h2 className="text-4xl text-center text-black font-bold py-8">
              Configureer uw droom trap
            </h2>
            <div className="grid grid-cols-7 border-2 border-slate-300 w-full h-[800px]">
              <div className="col-span-5">
                <Image
                  src="/trap-kaal2.png"
                  alt="trap kaal"
                  width={100}
                  height={100}
                  className="w-full max-h-[800px]"
                />
              </div>
              <div className="col-span-2 bg-slate-200">
                <div className="text-center text-lg font-bold text-black py-4">
                  Kies de trede van uw trap
                </div>
                <div className="grid grid-cols-5 gap-3 mx-8">
                  <div className="flex items-center justify-center border-transparent border-2 hover:rounded-full hover:border-gray-500">
                    <Image
                      src="/colors/kleur-eiken.png"
                      alt=""
                      width={60}
                      height={60}
                      className="rounded-full overflow-hidden w-12 h-12 m-1"
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <Image
                      src="/colors/kleur-eiken.png"
                      alt=""
                      width={60}
                      height={60}
                      className="rounded-full overflow-hidden w-12 h-12"
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <Image
                      src="/colors/kleur-eiken.png"
                      alt=""
                      width={60}
                      height={60}
                      className="rounded-full overflow-hidden w-12 h-12"
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <Image
                      src="/colors/kleur-eiken.png"
                      alt=""
                      width={60}
                      height={60}
                      className="rounded-full overflow-hidden w-12 h-12"
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <Image
                      src="/colors/kleur-eiken.png"
                      alt=""
                      width={60}
                      height={60}
                      className="rounded-full overflow-hidden w-12 h-12"
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <Image
                      src="/colors/kleur-eiken.png"
                      alt=""
                      width={60}
                      height={60}
                      className="rounded-full overflow-hidden w-12 h-12"
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <Image
                      src="/colors/kleur-eiken.png"
                      alt=""
                      width={60}
                      height={60}
                      className="rounded-full overflow-hidden w-12 h-12"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default configurator;
