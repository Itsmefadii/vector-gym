import MembershipCard from "@/components/MembershipCard";
import Link from "next/link";

export const metadata = {
  title: "Memberships - Vector Gym",
  description: "Choose the perfect membership plan for your fitness journey. Basic, Standard, and Premium options available.",
};

export default function Memberships() {
  const memberships = [
    {
      name: "Basic",
      price: 29,
      duration: "month",
      features: [
        "Access to gym facilities",
        "Free weights & cardio equipment",
        "Locker room access",
        "Basic fitness assessment",
        "Mobile app access",
      ],
      popular: false,
    },
    {
      name: "Standard",
      price: 49,
      duration: "month",
      features: [
        "Everything in Basic",
        "Group fitness classes",
        "Personal trainer consultation (1x/month)",
        "Nutrition guidance",
        "Priority booking",
        "Guest passes (2/month)",
      ],
      popular: true,
    },
    {
      name: "Premium",
      price: 79,
      duration: "month",
      features: [
        "Everything in Standard",
        "Unlimited personal training",
        "Custom workout plans",
        "Nutrition meal plans",
        "24/7 priority support",
        "Unlimited guest passes",
        "Exclusive premium events",
        "Recovery & spa access",
      ],
      popular: false,
    },
  ];

  const faqs = [
    {
      question: "Can I cancel my membership anytime?",
      answer: "Yes, you can cancel your membership at any time with 30 days notice.",
    },
    {
      question: "Do you offer student discounts?",
      answer: "Yes, we offer a 20% discount for students with valid ID.",
    },
    {
      question: "Is there a contract?",
      answer: "No long-term contracts. All memberships are month-to-month.",
    },
    {
      question: "Can I freeze my membership?",
      answer: "Yes, you can freeze your membership for up to 3 months per year.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-dark via-dark-light to-dark">
        <div className="container-custom text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-gradient">
            Choose Your Plan
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Flexible membership options designed to fit your lifestyle and fitness goals.
          </p>
        </div>
      </section>

      {/* Membership Cards */}
      <section className="section-padding bg-dark-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {memberships.map((membership, index) => (
              <div
                key={index}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <MembershipCard
                  name={membership.name}
                  price={membership.price}
                  duration={membership.duration}
                  features={membership.features}
                  popular={membership.popular}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="section-padding bg-dark">
        <div className="container-custom">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              What's <span className="text-gradient">Included</span>?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              All memberships include access to our world-class facilities and community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "24/7 Gym Access",
              "Modern Equipment",
              "Expert Trainers",
              "Community Support",
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-dark-light rounded-xl p-6 border border-dark-lighter hover:border-primary/50 transition-all duration-300 text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-3">✓</div>
                <p className="text-white font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-dark-light">
        <div className="container-custom">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-dark rounded-xl p-6 border border-dark-lighter hover:border-primary/50 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Start Your <span className="text-gradient">Journey</span> Today
          </h2>
          <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto">
            Join Vector Gym and become part of a community dedicated to excellence and transformation.
          </p>
          <Link href="/" className="btn-primary text-lg inline-block">
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
}

