import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiFilmes from "../componets/apiFilmes";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "./saiba-mais-responsivo.css";
import "./saiba-mais.css";

const SaibaMais = () => {
  const [filmes, setFilmes] = useState({});
  const { id } = useParams();
  useEffect(() => {
    async function loadApi() {
      await apiFilmes
        .get(`/movie/${id}`, {
          params: {
            api_key: "cb297f4e4ceae46bb88739d7acfc4e3f",
            language: "pt-br",
          },
        })
        .then((response) => {
          setFilmes(response.data);
          console.log(response.data);
        })
        .catch(() => {
          const divSaibaMais = document.querySelector(
            ".div-img-button-saiba-mais"
          );
          const cath = document.querySelector("#div-cath");
          divSaibaMais.style.display = "none";
          cath.style.display = "block";
        });
    }
    loadApi();
  }, [id]);
  function favoritar() {
    const filmesFavoritos = localStorage.getItem("@cinemaflix");
    let favoritado = JSON.parse(filmesFavoritos) || [];
    const contemFilme = favoritado.some(
      (favoritado) => favoritado.id === filmes.id
    );
    if (contemFilme) {
      Swal.fire({
        icon: "error",
        title: "Esse filme ja está Salvo!",
        text: "Acesse os meus filmes!",
      });
      return;
    }
    favoritado.push(filmes);
    localStorage.setItem("@cinemaflix", JSON.stringify(favoritado));
    Swal.fire("Salvo!", "Acesse os Meus Filmes!", "success");
  }
  return (
    <main>
      <section className="section-saiba-mais container">
        <div className="div-img-button-saiba-mais">
        <h1>{filmes.title}</h1>
          <div>
            <img className="img-mobile-saiba-mais"
              id="id-img-saiba-mais"
              src={`http://image.tmdb.org/t/p/original/${filmes.backdrop_path}`}
              alt={filmes.title}
            />
          </div>
          <h2 className="sinospe mt-2">Sinopse</h2>
          <p className="p-overview">{filmes.overview}</p>
          <div className="div-vote-overview">
            <div>
              <p>
                {" "}
                Média de votos: <strong>{filmes.vote_average}</strong>
              </p>
              <p>
                {" "}
                Língua original: <strong>{filmes.original_language}</strong>
              </p>
            </div>
            <div>
              <p>
                Popularidade: <strong> {filmes.popularity}</strong>
              </p>
              <p>
                {" "}
                Data de lançamento: <strong>{filmes.release_date}</strong>{" "}
              </p>
            </div>
          </div>
          <button className="btn-favoritar" onClick={favoritar}>
            Favoritar
          </button>
        </div>
        <div id="div-cath">
          <h1>Erro 404</h1>
          <h2>Filme não encotrado!</h2>
          <button className="btn-voltar-home">
            <Link id="link-voltar-home" to="/">
              Ir para Home{" "}
            </Link>
          </button>
        </div>
      </section>
      <footer>
        <p className="footer-saiba-mais">
          {" "}
          Desenvolvido por Jordanilson Fernando{" "}
        </p>
      </footer>
    </main>
  );
};

export default SaibaMais;
