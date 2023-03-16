import styles from "./Navigation.module.scss";
import Link from "next/link";
import classNames from "classnames";
import { NAVIGATION_MENU } from "@/mockups/navigation";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "@/../public/images/logo.png";
import { useState } from "react";

const Navigation = () => {
  const router = useRouter();
  const [open, setOpen] = useState(true);

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      style={{ backgroundColor: "#F0F5FB" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          <Image src={logo} alt="Логотип" width={80} height={50} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={classNames("navbar-collapse", { ["collapse"]: open })}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {NAVIGATION_MENU.map((item) => (
              <li className="nav-item">
                <Link
                  href={item.path}
                  className={classNames("nav-link", styles.menuItem, {
                    ["active"]: router.pathname === item.path,
                    [styles.active]: router.pathname === item.path,
                  })}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}
            className={styles.phone}
          >
            Тел: {process.env.NEXT_PUBLIC_PHONE_VIEW}
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
