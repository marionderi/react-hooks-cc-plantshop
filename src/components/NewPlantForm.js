import React, { useState } from "react";

function NewPlantForm({ setPlants }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://react-hooks-cc-plantshop-1-ya3b.onrender.com/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((newPlant) => {
        setPlants((prevPlants) => [...prevPlants, newPlant]);
      });
    setFormData({ name: "", image: "", price: "" });
  };

  return (
    <form className="new-plant-form" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Plant name"   onChange={handleChange}
      />
      <input type="text" name="image"  placeholder="Image URL" onChange={handleChange}
      />
      <input type="number" name="price" placeholder="Price"  onChange={handleChange}
      />
      <button type="submit">Add Plant</button>
    </form>
  );
}

export default NewPlantForm;