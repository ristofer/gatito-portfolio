import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ContainerBlock({ children, ...customMeta }) {
    const router = useRouter();

    const meta = {
        title: "Cristopher Gómez - Dev",
        description: "Hola me llamo Cristopher",
        image: "/avatar.png",
        type: "website",
        ...customMeta,
    };

    return (
        <div>
            <Head>
                <title>{meta.title}</title>
                <meta name="robots" content="follow, index" />
                <meta content={meta.description} name="description" />
                <meta
                    property="og:url"
                    content={`https://gatito.codes${router.asPath}`}
                />
                <link
                    rel="canonical"
                    href={`https://gatito.codes${router.asPath}`}
                />
                <meta property="og:type" content={meta.type} />
                <meta property="og:site_name" content={"Cris - Gatito"} />
                <meta property="og:description" content={meta.description} />
                <meta property="og:title" content={meta.title} />
                <meta property="og:image" content={meta.image} />
                {meta.date && (<meta property="article:published_time" content={meta.date} />
                )}
            </Head>
            <main className="bg-red-600 dark:bg-gray-800 w-full">
                <Navbar />
                <div>{children}</div>
                <Footer/>
            </main>
        </div>
    );
}