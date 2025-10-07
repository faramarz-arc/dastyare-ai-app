import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: 'سلام! به Dastyare AI خوش آمدید 👋 چطور می‌تونم کمکتون کنم؟'
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const quickReplies = [
    'خدمات شما چیست؟',
    'هزینه مشاوره چقدر است؟',
    'چگونه شروع کنم؟',
    'آموزش‌ها رایگان است؟'
  ];

  const botResponses = {
    'خدمات شما چیست؟': 'ما سه خدمت اصلی ارائه می‌دهیم:\n\n1️⃣ مشاوره هوش مصنوعی\n2️⃣ راه‌اندازی هوش مصنوعی کاربردی\n3️⃣ آموزش تخصصی\n\nبرای اطلاعات بیشتر می‌تونید به بخش خدمات مراجعه کنید یا با ما تماس بگیرید.',
    'هزینه مشاوره چقدر است؟': 'جلسه مشاوره اولیه کاملاً رایگان است! 🎉\n\nدر این جلسه نیازهای شما رو بررسی می‌کنیم و بهترین راه‌حل رو پیشنهاد می‌دیم. برای دریافت مشاوره رایگان، فرم تماس رو پر کنید.',
    'چگونه شروع کنم؟': 'شروع کار خیلی سادست! 🚀\n\n1. فرم درخواست مشاوره رو پر کنید\n2. با تیم ما تماس بگیرید\n3. جلسه مشاوره رایگان داشته باشید\n4. شروع به کار کنید!\n\nمی‌خواید الان شروع کنیم؟',
    'آموزش‌ها رایگان است؟': 'بخشی از آموزش‌های ما رایگان و بخشی پولی هستند. 📚\n\nآموزش‌های رایگان در وب‌سایت در دسترس هستند. برای آموزش‌های تخصصی و کارگاه‌های عملی، با ما تماس بگیرید.',
    'default': 'متوجه نشدم! 🤔 لطفاً یکی از گزینه‌های زیر رو انتخاب کنید یا با ما تماس بگیرید:\n\n📧 info@karai.ir\n📞 ۰۲۱-۱۲۳۴۵۶۷۸'
  };

  const handleSend = (text = inputValue) => {
    if (!text.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { type: 'user', text }]);
    setInputValue('');

    // Simulate bot response
    setTimeout(() => {
      const response = botResponses[text] || botResponses['default'];
      setMessages(prev => [...prev, { type: 'bot', text: response }]);
    }, 500);
  };

  const handleQuickReply = (reply) => {
    handleSend(reply);
  };

  return (
    <>
      {/* Chatbot Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 left-6 w-16 h-16 bg-gradient-to-r from-blue-900 to-blue-600 text-white rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 flex items-center justify-center z-50 animate-bounce"
        >
          <MessageCircle className="w-7 h-7" />
        </button>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-6 left-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 animate-fade-in-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <div className="font-bold">دستیار Dastyare AI</div>
                <div className="text-xs text-blue-100">آنلاین</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 rounded-lg p-2 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl whitespace-pre-line ${
                    message.type === 'user'
                      ? 'bg-blue-600 text-white rounded-br-sm'
                      : 'bg-gray-100 text-gray-800 rounded-bl-sm'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}

            {/* Quick Replies */}
            {messages.length <= 2 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {quickReplies.map((reply, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickReply(reply)}
                    className="text-sm px-3 py-2 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-colors"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="پیام خود را بنویسید..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              <Button
                onClick={() => handleSend()}
                className="bg-gradient-to-r from-blue-900 to-blue-600 hover:from-blue-800 hover:to-blue-500 rounded-full w-10 h-10 p-0"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
