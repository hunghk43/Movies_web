import { useState, useEffect } from "react";
import "./index.css";

import Header from "./components/header";
import Banner from "./components/Banner";
import MovieList from "./components/MovieList";

function App() {
  {
    /*Khai báo một useState */
  }
  const [movie, setMovie] = useState([]);
  const [movieRate, setMovieRate] = useState([]);
  {
    /*Mỗi khi muốn gọi 1 hàm để gọi API ra , mỗi khi trang ban đầu load, bỏ vào useE, mỗi khi compo render
     bị khai báo lại
    thì gọi hàm API nhiều làn, app sẽ bị chậm */
    /*
    + useEffect(() => {}, []) = chỉ chạy 1 lần khi component mount
    + useEffect(() => {}, [biến]) = chạy lại mỗi khi biến thay đổi */
  }
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
      const [res1, res2] = await Promise.all([
        fetch(url1, options),
        fetch(url2, options),
      ]);
      const data1 = await res1.json();
      const data2 = await res2.json();
      setMovie(data1.results);
      setMovieRate(data2.results);
    };
    fetchMovie();
  }, []);

  return (
    <>
      <div className=" pb-10 bg-black ">
        <Header />
        <Banner />
        <MovieList title={"PHIM HOT"} data={movie} />
        <MovieList title={"PHIM ĐỀ CỬ"} data={movieRate} />
      </div>
    </>
  );
}

export default App;
