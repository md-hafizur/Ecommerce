"use client";
import React, { useState } from "react";
import {
  Facebook,
  MessageCircle,
  Instagram,
  Linkedin,
  Youtube,
  Rss,
  Send,
  MoveUpRight,
} from "lucide-react";
import Image from "next/image";
import { footerData } from "./footerData";

const LgFooter = () => {
  const [email, setEmail] = useState("");

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  const { newsletter, company, socialMedia, navigation, footer } = footerData;

  return (
    <div>
      {/* Newsletter Section */}
      <div className="bg-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-3">
              <Send className="w-6 h-6 text-white" />
              <div>
                <span className="text-white font-semibold text-lg">
                  {newsletter.title}
                </span>
                <span className="text-white ml-2">
                  {newsletter.subtitle} <strong>{newsletter.couponText}</strong>
                </span>
              </div>
            </div>
            <form
              onSubmit={handleSignup}
              className="flex w-full lg:w-auto max-w-md"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={newsletter.placeholder}
                className="flex-1 px-4 py-2 rounded-l-md border-0 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-700"
              />
              <button
                type="submit"
                className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-r-md transition-colors font-medium"
              >
                {newsletter.buttonText}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <footer className="py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start space-y-8 lg:space-y-0 lg:space-x-8">
            {/* Logo and Contact Section */}
            <div className="space-y-6">
              {/* <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary/60 font-bold text-sm">
                    {company.logo}
                  </span>
                </div>
                <span className="text-2xl font-bold text-primary">
                  {company.name}
                </span>
              </div> */}
              <div className="flex items-center gap-2">
                <Image src={"/logo.png"} alt="logo" width={30} height={30} />
                <div>
                  <h1 className="font-bold text-primary -mb-1 flex items-center gap-1">
                    UP <MoveUpRight size={15} />
                  </h1>
                  <h1 className="font-bold text-primary -mt-1">STORE</h1>
                </div>
              </div>

              <div className="space-y-8">
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-primary/60 mb-1">
                      {company.phone.title}
                    </p>
                    <p className="font-semibold text-primary/60 text-lg">
                      {company.phone.numbers.join(", ")}
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-primary">
                    {company.contact.title}
                  </h4>
                  <p className="text-sm text-primary/60">
                    {company.contact.address}
                  </p>
                </div>

                {/* Social Icons */}
                <div className="flex flex-wrap gap-2">
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
                    {/* Pinterest SVG */}
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
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
              </div>
            </div>

            {/* Find It Fast Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">
                {navigation.findItFast.title}
              </h3>
              <ul className="space-y-3">
                {navigation.findItFast.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-primary/60 hover:text-primary/80 transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* About Section */}
            <div className="space-y-4">
              <h3 className="min-h-[2rem]">
                <span className=""></span>
              </h3>
              <ul className="space-y-3">
                {navigation.about.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-primary/60 hover:text-primary/80 transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Customer Care Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary/80">
                {navigation.customerCare.title}
              </h3>
              <ul className="space-y-3">
                {navigation.customerCare.links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-primary/60 hover:text-primary/80 transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Section */}
      <div className="bg-foreground/10 py-1 px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          <div className="text-sm text-primary/60">{footer.copyright}</div>
          <div>
            <Image
              src={footer.paymentImage.src}
              alt={footer.paymentImage.alt}
              width={footer.paymentImage.width}
              height={footer.paymentImage.height}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LgFooter;
