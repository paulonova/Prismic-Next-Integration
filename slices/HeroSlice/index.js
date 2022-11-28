import React from "react";
import { PrismicRichText } from "@prismicio/react";
import styles from "./heroslice.module.scss";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicLink } from "@prismicio/react";
import Link from "next/link";
import ImageGrid from "../ImageGrid";

const HeroSlice = ({ slice }) => (
  <section className={styles.section}>
    {/*<pre>{JSON.stringify(slice, null, 2)}</pre>*/}

    <div className={styles.container}>
      <div className={styles["text-content"]}>
        <PrismicRichText field={slice.primary.title} />
        <PrismicRichText field={slice.primary.description} />
        {slice.items.map((item, i) => (
          <Link key={i} href='/about'>
            {item.cta_text}
          </Link>
        ))}
      </div>

      <PrismicNextImage field={slice.primary.image} />
    </div>
    <ImageGrid />
  </section>
);

export default HeroSlice;

// <pre>{JSON.stringify(slice, null, 2)}</pre> Shows the json file from slice

/**
 * {slice.items.map((item, i) => (
          <PrismicLink key={i} field={item.cta_link}>
            My Link
          </PrismicLink>
        ))}

         {slice.items.map((item, i) => (
          <Link key={i} href='/about'>
            {item.cta_text}
          </Link>
        ))}
 * 
 */
