import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';
import { CreditCard, Lock, ArrowLeft } from 'lucide-react';

const Payment = () => {
    const [paymentData, setPaymentData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        nameOnCard: '',
    });
    const [isProcessing, setIsProcessing] = useState(false);
    const { items, total, clearCart } = useCart();
    const { toast } = useToast();
    const navigate = useNavigate();

    const handleInputChange = (field: string, value: string) => {
        setPaymentData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsProcessing(true);

        // Simulate payment processing
        setTimeout(() => {
            toast({
                title: "Payment Successful!",
                description: "Your order has been placed successfully. You'll receive a confirmation email shortly.",
            });
            clearCart();
            navigate('/');
            setIsProcessing(false);
        }, 2000);
    };

    const handleBack = () => {
        navigate(-1);
    };

    if (items.length === 0) {
        navigate('/cart');
        return null;
    }

    return (
        <div className="min-h-screen bg-background p-4">
            <div className="container mx-auto max-w-4xl">
                <Button 
                    variant="ghost" 
                    onClick={handleBack}
                    className="mb-4 flex items-center gap-2"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Cart
                </Button>
                <h1 className="text-3xl font-serif mb-8">Secure Checkout</h1>

                <div className="grid gap-8 lg:grid-cols-3">
                    <div className="lg:col-span-2">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="font-serif">Contact Information</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <Label htmlFor="email">Email Address</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            value={paymentData.email}
                                            onChange={(e) => handleInputChange('email', e.target.value)}
                                            required
                                        />
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="font-serif">Shipping Address</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <Label htmlFor="firstName">First Name</Label>
                                            <Input
                                                id="firstName"
                                                value={paymentData.firstName}
                                                onChange={(e) => handleInputChange('firstName', e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <Label htmlFor="lastName">Last Name</Label>
                                            <Input
                                                id="lastName"
                                                value={paymentData.lastName}
                                                onChange={(e) => handleInputChange('lastName', e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <Label htmlFor="address">Address</Label>
                                        <Input
                                            id="address"
                                            value={paymentData.address}
                                            onChange={(e) => handleInputChange('address', e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="grid grid-cols-3 gap-4">
                                        <div>
                                            <Label htmlFor="city">City</Label>
                                            <Input
                                                id="city"
                                                value={paymentData.city}
                                                onChange={(e) => handleInputChange('city', e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <Label htmlFor="state">State</Label>
                                            <Select onValueChange={(value) => handleInputChange('state', value)}>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select state" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="ca">California</SelectItem>
                                                    <SelectItem value="ny">New York</SelectItem>
                                                    <SelectItem value="tx">Texas</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div>
                                            <Label htmlFor="zipCode">ZIP Code</Label>
                                            <Input
                                                id="zipCode"
                                                value={paymentData.zipCode}
                                                onChange={(e) => handleInputChange('zipCode', e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="font-serif flex items-center gap-2">
                                        <CreditCard className="w-5 h-5" />
                                        Payment Information
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <Label htmlFor="nameOnCard">Name on Card</Label>
                                        <Input
                                            id="nameOnCard"
                                            value={paymentData.nameOnCard}
                                            onChange={(e) => handleInputChange('nameOnCard', e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="cardNumber">Card Number</Label>
                                        <Input
                                            id="cardNumber"
                                            placeholder="1234 5678 9012 3456"
                                            value={paymentData.cardNumber}
                                            onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <Label htmlFor="expiryDate">Expiry Date</Label>
                                            <Input
                                                id="expiryDate"
                                                placeholder="MM/YY"
                                                value={paymentData.expiryDate}
                                                onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <Label htmlFor="cvv">CVV</Label>
                                            <Input
                                                id="cvv"
                                                placeholder="123"
                                                value={paymentData.cvv}
                                                onChange={(e) => handleInputChange('cvv', e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Button
                                type="submit"
                                variant="luxury"
                                className="w-full"
                                size="lg"
                                disabled={isProcessing}
                            >
                                <Lock className="w-4 h-4 mr-2" />
                                {isProcessing ? 'Processing Payment...' : `Complete Order - ₵${total.toFixed(2)}`}
                            </Button>
                        </form>
                    </div>

                    <div>
                        <Card className="sticky top-4">
                            <CardHeader>
                                <CardTitle className="font-serif">Order Summary</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {items.map((item) => (
                                    <div key={item.id} className="flex justify-between">
                                        <div>
                                            <p className="font-medium">{item.name}</p>
                                            <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                                        </div>
                                        <span>₵{(item.price * item.quantity).toFixed(2)}</span>
                                    </div>
                                ))}
                                <div className="border-t pt-4">
                                    <div className="flex justify-between font-medium">
                                        <span>Total</span>
                                        <span>₵{total.toFixed(2)}</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;