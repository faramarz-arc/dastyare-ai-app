import { ArrowRight, CheckCircle2, Users, Target, TrendingUp, Shield, Phone } from 'lucide-react';
import { Button } from '../components/ui/button';

export default function ConsultingService() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const benefits = [
    {
      icon: Target,
      title: 'تحلیل دقیق نیازها',
      description: 'شناسایی دقیق نیازها و چالش‌های کسب‌وکار شما و ارائه راهکارهای متناسب'
    },
    {
      icon: TrendingUp,
      title: 'افزایش بهره‌وری',
      description: 'بهینه‌سازی فرآیندها با استفاده از هوش مصنوعی و افزایش بهره‌وری تا ۵۰٪'
    },
    {
      icon: Shield,
      title: 'کاهش ریسک',
      description: 'ارزیابی ریسک‌ها و ارائه راهکارهای امن برای پیاده‌سازی AI'
    },
    {
      icon: Users,
      title: 'مشاوره تخصصی',
      description: 'تیم متخصص با سال‌ها تجربه در کنار شما برای موفقیت پروژه'
    }
  ];

  const process = [
    {
      step: '۱',
      title: 'جلسه اولیه رایگان',
      description: 'آشنایی با کسب‌وکار شما و شنیدن چالش‌ها و اهداف'
    },
    {
      step: '۲',
      title: 'تحلیل و بررسی',
      description: 'تحلیل عمیق فرآیندها، داده‌ها و فرصت‌های بهبود'
    },
    {
      step: '۳',
      title: 'طراحی نقشه راه',
      description: 'ارائه نقشه راه جامع با اولویت‌بندی و برنامه زمانی'
    },
    {
      step: '۴',
      title: 'ارائه گزارش',
      description: 'گزارش کامل با توصیه‌ها، برآورد هزینه و ROI'
    }
  ];

  const packages = [
    {
      name: 'مشاوره پایه',
      price: 'رایگان',
      duration: '۳۰ دقیقه',
      features: [
        'جلسه آنلاین یا حضوری',
        'بررسی اولیه نیازها',
        'پاسخ به سؤالات',
        'راهنمایی کلی'
      ]
    },
    {
      name: 'مشاوره حرفه‌ای',
      price: 'تماس بگیرید',
      duration: '۲ ساعت',
      features: [
        'تحلیل عمیق کسب‌وکار',
        'شناسایی فرصت‌های AI',
        'طراحی نقشه راه اولیه',
        'گزارش مکتوب'
      ],
      popular: true
    },
    {
      name: 'مشاوره جامع',
      price: 'تماس بگیرید',
      duration: '۱ هفته',
      features: [
        'تحلیل کامل فرآیندها',
        'طراحی نقشه راه تفصیلی',
        'برآورد هزینه و ROI',
        'پشتیبانی ۳۰ روزه',
        'ارائه به تیم مدیریت'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Dastyare AI
            </a>
            <Button onClick={() => window.location.href = '/#contact'} className="bg-blue-600 hover:bg-blue-700">
              <Phone className="ml-2 h-4 w-4" />
              تماس با ما
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            خدمات مشاوره
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            مشاوره هوش مصنوعی
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            با راهنمایی متخصصان ما، بهترین راهکارهای هوش مصنوعی را برای کسب‌وکار خود پیدا کنید و با اطمینان قدم در مسیر تحول دیجیتال بگذارید.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button onClick={() => window.location.href = '/#contact'} size="lg" className="bg-blue-600 hover:bg-blue-700">
              درخواست مشاوره رایگان
              <ArrowRight className="mr-2 h-5 w-5" />
            </Button>
            <Button onClick={() => scrollToSection('packages')} size="lg" variant="outline">
              مشاهده پکیج‌ها
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">چرا مشاوره هوش مصنوعی؟</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-4 p-6 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <benefit.icon className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">فرآیند مشاوره</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">پکیج‌های مشاوره</h2>
          <p className="text-center text-gray-600 mb-12">بسته مناسب خود را انتخاب کنید</p>
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div 
                key={index} 
                className={`p-8 rounded-xl border-2 ${
                  pkg.popular 
                    ? 'border-blue-600 shadow-xl scale-105' 
                    : 'border-gray-200 hover:border-blue-300'
                } transition-all relative`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    محبوب‌ترین
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="text-3xl font-bold text-blue-600 mb-1">{pkg.price}</div>
                <div className="text-gray-600 mb-6">{pkg.duration}</div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={() => window.location.href = '/#contact'} 
                  className={`w-full ${
                    pkg.popular 
                      ? 'bg-blue-600 hover:bg-blue-700' 
                      : 'bg-gray-800 hover:bg-gray-900'
                  }`}
                >
                  درخواست مشاوره
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            آماده شروع هستید؟
          </h2>
          <p className="text-xl mb-8 opacity-90">
            با یک جلسه مشاوره رایگان، اولین قدم را برای تحول دیجیتال کسب‌وکار خود بردارید
          </p>
          <Button 
            onClick={() => window.location.href = '/#contact'} 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100"
          >
            <Phone className="ml-2 h-5 w-5" />
            درخواست مشاوره رایگان
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">© ۲۰۲۵ Dastyare AI. تمامی حقوق محفوظ است.</p>
        </div>
      </footer>
    </div>
  );
}
