import Header from "../Header";
import Footer from "../Footer";

const gallery = () => {
  return (
    <>
      <Header option="other" />
      <div className="bg-black text-white">
        <div className="container mx-auto">
          <h2 className="text-center text-5xl font-bold pt-12">
            Treed in stijl
          </h2>
          <p className="text-center my-6 text-xl">
            Onze mooiste trappen in beeld
          </p>
          <div className="grid grid-cols-1 mx-16 md:grid-cols-3 gap-8 mt-16 pb-32 md:justify-items-start justify-items-center">
            <div className="bg-sixthImage 2xl:w-[420px] 2xl:h-[640px] xl:w-[370px] xl:h-[568px] lg:w-[290px] lg:h-[455px] w-[285px] h-[455px] bg-cover bg-mbotto rounded-xl" />
            <div className="bg-secondImage 2xl:w-[420px] 2xl:h-[640px] xl:w-[370px] xl:h-[568px] lg:w-[290px] lg:h-[455px] md:w-[215px] md:h-[455px] w-[285px] h-[455px] bg-cover bg-bottom rounded-xl" />
            <div className="bg-thirdImage 2xl:w-[420px] xl:w-[370px] lg:w-[290px] md:w-[215px] sm:w-[285px] bg-cover bg-bottom md:row-span-2 rounded-xl" />
            <div className="bg-fifthImage 2xl:w-[420px]  xl:w-[370px] lg:w-[290px] md:w-[215px] xs:max-sm:w-[285px] xs:max-sm:h-[215px] bg-cover md:row-span-2 bg-bottom rounded-2xl" />
            <div className="bg-fourthImage 2xl:w-[420px] 2xl:h-[640px] xl:w-[370px] xl:h-[568px] lg:w-[290px] lg:h-[455px] md:w-[215px] md:h-[455px] w-[285px] h-[455px] bg-cover bg-bottom rounded-2xl" />
            <div className="bg-firstImage 2xl:w-[420px] 2xl:h-[640px] xl:w-[370px] xl:h-[568px] lg:w-[290px] lg:h-[455px] md:w-[215px] md:h-[455px] w-[285px] h-[455px] bg-cover bg-bottom rounded-2xl" />
            <div className="bg-seventhImage 2xl:w-[420px] 2xl:h-[640px] xl:w-[370px] xl:h-[568px] lg:w-[290px] lg:h-[455px] md:w-[215px] md:h-[455px] w-[285px] h-[455px] bg-cover bg-bottom rounded-2xl" />
            <div className="bg-eightImage 2xl:w-[420px] 2xl:h-[640px] xl:w-[370px] xl:h-[568px] lg:w-[290px] lg:h-[455px] md:w-[215px] md:h-[455px] w-[285px] h-[455px] bg-cover bg-bottom rounded-2xl" />
            <div className="bg-ninthImage 2xl:w-[420px] 2xl:h-[640px] xl:w-[370px] xl:h-[568px] lg:w-[290px] lg:h-[455px] md:w-[215px] md:h-[455px] w-[285px] h-[455px] bg-cover bg-bottom rounded-2xl" />
            <div className="bg-tenthImage 2xl:w-[420px] 2xl:h-[640px] xl:w-[370px] xl:h-[568px] lg:w-[290px] lg:h-[455px] md:w-[215px] md:h-[455px] w-[285px] h-[455px] bg-cover bg-bottom rounded-2xl" />
            <div className="bg-eleventhImage 2xl:w-[420px] 2xl:h-[640px] xl:w-[370px] xl:h-[568px] lg:w-[290px] lg:h-[455px] md:w-[215px] md:h-[455px] w-[285px] h-[455px] bg-cover bg-bottom rounded-2xl" />
            <div className="bg-twelfthImage 2xl:w-[420px] 2xl:h-[640px] xl:w-[370px] xl:h-[568px] lg:w-[290px] lg:h-[455px] md:w-[215px] md:h-[455px] w-[285px] h-[455px] bg-cover bg-bottom rounded-2xl" />
            <div className="bg-fifthImage 2xl:w-[420px] 2xl:h-[640px] xl:w-[370px] xl:h-[568px] lg:w-[290px] lg:h-[455px] md:w-[215px] md:h-[455px] w-[285px] h-[455px] bg-cover bg-bottom rounded-2xl" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default gallery;
