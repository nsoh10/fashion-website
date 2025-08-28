import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card, CardContent } from '@/components/ui/card';
import { CreditCard, Wallet, Banknote } from 'lucide-react';

type FormData = {
  paymentMethod: string;
  cardNumber: string;
  cardName: string;
  expiryDate: string;
  cvv: string;
};

type PaymentFormProps = {
  formData: FormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const PaymentForm = ({ formData, onChange }: PaymentFormProps) => {
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    value = value.replace(/(\d{4})/g, '$1 ').trim();
    if (value.length > 19) return;
    
    const event = {
      ...e,
      target: {
        ...e.target,
        name: 'cardNumber',
        value: value.trim()
      }
    };
    
    onChange(event as React.ChangeEvent<HTMLInputElement>);
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 4) return;
    if (value.length > 2) {
      value = `${value.slice(0, 2)}/${value.slice(2)}`;
    }
    
    const event = {
      ...e,
      target: {
        ...e.target,
        name: 'expiryDate',
        value
      }
    };
    
    onChange(event as React.ChangeEvent<HTMLInputElement>);
  };

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length > 4) return;
    
    const event = {
      ...e,
      target: {
        ...e.target,
        name: 'cvv',
        value
      }
    };
    
    onChange(event as React.ChangeEvent<HTMLInputElement>);
  };

  const paymentMethods = [
    {
      id: 'credit',
      label: 'Credit Card',
      icon: <CreditCard className="h-5 w-5" />,
      description: 'Pay with Visa, Mastercard, or other credit card'
    },
    {
      id: 'paypal',
      label: 'PayPal',
      icon: <Wallet className="h-5 w-5" />,
      description: 'Pay with your PayPal account'
    },
    {
      id: 'bank',
      label: 'Bank Transfer',
      icon: <Banknote className="h-5 w-5" />,
      description: 'Make a payment directly to our bank account'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Payment Method</h3>
        <RadioGroup 
          defaultValue="credit" 
          className="grid gap-4"
          value={formData.paymentMethod}
          onValueChange={(value) => {
            const event = {
              target: {
                name: 'paymentMethod',
                value
              }
            } as React.ChangeEvent<HTMLInputElement>;
            onChange(event);
          }}
        >
          {paymentMethods.map((method) => (
            <div key={method.id} className="flex items-center space-x-3">
              <RadioGroupItem value={method.id} id={method.id} />
              <Label 
                htmlFor={method.id} 
                className="flex items-center space-x-3 p-3 border rounded-md w-full cursor-pointer hover:bg-accent/50"
              >
                <div className="flex-shrink-0">
                  {method.icon}
                </div>
                <div>
                  <p className="font-medium">{method.label}</p>
                  <p className="text-sm text-muted-foreground">{method.description}</p>
                </div>
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {formData.paymentMethod === 'credit' && (
        <Card>
          <CardContent className="pt-6 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="cardNumber">Card number</Label>
              <Input
                id="cardNumber"
                name="cardNumber"
                placeholder="0000 0000 0000 0000"
                value={formData.cardNumber}
                onChange={handleCardNumberChange}
                maxLength={19}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="cardName">Name on card</Label>
              <Input
                id="cardName"
                name="cardName"
                placeholder="John Smith"
                value={formData.cardName}
                onChange={onChange}
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expiryDate">Expiry date</Label>
                <Input
                  id="expiryDate"
                  name="expiryDate"
                  placeholder="MM/YY"
                  value={formData.expiryDate}
                  onChange={handleExpiryChange}
                  maxLength={5}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="cvv">CVV</Label>
                <Input
                  id="cvv"
                  name="cvv"
                  placeholder="123"
                  value={formData.cvv}
                  onChange={handleCvvChange}
                  maxLength={4}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      )}
      
      {formData.paymentMethod === 'paypal' && (
        <div className="bg-blue-50 p-4 rounded-md border border-blue-200">
          <p className="text-sm text-blue-800">
            You'll be redirected to PayPal to complete your purchase securely.
          </p>
        </div>
      )}
      
      {formData.paymentMethod === 'bank' && (
        <div className="bg-green-50 p-4 rounded-md border border-green-200">
          <h4 className="font-medium text-green-800 mb-2">Bank Transfer Details</h4>
          <div className="space-y-1 text-sm text-green-700">
            <p><span className="font-medium">Bank Name:</span> Fashion Bank</p>
            <p><span className="font-medium">Account Name:</span> Threadz BiGaskins Ltd</p>
            <p><span className="font-medium">Account Number:</span> 1234 5678 9012</p>
            <p><span className="font-medium">SWIFT/BIC:</span> FASHAUZ1</p>
            <p className="mt-2 text-xs">Please use your order number as the payment reference.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentForm;
