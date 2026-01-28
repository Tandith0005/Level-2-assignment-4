import Image from "next/image";
import Link from "next/link";
import React from "react";

const ShopSpecificItem = ({ params }: { params: { id: string } }) => {
  const { id } = params;
 // console.log(id); --------------------------------------------------------------------------------------- SERVER UNDEFINED ASHE ID TA CAUSE SERVER NAI EKHONO

  return (
    <div className="min-h-screen pt-28 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">

        {/* Breadcrumb */}
        <div className="text-sm breadcrumbs mb-6">
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/shop">Shop</Link></li>
            <li>Product #{id}</li>
          </ul>
        </div>

        {/* Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white p-6 rounded-xl shadow-md">

          {/* Image */}
          <div className="flex justify-center items-center">
            <Image
              src="/doctor.jpg"
              alt="Medicine"
              width={420}
              height={420}
              className="rounded-xl object-cover"
              priority
            />
          </div>

          {/* Details */}
          <div>
            <h1 className="text-3xl font-bold mb-2">
              Paracetamol 500mg
            </h1>

            <div className="flex items-center gap-3 mb-4">
              <span className="badge badge-success">In Stock</span>
              <span className="text-sm text-base-content/60">
                Trusted & Certified
              </span>
            </div>

            <p className="text-base-content/80 mb-6 leading-relaxed">
              Paracetamol is used to relieve mild to moderate pain and reduce
              fever. Suitable for adults and children when taken as directed.
            </p>

            <div className="text-3xl font-bold text-primary mb-6">
              ৳120
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4 mb-6">
              <span className="font-medium">Quantity:</span>
              <div className="join">
                <button className="btn join-item">−</button>
                <button className="btn join-item btn-disabled">1</button>
                <button className="btn join-item">+</button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4">
              <button className="btn btn-primary">
                Add to Cart
              </button>
              <button className="btn btn-outline btn-primary">
                Buy Now
              </button>
            </div>

            {/* Extra Info */}
            <div className="mt-8 space-y-2 text-sm text-base-content/70">
              <p>🚚 Free delivery within 24–48 hours</p>
              <p>💊 100% authentic medicines</p>
              <p>📞 24/7 customer support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopSpecificItem;
