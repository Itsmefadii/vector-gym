import Link from "next/link";

interface MembershipCardProps {
  name: string;
  price: number;
  duration: string;
  features: string[];
  popular?: boolean;
}

const MembershipCard = ({
  name,
  price,
  duration,
  features,
  popular = false,
}: MembershipCardProps) => {
  return (
    <div
      className={`relative bg-dark-light rounded-xl p-8 border-2 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
        popular
          ? "border-primary shadow-lg shadow-primary/20"
          : "border-dark-lighter hover:border-primary/50"
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-primary text-dark-dark font-bold px-4 py-1 rounded-full text-sm">
            MOST POPULAR
          </span>
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
        <div className="flex items-baseline justify-center">
          <span className="text-4xl font-black text-gradient">${price}</span>
          <span className="text-gray-400 text-sm ml-2">/{duration}</span>
        </div>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-primary mr-3 text-xl">✓</span>
            <span className="text-gray-300 text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        href="/memberships"
        className={`block w-full text-center font-bold py-3 rounded-lg transition-all duration-300 ${
          popular
            ? "btn-primary"
            : "btn-secondary"
        }`}
      >
        Get Started
      </Link>
    </div>
  );
};

export default MembershipCard;


