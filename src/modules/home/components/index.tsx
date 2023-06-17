import Sidebar from "./sidebar";
import CustomerProfile from "./customer-profile";
import styles from "./styles.module.scss";
import { Outlet, Route, Routes } from "react-router-dom";
import CustomerProfilePlaceholder from "./customer-profile-placeholder";

const HomeElement = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={styles.title}>CubeHQ Assignment</p>
      </div>
      <div className={styles.content}>
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <Routes>
      <Route path={"/"} element={<HomeElement />}>
        <Route
          id={"customer-profile"}
          path={":customer"}
          element={<CustomerProfile />}
        />
        <Route
          id={"customer-profile-placeholder"}
          path={"*"}
          element={<CustomerProfilePlaceholder />}
        />
      </Route>
    </Routes>
  );
};

export default Home;
