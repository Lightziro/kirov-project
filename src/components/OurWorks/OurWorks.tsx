import styles from "./OurWorks.module.scss";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import { WORKS } from "@/mockups/works";
import Link from "next/link";
import classNames from "classnames";

const OurWorks = () => {
  return (
    <div className={styles.container}>
      <div className="title">Наши работы</div>
      <div className={styles.wrapper}>
        <div>
          <Swiper
            navigation={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Autoplay]}
            className={styles.swiper}
          >
            {WORKS.slice(0, 5).map((work) => (
              <SwiperSlide className={styles.slideWrapper}>
                <div className={styles.text}>{work.text}</div>
                {work.count && (
                  <div className={styles.count}>Площадь: {work.count}</div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <Link className={classNames("baseButton", styles.btn)} href="/works">
          Смотреть все работы
        </Link>
      </div>
    </div>
  );
};
export default OurWorks;
