import { MessageSquare, TrendingUp, BarChart3, Bot, FileText, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

const Tutorials = () => {
  const tutorials = [
    {
      icon: MessageSquare,
      title: 'چگونه ChatGPT را در کسب‌وکار خود استفاده کنیم؟',
      description: 'راهنمای جامع استفاده از ChatGPT برای بهبود بهره‌وری، تولید محتوا و خدمات مشتریان.',
      duration: '۳۰ دقیقه',
      level: 'مقدماتی'
    },
    {
      icon: TrendingUp,
      title: 'اتوماسیون بازاریابی با هوش مصنوعی',
      description: 'یاد بگیرید چگونه کمپین‌های بازاریابی خود را با ابزارهای AI خودکار و بهینه کنید.',
      duration: '۴۵ دقیقه',
      level: 'متوسط'
    },
    {
      icon: BarChart3,
      title: 'تحلیل داده مشتریان با AI',
      description: 'روش‌های استفاده از هوش مصنوعی برای تحلیل رفتار مشتریان و پیش‌بینی فروش.',
      duration: '۵۰ دقیقه',
      level: 'پیشرفته'
    },
    {
      icon: Bot,
      title: 'ساخت چت‌بات برای خدمات مشتریان',
      description: 'آموزش گام به گام ساخت و راه‌اندازی چت‌بات هوشمند برای پاسخگویی به مشتریان.',
      duration: '۶۰ دقیقه',
      level: 'متوسط'
    },
    {
      icon: FileText,
      title: 'بهینه‌سازی محتوا با هوش مصنوعی',
      description: 'تکنیک‌های استفاده از AI برای تولید و بهینه‌سازی محتوای وب، سئو و شبکه‌های اجتماعی.',
      duration: '۴۰ دقیقه',
      level: 'مقدماتی'
    }
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case 'مقدماتی':
        return 'bg-green-100 text-green-700';
      case 'متوسط':
        return 'bg-blue-100 text-blue-700';
      case 'پیشرفته':
        return 'bg-purple-100 text-purple-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <section id="tutorials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            آموزش‌های کاربردی
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            با آموزش‌های عملی ما، مهارت‌های استفاده از هوش مصنوعی در کسب‌وکار را بیاموزید
          </p>
        </div>

        {/* Tutorials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutorials.map((tutorial, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-blue-300 transition-all duration-300 group cursor-pointer"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <tutorial.icon className="w-6 h-6 text-blue-600" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {tutorial.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                {tutorial.description}
              </p>

              {/* Meta Info */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-500">⏱️ {tutorial.duration}</span>
                <span className={`text-xs px-3 py-1 rounded-full font-medium ${getLevelColor(tutorial.level)}`}>
                  {tutorial.level}
                </span>
              </div>

              {/* CTA */}
              <Button 
                variant="ghost" 
                className="w-full text-blue-600 hover:text-blue-700 hover:bg-blue-50 group/btn"
              >
                شروع آموزش
                <ArrowLeft className="mr-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}

          {/* Add More Card */}
          <div className="bg-gradient-to-br from-blue-100 to-blue-50 border-2 border-dashed border-blue-300 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:border-blue-400 transition-colors cursor-pointer">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">➕</span>
            </div>
            <h3 className="text-lg font-bold text-blue-900 mb-2">
              آموزش‌های بیشتر به زودی
            </h3>
            <p className="text-sm text-blue-700">
              به زودی آموزش‌های جدید اضافه خواهد شد
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tutorials;
