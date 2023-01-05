import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";

export default function Navbar() {
    const router = useRouter();
    console.log(router.asPath);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="max-w-6xl mx-auto px-8 py-6 bg-gray-800">
            <div className="flex md:flex-row justify-between items-center">
                <div className="flex flex-col">
                    <Link href="/">
                        <h1 className="font-semibold text-xl text-gray-100">
                            Cristopher Gómez
                        </h1>
                        <p className="text-base font-light text-gray-300">
                            Fullstack Dev
                        </p>
                    </Link>
                </div>
            </div>
            <div className="space-x-4 md:space-x-8 block mt-4 md:text-lg">
                <Link
                    href="/"
                    legacyBehavior
                    passHref
                    className="text-base fontnormal text-gray-300"
                >
                    <a className="text-gray-300 hover:bg-purple-500">Home</a>
                </Link>
                <Link
                    href="/projects"
                    legacyBehavior
                    className="text-base fontnormal text-gray-300"
                >
                    <a className="text-gray-300 hover:bg-purple-500">Proyectos</a>
                </Link>
                <Link
                    href="/about"
                    legacyBehavior
                    className="text-base fontnormal text-gray-300"
                >
                    <a className="text-gray-300 hover:bg-purple-500">Sobre mí</a>
                </Link>
                <Link
                    href="/contact"
                    legacyBehavior
                    className="text-base fontnormal text-gray-300"
                >
                    <a className="text-gray-300 hover:bg-purple-500">Contacto</a>
                </Link>

            </div>
        </div >
    );
}
