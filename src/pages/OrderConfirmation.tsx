import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, Clock, Truck, Mail, Home, ShoppingBag } from 'lucide-react';
import { formatCurrency } from '@/lib/utils';

type OrderConfirmationData = {
  orderNumber: string;
  estimatedDelivery: string;
};

export const OrderConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { orderNumber, estimatedDelivery } = (location.state || {}) as OrderConfirmationData;

  // If someone tries to access this page directly without order data, redirect them
  if (!orderNumber) {
    navigate('/');
    return null;
  }

  // Mock order details - in a real app, this would come from an API
  const orderDetails = {
    items: [
      { id: 1, name: 'Classic White T-Shirt', price: 29.99, quantity: 2, size: 'M', color: 'White' },
      { id: 2, name: 'Slim Fit Jeans', price: 59.99, quantity: 1, size: '32x32', color: 'Blue' },
    ],
    shipping: 9.99,
    tax: 12.00,
    total: 111.97,
    shippingAddress: {
      name: 'John Doe',
      street: '123 Fashion St',
      city: 'New York',
      state: 'NY',
      zip: '10001',
      country: 'United States'
    },
    paymentMethod: 'Visa ending in 4242',
    email: 'john.doe@example.com'
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-12">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="h-10 w-10 text-green-600" />
        </div>
        <h1 className="text-3xl font-bold mb-2">Thank you for your order!</h1>
        <p className="text-muted-foreground">
          Your order #{orderNumber} has been placed and is being processed.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-2 space-y-8">
          {/* Order Status */}
          <div className="bg-card border rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Order Status</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-full mr-4">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Order Confirmed</p>
                  <p className="text-sm text-muted-foreground">Your order has been received</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-2 rounded-full mr-4">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Processing</p>
                  <p className="text-sm text-muted-foreground">We're preparing your order</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-muted p-2 rounded-full mr-4">
                  <Truck className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="font-medium text-muted-foreground">Shipped</p>
                  <p className="text-sm text-muted-foreground">Estimated delivery: {estimatedDelivery}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Order Details */}
          <div className="bg-card border rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Order Details</h2>
            <div className="space-y-4">
              {orderDetails.items.map((item) => (
                <div key={item.id} className="flex justify-between items-start pb-4 border-b">
                  <div className="flex space-x-4">
                    <div className="w-16 h-16 bg-muted rounded-md"></div>
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-muted-foreground">Size: {item.size} | Qty: {item.quantity}</p>
                      <p className="text-sm text-muted-foreground">Color: {item.color}</p>
                    </div>
                  </div>
                  <p className="font-medium">{formatCurrency(item.price * item.quantity)}</p>
                </div>
              ))}
              
              <div className="pt-2 space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>{formatCurrency(orderDetails.items.reduce((sum, item) => sum + (item.price * item.quantity), 0))}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>{orderDetails.shipping === 0 ? 'Free' : formatCurrency(orderDetails.shipping)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax</span>
                  <span>{formatCurrency(orderDetails.tax)}</span>
                </div>
                <div className="flex justify-between font-semibold pt-2 border-t mt-2">
                  <span>Total</span>
                  <span>{formatCurrency(orderDetails.total)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="space-y-6">
          <div className="bg-card border rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Shipping Address</h2>
            <div className="space-y-1 text-sm">
              <p>{orderDetails.shippingAddress.name}</p>
              <p>{orderDetails.shippingAddress.street}</p>
              <p>{orderDetails.shippingAddress.city}, {orderDetails.shippingAddress.state} {orderDetails.shippingAddress.zip}</p>
              <p>{orderDetails.shippingAddress.country}</p>
            </div>
          </div>

          <div className="bg-card border rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Payment Method</h2>
            <p className="text-sm">{orderDetails.paymentMethod}</p>
          </div>

          <div className="bg-card border rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">What's Next?</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Order Confirmation Sent</p>
                  <p className="text-sm text-muted-foreground">We've sent a confirmation email to {orderDetails.email}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Truck className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Track Your Order</p>
                  <p className="text-sm text-muted-foreground">We'll email you tracking information when your order ships</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button 
          variant="outline" 
          className="w-full sm:w-auto"
          onClick={() => navigate('/')}
        >
          <Home className="h-4 w-4 mr-2" />
          Back to Home
        </Button>
        <Button 
          className="w-full sm:w-auto"
          onClick={() => navigate('/shop')}
        >
          <ShoppingBag className="h-4 w-4 mr-2" />
          Continue Shopping
        </Button>
      </div>
    </div>
  );
};

export default OrderConfirmation;
