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
      const url =
        "https://api.themoviedb.org/3/movie/popular?language=vi-VN&page=1";
      const response = await fetch(url, options);
      const data = await response.json();

      console.log(data);
    };
    fetchMovie();
  }, []);

  return (
    <>
      <div className=" pb-10 bg-black ">
        <Header />
        <Banner />
        <MovieList title={"PHIM HOT"} />
        <MovieList title={"PHIM ĐỀ CỬ"} />
      </div>
    </>
  );
}

export default App;
