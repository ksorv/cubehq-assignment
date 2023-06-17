import { FC, useCallback } from "react";
import styles from "./styles.module.scss";
import { useParams } from "react-router";
import { useSearchParams } from "react-router-dom";
import useFetch from "../../../../shared/hooks/use-fetch.ts";
import { getCustomerById } from "../../../../api";
import Loader from "../../../../shared/components/loader";
import { Customer } from "../../../../shared/typings";
import RandomImage from "../../../../shared/components/random-image";

const getAddress = (address?: Customer["address"]) => {
  if (!address) {
    return "";
  }

  return `${address.street}, ${address.city}, ${address.state}, ${address.country}`;
};

const images = Array.from(
  { length: 9 },
  (_, i) => `https://picsum.photos/400?random=${i}`
);

const getCustomerData = (
  searchParams: URLSearchParams,
  data: Customer | null
) => {
  const name = searchParams.get("name") || data?.name;
  const title = searchParams.get("title") || data?.title;
  const avatar = searchParams.get("avatar") || data?.avatar;
  const address = searchParams.get("address") || getAddress(data?.address);

  return { name, title, avatar, address };
};

const CustomerProfile: FC = () => {
  const { customer } = useParams();
  const [searchParams] = useSearchParams();

  const fetcher = useCallback(async () => {
    if (!customer) {
      throw new Error("No customer id provided");
    }

    return getCustomerById(customer);
  }, [customer]);

  const { data, fetching } = useFetch(fetcher);

  const { name, title, avatar, address } = getCustomerData(searchParams, data);

  const getNextRandomImage = useCallback(() => {
    const random = Math.floor(Math.random() * 1000);

    return Promise.resolve("https://picsum.photos/400?random=" + random);
  }, []);

  return (
    <div className={styles.container}>
      {avatar && <img src={avatar} alt={name} className={styles.avatar} />}
      {name && <h2 className={styles.name}>{name}</h2>}
      {title && <h3 className={styles.title}>{title}</h3>}
      {/* using re-fetching here cause data doesn't change when customer does.. the hook leaves it upto us */}
      {fetching ? (
        <div className={styles.loaderContainer}>
          <Loader />
        </div>
      ) : (
        <>
          <p className={styles.address}>{address}</p>
          <div className={styles.imagesContainer}>
            {images.map((image, index) => (
              <RandomImage
                key={index}
                imgSrc={image}
                timer={10000}
                className={styles.image}
                loader={true}
                getNextRandomImage={getNextRandomImage}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CustomerProfile;
