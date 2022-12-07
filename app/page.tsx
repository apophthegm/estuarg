"use client";

import { ReactNode } from "react";
import { Header } from "@components/header";
import Hero from "@components/hero";
import { Universities } from "@components/universities";
import { Story } from "@components/story";
import { Motivate } from "@components/motivate";
import { Plans } from "@components/plans";
import { Testimonials } from "@components/testimonials";
import { Element } from "react-scroll";
import { Contact } from "@components/contact";

export default function HomePage(): ReactNode {
  return (
    <>
      <Header />
      <Element name="home" style={{ padding: "0 var(--global-padding)" }}>
        <Hero />
        <Universities />
        <Story />
        <Motivate />
      </Element>
      <Testimonials />
      <div style={{ padding: "0 var(--global-padding)" }}>
        <Plans />
      </div>
      <Contact />
    </>
  );
}
