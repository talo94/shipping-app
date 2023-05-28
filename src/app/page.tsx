"use client";
import React from "react";

import Map from "@/components/Map";
import Search from "@/components/Search";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Welcome to my Spot shipping app!</h1>
      <Search />
      <Map />
    </main>
  );
}
