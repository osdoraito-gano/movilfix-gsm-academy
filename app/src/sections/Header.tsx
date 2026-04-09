import logo from "../assets/logo-movilfix.png";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Sparkles, Store, Users, Newspaper, Link2, ShoppingCart } from "lucide-react";
import { Button } from "../components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";

interface HeaderProps {
  cartCount: number;
}

interface NavLink {
  label: string;
  href: string;
  icon?: any;
  highlight?: boolean;
}

const Header = ({ cartCount }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks: NavLink[] = [
    { label: "Cursos Gratis", href: "/curso-gratis" },
    { label: "Cursos Premium", href: "/curso-premium", icon: Sparkles, highlight: true },
    { label: "Tienda Online", href: "/tienda", icon: Store },
    { label: "Sobre Nosotros", href: "/sobre-nosotros", icon: Users },
    { label: "Blog", href: "/blog", icon: Newspaper },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === path;
    return location.pathname === path;
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg"
          : "bg-slate-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="MovilFix GSM Academy"
              className="h-10 w-auto"
            />
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg leading-tight">
                MovilFix GSM
              </span>
              <span className="text-cyan-400 text-xs font-semibold leading-tight">
                Academy
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1 ${
                  isActive(link.href)
                    ? "bg-cyan-500/20 text-cyan-400"
                    : link.highlight
                    ? "text-white hover:bg-white/10"
                    : "text-slate-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
                {link.icon && (
                  <link.icon className="w-3 h-3 text-yellow-400" />
                )}
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">

            {/* Cart */}
            <Link
              to="/carrito"
              className="relative p-2 text-slate-300 hover:text-white transition-colors flex items-center gap-2"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="text-sm font-medium hidden sm:inline">
                $0.00
              </span>
              {cartCount > 0 && (
                <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </div>
              )}
            </Link>

            {/* Connect Button - Ahora apunta a la página de acceso */}
            <Button 
              asChild
              className="hidden sm:flex bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 font-semibold hover:from-yellow-300 hover:to-orange-400"
            >
              <Link to="/acceso">
                <Link2 className="w-4 h-4 mr-2" />
                Conectar
              </Link>
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="bg-slate-900 border-slate-800 w-72"
              >
                <div className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      to={link.href}
                      className={`py-2 px-4 rounded-lg transition-colors flex items-center gap-2 ${
                        isActive(link.href)
                          ? "bg-cyan-500/20 text-cyan-400"
                          : "text-slate-300 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {link.icon && <link.icon className="w-4 h-4" />}
                      {link.label}
                    </Link>
                  ))}
                  <Link
                    to="/carrito"
                    className="py-2 px-4 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors flex items-center gap-2"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Carrito ({cartCount})
                  </Link>
                  <Button asChild className="mt-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 font-semibold">
                    <Link to="/acceso">
                      <Link2 className="w-4 h-4 mr-2" />
                      Conectar
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;