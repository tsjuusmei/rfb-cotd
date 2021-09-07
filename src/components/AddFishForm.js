import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

const AddFishForm = (props) => {
  const form = useForm({
    mode: "onChange",
  });
  const { register, handleSubmit, formState } = form;
  const { isValid } = formState;
  return (
    <form className="fish-edit" onSubmit={handleSubmit(props.addFish)}>
      <input
        type="text"
        {...register("name", { required: true })}
        placeholder="Name"
      />
      <input
        type="number"
        {...register("price", { required: true })}
        placeholder="Price"
      />
      <select
        type="text"
        {...register("status", { required: true })}
        placeholder="Status"
      >
        <option value="available">Fresh!</option>
        <option value="unavailable">Sold Out!</option>
      </select>
      <textarea
        type="text"
        {...register("desc", { minLength: 15 })}
        placeholder="Desc"
      />
      <input
        type="text"
        {...register("image", { required: true })}
        placeholder="Image"
      />
      <button disabled={!isValid} type="submit">
        Add Fish
      </button>
    </form>
  );
};

AddFishForm.propTypes = {
  addFish: PropTypes.func,
};

export default AddFishForm;
