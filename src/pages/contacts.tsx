import MainLayout from "@/layouts/MainLayout";
import Contacts from "@/components/Contacts/Contacts";
import classNames from "classnames";
import styles from "../styles/pages/ContactsPage.module.scss";

const ContactsPage = () => {
  return (
    <MainLayout title="Контакты - «Вятский Промстройпроект»">
      <div className={classNames("baseContainer", styles.container)}>
        <Contacts />
      </div>
    </MainLayout>
  );
};
export default ContactsPage;
