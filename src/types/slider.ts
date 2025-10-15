export default interface ProductSlide {
  id: string;
  image: string;
  title: string;
  subtitle?: string;
  offer?: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}