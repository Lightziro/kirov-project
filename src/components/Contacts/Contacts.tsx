import styles from "./Contacts.module.scss";

const Contacts = () => {
  return (
    <div className={styles.container}>
      <div className="title">Наш адрес</div>
      <div className={styles.wrapper}>
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A3812e62a4db2eb363862b6bd7ac4348d37f1c9b760fd40339ccf9bb0e49b7966&amp;source=constructor"
          className={styles.map}
          frameBorder="0"
        />
        <div className={styles.infoWrapper}>
          <div className={styles.contactsText}>Наши контакты</div>
          <div className={styles.line}></div>
          <div className={styles.columns}>
            <div className={styles.columnData}>
              <div className={styles.text}>Адрес:</div>
              <div className={styles.description}>
                г. Киров, ул.Сурикова 19, оф.304
              </div>
            </div>
            <div className={styles.columnData}>
              <div className={styles.text}>ИНН/ОГРН:</div>
              <div className={styles.description}>4345271249/1104345001100</div>
            </div>
            <div className={styles.columnData}>
              <div className={styles.text}>Телефон:</div>
              <a
                href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}
                className={styles.description}
              >
                {process.env.NEXT_PUBLIC_PHONE_VIEW}
              </a>
            </div>
            <div className={styles.columnData}>
              <div className={styles.text}>Директор:</div>
              <div className={styles.description}>
                Ринькевич Надежда Андреевна
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contacts;
