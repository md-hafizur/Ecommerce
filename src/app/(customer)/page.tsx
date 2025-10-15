import BigOfferCarousel from "@/components/carousel";
import FeaturesScrollContainer from "@/components/features/features-section";
import { FeaturesData } from "@/data/featuresData";
import { ProductSection } from "@/components/product";

export default function Page() {
  return (
    <div className="container mx-auto py-4 max-w-7xl">
      <BigOfferCarousel/>
      <FeaturesScrollContainer features={FeaturesData} />
      <ProductSection />
    </div>
  );
}
