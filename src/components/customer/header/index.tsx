import StoreHeader from "@/components/storeHeader";
import CustomerHeaderMain from "./main";
import CustomerHeaderMenu from "./menu";
import CustomerHeaderTop from "./top";

export default function CustomerHeader() {
  return (
    <header className="w-full border-b">
      <StoreHeader />
      <CustomerHeaderTop />
      <div className="container mx-auto max-w-7xl px-6">
        <CustomerHeaderMain />
        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <CustomerHeaderMenu />
        </div>
        {/* Mobile Menu (Sheet) */}
      </div>
    </header>
  );
}