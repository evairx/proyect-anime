import style from "./css/footer.module.css";
import Link from 'next/link'


const footer = () => {
  return (
    <main>
      <footer className={style.footer}>
        <div className={style.containerfooter}>
          <div className={style.boxfooter}>
            <div className={style.terms}>
            </div>
          </div>
        </div>

        <div className={style.boxcopyright}>
          <p>
            ©2022 <Link href="/" className={style.link}><a><b>AnimePost</b></a></Link> Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default footer;
