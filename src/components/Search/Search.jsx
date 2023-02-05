import style from "./Search.module.sass";
import { useContext, useState } from "react";
import { SearchContext } from "../../App";

export const Search = () => {
  const { searchPizza, setSearchPizza } = useContext(SearchContext);

  return (
    <input
      value={searchPizza}
      onChange={(e) => setSearchPizza(e.target.value)}
      placeholder="Поиск пиццы..."
      className={style.input}
    />
  );
};
