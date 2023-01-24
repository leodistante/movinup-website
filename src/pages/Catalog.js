import React from "react";
import CatalogItem from "../components/CatalogItem";
import "../styles/Catalog.css"
import { CatalogList } from "../helpers/CatalogList";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Books</h1>
      <div className="menuList">
        {CatalogList.map((catalogItem, key) => {
          return (
            <CatalogItem
              key={key}
              image={catalogItem.image}
              name={catalogItem.name}
              price={catalogItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
