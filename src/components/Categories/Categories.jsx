import { useState } from "react";

export const Categories = ({ value, onClickCategory }) => {
  const category = [
    "Все",
    "Мясные",
    "Вегетарианское",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  return (
    <div className="categories">
      <ul>
        {category.map((categoryName, i) => {
          return (
            <li
              key={i}
              onClick={() => onClickCategory(i)}
              className={value == i ? "active" : null}
            >
              {categoryName}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
