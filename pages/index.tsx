import Head from "next/head";
import syles from "../styles/Home.module.css";
import ContainerBlock from "../components/ContainerBlock";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import HighlightedProjects from "../components/HighlightedProjects";
import CardsTest from "../components/CardsTest";

export default function Home() {
    return (
        <ContainerBlock
            title="Cristopher"
            description="Test"
        >
            <Hero />
            <AboutMe/>
            <HighlightedProjects />
            <CardsTest
                title="Gatitolabs"
                body="hola"/>
        </ContainerBlock>
    );
}