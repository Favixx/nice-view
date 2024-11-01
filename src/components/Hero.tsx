// import Button from "@/components/Button";

const Hero = () => {
  return (
    <section className="min-w-80 h-[491px] md:h-[720px] bg-[url('../images/hero-bg-img-mobile.png')] md:bg-[url('../images/hero-bg-img-tablet.png')] xl:bg-[url('../images/hero-bg-img-desktop.png')] bg-no-repeat bg-cover pt-[15px] md:pt-[32px] pb-[60px] md:pb-[100px] px-[12px]">
      <h1 className="text-[#7E6D53] text-5xl md:text-[72px] font-normal leading-[normal] h-[72px] md:h-[108px] flex justify-center items-center md:mb-[7px] xl:mb-[8px]">
        Nice view
      </h1>
      <p className="text-[#7E6D53] text-center w-[172px] md:w-[484px] font-light leading-[normal] mx-auto h-[48px] flex justify-center items-center mb-[246px] md:mb-[383px] md:text-[24px]">
        For your comfortable life with your family
      </p>
      <button
        type="button"
        className="w-[200px] md:w-[256px] h-[50px] md:h-[54px] px-[28px] py-[14px] mx-auto bg-[#FCFCFB] rounded-2xl font-light leading-[normal] text-[20px] md:text-[24px] text-[#2D2A22] flex justify-center items-center duration-200 hover:bg-[#7E6D53] hover:text-[#FCFCFB] focus:bg-[#7E6D53] focus:text-[#FCFCFB] border-0"
      >
        Contact us
      </button>
    </section>
  );
};

export default Hero;
