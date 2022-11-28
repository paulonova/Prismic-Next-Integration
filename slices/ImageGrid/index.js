import React from "react";
import { PrismicRichText } from "@prismicio/react";
import styles from "./imagegrid.module.scss";
import { PrismicNextImage } from "@prismicio/next";

/**
 * @typedef {import("@prismicio/client").Content.ImageGridSlice} ImageGridSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageGridSlice>} ImageGridProps
 * @param { ImageGridProps }
 */
const ImageGrid = ({ slice }) => (
  <section className={styles.section}>
    <div className={styles.container}>
      <PrismicRichText field={slice.primary.title} />
      <PrismicRichText field={slice.primary.description} />

      {slice.items.map((item, i) => (
        <PrismicNextImage field={item.image} key={i} />
      ))}
    </div>
  </section>
);

export default ImageGrid;
