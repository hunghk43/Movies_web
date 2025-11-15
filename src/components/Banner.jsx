import IconRating from "../assets/rating.png";
import IconRatingHalf from "../assets/rating-half.png";
import BannerSmall from "../assets/banner.webp";
import IconPlay from "../assets/play-button.png";
function Banner() {
  return (
    <div className="w-full h-screen bg-banner bg-cover bg-center bg-no-repeat relative ">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-65 " />
      <div className=" p-10 w-full h-full flex items-center   justify-center space-x-8 relative z-20 ">
        <div className="flex flex-col space-y-5 items-baseline  w-[50%] ">
          <p className=" text-white  bg-gradient-to-r from-red-600 to-red-300  py-2 px-5 text-lg rounded-md text-[20px] ">
            TV Show
          </p>
          <div className="flex flex-col space-y-4 ">
            <h2 className="text-3xl text-white font-bold ">
              Predator: Badland
            </h2>
            <div className="flex items-center space-x-3 ">
              <img src={IconRating} alt="IconRating" className="h-8 w-8" />
              <img src={IconRating} alt="IconRating" className="h-8 w-8" />
              <img src={IconRating} alt="IconRating" className="h-8 w-8" />
              <img src={IconRating} alt="IconRating" className="h-8 w-8" />
              <img
                src={IconRatingHalf}
                alt="IconRatingHalf"
                className="h-8 w-8"
              />
            </div>
            <p className="text-white font-semibold text-lg ">
              In the desolate wastelands of a post-apocalyptic Earth, humanity
              struggles to survive amidst chaos, radiation, and death. But in
              the Badlands, something far deadlier hunts the last survivors —
              the Predator. When a rogue military squad is sent to investigate a
              series of brutal killings, they uncover a nightmare beyond
              comprehension: an alien hunter perfecting its craft in the ruins
              of mankind. As the line between hunter and hunted blurs, survival
              becomes the ultimate test. Predator: Badlands delivers a gripping
              fusion of sci-fi, horror, and action — where every shadow hides a
              threat, and the greatest enemy may not be from this world.
            </p>
            <div className="flex items-center space-x-6 ">
              <button className="text-white bg-black font-bold p-3 rounded-md text-lg border-2 border-transparent hover:border-red-500 transition-all duration-300 ease-in">
                <a href="https://tuhoc.cc">Chi tiết</a>
              </button>
              <button
                className="text-white bg-black font-bold p-3 rounded-md text-lg  border-2 border-transparent hover:border-red-500 duration-300 ease-out
                "
              >
                <a href="https://tuhoc.cc"> Xem Phim</a>
              </button>
            </div>
          </div>
        </div>
        <div className="w-[50%] flex   justify-center  items-center  ">
          <div className="w-[400px] h-[500px] relative group cursor-pointer  ">
            <img
              src={BannerSmall}
              alt="Banner_Small"
              className="  w-full h-full object-cover rounded-3xl   "
            />
            <div className=" absolute  h-full w-full left-0 top-0 flex items-center justify-center backdrop-blur-sm  opacity-0 group-hover:opacity-100  transition-all duration-500 ease-in-out  ">
              <a href="https://tuhoc.cc">
                <img
                  src={IconPlay}
                  alt="Icon Play "
                  className="h-16 w-16 relative z-20  "
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
