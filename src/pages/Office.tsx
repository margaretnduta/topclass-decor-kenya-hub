import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import { useCart } from '@/contexts/CartContext';
import { toast } from '@/hooks/use-toast';

const Office = () => {
  const { addToCart } = useCart();

  const officeFurniture = [
    {
      id: 'office-1',
      name: 'Office Desk',
      price: 18000,
      image: 'https://images.unsplash.com/photo-1541558869434-2840d308329a?w=400&h=300&fit=crop',
      description: 'Computer desk with drawers and storage space',
      category: 'office'
    },
    {
      id: 'office-2',
      name: 'Office Chair',
      price: 12000,
      image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=400&h=300&fit=crop',
      description: 'Comfortable office chair with back support',
      category: 'office'
    },
    {
      id: 'office-3',
      name: 'Meeting Table Set',
      price: 35000,
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
      description: '6-seater meeting table with chairs',
      category: 'office'
    },
    {
      id: 'office-4',
      name: 'Filing Cabinet',
      price: 8000,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
      description: '3-drawer filing cabinet with lock',
      category: 'office'
    },
    {
      id: 'office-5',
      name: 'Reception Desk',
      price: 25000,
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=300&fit=crop',
      description: 'Modern reception desk for office entrance',
      category: 'office'
    },
    {
      id: 'office-6',
      name: 'Office Bookshelf',
      price: 12000,
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop',
      description: '4-tier bookshelf for office storage',
      category: 'office'
    }
  ];

  const handleAddToCart = (item: typeof officeFurniture[0]) => {
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
            Office Furniture
          </h1>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            Create a productive and professional workspace with our office furniture collection. 
            Perfect for home offices, corporate spaces, and co-working environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {officeFurniture.map((item) => (
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

export default Office;
