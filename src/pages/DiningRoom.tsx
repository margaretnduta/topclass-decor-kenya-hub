import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import { useCart } from '@/contexts/CartContext';
import { toast } from '@/hooks/use-toast';

const DiningRoom = () => {
  const { addToCart } = useCart();

  const diningFurniture = [
    {
      id: 'dining-1',
      name: '4-Seater Dining Set',
      price: 22000,
      image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=400&h=300&fit=crop',
      description: 'Elegant 4-seater dining table with matching chairs',
      category: 'dining-room'
    },
    {
      id: 'dining-2',
      name: '6-Seater Dining Set',
      price: 28000,
      image: 'https://images.unsplash.com/photo-1549497538-303791108f95?w=400&h=300&fit=crop',
      description: 'Family-size 6-seater dining set with cushioned chairs',
      category: 'dining-room'
    },
    {
      id: 'dining-3',
      name: 'Round 4-Seater Table',
      price: 18000,
      image: 'https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=400&h=300&fit=crop',
      description: 'Compact round dining table for small families',
      category: 'dining-room'
    },
    {
      id: 'dining-4',
      name: '8-Seater Dining Set',
      price: 42000,
      image: 'https://images.unsplash.com/photo-1562184552-c20c20202b9a?w=400&h=300&fit=crop',
      description: 'Large dining set for entertaining guests',
      category: 'dining-room'
    },
    {
      id: 'dining-5',
      name: 'Glass Top Dining Table',
      price: 25000,
      image: 'https://images.unsplash.com/photo-1549497538-303791108f95?w=400&h=300&fit=crop',
      description: 'Modern glass top table with 4 chairs',
      category: 'dining-room'
    },
    {
      id: 'dining-6',
      name: 'Wooden Dining Cabinet',
      price: 15000,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
      description: 'Dining room storage cabinet with shelves',
      category: 'dining-room'
    }
  ];

  const handleAddToCart = (item: typeof diningFurniture[0]) => {
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
            Dining Room Collection
          </h1>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            Create memorable dining experiences with our elegant dining room furniture. 
            From intimate family meals to grand dinner parties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {diningFurniture.map((item) => (
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

export default DiningRoom;
