import Menubar from "@/components/Menubar";
import Icon from "@/components/ui/icon";
import SearchInput from "@/components/ui/search";
import { Heart, MoveUpRight, ShoppingCart, User } from "lucide-react";
import Image from "next/image";

export default function CustomerHeaderMain() {
  return (
    <div className="py-3 flex items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <Image src={"/logo.png"} alt="logo" width={30} height={30} />
        <div className="hidden sm:flex flex-col -mb-1">
          <h1 className="font-bold -mb-1 flex items-center gap-1">
            UP <MoveUpRight size={15} />
          </h1>
          <h1 className="font-bold -mt-1">STORE</h1>
        </div>
      </div>
      <SearchInput
        className="flex-1 rounded-md"
        inputClassName="border-none bg-gray-200/60 shadow-none"
        placeholder="Search for products"
      />
      <Menubar />
      <div className="hidden lg:flex items-center justify-between gap-4">
        <Icon bgColor="bg-primary/10" round="rounded-full">
          <User className="cursor-pointer" />
        </Icon>
        <Icon
          bgColor="bg-primary/10"
          counterBgColor="bg-orange-700"
          round="rounded-full"
          count={3}
        >
          <Heart className="cursor-pointer" />
        </Icon>
        <Icon
          bgColor="bg-primary/10"
          counterBgColor="bg-green-700"
          round="rounded-full"
          count={5}
        >
          <ShoppingCart className="cursor-pointer" />
        </Icon>
      </div>
    </div>
  );
}
