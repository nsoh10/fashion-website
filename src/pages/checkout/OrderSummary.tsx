import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

export const OrderSummary = () => {
  const { items, removeItem, updateQuantity, getCartTotal, getItemCount } = useCart();
  const cartTotal = getCartTotal();
  const itemCount = getItemCount();
  const shipping = cartTotal > 0 ? (cartTotal > 100 ? 0 : 9.99) : 0;
  const tax = cartTotal * 0.1; // 10% tax
  const orderTotal = cartTotal + shipping + tax;

  return (
    <div className="bg-muted/50 rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-6">Order Summary</h2>
      
      <div className="space-y-4 mb-6">
        {items.length === 0 ? (
          <p className="text-muted-foreground text-sm">Your cart is empty</p>
        ) : (
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-muted rounded-md overflow-hidden">
                    <img 
                      src={item.image || '/placeholder-product.jpg'} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm">{item.name}</h3>
                    <p className="text-muted-foreground text-sm">Size: {item.size || 'M'}</p>
                    <p className="text-muted-foreground text-sm">Color: {item.color || 'Black'}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">{formatCurrency(item.price * item.quantity)}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="h-6 w-6 p-0"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </Button>
                    <span className="text-sm w-6 text-center">{item.quantity}</span>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="h-6 w-6 p-0"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </Button>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-6 p-0 mt-1 text-destructive hover:text-destructive/80"
                    onClick={() => removeItem(item.id)}
                  >
                    <Trash2 className="h-3.5 w-3.5 mr-1" />
                    <span className="text-xs">Remove</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {itemCount > 0 && (
        <div className="space-y-3 border-t border-border pt-4">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Subtotal ({itemCount} {itemCount === 1 ? 'item' : 'items'})</span>
            <span>{formatCurrency(cartTotal)}</span>
          </div>
          
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Shipping</span>
            <span>{shipping === 0 ? 'Free' : formatCurrency(shipping)}</span>
          </div>
          
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Tax</span>
            <span>{formatCurrency(tax)}</span>
          </div>
          
          <div className="flex justify-between font-medium pt-2 border-t border-border mt-2">
            <span>Order Total</span>
            <span>{formatCurrency(orderTotal)}</span>
          </div>
          
          {shipping === 0 && cartTotal > 0 && (
            <div className="text-sm text-green-600 bg-green-50 p-2 rounded-md text-center">
              Free shipping on orders over $100
            </div>
          )}
          
          {cartTotal < 100 && cartTotal > 0 && (
            <div className="text-sm text-amber-600 bg-amber-50 p-2 rounded-md text-center">
              Spend {formatCurrency(100 - cartTotal)} more for free shipping
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default OrderSummary;
