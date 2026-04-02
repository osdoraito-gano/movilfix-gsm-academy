import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (!message.trim()) return;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/521234567890?text=${encodedMessage}`, '_blank');
    setMessage('');
    setIsOpen(false);
  };

  const quickMessages = [
    'Quiero información sobre los cursos',
    '¿Tienen cursos presenciales?',
    'Necesito ayuda con mi compra',
    'Quiero ser instructor',
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4">
          {/* Header */}
          <div className="bg-green-500 p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="text-white font-semibold">MovilFix GSM Academy</h4>
              <p className="text-green-100 text-sm">Respondemos en minutos</p>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-slate-50">
            <p className="text-slate-600 text-sm mb-4">
              ¡Hola! 👋 ¿En qué podemos ayudarte?
            </p>
            
            {/* Quick Messages */}
            <div className="space-y-2 mb-4">
              {quickMessages.map((msg, idx) => (
                <button
                  key={idx}
                  onClick={() => setMessage(msg)}
                  className="w-full text-left p-3 bg-white rounded-lg text-sm text-slate-700 hover:bg-green-50 hover:text-green-700 transition-colors border border-slate-200"
                >
                  {msg}
                </button>
              ))}
            </div>

            {/* Custom Message */}
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Escribe tu mensaje..."
                className="flex-1 px-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <Button 
                onClick={handleSend}
                className="bg-green-500 hover:bg-green-600 text-white px-3"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
          isOpen 
            ? 'bg-slate-700 rotate-90' 
            : 'bg-green-500 hover:bg-green-600 hover:scale-110'
        }`}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-7 h-7 text-white" />
        )}
      </button>
    </div>
  );
};

export default WhatsAppWidget;
