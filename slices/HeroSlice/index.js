import React from "react";
import { PrismicLink, PrismicRichText } from "@prismicio/react";
import styles from "./heroslice.module.scss";
import { PrismicNextImage } from "@prismicio/next";

const HeroSlice = ({ slice }) => (
  <section className={styles.section}>
    {/*<pre>{JSON.stringify(slice, null, 2)}</pre>*/}
    <div className={styles.container}>
      <div className={styles["text-content"]}>
        <PrismicRichText field={slice.primary.title} />
        <PrismicRichText field={slice.primary.description} />
      </div>
      <PrismicNextImage field={slice.primary.image} />
      {slice.items.map((item, index) => (
        <PrismicLink key={index} field={item.cta_link}>
          {item.cta_text}
        </PrismicLink>
      ))}
    </div>
  </section>
);

export default HeroSlice;

// <pre>{JSON.stringify(slice, null, 2)}</pre> Shows the json file from slice
