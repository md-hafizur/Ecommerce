"use client";

import React, { useState } from "react";
import Link from "next/link";
import { footerData } from "./footerData";
import {
  Facebook,
  MessageCircle,
  Instagram,
  Linkedin,
  Youtube,
  Rss,
  MoveUpRight,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

interface CollapsibleSectionProps {
  title: string;
  links: { label: string; href: string }[];
  isOpen: boolean;
  onToggle: () => void;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  title,
  links,
  isOpen,
  onToggle,
}) => {
  return (
    <Collapsible open={isOpen} onOpenChange={onToggle}>
      <CollapsibleTrigger className="flex justify-between items-center w-full py-4 text-lg font-semibold uppercase tracking-wide">
        {title}
        <ChevronDown
          className={`h-5 w-5 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </CollapsibleTrigger>
      <CollapsibleContent className="ml-10 border-l-2 border-foreground/10 overflow-hidden duration-800 transition-all ease-in-out">
        <ul className="space-y-1">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className="flex items-center gap-3 py-2 text-sm text-primary hover:text-blue-600 transition-colors"
              >
                <div className="w-1.5 h-3 rounded-tr-full rounded-br-full bg-gray-300"></div>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  );
};

const SmFooter = () => {
  const { socialMedia, footer } = footerData;
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (title: string) => {
    setOpenSection(openSection === title ? null : title);
  };

  return (
    <footer className="bg-foreground/10 text-primary mt-8 font-sans">
      {/* Collapsible navigation sections */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <CollapsibleSection
          {...footerData.navigation.weRecommend}
          isOpen={openSection === footerData.navigation.weRecommend.title}
          onToggle={() => toggleSection(footerData.navigation.weRecommend.title)}
        />
        <CollapsibleSection
          {...footerData.navigation.myAccount}
          isOpen={openSection === footerData.navigation.myAccount.title}
          onToggle={() => toggleSection(footerData.navigation.myAccount.title)}
        />
        <CollapsibleSection
          {...footerData.navigation.customerCare}
          isOpen={openSection === footerData.navigation.customerCare.title}
          onToggle={() => toggleSection(footerData.navigation.customerCare.title)}
        />
        <CollapsibleSection
          {...footerData.navigation.aboutUs}
          isOpen={openSection === footerData.navigation.aboutUs.title}
          onToggle={() => toggleSection(footerData.navigation.aboutUs.title)}
        />
      </div>

      {/* Social Icons */}
      <div className="flex justify-center items-center gap-4 mb-6">
        <a
          href={socialMedia.facebook}
          className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"
        >
          <Facebook className="w-4 h-4" />
        </a>
        <a
          href={socialMedia.whatsapp}
          className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center hover:bg-green-500 hover:text-white transition-all"
        >
          <MessageCircle className="w-4 h-4" />
        </a>
        <a
          href={socialMedia.Pin}
          className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.219-5.175 1.219-5.175s-.219-.438-.219-1.085c0-1.016.589-1.775 1.323-1.775.623 0 .924.466.924 1.025 0 .624-.396 1.559-.6 2.425-.171.718.359 1.303 1.066 1.303 1.279 0 2.262-1.348 2.262-3.294 0-1.723-1.237-2.927-3.006-2.927-2.047 0-3.249 1.535-3.249 3.121 0 .618.237 1.281.534 1.641.059.069.067.129.049.2-.054.223-.174.708-.198.807-.031.129-.101.157-.233.094-1.249-.581-2.03-2.407-2.03-3.874 0-3.162 2.292-6.061 6.606-6.061 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.966-.527-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001" />
          </svg>
        </a>
        <a
          href={socialMedia.linkedin}
          className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center hover:bg-blue-700 hover:text-white transition-all"
        >
          <Linkedin className="w-4 h-4" />
        </a>
        <a
          href={socialMedia.instagram}
          className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all"
        >
          <Instagram className="w-4 h-4" />
        </a>
        <a
          href={socialMedia.youtube}
          className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-all"
        >
          <Youtube className="w-4 h-4" />
        </a>
        <a
          href={socialMedia.rss}
          className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all"
        >
          <Rss className="w-4 h-4" />
        </a>
      </div>

      {/* Bottom Section */}
      <div className="flex bg-gray-800 flex-col justify-between items-center py-6">
        <div className="mb-6 text-center">
          {/* <div className="text-4xl font-bold text-white/60 tracking-tight">
            {footerData.company.name}
          </div> */}

          <div className="flex items-center gap-2">
            <Image src={"/logo.png"} alt="logo" width={30} height={30} />
            <div className="sm:flex flex-col -mb-1">
              <h1 className="font-bold -mb-1 flex text-white/50 items-center gap-1">
                UP <MoveUpRight size={15} />
              </h1>
              <h1 className="font-bold text-white/50 -mt-1">STORE</h1>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="font-semibold text-white/60 text-lg">
            {footerData.company.phone.title}
          </p>
          <div className="mt-2 space-y-1">
            {footerData.company.phone.numbers.map((number, index) => (
              <p key={index} className="text-white/60">
                {number}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SmFooter;
