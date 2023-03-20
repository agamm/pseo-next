"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";
import Image404 from "../../public/image-404.png";

export function TryImage({ alt, ...props }: ImageProps) {
  const [src, setSrc] = useState(props.src);

  return (
    <Image
      {...props}
      src={src}
      alt={alt}
      onError={() => setSrc(Image404.src)}
    />
  );
}
