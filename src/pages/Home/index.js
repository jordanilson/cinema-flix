import React, { useEffect, useState } from "react";
import apiFilmes from "../../componets/apiFilmes";
import { Link } from "react-router-dom";
import CarroselApp from "../../componets/Carrosel-Home";
import Estrela from "./img-icon/icons8-estrela-48.png";
import "./home.css";
import "./home-responsividade.css";
const Home = () => {
  const [filmes, setFilmes] = useState([]);
  useEffect(() => {
    async function loadApi() {
      const response = await apiFilmes.get("movie/now_playing", {
        params: {
          api_key: "cb297f4e4ceae46bb88739d7acfc4e3f",
          language: "pt-br",
          page: 1,
        },
      });

      setFilmes(response.data.results.slice(0, 19));
    }
    loadApi();
  }, []);
  return (
    <main>
      <section className="section-home">
        <div className="container div-destaque-votos">
          <h2 className="h2-destaques">Filmes em destaque</h2>
          <div className="carrosel pe-4">
            <CarroselApp />
            <h2 className="h2-catalago mt-4">Catálogo</h2>
          </div>
          <div className="div-poster-saibamais">
            {filmes.map((item) => {
              return (
                <ul key={item.id}>
                  <div className="div-img-home">
                    <img
                      id="id-img-home"
                      src={`http://image.tmdb.org/t/p/original/${item.poster_path}`}
                      alt={item.title}
                    />
                  </div>
                  <div className="div-title-saiba-mais">
                    <h5 className="title-filme-home">{item.title}</h5>
                    <div className="icon-votos-btn">
                      <div className="div-btn-saiba-mais">
                        <button id="btn-saiba-mais">
                          <Link
                            id="link-saiba-mais"
                            to={`/saibamais/${item.id}`}
                          >
                            Saiba Mais
                          </Link>
                        </button>
                      </div>
                      <div className="div-estrela-votos ">
                        <img
                          id="img-estrela"
                          src={Estrela}
                          alt="icone-strela"
                        />
                        <span className="span-vote-home">
                          {item.vote_average}/10
                        </span>
                      </div>
                    </div>
                  </div>
                </ul>
              );
            })}
          </div>
        </div>
      </section>
      <footer>
        <p className="footer-home"> Desenvolvido por Jordanilson Fernando </p>
      </footer>
    </main>
  );
};

export default Home;
