// import Button from "@/components/Button";

const Hero = () => {
  return (
    <section className="min-w-80 h-[491px] bg-[url('../images/hero-bg-img-mobile.png')] md:bg-[url('../images/hero-bg-img-tablet.png')] xl:bg-[url('../images/hero-bg-img-desktop.png')] bg-no-repeat bg-cover pt-[15px] pb-[60px] px-[46px]">
      <h1 className="text-[#7E6D53] text-5xl font-normal leading-[normal] h-[72px] flex justify-center items-center">
        Nice view
      </h1>
      <p className="text-[#7E6D53] text-center w-[172px] font-light leading-[normal] mx-auto h-[48px] flex justify-center items-center">
        For your comfortable life with your family
      </p>
      {/* <Button type="button" className="" /> */}
    </section>
  );
};

export default Hero;
