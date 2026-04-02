import { X, Calendar, MapPin } from 'lucide-react';
import { useState } from 'react';

const AnnouncementBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white py-2 px-4 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-sm">
        <span className="font-semibold">Siguiente Curso Disponible:</span>
        <MapPin className="w-4 h-4" />
        <span>Reparación de celulares desde cero</span>
        <Calendar className="w-4 h-4 ml-2" />
        <span></span>
        <a 
          href="#cursos" 
          className="ml-4 bg-white text-purple-600 px-3 py-1 rounded-full font-semibold text-xs hover:bg-yellow-300 hover:text-purple-800 transition-colors"
        >
          ¡No te lo puedes perder!
        </a>
      </div>
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 hover:bg-white/20 rounded-full p-1 transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export default AnnouncementBanner;
