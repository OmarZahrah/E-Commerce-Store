import { Link } from "react-router-dom";

import "./Card.scss";
import { getImage } from "../../utils/getImage";

const Card = ({ item }) => {
  const { title, desc, isNew, price, newPrice } = item.attributes;
  const images = item.attributes.images.data;
  console.log("images", images);

  return (
    <div className="card">
      <Link className="link" to={`/product/${item.id}`}>
        {isNew && <span className="new">New Season</span>}
        <div className="images">
          <img
            src={getImage(images[0] || "")}
            alt="image"
            className="main-img"
          />
          {images[1] && (
            <img
              src={getImage(images[1] || "")}
              alt="image"
              className="second-img"
            />
          )}
        </div>
        <h2>{title}</h2>
        <div className="prices">
          <span className={newPrice ? "old-price" : "price"}>{price} EGP</span>
          {newPrice && <span className="new-price">{newPrice} EGP</span>}
        </div>
      </Link>
    </div>
  );
};
export default Card;
