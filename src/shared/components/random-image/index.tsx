import { FC, useCallback, useEffect, useState } from "react";
import Loader from "../loader";
import styles from "./styles.module.scss";
import clsx from "clsx";

interface RandomImageProps {
  className?: string;
  placeholder?: string;
  imgSrc: string;
  getNextRandomImage?: () => Promise<string>;
  timer?: number;
  loader?: boolean;
}

const RandomImage: FC<RandomImageProps> = ({
  className,
  timer,
  loader,
  imgSrc,
  placeholder,
  getNextRandomImage,
}) => {
  const [src, setSrc] = useState(placeholder);
  const [loading, setLoading] = useState(true);
  const [nextSrc, setNextSrc] = useState<string>(imgSrc);

  const handleImageLoad = useCallback(() => {
    setSrc(nextSrc);
    setLoading(false);
  }, [nextSrc]);

  const handleLoadNextImage = useCallback(async () => {
    if (getNextRandomImage) {
      setNextSrc(await getNextRandomImage());
    }
  }, [getNextRandomImage]);

  useEffect(() => {
    setLoading(true);
    const image = new Image();

    image.addEventListener("load", handleImageLoad);
    image.addEventListener("error", handleLoadNextImage);

    image.src = nextSrc;

    const timeout = setTimeout(() => {
      handleLoadNextImage();
    }, timer);

    return () => {
      image.removeEventListener("load", handleImageLoad);
      image.removeEventListener("error", handleLoadNextImage);
      clearTimeout(timeout);
    };
  }, [nextSrc, handleImageLoad, handleLoadNextImage, timer]);

  return loading && loader ? (
    <div className={clsx(className, styles.loader)}>
      <Loader />
    </div>
  ) : (
    <img className={className} src={src} alt="" />
  );
};

export default RandomImage;
