import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

const Blog = () => {
  const articles = [
    {
      title: 'آینده هوش مصنوعی در کسب‌وکارهای کوچک',
      excerpt: 'بررسی روندها و فرصت‌های پیش روی کسب‌وکارهای کوچک در استفاده از هوش مصنوعی و چگونگی آماده شدن برای این تحول.',
      date: '۱۵ اسفند ۱۴۰۳',
      readTime: '۸ دقیقه',
      category: 'روندها',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop'
    },
    {
      title: '۱۰ ابزار هوش مصنوعی که هر کسب‌وکاری باید بشناسد',
      excerpt: 'معرفی بهترین ابزارهای هوش مصنوعی برای افزایش بهره‌وری، اتوماسیون و بهبود خدمات در کسب‌وکار شما.',
      date: '۱۰ اسفند ۱۴۰۳',
      readTime: '۱۲ دقیقه',
      category: 'ابزارها',
      image: 'https://images.unsplash.com/photo-1676277791608-ac5b066c43b0?w=800&auto=format&fit=crop'
    },
    {
      title: 'چگونه با هوش مصنوعی هزینه‌های عملیاتی را کاهش دهیم؟',
      excerpt: 'راهکارهای عملی برای استفاده از هوش مصنوعی در کاهش هزینه‌ها و افزایش سودآوری کسب‌وکار.',
      date: '۵ اسفند ۱۴۰۳',
      readTime: '۱۰ دقیقه',
      category: 'راهکارها',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop'
    }
  ];

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            مقالات آموزشی
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            آخرین مقالات، راهنماها و بینش‌های ما درباره هوش مصنوعی و کسب‌وکار
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article
              key={index}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-2xl hover:border-blue-300 transition-all duration-300 group cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {article.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>

                {/* Read More */}
                <Button 
                  variant="ghost" 
                  className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-0 h-auto group/btn"
                >
                  ادامه مطلب
                  <ArrowLeft className="mr-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
          >
            مشاهده همه مقالات
            <ArrowLeft className="mr-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
