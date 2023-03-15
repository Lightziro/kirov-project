import styles from "./AboutCompany.module.scss";
import Image from "next/image";
import preview from "@/../public/images/project-work.png";

const AboutCompany = () => {
  return (
    <div className={styles.container}>
      <Image
        alt="Изображение проектной работы"
        src={preview}
        className={styles.image}
      />
      <div className={styles.text}>
        ООО «Вятский Промстройпроект» имеет свидетельство о допуске к работам,
        которые оказывают влияние на безопасность объектов капитального
        строительства, всю необходимую нормативную литературу и техническую базу
        для качественного выполнения проектных работ.
      </div>
    </div>
  );
};
export default AboutCompany;
