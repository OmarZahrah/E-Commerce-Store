import { useState } from "react";
import List from "../../components/List/List";
import "./Products.scss";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { getImage } from "../../utils/getImage";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState("asc");
  const [selectedSbCats, setSelectedSbCats] = useState([]);
  const [openSideBar, setOpenSideBar] = useState(false);

  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${catId}`
  );
  const { data: category } = useFetch(`/categories/${catId}?populate=*`);
  console.log(category);

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    setSelectedSbCats(
      isChecked
        ? [...selectedSbCats, value]
        : selectedSbCats.filter((item) => item !== value)
    );
  };

  return (
    <section className="products">
      {loading ? (
        "Loading..."
      ) : (
        <>
          <div className="icons">
            <KeyboardDoubleArrowLeftIcon
              className={`left-icon icon ${!openSideBar ? "hide" : ""}`}
              onClick={() => setOpenSideBar(false)}
            />
            <KeyboardDoubleArrowRightIcon
              className={`right-icon icon ${openSideBar ? "hide" : ""}`}
              onClick={() => setOpenSideBar(true)}
            />
          </div>
          <div
            className={`left ${
              openSideBar ? "show-side-bar" : "hide-side-bar"
            }`}
          >
            <div className="filter-item">
              <h2>Product categories</h2>
              {data?.map((item) => (
                <div className="input-item" key={item.id}>
                  <input
                    type="checkbox"
                    id={item.id}
                    value={item.id}
                    onChange={handleChange}
                  />
                  <label htmlFor={item.id}>{item.attributes.title}</label>
                </div>
              ))}
            </div>
            <div className="filter-item">
              <h2>Filer by price</h2>
              <div className="input-item">
                <span>0</span>
                <input
                  type="range"
                  min={0}
                  max={1000}
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
                <span>{maxPrice}</span>
              </div>
            </div>
            <div className="filter-item">
              <h2>Sort by</h2>
              <div className="input-item">
                <input
                  type="radio"
                  id="asc"
                  value="asc"
                  name="price"
                  onChange={(e) => setSort("asc")}
                />
                <label htmlFor="asc">Price( Lowest first)</label>
              </div>
              <div className="input-item">
                <input
                  type="radio"
                  id="desc"
                  value="desc"
                  name="price"
                  onChange={(e) => setSort("desc")}
                />
                <label htmlFor="desc">Price( Highest first)</label>
              </div>
            </div>
          </div>
          <div className="right">
            {category?.attributes?.image && (
              <img
                className="catImg"
                // src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
                // alt=""
                src={
                  category.attributes.image
                    ? getImage(category.attributes.image.data)
                    : "https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
                }
                // alt=""}
              />
            )}
            <List
              catId={catId}
              maxPrice={maxPrice}
              sort={sort}
              subCats={selectedSbCats}
            />
          </div>
        </>
      )}
    </section>
  );
};
export default Products;
