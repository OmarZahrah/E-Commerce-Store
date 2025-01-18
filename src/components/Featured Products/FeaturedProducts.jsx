import { useEffect, useState } from "react";
import Card from "../Card/Card";
import axios from "axios";
import "./FeaturedProducts.scss";
import { makeRequest } from "../../utils/makeRequest";
import useFetch from "../../hooks/useFetch";
const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );
  console.log(data);
  return (
    <section className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus non
          adipisci voluptates animi labore incidunt, consectetur libero
          veritatis magni impedit.
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Something Went Wrong! "
          : loading
          ? "Loading..."
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </section>
  );
};
export default FeaturedProducts;
