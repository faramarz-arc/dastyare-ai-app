import { useState } from 'react';
import { Mail, Phone, Send, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    serviceType: 'مشاوره'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // در اینجا می‌توانید لاجیک ارسال فرم را اضافه کنید
    alert('درخواست شما با موفقیت ارسال شد! به زودی با شما تماس خواهیم گرفت.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
      serviceType: 'مشاوره'
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            تماس با ما
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            آماده‌ایم تا درباره نیازهای کسب‌وکار شما صحبت کنیم و بهترین راه‌حل را پیشنهاد دهیم
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              درخواست مشاوره رایگان
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  نام و نام خانوادگی *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="نام خود را وارد کنید"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  ایمیل *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="example@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  شماره تماس *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                />
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  نام کسب‌وکار
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="نام شرکت یا کسب‌وکار خود"
                />
              </div>

              {/* Service Type */}
              <div>
                <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                  نوع خدمات مورد نیاز *
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  required
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="مشاوره">مشاوره هوش مصنوعی</option>
                  <option value="راه‌اندازی">راه‌اندازی هوش مصنوعی</option>
                  <option value="آموزش">آموزش تخصصی</option>
                  <option value="سایر">سایر موارد</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  توضیحات
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="لطفاً نیازها و اهداف خود را توضیح دهید..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-blue-900 to-blue-600 hover:from-blue-800 hover:to-blue-500 text-white py-6 text-lg"
              >
                ارسال درخواست
                <Send className="mr-2 w-5 h-5" />
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Info Card */}
            <div className="bg-gradient-to-br from-blue-900 to-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">اطلاعات تماس</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-medium mb-1">ایمیل</div>
                    <a href="mailto:info@karai.ir" className="text-blue-100 hover:text-white transition-colors">
                      info@karai.ir
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-medium mb-1">تلفن</div>
                    <a href="tel:+982112345678" className="text-blue-100 hover:text-white transition-colors">
                      ۰۲۱-۱۲۳۴۵۶۷۸
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-medium mb-1">آدرس</div>
                    <p className="text-blue-100">
                      تهران، خیابان ولیعصر، پلاک ۱۲۳۴
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Card */}
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                سؤالات متداول
              </h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-medium text-gray-900 mb-1">⏱️ زمان پاسخگویی چقدر است؟</p>
                  <p className="text-gray-600">معمولاً ظرف ۲۴ ساعت پاسخ می‌دهیم.</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900 mb-1">💰 مشاوره اولیه رایگان است؟</p>
                  <p className="text-gray-600">بله، جلسه مشاوره اولیه کاملاً رایگان است.</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900 mb-1">🌍 خدمات آنلاین ارائه می‌دهید؟</p>
                  <p className="text-gray-600">بله، تمام خدمات به صورت حضوری و آنلاین ارائه می‌شود.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
