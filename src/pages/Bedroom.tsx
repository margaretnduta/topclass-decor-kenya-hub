import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import { useCart } from '@/contexts/CartContext';
import { toast } from '@/hooks/use-toast';

const Bedroom = () => {
  const { addToCart } = useCart();

  const bedroomFurniture = [
    {
      id: 'bedroom-1',
      name: 'Double Bed with Mattress',
      price: 28000,
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop',
      description: 'Complete double bed set with quality mattress',
      category: 'bedroom'
    },
    {
      id: 'bedroom-2',
      name: 'Queen Size Bed Frame',
      price: 22000,
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop',
      description: 'Elegant queen size bed frame with headboard',
      category: 'bedroom'
    },
    {
      id: 'bedroom-3',
      name: '4-Door Wardrobe',
      price: 24000,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
      description: 'Spacious 4-door wardrobe with mirror and drawers',
      category: 'bedroom'
    },
    {
      id: 'bedroom-4',
      name: 'Bedside Tables Set',
      price: 8000,
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop',
      description: 'Pair of matching bedside tables with storage',
      category: 'bedroom'
    },
    {
      id: 'bedroom-5',
      name: 'Dressing Table',
      price: 15000,
      image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&h=300&fit=crop',
      description: 'Dressing table with mirror and storage drawers',
      category: 'bedroom'
    },
    {
      id: 'bedroom-6',
      name: 'Complete Bedroom Set',
      price: 65000,
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop',
      description: 'Complete bedroom set: bed, wardrobe, dresser, and tables',
      category: 'bedroom'
    }
  ];

  const handleAddToCart = (item: typeof bedroomFurniture[0]) => {
    addToCart(item);
    toast({
      title: "Added to Cart",
      description: `${item.name} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            Bedroom Collection
          </h1>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            Transform your bedroom into a peaceful sanctuary with our premium bedroom furniture. 
            Comfort, style, and quality for your personal space.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bedroomFurniture.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-amber-900 mb-2">{item.name}</h3>
                <p className="text-amber-700 text-sm mb-4">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-amber-800">
                    KSH {item.price.toLocaleString()}
                  </span>
                  <Button 
                    onClick={() => handleAddToCart(item)}
                    className="bg-amber-600 hover:bg-amber-700"
                  >
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-amber-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-amber-900 mb-6 text-center">
            Delivery & Payment Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-amber-800 mb-4">🚚 Delivery</h3>
              <ul className="space-y-2 text-amber-700">
                <li>• Free delivery within Nairobi</li>
                <li>• Nationwide delivery available</li>
                <li>• Delivery within 3-7 business days</li>
                <li>• Professional assembly service</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-amber-800 mb-4">💳 Payment</h3>
              <ul className="space-y-2 text-amber-700">
                <li>• Pay after delivery confirmation</li>
                <li>• Cash on delivery accepted</li>
                <li>• M-Pesa payments available</li>
                <li>• Bank transfer options</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bedroom;
