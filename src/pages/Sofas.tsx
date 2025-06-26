import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import { useCart } from '@/contexts/CartContext';
import { toast } from '@/hooks/use-toast';

const Sofas = () => {
  const { addToCart } = useCart();

  const sofas = [
    {
      id: 'sofa-1',
      name: '3-Seater Fabric Sofa',
      price: 25000,
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop',
      description: 'Comfortable 3-seater sofa with durable fabric upholstery',
      category: 'sofas'
    },
    {
      id: 'sofa-2',
      name: 'L-Shape Corner Sofa',
      price: 35000,
      image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&h=300&fit=crop',
      description: 'Spacious L-shaped sofa perfect for family gatherings',
      category: 'sofas'
    },
    {
      id: 'sofa-3',
      name: '2-Seater Loveseat',
      price: 18000,
      image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=300&fit=crop',
      description: 'Compact 2-seater perfect for small living rooms',
      category: 'sofas'
    },
    {
      id: 'sofa-4',
      name: '7-Seater Sofa Set',
      price: 45000,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
      description: 'Complete 7-seater sofa set with center table',
      category: 'sofas'
    },
    {
      id: 'sofa-5',
      name: 'Leather Sofa 3-Seater',
      price: 32000,
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop',
      description: 'Elegant leather 3-seater sofa for modern homes',
      category: 'sofas'
    },
    {
      id: 'sofa-6',
      name: '5-Seater Sofa Set',
      price: 38000,
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop',
      description: '5-seater sofa set with matching cushions',
      category: 'sofas'
    }
  ];

  const handleAddToCart = (sofa: typeof sofas[0]) => {
    addToCart(sofa);
    toast({
      title: "Added to Cart",
      description: `${sofa.name} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            Sofas & Living Room
          </h1>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            Discover our premium collection of sofas and living room furniture. 
            Each piece is crafted for comfort, style, and durability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sofas.map((sofa) => (
            <Card key={sofa.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={sofa.image} 
                  alt={sofa.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-amber-900 mb-2">{sofa.name}</h3>
                <p className="text-amber-700 text-sm mb-4">{sofa.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-amber-800">
                    KSH {sofa.price.toLocaleString()}
                  </span>
                  <Button 
                    onClick={() => handleAddToCart(sofa)}
                    className="bg-amber-600 hover:bg-amber-700"
                  >
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Delivery & Payment Info */}
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

export default Sofas;
