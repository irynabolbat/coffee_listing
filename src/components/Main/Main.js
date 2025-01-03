import { useState } from "react";
import List from "../List/List";
import "./Main.scss";
import classNames from "classnames";

function Main() {
  const [productsStatus, setProductsStatus] = useState("all");

  return (
    <div className="main-wrapper">
      <div className="main-text">
        <div className="main-text-header">
          <h1 className="main-text-header--title">Our Collection</h1>
          <p className="main-text-header--description">
            Introducing our Coffee Collection, a selection of unique coffees
            from different roast types and origins, expertly roasted in small
            batches and shipped fresh weekly.
          </p>
        </div>

        <ul className="products-status">
          <li
            className={classNames("products-status-item", {
              active: productsStatus === "all",
            })}
            onClick={() => setProductsStatus("all")}
          >
            All Products
          </li>

          <li
            className={classNames("products-status-item", {
              active: productsStatus === "available",
            })}
            onClick={() => setProductsStatus("available")}
          >
            Available Now
          </li>
        </ul>
      </div>

      <List productsStatus={productsStatus} />
    </div>
  );
}

export default Main;
