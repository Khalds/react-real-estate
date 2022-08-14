import Head from "next/head";
import Image from "next/image";
import AgentListHomePage from "../components/HomePage/AgentListHomePage/AgentListHomePage";
import ApartmentCardsHomePage from "../components/HomePage/ApartmentCardsHomePage/ApartmentCardsHomePage";
import CompanyInfo from "../components/HomePage/CompanyInfo/CompanyInfo";
import Header from "../components/Header/Header";
import MailForm from "../components/HomePage/MailForm/MailForm";
import PopularAreas from "../components/HomePage/PopularAreas/PopularAreas";
import SearchContent from "../components/HomePage/SearchContent/SearchContent";
import styles from "../styles/Home.module.css";
import { useSelector } from "react-redux";
import preloader from "../images/preloader.gif";
import BackToTopButton from "../components/Agent/BackToTopButton";


export default function Home() {
  const loading = useSelector((state) => state.apartmentReducer.loading);
  return (
    <>
      <SearchContent />
      <CompanyInfo />
      <PopularAreas />
      <ApartmentCardsHomePage />
      <AgentListHomePage />
      <MailForm />
      <BackToTopButton />
    </>
  );

}
