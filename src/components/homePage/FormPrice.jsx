import React from "react";
import { useForm } from "react-hook-form";
import './styles/formPrice.css'

const FormPrice = ({ setFormValue }) => {
  const { handleSubmit, register, reset } = useForm();

  const submit = (data) => {
    setFormValue({
      from: data.from || 0,
      to: data.to || Infinity,
    });
  };

  return (
    <form className="price" onSubmit={handleSubmit(submit)}>
      <div className="formed">
        <label className="label" htmlFor="from">From</label>
        <input className="inputed" {...register("from")} type="number" id="from" />
      </div>
      <div className="formed">
        <label className="label" htmlFor="to">To</label>
        <input className="inputed" {...register("to")} type="number" id="to" />
      </div>
      <button className="formed btn-filterPrice">Filter Price</button>
    </form>
  );
};

export default FormPrice;
