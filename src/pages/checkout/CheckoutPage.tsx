import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ArrowRight, Loader2 } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { CheckoutForm } from './CheckoutForm';
import { PaymentForm } from './PaymentForm';
import { OrderSummary } from './OrderSummary';

type CheckoutStep = 'shipping' | 'payment' | 'review';

export const CheckoutPage = () => {
  const [step, setStep] = useState<CheckoutStep>('shipping');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { items, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: user?.name?.split(' ')[0] || '',
    lastName: user?.name?.split(' ')[1] || '',
    email: user?.email || '',
    address: '',
    apartment: '',
    city: '',
    country: 'United States',
    state: '',
    zipCode: '',
    phone: '',
    saveInfo: false,
    paymentMethod: 'credit',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const nextStep = () => {
    if (step === 'shipping') setStep('payment');
    else if (step === 'payment') setStep('review');
  };

  const prevStep = () => {
    if (step === 'payment') setStep('shipping');
    else if (step === 'review') setStep('payment');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step === 'review') {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real app, you would send the order to your backend here
      console.log('Order submitted:', { ...formData, items });
      
      // Clear cart and redirect to confirmation
      clearCart();
      navigate('/order-confirmation', { 
        state: { 
          orderNumber: `#${Math.floor(100000 + Math.random() * 900000)}`,
          estimatedDelivery: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString()
        } 
      });
      return;
    }
    
    nextStep();
  };

  if (items.length === 0 && step !== 'review') {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
        <p className="text-muted-foreground mb-6">Add some items to your cart before checking out</p>
        <Button onClick={() => navigate('/')}>Continue Shopping</Button>
      </div>
    );
  }

  const stepTitles = {
    shipping: 'Shipping Information',
    payment: 'Payment Method',
    review: 'Review Your Order',
  };

  const stepIndex = ['shipping', 'payment', 'review'].indexOf(step);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">{stepTitles[step]}</h1>
          <div className="text-sm text-muted-foreground">
            Step {stepIndex + 1} of 3
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex space-x-4 mb-4">
                  {['shipping', 'payment', 'review'].map((s, i) => (
                    <div key={s} className="flex-1">
                      <div className="flex flex-col items-center">
                        <div 
                          className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${
                            i < stepIndex || (i === 0 && stepIndex === 0) 
                              ? 'bg-primary text-primary-foreground' 
                              : i === stepIndex 
                                ? 'bg-primary/10 text-primary' 
                                : 'bg-muted text-muted-foreground'
                          }`}
                        >
                          {i + 1}
                        </div>
                        <span className="text-xs text-center capitalize">
                          {s}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardHeader>
              <form onSubmit={handleSubmit}>
                <CardContent className="space-y-6">
                  {step === 'shipping' && (
                    <CheckoutForm formData={formData} onChange={handleInputChange} />
                  )}
                  
                  {step === 'payment' && (
                    <PaymentForm formData={formData} onChange={handleInputChange} />
                  )}
                  
                  {step === 'review' && (
                    <div className="space-y-6">
                      <div>
                            <h3 className="text-lg font-medium mb-2">Shipping Information</h3>
                            <div className="bg-muted/50 p-4 rounded-md">
                              <p>{formData.firstName} {formData.lastName}</p>
                              <p>{formData.address}</p>
                              {formData.apartment && <p>{formData.apartment}</p>}
                              <p>{formData.city}, {formData.state} {formData.zipCode}</p>
                              <p>{formData.country}</p>
                              <p className="mt-2">Phone: {formData.phone}</p>
                              <p>Email: {formData.email}</p>
                            </div>
                          </div>

                          <div>
                            <h3 className="text-lg font-medium mb-2">Payment Method</h3>
                            <div className="bg-muted/50 p-4 rounded-md">
                              <p className="capitalize">{formData.paymentMethod} Card</p>
                              <p>•••• •••• •••• {formData.cardNumber?.slice(-4) || '••••'}</p>
                            </div>
                          </div>
                    </div>
                  )}
                </CardContent>
                <CardFooter className="flex justify-between pt-6 border-t">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    disabled={step === 'shipping' || isSubmitting}
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back
                  </Button>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Processing...
                      </>
                    ) : step === 'review' ? (
                      'Place Order'
                    ) : (
                      <>
                        Next <ArrowRight className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </div>
          
          <div className="md:col-span-1">
            <OrderSummary />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
