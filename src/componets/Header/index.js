import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import "./header-responsividade.css";

const Header = () => {
  function hadleClickMenu() {
    const linkNav = document.querySelectorAll(".js-menu");
    linkNav.forEach((item) => {
      item.classList.toggle("ativado-link-nav");
      console.log(item);
    });
  }
  return (
    <header>
      <nav>
        <ul className="ul-nav container">
          <div className="menu-hamburger ">
            <input
              type="checkbox"
              id="checkbox-menu"
              onClick={hadleClickMenu}
            />
            <label htmlFor="checkbox-menu">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
          <li className="li-nav-home js-menu">
            <h2 id="h2-header">
              <Link id="id-link-nav" to="/">
                Cinema Flix
              </Link>
            </h2>
          </li>
          <li className="li-nav-meus-filmes js-menu">
            <h2 id="h2-header">
              {" "}
              <Link id="id-link-nav" to="/meusfilmes">
                Meus Filmes
              </Link>
            </h2>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
