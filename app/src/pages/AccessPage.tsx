import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';

const AccessPage = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState<any[]>([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  // Cargar usuarios registrados desde localStorage
  useEffect(() => {
    const stored = localStorage.getItem('registered_users');
    if (stored) setUsers(JSON.parse(stored));
  }, []);

  const saveUsers = (newUsers: any[]) => {
    localStorage.setItem('registered_users', JSON.stringify(newUsers));
    setUsers(newUsers);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password || !name) {
      toast.error('Completa todos los campos');
      return;
    }
    if (users.find(u => u.email === email)) {
      toast.error('El usuario ya existe');
      return;
    }
    const newUser = { email, password, name, registeredAt: new Date().toISOString() };
    const updated = [...users, newUser];
    saveUsers(updated);
    toast.success('Registro exitoso. Ahora inicia sesión.');
    setEmail('');
    setPassword('');
    setName('');
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      localStorage.setItem('current_user', JSON.stringify(user));
      toast.success(`Bienvenido ${user.name}`);
      navigate('/');
    } else {
      toast.error('Credenciales incorrectas');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center py-20 px-4">
      <Card className="w-full max-w-md bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-2xl text-center text-white">Acceso a la Academia</CardTitle>
          <p className="text-center text-slate-400 text-sm">
            Regístrate para acceder a tus cursos
          </p>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-slate-700">
              <TabsTrigger value="login">Iniciar Sesión</TabsTrigger>
              <TabsTrigger value="register">Registrarse</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <form onSubmit={handleLogin} className="space-y-4 mt-4">
                <Input
                  type="email"
                  placeholder="Correo electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-slate-700 border-slate-600 text-white"
                  required
                />
                <Input
                  type="password"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-slate-700 border-slate-600 text-white"
                  required
                />
                <Button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-600">
                  Ingresar
                </Button>
              </form>
            </TabsContent>
            <TabsContent value="register">
              <form onSubmit={handleRegister} className="space-y-4 mt-4">
                <Input
                  type="text"
                  placeholder="Nombre completo"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-slate-700 border-slate-600 text-white"
                  required
                />
                <Input
                  type="email"
                  placeholder="Correo electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-slate-700 border-slate-600 text-white"
                  required
                />
                <Input
                  type="password"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-slate-700 border-slate-600 text-white"
                  required
                />
                <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600">
                  Registrarse
                </Button>
              </form>
            </TabsContent>
          </Tabs>
          <div className="mt-6 text-center text-slate-400 text-xs">
            Usuarios registrados: {users.length}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AccessPage;