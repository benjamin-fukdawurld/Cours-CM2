import React from "react";

export interface ImageProps {
  src: string;
  title: string;
  caption: React.ReactNode;
  style?: React.CSSProperties;
  imgStyle?: React.CSSProperties;
}

export default function Image(props: ImageProps) {
  return (
    <figure style={props.style}>
      <img style={props.imgStyle} src={props.src} alt={props.title} title={props.title} />
      <figcaption>{props.caption}</figcaption>
    </figure>
  );
}
