import { useState, useEffect } from "react";
import Header from "../components/Header.jsx";
import Banner from "../components/Banner.jsx";
import MovieList from "../components/MovieList.jsx";
import MovieSearch from "../components/MovieSearch.jsx";

function App() {
  const [movie, setMovie] = useState([]);
  const [movieRate, setMovieRate] = useState([]);
  const [movieUpComming, setMovieUpComming] = useState([]);

  const [movieSearch, setMovieSearch] = useState([]);
  const handleSearch = async (searchValue) => {
    setMovieSearch([]);
    try {
      const url = `https://api.themoviedb.org/3/search/movie?query=${searchValue}&include_adult=false&language=en-US&page=1`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };
      const searchMovie = await fetch(url, options);
      const data = await searchMovie.json();
      setMovieSearch(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchMovie = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };
      const url1 =
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
      const url2 =
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
      const url3 =
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";

      const [res1, res2, res3] = await Promise.all([
        fetch(url1, options),
        fetch(url2, options),
        fetch(url3, options),
      ]);
      const data1 = await res1.json();
      const data2 = await res2.json();
      const data3 = await res3.json();

      setMovie(data1.results);
      setMovieRate(data2.results);
      setMovieUpComming(data3.results);
    };
    fetchMovie();
  }, []);

  return (
    <>
      <div className=" pb-5 bg-black mt-20">
        <Header onSearch={handleSearch} />
        <Banner />
        {movieSearch.length > 0 ? (
          <MovieSearch title={`KẾT QUẢ TÌM KIẾM `} data={movieSearch} />
        ) : (
          <>
            <MovieList title={"PHIM HOT"} data={movie} />
            <MovieList title={"PHIM ĐỀ CỬ"} data={movieRate} />
            <MovieList title={"PHIM SẮP CHIẾU"} data={movieUpComming} />
          </>
        )}
      </div>
    </>
  );
}

export default App;
