import styles from "./Services.module.scss";
import classNames from "classnames";
import Link from "next/link";

const Services = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className="title">Наши услуги</div>
        <div className={styles.services}>
          <div className={styles.service}>
            Подготовке технологических решений
          </div>
          <div className={styles.service}>Подготовка архитектурных решений</div>
          <div className={styles.service}>
            Подготовка конструктивных решений
          </div>
          <div className={styles.service}>
            Подготовка схемы планировочной организации земельного участка
          </div>
          <div className={styles.service}>
            Разработке специальных разделов проектной документации
          </div>
          <div className={styles.service}>
            Подготовка проектов мероприятий по охране окружающей среды
          </div>
          <div className={styles.service}>
            Подготовка проектов мероприятий по обеспечению пожарной безопасности
          </div>
          <div className={styles.service}>
            Обследование строительных конструкций зданий и сооружений
          </div>
        </div>
        <Link className={classNames("baseButton", styles.btn)} href="/services">
          Смотреть все услуги
        </Link>
      </div>
    </div>
  );
};
export default Services;
