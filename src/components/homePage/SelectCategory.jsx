import React, { useEffect, useRef } from "react";
import useFetch from "../../Hooks/useFetch";
import './styles/selectCategory.css'

const SelectCategory = ({ setSelectValue }) => {
  const [categories, getCategories] = useFetch();

  useEffect(() => {
    const url = "https://e-commerce-api-v2.academlo.tech/api/v1/categories";
    getCategories(url);
  }, []);

  //console.log(getCategories);

  const textSelect = useRef();
  const handleCategory = () => {
    setSelectValue(textSelect.current.value);
  };

  return (
    <div>
      <h3 className="title">By Category</h3>
      <select className="selectup" onChange={handleCategory} ref={textSelect}>
        <option className="option" value={0}>--All--</option>
        {categories?.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectCategory;
