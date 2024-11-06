import React, { useEffect, useState } from "react";
import "./banner.css";
import MovieContent from "../components/MovieContent";
import MoiveDate from "../components/MoiveDate";
import MovieTrailer from "../components/MovieTrailer";
import MovieSwiper from "../components/MovieSwiper";

function Banner() {
  const [movies, setMovies] = useState([]);

  const fetchData = async () => {
    await fetch("http://localhost:3000/data/movieData.json")
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  //step 1 create funtion to recieve an id
  const handleSlideChange = (id) => {
    const newMovies = movies.map((movie)=>{
        movie.active = false;
        if(movie._id === id){
            movie.active = true;
        }
        return movie;
    });
    setMovies(newMovies);
  };

  return (
    <div className="banner">
      {movies &&
        movies.length > 0 &&
        movies.map((movie) => (
          <div className="movie">
            <img src={movie.bgImg} alt="Background" className={`bgImg ${movie.active ? 'active' : undefined}`} />
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <MovieContent movie={movie} />
                </div>
                <div className="col-lg-6 col-md-12">
                  <MoiveDate movie={movie} />
                  <MovieTrailer movie={movie} />
                </div>
              </div>
            </div>
          </div>
        ))}

      {movies && movies.length > 0 && (
        <MovieSwiper slides={movies} slideChange={handleSlideChange} />
      )}
    </div>
  );
}

export default Banner;
