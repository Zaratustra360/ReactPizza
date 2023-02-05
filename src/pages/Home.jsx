import { useContext, useEffect, useState } from "react";

import { Categories } from "../components/Categories/Categories";
import { Sort } from "../components/Sort/Sort";
import Skeleton from "../components/Pizza/Skeleton";
import { Pizza } from "../components/Pizza/Pizza";
import { SearchContext } from "../App";

export const Home = () => {
  const [pizzaArray, setPizzaArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Category
  const [categoryId, setCategoryId] = useState(0);
  // End Category

  // Sort
  const [sortType, setSortType] = useState({
    name: "популярности",
    sortProperty: "rating",
  });
  // End Sort
  //Search pizzs
  const { searchPizza, setSearchPizza } = useContext(SearchContext);

  //Сортировка
  const getPizzas = async () => {
    setIsLoading(true);

    const sortBy = sortType.sortProperty.replace("-", "");
    const order = sortType.sortProperty.includes("-") ? "asc" : "desc";
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchPizza ? `&search=${searchPizza}` : "";

    const response = await fetch(
      `https://63da8e5cb28a3148f68a4b0d.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}${search}`
    );

    const data = await response.json();
    setPizzaArray(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getPizzas();
    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchPizza]);
  // Конец сортировки

  //Render Pizzas and Skeletons

  const pizzas = pizzaArray.map((obj, i) => {
    return <Pizza key={i} {...obj} />;
  });
  return (
    <>
      <div className="content__top">
        <Categories
          value={categoryId}
          onClickCategory={(i) => setCategoryId(i)}
        />
        <Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((item, i) => {
              return <Skeleton key={i} />;
            })
          : pizzas}
      </div>
    </>
  );
};
