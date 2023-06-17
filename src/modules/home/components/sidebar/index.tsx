import styles from "./styles.module.scss";
import { FC, useCallback } from "react";
import Loader from "../../../../shared/components/loader";
import { Customer } from "../../../../shared/typings";
import usePaginatedFetcher from "../../../../shared/hooks/use-paginated-fetch.ts";
import useInfiniteScroll from "../../../../shared/hooks/use-infinite-scroll.ts";
import { getCustomersByPage } from "../../../../api";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import clsx from "clsx";

interface PaginationParams {
  page: number;
  hasMore: boolean;
}

const Sidebar: FC = () => {
  const { customer: selectedCustomerId } = useParams();

  const fetcher = useCallback(
    async (paginationParams?: PaginationParams | null) => {
      const { page = 1 } = paginationParams || {};
      const response = await getCustomersByPage(page, 20);

      return {
        data: response.data,
        paginationParams: {
          page: response.nextPage,
          hasMore: response.hasMore,
        },
      };
    },
    []
  );

  const merger = useCallback(
    (oldData: Array<Customer> | null, newData: Array<Customer>) => {
      if (!oldData) return newData;

      return [...oldData, ...newData];
    },
    []
  );

  const { data, loading, fetching, error, loadMore } = usePaginatedFetcher(
    fetcher,
    merger
  );
  const listRef = useInfiniteScroll(loadMore, 4);

  if (loading) {
    return (
      <div className={clsx(styles.container, styles.loading)}>
        <Loader text="Fetching customers..." />
      </div>
    );
  }

  if (error) {
    return <div className={clsx(styles.container, styles.error)}>{error}</div>;
  }

  return (
    <div className={styles.container} ref={listRef}>
      {data?.map((customer) => (
        <Link
          key={customer.id}
          to={`/customers/${customer.id}?name=${customer.name}&avatar=${customer.avatar}&title=${customer.title}`}
          className={clsx(
            styles.customer,
            selectedCustomerId === customer.id && styles.selected
          )}
        >
          <img
            src={customer.avatar}
            className={styles.avatar}
            alt={customer.name}
          />
          <div className={styles.customerInfo}>
            <h3 className={styles.name}>{customer.name}</h3>
            <p className={styles.title}>{customer.title}</p>
          </div>
        </Link>
      ))}
      {fetching && (
        <div className={styles.fetchingMore}>
          <Loader />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
