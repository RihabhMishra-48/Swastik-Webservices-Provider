const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Software build tools
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          for your Business
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Empower your creativity and bring your Business to life with our
        intuitive services. Get started today and turn your imagination
        into immersive reality!
      </p>
      <div className="flex justify-center my-10">
        {/* ✅ Open Form in New Tab */}
        <a
          href="https://forms.fillout.com/t/uGrDGsr5QLus"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md text-white"
        >
          Start for Free
        </a>

        <a
          href="/documentation"
          className="py-3 px-4 mx-3 rounded-md border text-white"
        >
          Documentation
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
