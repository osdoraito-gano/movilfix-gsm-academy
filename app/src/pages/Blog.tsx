import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Blog = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Blog Técnico</h1>
        <p className="text-slate-400 text-lg mb-8">
          Próximamente: artículos sobre diagnóstico, microsoldadura, casos reales y consejos para técnicos.
        </p>
        <Link to="/">
          <Button className="bg-cyan-500 hover:bg-cyan-600">
            Volver al inicio
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Blog;