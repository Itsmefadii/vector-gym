import Link from "next/link";

export const metadata = {
  title: "About Vector Gym - Our Mission & Vision",
  description: "Learn about Vector Gym's mission, vision, and values. Discover why we're different and committed to your fitness transformation.",
};

export default function About() {
  const values = [
    {
      title: "Discipline",
      icon: "🎯",
      description: "We believe discipline is the bridge between goals and accomplishment. Every workout counts.",
    },
    {
      title: "Consistency",
      icon: "🔄",
      description: "Consistency beats perfection. Small daily improvements lead to massive results over time.",
    },
    {
      title: "Strength",
      icon: "💪",
      description: "Physical strength builds mental resilience. We train both body and mind.",
    },
  ];

  const differences = [
    {
      title: "Expert Trainers",
      description: "Our certified trainers have years of experience and are committed to your success.",
    },
    {
      title: "Modern Facilities",
      description: "State-of-the-art equipment and spacious training areas for all fitness levels.",
    },
    {
      title: "Community Focus",
      description: "Join a supportive community of like-minded individuals on the same journey.",
    },
    {
      title: "Flexible Schedules",
      description: "Open 24/7 with flexible membership options to fit your lifestyle.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-dark via-dark-light to-dark">
        <div className="container-custom text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-gradient">
            About Vector
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Where discipline meets strength, and consistency creates champions.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-dark-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="animate-slide-up">
              <div className="bg-dark rounded-xl p-8 border border-dark-lighter hover:border-primary/50 transition-all duration-300 h-full">
                <div className="text-5xl mb-4">🎯</div>
                <h2 className="text-3xl font-black text-white mb-4">Our Mission</h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  To empower individuals to transform their lives through fitness, discipline, and
                  consistency. We provide world-class facilities, expert guidance, and a supportive
                  community that helps you achieve your fitness goals and unlock your full potential.
                </p>
              </div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <div className="bg-dark rounded-xl p-8 border border-dark-lighter hover:border-primary/50 transition-all duration-300 h-full">
                <div className="text-5xl mb-4">👁️</div>
                <h2 className="text-3xl font-black text-white mb-4">Our Vision</h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  To become the premier fitness destination where every member feels valued, motivated,
                  and equipped to succeed. We envision a future where Vector Gym is synonymous with
                  transformation, excellence, and unwavering commitment to health and wellness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-dark">
        <div className="container-custom">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Our Core <span className="text-gradient">Values</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do at Vector Gym.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-dark-light rounded-xl p-8 border border-dark-lighter hover:border-primary/50 transition-all duration-300 transform hover:scale-105 text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-6xl mb-4 transform hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Vector is Different */}
      <section className="section-padding bg-dark-light">
        <div className="container-custom">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Why <span className="text-gradient">Vector</span> is Different
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We're not just a gym. We're a movement dedicated to your transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {differences.map((item, index) => (
              <div
                key={index}
                className="bg-dark rounded-xl p-6 border border-dark-lighter hover:border-primary/50 transition-all duration-300 flex items-start space-x-4 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to Join the <span className="text-gradient">Vector</span> Movement?
          </h2>
          <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto">
            Start your transformation journey today and become part of a community that values
            discipline, consistency, and strength.
          </p>
          <Link href="/memberships" className="btn-primary text-lg inline-block">
            View Memberships
          </Link>
        </div>
      </section>
    </div>
  );
}

