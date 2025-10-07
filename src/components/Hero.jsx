import { ArrowLeft, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-900">
              راه‌حل‌های هوش مصنوعی برای کسب‌وکار شما
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in-up">
            کسب‌وکار خود را با قدرت
            <br />
            <span className="bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">
              هوش مصنوعی متحول کنید
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            Dastyare AI متخصص پیاده‌سازی راه‌حل‌های هوش مصنوعی برای کسب‌وکارهای کوچک و متوسط است. 
            با استفاده از جدیدترین تکنولوژی‌های AI، بهره‌وری را افزایش دهید، هزینه‌ها را کاهش دهید 
            و رقابتی‌تر شوید.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-400">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-900 to-blue-600 hover:from-blue-800 hover:to-blue-500 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
            >
              مشاوره رایگان دریافت کنید
              <ArrowLeft className="mr-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg"
            >
              خدمات ما را کشف کنید
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in-up animation-delay-600">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">۵۰+</div>
              <div className="text-gray-600">پروژه موفق</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">۹۵٪</div>
              <div className="text-gray-600">رضایت مشتریان</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">۲۴/۷</div>
              <div className="text-gray-600">پشتیبانی</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
