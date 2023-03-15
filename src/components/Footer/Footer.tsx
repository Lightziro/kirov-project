import styles from "./Footer.module.scss";
import geo from "@/../public/images/icons/geo.svg";
import Image from "next/image";
import logo from "@/../public/images/logo.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.top}>
        <div className={styles.row}>
          <Image alt="Логотип" className={styles.logo} src={logo} />
          <div className={styles.column}>
            <Link href="/works">Наши работы</Link>
            <Link href="/services">Услуги</Link>
            <Link href="/contacts">Контакты</Link>
          </div>
        </div>
        <div className={styles.mainCity}>
          <div className={styles.icon}>
            <Image src={geo} alt="Иконка геопозиции" />
          </div>
          <span>Киров</span>
        </div>
      </div>
      <hr className={styles.line} />
      <div className={styles.bottom}>
        <div className={styles.company}>
          © 2023, ООО "Вятский Промстройпроект"
        </div>
        <div className={styles.links}>
          <span>ИНН: 4345271249</span>
          <div className={styles.lineLink} />
          <span>ОГРН: 1104345001100</span>
        </div>
        <div className={styles.phone}>8 (88332) 47-24-75</div>
      </div>
    </footer>
  );
};
export default Footer;
