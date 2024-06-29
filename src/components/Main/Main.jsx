import photo from "../../assets/img/snow.jpg";
import logo from  "../../assets/img/LUCAS2.png";
import style from "./Main.module.css";

function Main() {
  return (
    <>
      <div className="content">
        <img srcSet={photo} alt="background-snow" className={style.photo} />
      </div>

      <nav>
        <div className={style.container}>
            <img srcSet={logo} alt="logo" className={style.logo} />
        <div className={style.nav}>
            <ul>
                <li>Atendimento</li>
                <li>Serviços</li>
                <li>Sobre nós</li>
            </ul>
        </div>
        </div>
      </nav>
    </>
  );
}

export default Main;
