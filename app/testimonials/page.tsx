import TestimonialCard from "@/components/TestimonialCard";
import Link from "next/link";

export const metadata = {
  title: "Testimonials - Vector Gym",
  description: "Read what our members say about their experience at Vector Gym. Real stories from real people.",
};

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Member for 2 years",
      review:
        "Vector Gym transformed my life. The trainers are incredible, the equipment is top-notch, and the community is so supportive. I've achieved goals I never thought possible.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Member for 1 year",
      review:
        "Best gym I've ever been to. The 24/7 access fits my busy schedule perfectly, and the premium membership is worth every penny. The personal training has been game-changing.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Member for 3 years",
      review:
        "I love the discipline and consistency that Vector promotes. It's not just a gym, it's a lifestyle. The group classes are amazing and keep me motivated.",
      rating: 5,
    },
    {
      name: "David Thompson",
      role: "Member for 6 months",
      review:
        "The facilities are incredible and always clean. The staff is friendly and knowledgeable. I've seen amazing results in just a few months.",
      rating: 5,
    },
    {
      name: "Jessica Martinez",
      role: "Member for 1.5 years",
      review:
        "Vector Gym has the best community. Everyone is supportive and focused on their goals. The nutrition guidance has been a huge help in my transformation journey.",
      rating: 5,
    },
    {
      name: "James Wilson",
      role: "Member for 2.5 years",
      review:
        "I've tried many gyms, but Vector is different. The attention to detail, the quality of equipment, and the expertise of trainers make it stand out. Highly recommended!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-dark via-dark-light to-dark">
        <div className="container-custom text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-gradient">
            Member Stories
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Real transformations from real people. See what our members have to say about their
            Vector Gym experience.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding bg-dark-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <TestimonialCard
                  name={testimonial.name}
                  role={testimonial.role}
                  review={testimonial.review}
                  rating={testimonial.rating}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-dark">
        <div className="container-custom">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Vector by the <span className="text-gradient">Numbers</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "10K+", label: "Active Members" },
              { number: "50+", label: "Expert Trainers" },
              { number: "24/7", label: "Gym Access" },
              { number: "98%", label: "Satisfaction Rate" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-black text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to Write Your <span className="text-gradient">Success Story</span>?
          </h2>
          <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of members who have transformed their lives at Vector Gym.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/memberships" className="btn-primary text-lg inline-block">
              View Memberships
            </Link>
            <Link href="/about" className="btn-secondary text-lg inline-block">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

