import Head from "next/head";
import React from "react";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import Listproduk from "../components/Listproduk";
import { Hero } from "../components/Hero";
import { Carousel } from "../components/Carousel";
import { Features } from "../components/Features";

import Image from "next/image";
import { useState, useEffect } from "react";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>dibery.co | Leather For Use</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;500;800&family=Quicksand:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="min-h-screen font-quicksand">
        <Navbar />
        <Hero />
        <Carousel />
        <Listproduk />
        <Features />
        <Footer />
      </div>
    </>
  );
}
