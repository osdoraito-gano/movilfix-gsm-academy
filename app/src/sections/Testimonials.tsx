import { useRef } from 'react';
import { ThumbsUp, MessageCircle, Heart, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface Testimonial {
  id: number;
  name: string;
  username: string;
  avatar: string;
  country: string;
  content: string;
  likes: number;
  replies: number;
  hasReplies?: boolean;
  replyContent?: string;
  replyUser?: string;
  replyAvatar?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Carlos Mendoza',
    username: '@carlostecno',
    avatar: 'CM',
    country: 'México',
    content: 'El mejor curso que he visto en internet. Explicas demasiado bien, gracias por compartir tus conocimientos.',
    likes: 24,
    replies: 3,
  },
  {
    id: 2,
    name: 'María González',
    username: '@mariarepara',
    avatar: 'MG',
    country: 'Colombia',
    content: 'Muy buena forma de enseñar. Saludos desde Colombia amigo, eres un crack master, estoy aprendiendo mucho de usted.',
    likes: 18,
    replies: 2,
    hasReplies: true,
    replyUser: '@josealberto',
    replyAvatar: 'JA',
    replyContent: 'Gracias amigo, super buena la explicación fue de mucha ayuda bendiciones mi amigo',
  },
  {
    id: 3,
    name: 'Luis Ramírez',
    username: '@luistec',
    avatar: 'LR',
    country: 'Perú',
    content: 'Eres un capo. Explicas demasiado bien. Saludos de Perú! Estoy estudiando reparación de celulares y me ayudó muchísimo tus videos.',
    likes: 32,
    replies: 5,
  },
  {
    id: 4,
    name: 'Ana Silva',
    username: '@anatec',
    avatar: 'AS',
    country: 'Brasil',
    content: 'Muy muy buena tu explicación estoy estudiando reparación de celulares y estoy en clases de software y me ayudó muchísimo.',
    likes: 15,
    replies: 1,
    hasReplies: true,
    replyUser: '@cesarvelasquez',
    replyAvatar: 'CV',
    replyContent: 'Master muchas gracias por su gran explicación Dios le siga dando salud y sabiduría. Saludos desde PERU',
  },
  {
    id: 5,
    name: 'Pedro Sánchez',
    username: '@pedrotecno',
    avatar: 'PS',
    country: 'Argentina',
    content: 'Eres lo máximo brother! Gracias por compartir tanto conocimiento de forma gratuita.',
    likes: 21,
    replies: 2,
  },
  {
    id: 6,
    name: 'Eduardo Jiménez',
    username: '@eduarddjec',
    avatar: 'EJ',
    country: 'Ecuador',
    content: 'Bien explicado profe, gracias saludos desde Ecuador. Tu curso me cambió la vida profesional.',
    likes: 28,
    replies: 4,
  },
  {
    id: 7,
    name: 'Roberto Díaz',
    username: '@robertotec',
    avatar: 'RD',
    country: 'Chile',
    content: 'Profe Dios lo bendiga y siga compartiendo más conocimientos, muchas gracias por sus enseñanzas.',
    likes: 19,
    replies: 2,
    hasReplies: true,
    replyUser: '@missargentina',
    replyAvatar: 'MA',
    replyContent: 'Hola profe, Dios los bendiga en abundancia. Gracias!!! Estoy aprendiendo muchísimo con UD. Saludos desde Argentina',
  },
  {
    id: 8,
    name: 'Juan Pérez',
    username: '@juanpereztec',
    avatar: 'JP',
    country: 'Bolivia',
    content: 'Gracias hermanos por tus conocimientos saludos desde Cancún México y que Dios te bendiga.',
    likes: 12,
    replies: 1,
  },
];

const countryFlags: Record<string, string> = {
  'México': '🇲🇽',
  'Colombia': '🇨🇴',
  'Perú': '🇵🇪',
  'Brasil': '🇧🇷',
  'Argentina': '🇦🇷',
  'Ecuador': '🇪🇨',
  'Chile': '🇨🇱',
  'Bolivia': '🇧🇴',
  'Guatemala': '🇬🇹',
  'Panamá': '🇵🇦',
};

const getAvatarColor = (name: string) => {
  const colors = [
    'bg-red-500', 'bg-orange-500', 'bg-amber-500', 'bg-yellow-500',
    'bg-lime-500', 'bg-green-500', 'bg-emerald-500', 'bg-teal-500',
    'bg-cyan-500', 'bg-sky-500', 'bg-blue-500', 'bg-indigo-500',
    'bg-violet-500', 'bg-purple-500', 'bg-fuchsia-500', 'bg-pink-500',
  ];
  const index = name.charCodeAt(0) % colors.length;
  return colors[index];
};

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
              <Quote className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Testimonios <span className="text-cyan-400"> </span>
            </h2>
          </div>
          <p className="text-slate-400 text-lg">
            ✍️ Experiencias reales de estudiantes de MovilFix GSM Academy

          </p>
        </div>

        {/* Country Flags */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {Object.entries(countryFlags).map(([country, flag]) => (
            <div 
              key={country}
              className="flex items-center gap-2 bg-slate-800 px-3 py-2 rounded-full hover:bg-slate-700 transition-colors cursor-pointer"
            >
              <span className="text-2xl">{flag}</span>
              <span className="text-slate-300 text-sm">{country}</span>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div 
          ref={scrollRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id}
              className="bg-slate-100 border-0 hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-4">
                {/* Header */}
                <div className="flex items-start gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-full ${getAvatarColor(testimonial.avatar)} flex items-center justify-center text-white font-bold`}>
                    {testimonial.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-slate-900 text-sm truncate">
                      {testimonial.username}
                    </p>
                    <p className="text-slate-500 text-xs">
                      {countryFlags[testimonial.country]} {testimonial.country}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <p className="text-slate-700 text-sm mb-4 line-clamp-4">
                  {testimonial.content}
                </p>

                {/* Actions */}
                <div className="flex items-center gap-4 text-slate-500">
                  <button className="flex items-center gap-1 hover:text-slate-700 transition-colors">
                    <ThumbsUp className="w-4 h-4" />
                    <span className="text-xs">{testimonial.likes}</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-slate-700 transition-colors">
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-xs">Responder</span>
                  </button>
                  <button className="hover:text-red-500 transition-colors ml-auto">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>

                {/* Reply */}
                {testimonial.hasReplies && testimonial.replyContent && (
                  <div className="mt-4 pt-3 border-t border-slate-200">
                    <div className="flex items-start gap-2">
                      <div className={`w-8 h-8 rounded-full ${getAvatarColor(testimonial.replyAvatar || '')} flex items-center justify-center text-white text-xs font-bold`}>
                        {testimonial.replyAvatar}
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-semibold text-slate-900">
                          {testimonial.replyUser}
                        </p>
                        <p className="text-xs text-slate-600 mt-1">
                          {testimonial.replyContent}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <a 
            href="#testimonios"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            Ver más testimonios
            <MessageCircle className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
