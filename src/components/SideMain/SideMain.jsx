import { PiStarThin } from "react-icons/pi";
import { IconContext } from "react-icons";
import { RiCustomerService2Line } from "react-icons/ri";
import { SiSpringsecurity } from "react-icons/si";

import style from "./SideMain.module.css";

function SideMain() {
  return (
    <>
      <div className={style.container}>

        <div className={style.content}>

          <IconContext.Provider value={{ className: style.ReactIcon }}>
            <div className={style.default}>
              <PiStarThin />
              <p> + 5 anos no mercado</p>
            </div>
          </IconContext.Provider>

          <IconContext.Provider value={{ className: style.ReactIcon }}>
          <div className={style.default}>
             <RiCustomerService2Line />
            <p> Atendimento rápido e  <br />especializado</p>
          </div>
          </IconContext.Provider>

          <IconContext.Provider value={{ className: style.ReactIcon }}>
          <div className={style.default}>
          <SiSpringsecurity />
            <p>
              Compromisso com a <br /> honestidade e <br />
              qualidade
            </p>
          </div>
          </IconContext.Provider>
        </div>
      </div>
    </>
  );
}

export default SideMain;
