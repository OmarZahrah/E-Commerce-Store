import { Link } from "react-router-dom";
import { categories as categoriesData } from "../../data/data";
import "./Categories.scss";

const Categories = () => {
  const categories = categoriesData;
  return (
    <section className="categories">
      <div className="col">
        <div className="row">
          <div className="overlay"></div>
          <img src={categories.sale} alt="" />
          <button>
            <Link>Sale</Link>
          </button>
        </div>
        <div className="row">
          <div className="overlay"></div>
          <img src={categories.women} alt="" />
          <button>
            <Link>Women</Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <div className="overlay"></div>
          <img src={categories.newSeason} alt="" />
          <button>
            <Link>New Season</Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="overlay"></div>
              <img src={categories.men} alt="" />
              <button>
                <Link>Men</Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <div className="overlay"></div>
              <img src={categories.accessories} alt="" />
              <button>
                <Link>Accessories</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="overlay"></div>
          <img src={categories.shoes} alt="" />
          <button>
            <Link>Sale</Link>
          </button>
        </div>
      </div>
    </section>
  );
};
export default Categories;
