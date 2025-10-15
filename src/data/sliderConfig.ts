import ProductSlide from "@/types/slider";

export const products: ProductSlide[] = [
  {
    id: '1',
    image: '/products/productPic.jpg',
    title: 'TIMEPIECES THAT MAKE A STATEMENT',
    subtitle: 'SHOP TO GET WHAT YOU LOVE',
    offer: 'UP TO 40% OFF',
    buttonText: 'Start Buying',
    onButtonClick: () => console.log('Timepieces - Start buying clicked!')
  },
  {
    id: '2',
    image: '/products/productPic.jpg',
    title: 'PREMIUM HEADPHONES THAT MAKE A STATEMENT', 
    subtitle: 'SHOP TO GET WHAT YOU LOVE',
    offer: 'UP TO 40% OFF',
    buttonText: 'Start Buying',
    onButtonClick: () => console.log('Headphones - Start buying clicked!')
  },
  {
    id: '3',
    image: '/products/productPic.jpg',
    title: 'SMART DEVICES THAT MAKE A STATEMENT',
    subtitle: 'SHOP TO GET WHAT YOU LOVE', 
    offer: 'UP TO 40% OFF',
    buttonText: 'Start Buying',
    onButtonClick: () => console.log('Smart Devices - Start buying clicked!')
  }
];
