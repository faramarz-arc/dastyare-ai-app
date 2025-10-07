import { Brain, Rocket, GraduationCap, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: 'مشاوره هوش مصنوعی',
      description: 'تحلیل نیازهای کسب‌وکار شما و ارائه راهکارهای هوش مصنوعی متناسب با اهداف و بودجه شما.',
      features: [
        'تحلیل فرآیندهای کسب‌وکار',
        'شناسایی فرصت‌های بهبود با AI',
        'طراحی نقشه راه پیاده‌سازی',
        'برآورد هزینه و بازگشت سرمایه'
      ],
      link: '/services/consulting'
    },
    {
      icon: Rocket,
      title: 'راه‌اندازی هوش مصنوعی کاربردی',
      description: 'پیاده‌سازی و راه‌اندازی راه‌حل‌های هوش مصنوعی در کسب‌وکار شما از ایده تا اجرا.',
      features: [
        'اتوماسیون فرآیندها با AI',
        'چت‌بات‌های هوشمند',
        'تحلیل داده و پیش‌بینی',
        'یکپارچه‌سازی با سیستم‌های موجود'
      ],
      link: '/services/implementation'
    },
    {
      icon: GraduationCap,
      title: 'آموزش تخصصی',
      description: 'آموزش کاربردی هوش مصنوعی به تیم شما برای استفاده بهینه از ابزارها و تکنولوژی‌های AI.',
      features: [
        'آموزش استفاده از ابزارهای AI',
        'کارگاه‌های عملی',
        'مشاوره مستمر',
        'منابع آموزشی اختصاصی'
      ],
      link: '/services/training'
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            خدمات ما
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            راه‌حل‌های جامع هوش مصنوعی برای رشد و موفقیت کسب‌وکار شما
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl hover:border-blue-300 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-8 h-8 text-blue-600" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link to={service.link}>
                <Button 
                  variant="ghost" 
                  className="w-full text-blue-600 hover:text-blue-700 hover:bg-blue-50 group/btn"
                >
                  اطلاعات بیشتر
                  <ArrowLeft className="mr-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
