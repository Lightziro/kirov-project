import styles from "./AboutPreview.module.scss";

const AboutPreview = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.text}>
          Выполняем полный комплекс проектных работ. В производстве работ
          используются новейшие прогрессивные технические решения.
        </div>
      </div>
    </div>
  );
};
export default AboutPreview;
