import React, { Fragment } from "react";
import Head from "next/head";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";

interface MainLayout {
  children?: React.ReactNode;
  title: string;
}
const MainLayout: React.FC<MainLayout> = ({ children, title }) => {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      {children}
      <Footer />
    </Fragment>
  );
};
export default MainLayout;