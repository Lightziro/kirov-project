import styles from "./ServiceList.module.scss";
import React, { Fragment, useState } from "react";
import ServiceItem from "@/components/ServiceList/ServiceItem/ServiceItem";
import classNames from "classnames";

const ServiceList = () => {
  const [open, setOpen] = useState(null);

  return (
    <div className={styles.container}>
      <div className="title">Мы имеем следующие Свидетельства:</div>
      <div className={styles.wrapper}>
        <div>
          <div className={styles.description}>
            1. Виды работ, которые оказывают влияние на безопасность объектов
            капитального строительства (кроме особо опасных и технически сложных
            объектов, объектов использования атомной энергии)
          </div>
          <div className={"accordion"} id="accordionExample">
            <ServiceItem title="1. Работы по подготовке схемы планировочной организации земельного участка">
              <Fragment>
                1.1. Работы по подготовке генерального плана земельного участка
                <br />
                1.2. Работы по подготовке схемы планировочной организации трассы
                линейного объекта <br />
                1.3. Работы по подготовке схемы планировочной организации полосы
                отвода линейного сооружения
              </Fragment>
            </ServiceItem>

            <ServiceItem title="2. Работы по подготовке архитектурных решений" />
            <ServiceItem title="3. Работы по подготовке конструктивных решений" />

            <ServiceItem title="4. Работы по подготовке сведений о внутреннем инженерном оборудовании, внутренних сетях инженерно-технического обеспечения, о перечне инженерно-технических мероприятий">
              <Fragment>
                4.1. Работы по подготовке проектов внутренних инженерных систем
                отопления, вентиляции, кондиционирования, противодымной
                вентиляции, теплоснабжения и холодоснабжения
                <br />
                4.2. Работы по подготовке проектов внутренних инженерных систем
                водоснабжения и канализации
                <br />
                4.5. Работы по подготовке проектов внутренних диспетчеризации,
                автоматизации и управления инженерными системами
                <br />
                4.6. Работы по подготовке проектов внутренних систем
                газоснабжения
              </Fragment>
            </ServiceItem>
            <ServiceItem title="5. Работы по подготовке сведений о наружных сетях инженерно-технического обеспечения, о перечне инженерно-технических мероприятий">
              <Fragment>
                5.1. Работы по подготовке проектов наружных сетей теплоснабжения
                и их сооружений
                <br />
                5.2. Работы по подготовке проектов наружных сетей водоснабжения
                и канализации и их сооружений
                <br />
                5.3. Работы по подготовке проектов наружных сетей
                электроснабжения до 35 кВ включительно и их сооружений
                <br />
                5.6. Работы по подготовке проектов наружных сетей слаботочных
                систем
                <br />
                5.7. Работы по подготовке проектов наружных сетей газоснабжения
                и их сооружений
              </Fragment>
            </ServiceItem>
            <ServiceItem title="6. Работы по подготовке технологических решений">
              <Fragment>
                6.1. Работы по подготовке технологических решений жилых зданий и
                их комплексов
                <br />
                6.2. Работы по подготовке технологических решений общественных
                зданий и сооружений и их комплексов
                <br /> 6.3. Работы по подготовке технологических решений
                производственных зданий и сооружений и их комплексов
                <br /> 6.4. Работы по подготовке технологических решений
                объектов транспортного назначения и их комплексов
                <br /> 6.6. Работы по подготовке технологических решений
                объектов сельскохозяйственного назначения и их комплексов
                <br /> 6.12. Работы по подготовке технологических решений
                объектов очистных сооружений и их комплексов
              </Fragment>
            </ServiceItem>
            <ServiceItem title="7. Работы по разработке специальных разделов проектной документации">
              <Fragment>
                7.1. Инженерно-технические мероприятия по гражданской обороне
                <br />
                7.2. Инженерно-технические мероприятия по предупреждению
                чрезвычайных ситуаций природного и техногенного характера
              </Fragment>
            </ServiceItem>
            <ServiceItem title="8. Работы по подготовке проектов мероприятий по охране окружающей среды" />
            <ServiceItem title="9. Работы по подготовке проектов мероприятий по обеспечению пожарной безопасности" />
            <ServiceItem title="10. Работы по подготовке проектов мероприятий по обеспечению доступа маломобильных групп населения" />
            <ServiceItem title="11. Работы по обследованию строительных конструкций зданий и сооружений" />
            <ServiceItem title="12. Работы по организации подготовки проектной документации, привлекаемым застройщиком или заказчиком на основании договора юридическим лицом или индивидуальным предпринимателем (генеральным проектировщиком)" />
          </div>
        </div>
        <div>
          <div className={styles.description}>
            2. Виды работ, которые оказывают влияние на безопасность объектов
            капитального строительства, включая особо опасные и технически
            сложные объекты капитального строительства (кроме объектов
            использования атомной энергии).
          </div>
          <div className={styles.empty}>Отсутствуют</div>
        </div>
        <div>
          <div className={styles.description}>
            3. Виды работ, которые оказывают влияние на безопасность объектов
            капитального строительства, включая особо опасные и технически
            сложные объекты капитального строительства, объекты использования
            атомной энергии.
          </div>
          <div className={styles.empty}>Отсутствуют</div>
        </div>
      </div>
    </div>
  );
};
export default ServiceList;
