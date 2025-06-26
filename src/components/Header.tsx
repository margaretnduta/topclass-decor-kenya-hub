
import { Link } from 'react-router-dom';
import { ShoppingCart, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

const Header = () => {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello TopClass Furniture! I'm interested in your furniture collection.");
    window.open(`https://wa.me/254741084207?text=${message}`, '_blank');
  };

  return (
    <header className="bg-amber-50 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-amber-800">TopClass Furniture</div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-amber-700 hover:text-amber-900 transition-colors">Home</Link>
            <Link to="/sofas" className="text-amber-700 hover:text-amber-900 transition-colors">Sofas</Link>
            <Link to="/dining-room" className="text-amber-700 hover:text-amber-900 transition-colors">Dining Room</Link>
            <Link to="/bedroom" className="text-amber-700 hover:text-amber-900 transition-colors">Bedroom</Link>
            <Link to="/office" className="text-amber-700 hover:text-amber-900 transition-colors">Office</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              onClick={handleWhatsAppClick}
              className="hidden md:flex items-center space-x-2 border-green-500 text-green-600 hover:bg-green-50"
            >
              <Phone size={16} />
              <span>WhatsApp</span>
            </Button>
            
            <Link to="/cart" className="relative">
              <Button variant="outline" size="sm" className="flex items-center space-x-2">
                <ShoppingCart size={16} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
