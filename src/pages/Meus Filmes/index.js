import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./meus-filmes.css";
import "./meus-filmes-responsivo.css";

const MeusFilmes = () => {
  const [filmes, setFilmes] = useState([]);
  useEffect(() => {
    const filmesFavoritos = localStorage.getItem("@cinemaflix");
    setFilmes(JSON.parse(filmesFavoritos) || []);
  }, []);
  const excluirFilme = (id) => {
    const remover = filmes.filter((item) => {
      return item.id !== id;
    });
    setFilmes(remover);
    localStorage.setItem("@cinemaflix", JSON.stringify(remover));
  };
  return (
    <main>
      <section className="section-filmes-favoritos container">
        <div className="div-filme-favoritados">
          <h2 className="h2-favortitados mt-4">Favoritados</h2>
          <div className="grid-favoritos">
            {filmes.map((item) => {
              return (
                <ul className="ul-meus-filmes" key={item.id}>
                  <h3 className="h3-favortitados mt-4">{item.title}</h3>
                  <button
                    className="btn-remove-filmes"
                    onClick={() => excluirFilme(item.id)}
                  >
                    🗑️
                  </button>
                  <img
                    id="id-img-favoritados"
                    src={`http://image.tmdb.org/t/p/original/${item.poster_path}`}
                    alt={item.title}
                  />
                  <Link
                    id="link-saiba-mais-meu-filmes"
                    to={`/saibamais/${item.id}`}
                  >
                    Saiba Mais
                  </Link>
                </ul>
              );
            })}
          </div>
        </div>
      </section>
      <footer>
        <p className="footer">Desenvolvido por Jordanilson Fernando</p>
      </footer>
    </main>
  );
};

export default MeusFilmes;
