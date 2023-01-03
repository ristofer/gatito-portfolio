import Head from "next/head";
import syles from "../styles/Home.module.css";
import ContainerBlock from "../components/ContainerBlock";
import Hero from "../components/Hero";

export default function Home() {
    return (
        <ContainerBlock
            title="Cristopher"
            description="Test"
        >
            <Hero />

        </ContainerBlock>
    );
}