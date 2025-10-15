import CustomerHeader from "@/components/customer/header";
import "swiper/css";
import "swiper/css/navigation";

export default function CustomerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <CustomerHeader />
      <div className="container mx-auto max-w-7xl px-6">{children}</div>
    </div>
  );
}
