import { Heart, Plus, Star } from "lucide-react";

function ProductCard({ product, onAdd }) {
  return (
    <article className="group">

      {/* Image */}
      <div className="relative overflow-hidden rounded-[1.5rem] bg-[#E8D8CC]">

        <img
          src={product.image}
          alt={product.name}
          className="h-[330px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Wishlist */}
        <button
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#F8F4EE]/90 text-[#342A26] backdrop-blur-md transition hover:bg-[#342A26] hover:text-[#F8F4EE]"
          aria-label={`Add ${product.name} to wishlist`}
        >
          <Heart size={17} strokeWidth={1.5} />
        </button>

        {/* Category */}
        <div className="absolute bottom-4 left-4 rounded-full bg-[#F8F4EE]/90 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.15em] text-[#342A26] backdrop-blur-md">
          {product.category}
        </div>

      </div>

      {/* Information */}
      <div className="px-1 pt-5">

        <div className="flex items-start justify-between gap-4">

          <div>

            <h3 className="font-display text-xl text-[#342A26]">
              {product.name}
            </h3>

            <p className="mt-1 text-xs text-[#A89589]">
              {product.skinType}
            </p>

          </div>

          <p className="shrink-0 text-sm font-medium text-[#342A26]">
            ₹{product.price.toLocaleString("en-IN")}
          </p>

        </div>

        <p className="mt-3 text-sm leading-6 text-[#6F625B]">
          {product.description}
        </p>

        {/* Rating */}
        <div className="mt-4 flex items-center gap-2">

          <div className="flex items-center gap-1">

            <Star
              size={14}
              className="fill-[#B99A67] text-[#B99A67]"
            />

            <span className="text-xs font-medium text-[#342A26]">
              {product.rating}
            </span>

          </div>

          <span className="text-xs text-[#A89589]">
            ({product.reviews} reviews)
          </span>

          <span className="text-xs text-[#A89589]">
            · {product.size}
          </span>

        </div>

        {/* Add to bag */}
        <button
          onClick={() => onAdd(product)}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-full border border-[#342A26] px-5 py-3 text-sm font-medium text-[#342A26] transition-all duration-300 hover:bg-[#342A26] hover:text-[#F8F4EE]"
        >
          <Plus size={16} />
          Add to Bag
        </button>

      </div>

    </article>
  );
}

export default ProductCard;