import MainLayout from "@/layouts/MainLayout";
import AboutCompany from "@/components/AboutCompany/AboutCompany";
import styles from "@/styles/pages/About.module.scss";

const About = () => {
  return (
    <MainLayout title="О компании - «Вятский Промстройпроект»">
      <div className={styles.container}>
        <AboutCompany />
      </div>
    </MainLayout>
  );
};
export default About;
