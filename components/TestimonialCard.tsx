interface TestimonialCardProps {
  name: string;
  role: string;
  image?: string;
  review: string;
  rating: number;
}

const TestimonialCard = ({
  name,
  role,
  image,
  review,
  rating,
}: TestimonialCardProps) => {
  return (
    <div className="bg-dark-light rounded-xl p-6 border border-dark-lighter hover:border-primary/50 transition-all duration-300 transform hover:scale-105">
      <div className="flex items-center mb-4">
        {/* Avatar */}
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mr-4">
          <span className="text-xl font-bold text-dark-dark">
            {name.charAt(0).toUpperCase()}
          </span>
        </div>
        <div>
          <h4 className="text-white font-bold">{name}</h4>
          <p className="text-gray-400 text-sm">{role}</p>
        </div>
      </div>

      {/* Rating */}
      <div className="flex mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={`text-lg ${
              i < rating ? "text-primary" : "text-gray-600"
            }`}
          >
            ★
          </span>
        ))}
      </div>

      {/* Review */}
      <p className="text-gray-300 text-sm leading-relaxed italic">
        &ldquo;{review}&rdquo;
      </p>
    </div>
  );
};

export default TestimonialCard;

