import { categories, manufacturers, Medicine, priceRanges } from "@/app/constants";
import { fetchMedicines } from "@/app/services/medicine.service";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Shop = async() => {
  const medicines = await fetchMedicines();


  return (
    <div className="min-h-screen pt-28 pb-12 bg-gray-50">
      <div className="container mx-auto px-4 mb-10">
        <h1 className="text-4xl font-bold text-center text-blue-600">
          Shop Medicines
        </h1>
        <p className="text-center text-base-content/70 mt-2">
          Browse trusted medicines and healthcare products
        </p>

        {/* FILTER BAR etar vitor shob filter ase ----------------------------------------------------*/}
        <div className="grid gap-4 md:grid-cols-4 bg-white p-4 rounded-xl shadow">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search medicine..."
              className="input input-bordered w-full pl-10"
            />
          </div>

          {/* Category */}
          <select className="select select-bordered w-full">
            {categories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>

          {/* Manufacturer */}
          <select className="select select-bordered w-full">
            {manufacturers.map((mfg) => (
              <option key={mfg}>{mfg}</option>
            ))}
          </select>

          {/* Price */}
          <select className="select select-bordered w-full">
            {priceRanges.map((price) => (
              <option key={price.label}>{price.label}</option>
            ))}
          </select>
        </div>
      </div>
      {/* FILTER BAR sesh  --------------------------------------------------------------------------------------*/}

      {/* Products */}
      <div
        className="container mx-auto px-4 grid gap-6
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4"
      >
        {medicines.map((product : Medicine) => (
 
          <div
            key={product.id}
            className="card bg-base-100 shadow-md hover:shadow-xl transition duration-300"
          >
            {/* Error: Failed to parse src "sfzfszdfzdf" on `next/image`, if using relative image it must start 
            with a leading slash "/" or be an absolute URL (http:// or https://) */}
            <figure className="px-6 pt-6">
              <Image
                src={'/doctor.jpg' }
                width={300}
                height={300}
                alt={product.name}
                className="rounded-xl object-cover"
              />
            </figure>

            {/* Stocks */}
            <div className="card-body">
              <h2 className="card-title flex justify-between items-start">
                <span>{product.name}</span>
                
              </h2>

              {/* Category & Manufacturer */}
              <div className="flex flex-wrap gap-2 text-xs mt-2">
                <span className="px-3 py-1 rounded-full bg-linear-to-r from-blue-500 to-indigo-500 text-white font-bold shadow-sm">
                  {product.category}
                </span>

                <span className="px-3 py-1 rounded-full bg-linear-to-r from-emerald-500 to-teal-500 text-white font-bold shadow-sm">
                  {product.manufacturer}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-base-content/70 mt-2">
                {product.description}
              </p>

              {/* Price & Buy Now Button */}
              <div className="flex items-center justify-between mt-4">
                <span className="text-lg font-bold text-primary">
                  ৳{product.price}
                </span>

                <Link href={`/shop/${product.id}`}>
                  <button className="btn btn-primary btn-sm">Buy Now</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
