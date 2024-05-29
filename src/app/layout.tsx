"use client"
import {Poppins} from "next/font/google";
import "./globals.css";
import Providers from "@/app/providers";
import {Layout} from "antd";
import Head from 'next/head'

const poppins = Poppins({subsets: ["latin"], weight: ["300", "400", "500", "600", "700"]});

export default function RootLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <Head>
            <link rel="prefetch" href="https://github.com/siinaheidari/test/raw/main/public/assets/videos/introBull.mp4" as="video" type="video/mp4"/>
            <link rel="prefetch" href="https://github.com/siinaheidari/test/raw/main/public/assets/videos/mosa.mp4" as="video" type="video/mp4"/>
            <link rel="prefetch" href="https://github.com/siinaheidari/test/raw/main/public/assets/videos/parsafar.mp4" as="video" type="video/mp4"/>

            <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=no,user-scalable=0"/>
        </Head>
        <body className={poppins.className + " !min-h-[calc(100dvh)]"}>
        <Providers>
            <Layout className={'!min-h-[calc(100dvh)] text-white'}>
                {children}
            </Layout>
        </Providers>
        </body>
        </html>
    );
}
