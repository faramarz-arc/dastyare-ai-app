import { ArrowRight, CheckCircle2, GraduationCap, Users, BookOpen, Award, Phone, Video } from 'lucide-react';
import { Button } from '../components/ui/button';

export default function TrainingService() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const courses = [
    {
      icon: BookOpen,
      title: 'مقدماتی',
      description: 'آشنایی با مفاهیم پایه هوش مصنوعی',
      topics: ['ChatGPT', 'ابزارهای AI', 'کاربردهای روزمره', 'نکات امنیتی'],
      duration: '۸ ساعت',
      level: 'مبتدی'
    },
    {
      icon: GraduationCap,
      title: 'متوسط',
      description: 'استفاده حرفه‌ای از AI در کسب‌وکار',
      topics: ['اتوماسیون', 'تحلیل داده', 'بازاریابی AI', 'مدیریت پروژه'],
      duration: '۱۶ ساعت',
      level: 'متوسط'
    },
    {
      icon: Award,
      title: 'پیشرفته',
      description: 'پیاده‌سازی راه‌حل‌های سفارشی',
      topics: ['API Integration', 'Custom Models', 'Fine-tuning', 'MLOps'],
      duration: '۲۴ ساعت',
      level: 'پیشرفته'
    }
  ];

  const benefits = [
    {
      title: 'آموزش عملی',
      description: 'تمرکز بر پروژه‌های واقعی و کاربردی'
    },
    {
      title: 'مدرک معتبر',
      description: 'دریافت گواهینامه پایان دوره'
    },
    {
      title: 'پشتیبانی مستمر',
      description: 'پاسخگویی به سؤالات بعد از دوره'
    },
    {
      title: 'منابع آموزشی',
      description: 'دسترسی به ویدیوها و مستندات'
    }
  ];

  const formats = [
    {
      icon: Users,
      title: 'حضوری',
      description: 'کلاس‌های حضوری در محل شما یا دفتر ما',
      features: ['تعامل مستقیم', 'پروژه گروهی', 'شبکه‌سازی']
    },
    {
      icon: Video,
      title: 'آنلاین',
      description: 'دوره‌های زنده و تعاملی از راه دور',
      features: ['انعطاف‌پذیر', 'ضبط جلسات', 'هزینه کمتر']
    },
    {
      icon: BookOpen,
      title: 'سفارشی',
      description: 'طراحی دوره متناسب با نیاز سازمان شما',
      features: ['محتوای اختصاصی', 'زمان‌بندی دلخواه', 'مطالعات موردی']
    }
  ];

  const testimonials = [
    {
      name: 'علی محمدی',
      role: 'مدیر بازاریابی',
      text: 'دوره بسیار کاربردی بود. توانستیم فرآیندهای بازاریابی را ۴۰٪ سریع‌تر کنیم.'
    },
    {
      name: 'سارا احمدی',
      role: 'مدیر فروش',
      text: 'آموزش‌های عملی و قابل اجرا. تیم ما الان به راحتی از AI استفاده می‌کنند.'
    },
    {
      name: 'رضا کریمی',
      role: 'صاحب کسب‌وکار',
      text: 'سرمایه‌گذاری ارزشمندی بود. بازگشت سرمایه را در کمتر از ۳ ماه دیدیم.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-2"><img src="/logo.png" alt="Dastyare AI" className="h-10 w-10" /><span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
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
            خدمات آموزشی
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            آموزش تخصصی هوش مصنوعی
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            تیم خود را با آموزش‌های کاربردی و عملی، برای استفاده بهینه از هوش مصنوعی آماده کنید.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button onClick={() => window.location.href = '/#contact'} size="lg" className="bg-blue-600 hover:bg-blue-700">
              ثبت‌نام در دوره
              <ArrowRight className="mr-2 h-5 w-5" />
            </Button>
            <Button onClick={() => scrollToSection('courses')} size="lg" variant="outline">
              مشاهده دوره‌ها
            </Button>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">دوره‌های آموزشی</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="p-6 rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mb-4">
                  <course.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex gap-4 mb-4 text-sm">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">{course.duration}</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full">{course.level}</span>
                </div>
                <div className="space-y-2 mb-6">
                  <div className="font-semibold text-sm text-gray-700 mb-2">سرفصل‌ها:</div>
                  {course.topics.map((topic, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      {topic}
                    </div>
                  ))}
                </div>
                <Button onClick={() => window.location.href = '/#contact'} className="w-full bg-blue-600 hover:bg-blue-700">
                  ثبت‌نام
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formats */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">فرمت‌های آموزشی</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {formats.map((format, index) => (
              <div key={index} className="p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <format.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{format.title}</h3>
                <p className="text-gray-600 mb-4">{format.description}</p>
                <div className="space-y-2">
                  {format.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center justify-center gap-2 text-sm text-gray-700">
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

      {/* Benefits */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">مزایای آموزش با ما</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 rounded-lg border border-gray-200 hover:border-blue-300 transition-all">
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">نظر شرکت‌کنندگان</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 rounded-xl bg-white border border-gray-200 shadow-sm">
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">۱۰۰+</div>
              <div className="text-gray-600">ساعت آموزش</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">۳۰+</div>
              <div className="text-gray-600">شرکت آموزش دیده</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">۲۰۰+</div>
              <div className="text-gray-600">دانشجو</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">۹۸٪</div>
              <div className="text-gray-600">رضایت</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            آماده یادگیری هستید؟
          </h2>
          <p className="text-xl mb-8 opacity-90">
            تیم خود را با مهارت‌های هوش مصنوعی مجهز کنید
          </p>
          <Button 
            onClick={() => window.location.href = '/#contact'} 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100"
          >
            <Phone className="ml-2 h-5 w-5" />
            ثبت‌نام یا مشاوره
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
