import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import apiFilmes from "../apiFilmes";
import { Link } from "react-router-dom";
import "./carrosel-responsividade.css";

import "./swiper.css";
import { Autoplay, Pagination, Navigation } from "swiper";

const CarroselApp = () => {
  const [filmesCarrosel1, setFilmesCarrosel1] = useState([]);
  const [filmesCarrosel2, setFilmesCarrosel2] = useState([]);
  const [filmesCarrosel3, setFilmesCarrosel3] = useState([]);
  useEffect(() => {
    async function loadApi() {
      const response = await apiFilmes.get("movie/now_playing", {
        params: {
          api_key: "cb297f4e4ceae46bb88739d7acfc4e3f",
          language: "pt-br",
          page: 1,
        },
      });

      setFilmesCarrosel1(response.data.results.slice(2,3));
      setFilmesCarrosel2(response.data.results.slice(3, 4));
      setFilmesCarrosel3(response.data.results.slice(5, 6));
    }
    loadApi();
  }, []);

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          {filmesCarrosel1.map((item) => {
            return (
              <div key={item.id}>
                <h3 className="h3-carrosel" id="h3-responsivo">
                  {item.title}
                </h3>
                <p className="overview-carrosel">
                  {item.overview.substring(0,100)}...
                </p>
                <img
                  id="id-img-carrosel"
                  src={`http://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                  alt={item.title}
                />
                <button id="btn-carrosel">
                  <Link
                    id="link-saiba-mais-carrosel"
                    to={`/saibamais/${item.id}`}
                  >
                    Saiba Mais
                  </Link>
                </button>
              </div>
            );
          })}
        </SwiperSlide>

        <SwiperSlide>
          {filmesCarrosel2.map((item) => {
            return (
              <div key={item.id}>
                <h3 className="h3-carrosel" id="h3-responsivo">{item.title}</h3>
                <p className="overview-carrosel">
                  {item.overview.substring(0,100)}...
                </p>
                <img
                  id="id-img-carrosel"
                  src={`http://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                  alt={item.title}
                />
                <button id="btn-carrosel">
                  <Link
                    id="link-saiba-mais-carrosel"
                    to={`/saibamais/${item.id}`}
                  >
                    Saiba Mais
                  </Link>
                </button>
              </div>
            );
          })}
        </SwiperSlide>
        <SwiperSlide>
          {filmesCarrosel3.map((item) => {
            return (
              <div key={item.id}>
                <h3 className="h3-carrosel" id="h3-responsivo">{item.title}</h3>
                <p className="overview-carrosel">
                  {item.overview.substring(0,100)}...
                </p>
                <img
                  id="id-img-carrosel"
                  src={`http://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                  alt={item.title}
                />
                <button id="btn-carrosel">
                  <Link
                    id="link-saiba-mais-carrosel"
                    to={`/saibamais/${item.id}`}
                  >
                    Saiba Mais
                  </Link>
                </button>
              </div>
            );
          })}
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default CarroselApp;
