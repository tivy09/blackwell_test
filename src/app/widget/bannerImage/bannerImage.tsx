import Image from "next/image";
import styles from "./BannerImage.module.scss";

interface BannerImageProps {
  src?: string;
  alt?: string;
  height?: number;
}

export default function BannerImage({
  src = "/assets/image/bg-2.png",
  alt = "Background Wave",
  height,
}: BannerImageProps) {
  return (
    <div className={styles.fullScreenImage}>
      <Image
        src={src}
        alt={alt}
        layout="responsive"
        width={1920}
        height={height}
        priority
      />
    </div>
  );
}