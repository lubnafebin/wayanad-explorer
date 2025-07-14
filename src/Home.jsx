export const Home = () => {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        <img
          src="/assets/sky.PNG"
          alt=""
          className="absolute top-0 left-0 w-full h-[50%] object-cover z-10"
        />
        <img
          src="/assets/wayanad.JPG"
          alt=""
          className="absolute top-[5%] left-0 w-full h-[60%] object-cover z-20"
        />
        <img
          src="/assets/mountain-countout.JPG"
          alt=""
          className="absolute bottom-0 left-0 w-full h-[80%] object-cover z-10"
        />
        <div className="relative px-8 py-48 z-20">
          <h1 className="font-bold text-5xl text-stone-800 ">
            Explore the beauty of Wayanad
          </h1>
          <p className="text-xl mt-5 font-serif">
            discover nature,culture & calm in every every corner
          </p>
          <button className="bg-white text-green rounded-lg mt-5 pl-5 pr-5 p-1 ml-40">
            Explore
          </button>
        </div>
      </div>
    </>
  );
};
