// footerData.tsx
export interface FooterData {
  newsletter: {
    title: string;
    subtitle: string;
    couponText: string;
    placeholder: string;
    buttonText: string;
  };
  company: {
    logo: string;
    name: string;
    phone: {
      title: string;
      numbers: string[];
    };
    contact: {
      title: string;
      address: string;
    };
  };
  socialMedia: {
    facebook: string;
    whatsapp: string;
    Pin: string;
    linkedin: string;
    instagram: string;
    youtube: string;
    rss: string;
  };
  navigation: {
    weRecommend: {
      title: string;
      links: { label: string; href: string }[];
    };
    myAccount: {
      title: string;
      links: { label: string; href: string }[];
    };
    customerCare: {
      title: string;
      links: { label: string; href: string }[];
    };
    aboutUs: {
      title: string;
      links: { label: string; href: string }[];
    };
    findItFast: {
      title: string;
      links: { label: string; href: string }[];
    };
    about: {
      links: { label: string; href: string }[];
    };
  };
  footer: {
    copyright: string;
    paymentImage: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
  };
}

export const footerData: FooterData = {
  newsletter: {
    title: "Sign up to Newsletter",
    subtitle: "...and receive",
    couponText: "$20 coupon for first shopping",
    placeholder: "Enter your email address",
    buttonText: "SignUp",
  },
  company: {
    logo: "e",
    name: "electro",
    phone: {
      title: "Got Questions ? Call us 24/7!",
      numbers: ["(800) 8001-8588", "(0600) 874 548"],
    },
    contact: {
      title: "Contact Info",
      address: "17 Princess Road, London, Greater London NW1 8JR, UK",
    },
  },
  socialMedia: {
    facebook: "#",
    whatsapp: "#",
    Pin: "#",
    linkedin: "#",
    instagram: "#",
    youtube: "#",
    rss: "#",
  },
  navigation: {
    weRecommend: {
      title: "We Recommend",
      links: [
        { label: "Featured Products", href: "#" },
        { label: "Best Sellers", href: "#" },
        { label: "New Arrivals", href: "#" },
        { label: "Special Offers", href: "#" },
      ],
    },
    myAccount: {
      title: "My Account",
      links: [
        { label: "Sign In", href: "#" },
        { label: "Register", href: "#" },
        { label: "My Orders", href: "#" },
        { label: "My Wishlist", href: "#" },
      ],
    },
    customerCare: {
      title: "Customer Care",
      links: [
        { label: "My Account", href: "#" },
        { label: "Track your Order", href: "#" },
        { label: "Customer Service", href: "#" },
        { label: "Returns/Exchange", href: "#" },
        { label: "FAQs", href: "#" },
        { label: "Product Support", href: "#" },
      ],
    },
    aboutUs: {
      title: "About Us",
      links: [
        { label: "Our Story", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Press", href: "#" },
        { label: "Contact Us", href: "#" },
      ],
    },
    findItFast: {
      title: "Find It Fast",
      links: [
        { label: "Laptops & Computers", href: "#" },
        { label: "Cameras & Photography", href: "#" },
        { label: "Smart Phones & Tablets", href: "#" },
        { label: "Video Games & Consoles", href: "#" },
        { label: "TV & Audio", href: "#" },
        { label: "Gadgets", href: "#" },
        { label: "Waterproof Headphones", href: "#" },
      ],
    },
    about: {
      links: [
        { label: "About", href: "#" },
        { label: "Contact", href: "#" },
        { label: "Wishlist", href: "#" },
        { label: "Compare", href: "#" },
        { label: "FAQ", href: "#" },
        { label: "Store Directory", href: "#" },
      ],
    },
  },
  footer: {
    copyright: "© Electro - All Rights Reserved",
    paymentImage: {
      src: "/footer/payment-icon1.webp",
      alt: "Payment Icons",
      width: 300,
      height: 60,
    },
  },
};