import MainLayout from "@/layouts/MainLayout";
import OurWorks from "@/components/OurWorks/OurWorks";
import Services from "@/components/Services/Services";
import AboutPreview from "@/components/AboutPreview/AboutPreview";
import Contacts from "@/components/Contacts/Contacts";
import AboutCompany from "@/components/AboutCompany/AboutCompany";

const Home = () => {
  return (
    <MainLayout title="Проектная организация - «Вятский Промстройпроект»">
      <div className="baseContainer">
        <AboutPreview />
        <AboutCompany />
        <Services />
        <OurWorks />
        <Contacts />
      </div>
    </MainLayout>
  );
};
export default Home;
