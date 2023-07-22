import { FunctionComponent } from "react";
import "./Columns.css";
const Columns: FunctionComponent = () => {
  return (
    <div className="columns">
      <div className="frame1-apresentao">
        <div className="frame1">
          <div className="eu-sou-gabriel">Eu sou Gabriel Silva</div>
          <div className="programador-front-end">Programador Front-End</div>
        </div>
        <img className="image-icon" alt="" src="/image@2x.png" />
      </div>
      <div className="frame2-about" data-scroll-to="frame2AboutContainer">
        <div className="frame2">
          <div className="sobre-mim">Sobre Mim</div>
          <div className="eu-sou-programador-container">
            <p className="eu-sou-programador">{`Eu sou programador `}Front-end</p>
          </div>
          <div className="tenho-dois-anos-container">
            <p className="eu-sou-programador">
              Tenho dois anos de front-end, comecei estudando<br/>
              por conta própria HTML + CSS + JS, algum tempo <br/>depois
              estudei frameworks como react e vue, <br/>além disso
              fiz 3 semestres de Gestão da Tecnologia<br/> Da Informação,
              entendo bastante sobre novas<br/> tecnologias.
              Além disso faço outros trabalhos<br/> freelancer por ai.
            </p>
          </div>
        </div>
        <img className="image-icon" alt="" src="/image1@2x.png" />
      </div>
      <div className="frame3-services" data-scroll-to="frame3ServicesContainer">
        <div className="frame3">
          <div className="meus-servios1">Meus Serviços</div>
          <div className="freelancer">Freelancer</div>
          <div className="trabalhos-que-eu">Trabalhos que eu faço:</div>
          <div className="webdesigner">
            <ul className="gerador-de-arte">Webdesigner</ul>
          </div>
          <div className="webdesigner">
            <ul className="gerador-de-arte">Digitador</ul>
          </div>
          <div className="webdesigner">
            <ul className="gerador-de-arte">Tradutor</ul>
          </div>
          <div className="webdesigner">
            <ul className="gerador-de-arte">Gerador de arte</ul>
          </div>
          <div className="webdesigner">
            <ul className="gerador-de-arte">SEO</ul>
          </div>
          <div className="webdesigner">
            <ul className="gerador-de-arte">Marketing</ul>
          </div>
          <div className="webdesigner">
            <ul className="gerador-de-arte">Coach</ul>
          </div>
          <div className="webdesigner">
            <ul className="gerador-de-arte">Criador De Logo ou Trends</ul>
          </div>
          <div className="webdesigner">
            <ul className="gerador-de-arte">Editor de foto ou video</ul>
          </div>
          <div className="webdesigner">
            <ul className="gerador-de-arte">Revendedor de jogos</ul>
          </div>
        </div>
        <img className="image2-icon" alt="" src="/image2@2x.png" />
      </div>
      <div className="frame4-contact" data-scroll-to="frame4ContactContainer">
        <div className="frame4">
          <div className="contato1">Contato</div>
          <div className="eu-sou-programador-container">Discord ou Whats</div>
          <div className="webdesigner">Redes sociais:</div>
          <div className="discord">
            <img className="discord-child" alt="" src="/rectangle-4@2x.png" />
            <div className="div">johnbr1</div>
          </div>
          <div className="discord">
            <img className="discord-child" alt="" src="/rectangle-3@2x.png" />
            <div className="div">+5551985308467</div>
          </div>
        </div>
        <img className="image3-icon" alt="" src="/image3@2x.png" />
      </div>
    </div>
  );
};

export default Columns;
