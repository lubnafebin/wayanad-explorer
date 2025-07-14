export const Home = () => {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        <nav className="fixed top-0 w-full z-50 bg-transparent text-white p-4 flex justify-between">
          <div className="font-bold text-xl">Wayanad</div>
          <ul className="flex gap-8">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#destinations">Destinations</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
          </ul>
        </nav>
        {/* <img
          src="/assets/sky.PNG"
          alt=""
          className="absolute top-0 left-0 w-full h-[50%] object-cover z-10"
        /> */}
        <img
          src="/assets/wayanad.jpg"
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover z-20"
        />
        {/* <img
          src="/assets/mountain-countout.JPG"
          alt=""
          className="absolute bottom-0 left-0 w-full h-[80%] object-cover z-10"
        /> */}
        <div className="relative px-10 z-20 mt-60">
          <h1 className="font-bold text-5xl text-white ">
            Explore the beauty of Wayanad
          </h1>
          <p className="text-xl mt-5 font-serif text-white">
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
