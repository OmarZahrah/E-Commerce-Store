import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import "./Product.scss";
import { useParams } from "react-router-dom";
import { getImage } from "../../utils/getImage";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImg, setSelectedImg] = useState(0);
  const catId = parseInt(useParams().id);
  const dispatch = useDispatch();

  const { data, loading, error } = useFetch(`/products/${catId}?populate=*`);
  return (
    <section className="product">
      {error ? (
        "Something Went Wrong"
      ) : loading ? (
        "Loading..."
      ) : data ? (
        <>
          <div className="left">
            <div className="images">
              {data?.attributes?.images.data.map((image, i) => (
                <img
                  src={getImage(image)}
                  key={i}
                  onClick={() => setSelectedImg(i)}
                />
              ))}
            </div>
            <div className="main-img">
              <img
                src={getImage(data?.attributes?.images.data[selectedImg])}
                alt="main image"
              />
            </div>
          </div>
          <div className="right">
            <h2>{data?.attributes?.title}</h2>
            <div className="price">
              {data?.attributes?.newPrice && (
                <span>{data?.attributes?.newPrice} EGP</span>
              )}
              <span className={data?.attributes?.newPrice ? "old-price" : ""}>
                {data?.attributes?.price} EGP
              </span>
            </div>
            <p className="description">{data.attributes?.desc}</p>
            <div className="quantity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button
              className="add"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: data.id,
                    title: data.attributes.title,
                    desc: data.attributes.desc,
                    price: data.attributes.newPrice
                      ? data.attributes.newPrice
                      : data.attributes.price,
                    image: data.attributes.images.data[0],
                    quantity,
                  })
                )
              }
            >
              <AddShoppingCartIcon /> Add To Cart
            </button>
            <div className="links">
              <div className="item">
                <FavoriteBorderIcon /> ADD TO WISH LIST
              </div>
              <div className="item">
                <BalanceIcon /> ADD TO COMPARE
              </div>
            </div>
            <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </section>
  );
};
export default Product;
