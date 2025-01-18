import { featuredData } from "../../data/data";
import useFetch from "../../hooks/useFetch";
import Card from "../Card/Card";
import "./List.scss";
const List = ({ catId, subCats, maxPrice, sort }) => {
  // &[filters][price][$lte]=${maxPrice}
  const { data, error, loading } = useFetch(
    `products?populate=*&[filters][categories][id]=${catId}${subCats.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}}`
    )}&sort=price:${sort}`
  );
  return (
    <div className="list">
      {error
        ? "Something Went Wrong"
        : loading
        ? "Loading..."
        : data?.map((item) => <Card key={item.id} item={item} />)}
    </div>
  );
};
export default List;
