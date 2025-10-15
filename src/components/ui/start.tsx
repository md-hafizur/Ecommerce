import { Star } from "lucide-react";

type ReviewStarsProps = {
  rating: number; // e.g. 3.7, 2.9, 5, etc.
  className?: string;
};

export default function ReviewStars({ rating, className }: ReviewStarsProps) {
  return (
    <div className={className}>
      <div className="flex items-center gap-0.5">
        {[...Array(5)].map((_, i) => {
          const fillLevel = Math.min(Math.max(rating - i, 0), 1);
          return (
            <div key={i} className="relative w-3 h-3">
              {/* background (empty star) */}
              <Star className="absolute top-0 left-0 w-3 h-3 text-gray-300" />

              {/* foreground (filled star with clip) */}
              <div
                className="absolute top-0 left-0 overflow-hidden"
                style={{ width: `${fillLevel * 100}%` }}
              >
                <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
              </div>
            </div>
          );
        })}
        <span className="text-xs font-bold ml-1">({rating})</span>
      </div>
    </div>
  );
}
