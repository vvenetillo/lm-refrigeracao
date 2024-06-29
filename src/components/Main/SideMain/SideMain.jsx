
import style from "./SideMain.module.css";

function SideMain() {
  return (
    <>
      <div className={style.container}>
        <div className={style.content}>
            <div className="star">
                <img src='' alt='star photo' className={style.starphoto} />
                <p> + 5 anos no mercado</p>
            </div>
            <div className="call">
                <p> Atendimento rápido e especializado</p>
            </div>
            <div className="security">
                <p>Compromisso com a <br /> honestidade e <br />qualidade</p>
            </div>
        </div>
      </div>
    </>
  );
}

export default SideMain;
