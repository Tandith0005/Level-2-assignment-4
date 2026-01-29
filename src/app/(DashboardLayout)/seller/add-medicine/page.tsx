"use client";

import { categories, manufacturers } from "@/app/constants";
import React, { useState } from "react";
import { toast } from "react-toastify";

const AddMedicine = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    manufacturer: "",
    image: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  // form submission login here----------------------------------------------------------------------
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      ...formData,
      price: Number(formData.price),
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/medicine`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
          credentials: "include",
        },
      );

      if (response.ok) {
        toast.success("Medicine added successfully");
        setFormData({
          name: "",
          description: "",
          price: "",
          category: "",
          manufacturer: "",
          image: "",
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start pt-28 px-4">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-3xl p-6 md:p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Add New Medicine
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name */}

            <div>
              <label className="label">Medicine Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Paracetamol 500mg"
                className="input input-bordered w-full"
              />
            </div>

            {/* Price */}
            <div>
              <label className="label">Price (৳)</label>
              <input
                type="number"
                name="price"
                required
                value={formData.price}
                onChange={handleChange}
                className="input input-bordered w-full"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="label">Description</label>
            <textarea
              name="description"
              required
              value={formData.description}
              onChange={handleChange}
              placeholder="Short description about the medicine"
              className="textarea textarea-bordered w-full"
            />
          </div>

          {/* Category & Manufacturer */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="label">Category</label>
              <select
                name="category"
                required
                value={formData.category}
                onChange={handleChange}
                className="select select-bordered w-full"
              >
                <option value="" disabled>
                  Select category
                </option>

                {categories
                  .filter((c) => c !== "All Medicines")
                  .map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
              </select>
            </div>

            <div>
              <label className="label">Manufacturer</label>
              <select
                name="manufacturer"
                required
                value={formData.manufacturer}
                onChange={handleChange}
                className="select select-bordered w-full"
              >
                <option value="" disabled>
                  Select manufacturer
                </option>

                {manufacturers
                  .filter((m) => m !== "All Manufacturers")
                  .map((manufacturer) => (
                    <option key={manufacturer} value={manufacturer}>
                      {manufacturer}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          {/* Image URL */}
          <div>
            <label className="label">Image URL</label>
            <input
              type="text"
              name="image"
              required
              value={formData.image}
              onChange={handleChange}
              placeholder="https://image-link.com/medicine.png"
              className="input input-bordered w-full"
            />
          </div>

          {/* Submit */}
          <div className="pt-4">
            <button type="submit" className="btn btn-primary w-full md:w-auto">
              Add Medicine
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMedicine;
