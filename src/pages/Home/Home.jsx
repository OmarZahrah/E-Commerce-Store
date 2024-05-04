import Slider from "../../components/Slider/Slider";
import FeaturedProducts from "../../components/Featured Products/FeaturedProducts";
import "./Home.scss";
import Categories from "../../components/Categories/Categories";
import { featuredData, trending } from "../../data/data";
import Contact from "../../components/Contact/Contact";
const Home = () => {
  return (
    <div className="home">
      <Slider title="Featured" />
      <FeaturedProducts type="featured " data={featuredData} />
      <Categories />
      <FeaturedProducts type={"trending "} data={trending} />
      <Contact />
    </div>
  );
};
export default Home;
