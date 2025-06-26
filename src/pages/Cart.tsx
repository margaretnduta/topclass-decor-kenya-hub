
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import { useCart } from '@/contexts/CartContext';
import { Minus, Plus, Trash2, Phone } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Cart = () => {
  const { items, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart();

  const handleWhatsAppOrder = () => {
    if (items.length === 0) {
      toast({
        title: "Cart is empty",
        description: "Please add items to your cart before placing an order.",
        variant: "destructive"
      });
      return;
    }

    const orderDetails = items.map(item => 
      `${item.name} x${item.quantity} - KSH ${(item.price * item.quantity).toLocaleString()}`
    ).join('\n');

    const total = getCartTotal();
    const message = encodeURIComponent(
      `Hello TopClass Furniture! I'd like to place an order:\n\n${orderDetails}\n\nTotal: KSH ${total.toLocaleString()}\n\nPlease confirm availability and delivery details.`
    );
    
    window.open(`https://wa.me/254741084207?text=${message}`, '_blank');
    
    toast({
      title: "Order Sent!",
      description: "Your order has been sent via WhatsApp. We'll contact you shortly!",
    });
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold text-amber-900 mb-8">Your Cart</h1>
          <div className="bg-white rounded-lg p-12 shadow-sm">
            <p className="text-xl text-amber-700 mb-8">Your cart is empty</p>
            <Button className="bg-amber-600 hover:bg-amber-700">
              <a href="/sofas">Continue Shopping</a>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-amber-900 mb-8 text-center">Your Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-4">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full md:w-32 h-32 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-amber-900 mb-2">{item.name}</h3>
                      <p className="text-amber-700 mb-4">Category: {item.category}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-amber-800">
                          KSH {item.price.toLocaleString()}
                        </span>
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus size={16} />
                          </Button>
                          <span className="font-semibold text-amber-900 px-4">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus size={16} />
                          </Button>
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <Trash2 size={16} />
                          </Button>
                        </div>
                      </div>
                      <div className="mt-2 text-right">
                        <span className="text-lg font-semibold text-amber-800">
                          Subtotal: KSH {(item.price * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-amber-900 mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-amber-700">{item.name} x{item.quantity}</span>
                      <span className="font-semibold text-amber-800">
                        KSH {(item.price * item.quantity).toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>

                <hr className="my-6" />
                
                <div className="flex justify-between text-xl font-bold text-amber-900 mb-6">
                  <span>Total:</span>
                  <span>KSH {getCartTotal().toLocaleString()}</span>
                </div>

                <div className="space-y-4">
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center space-x-2"
                    onClick={handleWhatsAppOrder}
                  >
                    <Phone size={20} />
                    <span>Order via WhatsApp</span>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={clearCart}
                  >
                    Clear Cart
                  </Button>
                </div>

                {/* Payment & Delivery Info */}
                <div className="mt-8 p-4 bg-amber-50 rounded-lg">
                  <h3 className="font-semibold text-amber-900 mb-2">📋 Order Process</h3>
                  <ul className="text-sm text-amber-700 space-y-1">
                    <li>1. Click "Order via WhatsApp"</li>
                    <li>2. Confirm order details with us</li>
                    <li>3. We'll arrange delivery</li>
                    <li>4. Pay after delivery</li>
                  </ul>
                </div>

                <div className="mt-4 p-4 bg-green-50 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2">🚚 Delivery Info</h3>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Free delivery in Nairobi</li>
                    <li>• 3-7 business days</li>
                    <li>• Assembly service included</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
