import React from "react";
import AppLayout from "../component/Layout/Layout";
import Head from "next/head";
import TopProject from "../component/Section/TopProject";
import Review from "../component/Section/Review";
import Featured from "../component/Section/Featured";
import PriceRangeSlider from "../component/Section/PriceRange";
import ContactBtn from "../component/Section/ContactBtn";
import WhyChose from "../component/Section/WhyChose";
import Faqq from "../component/Section/Faqq";
import Service from "../component/HomePage/Service";
import { HomeFaqData } from "./Data/FaqData/FaqData";
import Slider from "../component/HomePage/Slider";
import SaveTime from "../component/Section/SaveTime";
function Home() {
  return (
    <>
      <Head>
        <title>
          In Non-Fungible Token Development Services, We Are the Experts
        </title>
        <meta property="og:site_name" content="NFT CONSTRUCTER"></meta>
        <meta
          name="google-site-verification"
          content="qLqpdaJEdfR47ipB9hZYNBRaViXucx7nOp3B5VCNLb0"
        />
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://www.nftconstructer.com" />
        <link rel="canonical" href="https://nftconstructer.com/ " />
        <meta
          name="description"
          content="NFT Constructer offers highly professional website design and development service with affordable pricing specialized for NFT DeFi "
        ></meta>
        <meta
          name="og:description"
          content="NFT Constructer offers highly professional website design and development service with affordable pricing specialized for NFT DeFi "
        ></meta>
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="In Non-Fungible Token Development Services, We Are the Experts"
        />
        <meta property="og:image" content="assets/img/meta/1.jpg" />
        <meta property="image" content="assets/img/meta/1.jpg" />
        <meta
          name="keywords"
          content="Nft minting website development NFT Website Design NFT marketplace development"
        ></meta>
        <link rel="icon" type="image" href="/favicon.png"></link>

  
      </Head>
      {/* ============= Hero Section ================== */}
      <Slider />

      {/* =============service cards section ================== */}
      <SaveTime />

      {/* ===================service section ================== */}
      <Service />

      {/* ===============price range============= */}
      <PriceRangeSlider />

      {/* ================WHY CHOSE UP SECTION ================  */}
      <WhyChose alt="nft constructer" />

      {/* =====================top project===================== */}
      <TopProject alt="nft constructer" />

      {/* ===================Mentioned section ================== */}
      <Featured  alt="nft constructer"/>

      {/* =====================happy clients======================= */}
      <div className="cpy-6">
        <Review alt="nft constructer" />
      </div>

      {/* ==========================faq================== */}
      <Faqq data={HomeFaqData} alt="nft constructer" />

      {/* ===============================contact us ================ */}
      <ContactBtn alt="nft constructer" />

    </>
  );
}
Home.layout = AppLayout;

export default Home;
