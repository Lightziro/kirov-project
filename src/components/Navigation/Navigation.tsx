import styles from "./Navigation.module.scss";
import Link from "next/link";
import classNames from "classnames";
import { NAVIGATION_MENU } from "@/mockups/navigation";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "@/../public/images/logo.png";

const Navigation = () => {
  const router = useRouter();

  return (
    <div className={styles.nav}>
      <Image className={styles.logo} src={logo} alt="Логотип" />
      <div className={styles.menuWrapper}>
        {NAVIGATION_MENU.map((item) => (
          <Link
            href={item.path}
            className={classNames(styles.menuItem, {
              [styles.active]: router.pathname === item.path,
            })}
          >
            {item.label}
          </Link>
        ))}
      </div>
      <a href={`tel:${process.env.NEXT_PUBLIC_PHONE}`} className={styles.phone}>
        Тел: {process.env.NEXT_PUBLIC_PHONE_VIEW}
      </a>
    </div>
  );
};
export default Navigation;
