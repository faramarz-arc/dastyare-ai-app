import { Target, Eye, Award, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'ماموریت ما',
      description: 'دموکراتیزه کردن دسترسی به هوش مصنوعی برای کسب‌وکارهای کوچک و متوسط و کمک به آن‌ها برای رشد و موفقیت در عصر دیجیتال.'
    },
    {
      icon: Eye,
      title: 'چشم‌انداز ما',
      description: 'ایجاد آینده‌ای که در آن هر کسب‌وکاری، صرف‌نظر از اندازه، بتواند از قدرت هوش مصنوعی برای نوآوری و رقابت استفاده کند.'
    },
    {
      icon: Award,
      title: 'تخصص ما',
      description: 'با سال‌ها تجربه در زمینه هوش مصنوعی و مشاوره کسب‌وکار، راه‌حل‌های عملی و اثربخش ارائه می‌دهیم.'
    },
    {
      icon: Users,
      title: 'تعهد ما',
      description: 'موفقیت شما، موفقیت ماست. ما در کنار شما هستیم تا از ایده تا اجرا و پس از آن، همراه و پشتیبان شما باشیم.'
    }
  ];

  const stats = [
    { number: '۵+', label: 'سال تجربه' },
    { number: '۵۰+', label: 'پروژه موفق' },
    { number: '۳۰+', label: 'مشتری راضی' },
    { number: '۱۰۰+', label: 'ساعت آموزش' }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            درباره Dastyare AI
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            همراه شما در مسیر تحول دیجیتال با هوش مصنوعی
          </p>
        </div>

        {/* Main Content */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                چرا Dastyare AI؟
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  در دنیای امروز، هوش مصنوعی دیگر یک تکنولوژی آینده نیست، بلکه یک ضرورت امروز است. 
                  اما بسیاری از کسب‌وکارهای کوچک و متوسط نمی‌دانند از کجا شروع کنند یا چگونه از این 
                  تکنولوژی قدرتمند بهره ببرند.
                </p>
                <p>
                  <strong>Dastyare AI</strong> با هدف پر کردن این شکاف ایجاد شده است. ما معتقدیم که هر کسب‌وکاری، 
                  صرف‌نظر از اندازه یا صنعت، می‌تواند از قدرت هوش مصنوعی برای بهبود فرآیندها، افزایش 
                  بهره‌وری و رشد سریع‌تر استفاده کند.
                </p>
                <p>
                  ما نه تنها مشاور شما هستیم، بلکه شریک شما در مسیر تحول دیجیتال. از تحلیل نیازها تا 
                  پیاده‌سازی و آموزش، در هر مرحله در کنار شما خواهیم بود.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-300 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg flex items-center justify-center mb-4">
                <value.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                {value.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-600 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
