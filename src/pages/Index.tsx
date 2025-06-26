
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import { Phone, Truck, CreditCard, Shield } from 'lucide-react';

const Index = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello TopClass Furniture! I'm interested in your furniture collection.");
    window.open(`https://wa.me/254741084207?text=${message}`, '_blank');
  };

  const categories = [
    {
      name: 'Sofas & Living Room',
      description: 'Comfortable and stylish sofas for your living space',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop',
      link: '/sofas'
    },
    {
      name: 'Dining Room',
      description: 'Elegant dining sets for memorable meals',
      image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=400&h=300&fit=crop',
      link: '/dining-room'
    },
    {
      name: 'Bedroom',
      description: 'Complete bedroom solutions for peaceful rest',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop',
      link: '/bedroom'
    },
    {
      name: 'Office Furniture',
      description: 'Professional furniture for productive workspaces',
      image: 'https://images.unsplash.com/photo-1541558869434-2840d308329a?w=400&h=300&fit=crop',
      link: '/office'
    }
  ];

  const features = [
    {
      icon: <Truck className="h-8 w-8 text-amber-600" />,
      title: 'Free Delivery',
      description: 'We deliver to your doorstep across Kenya'
    },
    {
      icon: <CreditCard className="h-8 w-8 text-amber-600" />,
      title: 'Payment After Delivery',
      description: 'Pay only when you receive your furniture'
    },
    {
      icon: <Shield className="h-8 w-8 text-amber-600" />,
      title: 'Quality Guarantee',
      description: 'Premium quality furniture with warranty'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-amber-900 mb-6 animate-fade-in">
            TopClass Furniture
          </h1>
          <p className="text-xl md:text-2xl text-amber-700 mb-4">
            Your Home of Décor
          </p>
          <p className="text-lg text-amber-600 mb-8 max-w-2xl mx-auto">
            Transform your space with our premium furniture collection. Located in Kenya, 
            serving customers nationwide with quality and style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg"
            >
              <Link to="/sofas">Shop Now</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={handleWhatsAppClick}
              className="border-green-500 text-green-600 hover:bg-green-50 px-8 py-4 text-lg flex items-center space-x-2"
            >
              <Phone size={20} />
              <span>Contact us on WhatsApp</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-900 mb-12">
            Our Furniture Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 hover-scale">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-amber-900 mb-2">{category.name}</h3>
                  <p className="text-amber-700 text-sm mb-4">{category.description}</p>
                  <Link to={category.link}>
                    <Button className="w-full bg-amber-600 hover:bg-amber-700">
                      View Collection
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-amber-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-900 mb-12">
            Why Choose TopClass Furniture?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-amber-900 mb-2">{feature.title}</h3>
                  <p className="text-amber-700">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-8">
            Ready to Transform Your Space?
          </h2>
          <p className="text-lg text-amber-700 mb-8 max-w-2xl mx-auto">
            Contact us today for personalized furniture solutions. We're here to help you create the perfect home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={handleWhatsAppClick}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg flex items-center space-x-2"
            >
              <Phone size={20} />
              <span>WhatsApp: 0741084207</span>
            </Button>
            <p className="text-amber-600">Located in Kenya • Nationwide Delivery</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-amber-100 py-8 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-2">TopClass Furniture</h3>
          <p className="mb-4">Your Home of Décor</p>
          <p className="text-amber-200">📍 Kenya • 📞 0741084207</p>
          <p className="text-sm text-amber-300 mt-4">
            © 2024 TopClass Furniture. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
