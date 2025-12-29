import ProductCard from "@/components/ProductCard";
import Link from "next/link";

export const metadata = {
  title: "Shop - Vector Gym Merchandise",
  description: "Shop Vector Gym merchandise including t-shirts, hoodies, shakers, and gloves. Show your Vector pride!",
};

export default function Shop() {
  const products = [
    {
      name: "Vector Gym T-Shirt",
      price: 29,
      image: <img src="https://images.unsplash.com/photo-1603698819488-03c6e857d280?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Vector Gym T-Shirt" className="w-full h-full object-cover" />,
      category: "Apparel",
    },
    {
      name: "Vector Premium Hoodie",
      price: 59,
      image: <img src="https://images.unsplash.com/photo-1685354218016-3899c9ef79ad?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Vector Gym T-Shirt" className="w-full h-full object-cover" />,
      category: "Apparel",
    },
    {
      name: "Vector Protein Shaker",
      price: 15,
      image: <img src="https://images.unsplash.com/photo-1693996045899-7cf0ac0229c7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Vector Gym T-Shirt" className="w-full h-full object-cover" />,
      category: "Accessories",
    },
    {
      name: "Vector Training Gloves",
      price: 24,
      image: <img src="https://images.unsplash.com/photo-1557127972-1c446ea89ea5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Vector Gym T-Shirt" className="w-full h-full object-cover" />,
      category: "Equipment",
    },
    {
      name: "Vector Tank Top",
      price: 25,
      image: <img src="https://images.unsplash.com/photo-1605300287659-9ca1a156d7c8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Vector Gym T-Shirt" className="w-full h-full object-cover" />,
      category: "Apparel",
    },
    {
      name: "Vector Gym Bag",
      price: 39,
      image: <img src="https://images.unsplash.com/photo-1692506530242-c12d6c3ae2e2?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Vector Gym T-Shirt" className="w-full h-full object-cover" />,
      category: "Accessories",
    },
    {
      name: "Vector Water Bottle",
      price: 18,
      image: <img src="https://images.unsplash.com/photo-1649888254873-d9870ee286ee?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Vector Gym T-Shirt" className="w-full h-full object-cover" />,
      category: "Accessories",
    },
    {
      name: "Vector Wristbands",
      price: 12,
      image: <img src="https://images.unsplash.com/photo-1582765114965-913ae716d5df?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Vector Gym T-Shirt" className="w-full h-full object-cover" />,
      category: "Accessories",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-dark via-dark-light to-dark">
        <div className="container-custom text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-gradient">
            Vector Shop
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Show your Vector pride with premium gym merchandise and accessories.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-dark-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <ProductCard
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  category={product.category}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-dark">
        <div className="container-custom">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Why Shop <span className="text-gradient">Vector</span>?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Premium quality merchandise designed for athletes and fitness enthusiasts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "✨",
                title: "Premium Quality",
                description: "High-quality materials built to last through intense workouts.",
              },
              {
                icon: "🚚",
                title: "Fast Shipping",
                description: "Quick and reliable delivery to get your gear to you fast.",
              },
              {
                icon: "💳",
                title: "Secure Checkout",
                description: "Safe and secure payment processing for your peace of mind.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-dark-light rounded-xl p-8 border border-dark-lighter hover:border-primary/50 transition-all duration-300 text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Need Help Choosing?
          </h2>
          <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto">
            Visit our gym to see our merchandise in person, or contact us for personalized
            recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn-primary text-lg inline-block">
              Visit Gym
            </Link>
            <Link href="/about" className="btn-secondary text-lg inline-block">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

