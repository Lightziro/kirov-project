import MainLayout from "@/layouts/MainLayout";
import ServiceList from "@/components/ServiceList/ServiceList";

const Services = () => {
  return (
    <MainLayout title="Наши услуги - «Вятский Промстройпроект»">
      <div>
        <ServiceList />
      </div>
    </MainLayout>
  );
};
export default Services;
