import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

const AddFishForm = (props) => {
  const { register, handleSubmit } = useForm();
  return (
    <form className="fish-edit" onSubmit={handleSubmit(props.addFish)}>
      <input type="text" {...register("name")} placeholder="Name" required />
      <input
        type="number"
        {...register("price")}
        placeholder="Price"
        required
      />
      <select type="text" {...register("status")} placeholder="Status" required>
        <option value="available">Fresh!</option>
        <option value="unavailable">Sold Out!</option>
      </select>
      <textarea type="text" {...register("desc")} placeholder="Desc" required />
      <input type="text" {...register("image")} placeholder="Image" required />
      <button type="submit">Add Fish</button>
    </form>
  );
};

AddFishForm.propTypes = {
  addFish: PropTypes.func,
};

export default AddFishForm;
