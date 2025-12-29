import Link from "next/link";

export const metadata = {
  title: "Vector Gym - Train Hard. Stay Strong. Be Vector.",
  description: "Premium gym facility with certified trainers, modern equipment, and flexible memberships.",
};

export default function Home() {
  const highlights = [
    {
      icon: "💪",
      title: "Certified Trainers",
      description: "Expert trainers with years of experience to guide your fitness journey.",
    },
    {
      icon: "🏋️",
      title: "Modern Equipment",
      description: "State-of-the-art equipment to maximize your workout potential.",
    },
    {
      icon: "⚡",
      title: "Flexible Memberships",
      description: "Choose a membership plan that fits your schedule and goals.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-light to-dark opacity-90"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
        </div>

        <div className="relative z-10 container-custom text-center px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-gradient leading-tight">
            TRAIN HARD.
            <br />
            STAY STRONG.
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary animate-pulse">
              BE VECTOR.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Transform your body and mind at Vector Gym. Where discipline meets
            strength, and consistency creates champions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/memberships" className="btn-primary text-lg">
              Join Now
            </Link>
            <Link href="/memberships" className="btn-secondary text-lg">
              View Memberships
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="section-padding bg-dark-light">
        <div className="container-custom">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Why Choose <span className="text-gradient">Vector</span>?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We provide everything you need to achieve your fitness goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-dark rounded-xl p-8 border border-dark-lighter hover:border-primary/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-primary/10 text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-6xl mb-4 transform hover:scale-110 transition-transform duration-300">
                  {highlight.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {highlight.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to Start Your <span className="text-gradient">Journey</span>?
          </h2>
          <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto">
            Join Vector Gym today and become part of a community dedicated to
            excellence.
          </p>
          <Link href="/memberships" className="btn-primary text-lg inline-block">
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
}


