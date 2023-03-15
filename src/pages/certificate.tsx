import MainLayout from "@/layouts/MainLayout";
import Image from "next/image";
import certificateTop from "@/../public/images/certificate-top.png";
import certificateBottom from "@/../public/images/certificate-bottom.png";
import classNames from "classnames";
import styles from "@/styles/pages/Certificate.module.scss";

const Certificate = () => {
  return (
    <MainLayout title="Выписка из СРО - «Вятский Промстройпроект»">
      <div className={classNames("baseContainer", styles.container)}>
        <Image
          className={styles.top}
          src={certificateTop}
          alt="Выписка из СРО 1"
        />
        <Image
          src={certificateBottom}
          className={styles.bottom}
          alt="Выписка из СРО 2"
        />
      </div>
    </MainLayout>
  );
};
export default Certificate;
