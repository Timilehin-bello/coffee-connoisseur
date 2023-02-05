import Head from "next/head";
// import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { Banner } from "@/components/componentIndex";
import Image from "next/image";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const handleOnBannerBtnClick = () => {
    console.log("Searching..");
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseur</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {/* <div className={styles.heroContainer}> */}
        <Banner
          buttonText="View Stores Nearby"
          handleOnClick={handleOnBannerBtnClick}
        />
        {/* <div className={styles.heroImage}>
          <Image src="/static/heroImage.svg" alt="" width={400} height={400} />
        </div> */}
        {/* </div> */}
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
