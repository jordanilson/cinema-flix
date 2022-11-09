import React from "react";
import { Link } from "react-router-dom";
import "./erro-404.css";

const Erro = () => {
  return (
    <main>
      <section className="section-erro-404">
        <div className="div-erro-404">
          <h1> Erro 404</h1>
          <h2>Pagina não encontrada</h2>
          <button className="btn-erro-404">
            {" "}
            <Link to="/" id="link-voltar-para-home"> Ir para Home</Link>
          </button>
        </div>
      </section>
      <footer>
        <p className="footer-Erro-404">Desenvolvido por Jordanilson Fernando</p>
      </footer>
    </main>
  );
};

export default Erro;
