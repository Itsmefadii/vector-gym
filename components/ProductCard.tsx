"use client";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  category?: string;
}

const ProductCard = ({ name, price, image, category }: ProductCardProps) => {
  const handleAddToCart = () => {
    // UI only - no functionality
    alert(`${name} added to cart! (Demo)`);
  };

  return (
    <div className="bg-dark-light rounded-xl overflow-hidden border border-dark-lighter hover:border-primary/50 transition-all duration-300 transform hover:scale-105 group">
      {/* Image */}
      <div className="relative h-64 bg-dark-lighter overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
          {image}
        </div>
        {category && (
          <div className="absolute top-4 left-4 bg-primary text-dark-dark text-xs font-bold px-3 py-1 rounded-full">
            {category}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-white font-bold text-lg mb-2">{name}</h3>
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-black text-gradient">${price}</span>
        </div>
        <button
          onClick={handleAddToCart}
          className="w-full bg-dark-lighter text-white font-bold py-3 rounded-lg hover:bg-primary hover:text-dark-dark transition-all duration-300 transform hover:scale-105 active:scale-95"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

