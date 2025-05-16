import { useTranslation } from 'react-i18next';
import ServiceCard from '../ui/ServiceCard';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    'ac',
    'aluminium',
    'battery',
    'building',
    'copper',
    'electronic',
    'machinery',
    'nahaz',
    'office',
    'panels',
    'pipes',
    'portacabin',
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">{t('services.title')}</h2>
          <p className="text-xl text-gray-600">{t('services.subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service}
              image={`/images/services/${service}.jpg`}
              title={t(`services.items.${service}.title`)}
              description={t(`services.items.${service}.description`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 