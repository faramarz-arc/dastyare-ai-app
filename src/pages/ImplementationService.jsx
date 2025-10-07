import { ArrowRight, CheckCircle2, Zap, Code, Database, Bot, Phone, Rocket } from 'lucide-react';
import { Button } from '../components/ui/button';

export default function ImplementationService() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const solutions = [
    {
      icon: Bot,
      title: 'چت‌بات هوشمند',
      description: 'ساخت و راه‌اندازی چت‌بات‌های هوشمند برای پاسخگویی خودکار به مشتریان',
      features: ['پاسخ ۲۴/۷', 'یکپارچه با وب‌سایت', 'آموزش سفارشی']
    },
    {
      icon: Zap,
      title: 'اتوماسیون فرآیندها',
      description: 'خودکارسازی فرآیندهای تکراری و زمان‌بر با هوش مصنوعی',
      features: ['صرفه‌جویی زمان', 'کاهش خطا', 'افزایش سرعت']
    },
    {
      icon: Database,
      title: 'تحلیل داده',
      description: 'تحلیل هوشمند داده‌ها و ارائه بینش‌های کاربردی برای تصمیم‌گیری',
      features: ['پیش‌بینی روند', 'گزارش‌های خودکار', 'داشبورد تحلیلی']
    },
    {
      icon: Code,
      title: 'یکپارچه‌سازی API',
      description: 'اتصال و یکپارچه‌سازی ابزارهای AI با سیستم‌های موجود شما',
      features: ['سازگار با سیستم‌ها', 'امنیت بالا', 'پشتیبانی کامل']
    }
  ];

  const process = [
    {
      step: '۱',
      title: 'تحلیل نیازها',
      description: 'بررسی دقیق نیازها و اهداف پروژه'
    },
    {
      step: '۲',
      title: 'طراحی راه‌حل',
      description: 'طراحی معماری و انتخاب تکنولوژی مناسب'
    },
    {
      step: '۳',
      title: 'توسعه و تست',
      description: 'پیاده‌سازی، تست و بهینه‌سازی'
    },
    {
      step: '۴',
      title: 'استقرار',
      description: 'راه‌اندازی در محیط واقعی'
    },
    {
      step: '۵',
      title: 'آموزش',
      description: 'آموزش تیم و تحویل مستندات'
    },
    {
      step: '۶',
      title: 'پشتیبانی',
      description: 'پشتیبانی و نگهداری مستمر'
    }
  ];

  const projects = [
    {
      title: 'چت‌بات فروشگاه آنلاین',
      description: 'پاسخگویی خودکار به سؤالات مشتریان و راهنمایی خرید',
      result: '۷۰٪ کاهش زمان پاسخگویی'
    },
    {
      title: 'سیستم تحلیل احساسات',
      description: 'تحلیل نظرات مشتریان در شبکه‌های اجتماعی',
      result: '۵۰٪ افزایش رضایت مشتری'
    },
    {
      title: 'اتوماسیون بازاریابی',
      description: 'ارسال خودکار ایمیل‌های شخصی‌سازی شده',
      result: '۳۰۰٪ افزایش نرخ تبدیل'
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
            خدمات پیاده‌سازی
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            راه‌اندازی هوش مصنوعی کاربردی
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            از ایده تا اجرا، راه‌حل‌های هوش مصنوعی را در کسب‌وکار خود پیاده‌سازی کنید و شاهد تحول واقعی باشید.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button onClick={() => window.location.href = '/#contact'} size="lg" className="bg-blue-600 hover:bg-blue-700">
              شروع پروژه
              <Rocket className="mr-2 h-5 w-5" />
            </Button>
            <Button onClick={() => scrollToSection('solutions')} size="lg" variant="outline">
              مشاهده راه‌حل‌ها
            </Button>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">راه‌حل‌های ما</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mb-4">
                  <solution.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <div className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">فرآیند پیاده‌سازی</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
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

      {/* Projects */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4">نمونه پروژه‌ها</h2>
          <p className="text-center text-gray-600 mb-12">موفقیت‌های واقعی مشتریان ما</p>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="pt-4 border-t border-blue-200">
                  <div className="text-2xl font-bold text-blue-600">{project.result}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">چرا ما را انتخاب کنید؟</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">۵+</div>
              <div className="text-gray-600">سال تجربه</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">۵۰+</div>
              <div className="text-gray-600">پروژه موفق</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">۹۵٪</div>
              <div className="text-gray-600">رضایت مشتریان</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            پروژه خود را شروع کنید
          </h2>
          <p className="text-xl mb-8 opacity-90">
            با تیم متخصص ما، ایده خود را به واقعیت تبدیل کنید
          </p>
          <Button 
            onClick={() => window.location.href = '/#contact'} 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100"
          >
            <Phone className="ml-2 h-5 w-5" />
            تماس با ما
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
