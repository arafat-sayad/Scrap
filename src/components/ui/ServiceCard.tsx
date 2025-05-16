import { ServiceItem } from '../../types';

interface ServiceCardProps extends ServiceItem {
  className?: string;
}

const ServiceCard = ({ image, title, description, className = '' }: ServiceCardProps) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 ${className}`}>
      <div className="relative h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard; 