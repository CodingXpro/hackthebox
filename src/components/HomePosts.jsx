const HomePosts = () => {
  return (
    <div className="w-full flex mt-8 space-x-4">
      {/* left */}
      <div className="md:w-[25%] h-[200px] flex justify-center items-center">
        <img
          src="https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2023/11/royal-enfield-him-e-motorbike-head.jpg?w=1500&quality=82&strip=all&ssl=1"
          alt="" className="h-full w-full object-cover"
        />
      </div>
      {/* right */}
      <div className="flex flex-col w-[65%] px-3">
        <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
          Closer look at Royal Enfield’s first electric motorcycle
        </h1>
        <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
          <p>@joeljames</p>
          <div className="flex space-x-2">
            <p>14/5/2023</p>
            <p>14:45</p>
          </div>
        </div>
        {/* Description */}
        <p className="text-sm md:text-lg">
          Royal Enfield has just revealed its first-ever electric motorcycle,
          known as the Him-E.
        </p>
      </div>
    </div>
  );
};

export default HomePosts;
