import React from "react";
import { PrismicRichText } from "@prismicio/react";
import styles from "./heroslice.module.scss";

/**
 * @typedef {import("@prismicio/client").Content.HeroSliceSlice} HeroSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSliceSlice>} HeroSliceProps
 * @param { HeroSliceProps }
 */
const HeroSlice = ({ slice }) => (
  <section className={styles.section}>
    {/*<pre>{JSON.stringify(slice, null, 2)}</pre>*/}
    <div className={styles.container}>
      <div className={styles["text-content"]}>
        <PrismicRichText field={slice.primary.title} />
        <PrismicRichText field={slice.primary.description} />
      </div>

      <img src={slice.primary.image.url} alt={slice.primary.image.alt} />
    </div>
  </section>
);

export default HeroSlice;

// <pre>{JSON.stringify(slice, null, 2)}</pre> Shows the json file from slice
