import MainLayout from "@/layouts/MainLayout";
import styles from "@/styles/pages/Works.module.scss";
import { WORKS } from "@/mockups/works";

const Works = () => {
  return (
    <MainLayout title="Наши работы - «Вятский Промстройпроект»">
      <div className="baseContainer">
        <div className={styles.container}>
          <div className={styles.text}>
            У нас в штате состоят сотрудники высокой квалификации, имеющие
            удостоверения о повышении своей профессиональной деятельности по
            разным видам работ и использующие их на практике.
          </div>
          <table className="table table-bordered border-primary">
            <thead>
              <tr>
                <th scope="col">Вид работы</th>
                <th scope="col">Площадь</th>
              </tr>
            </thead>
            <tbody>
              {WORKS.map((work) => (
                <tr>
                  <td>{work.text}</td>
                  <td>{work.count ?? "Не указано"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </MainLayout>
  );
};
export default Works;
