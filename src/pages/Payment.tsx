import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';
import { CreditCard, Lock, ArrowLeft, Smartphone, Wifi, Phone } from 'lucide-react';

const Payment = () => {
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [paymentData, setPaymentData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        region: '',
        landmark: '',
        gps: '',
        // Card details
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        nameOnCard: '',
        // Mobile money details
        mobileNumber: '',
        mobileNetwork: 'mtn',
    });

    const ghanaRegions = [
        'Greater Accra',
        'Ashanti',
        'Western',
        'Central',
        'Eastern',
        'Volta',
        'Northern',
        'Upper East',
        'Upper West',
        'Bono',
        'Bono East',
        'Ahafo',
        'Savannah',
        'North East',
        'Oti',
        'Western North'
    ];

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
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <Label htmlFor="city">City/Town</Label>
                                            <Input
                                                id="city"
                                                value={paymentData.city}
                                                onChange={(e) => handleInputChange('city', e.target.value)}
                                                placeholder="e.g., Accra, Kumasi"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <Label htmlFor="region">Region</Label>
                                            <Select onValueChange={(value) => handleInputChange('region', value)}>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select region" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {ghanaRegions.map(region => (
                                                        <SelectItem key={region} value={region.toLowerCase().replace(/\s+/g, '-')}>
                                                            {region}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <Label htmlFor="landmark">Nearest Landmark</Label>
                                            <Input
                                                id="landmark"
                                                value={paymentData.landmark}
                                                onChange={(e) => handleInputChange('landmark', e.target.value)}
                                                placeholder="e.g., Near Accra Mall, Opposite Shell"
                                            />
                                        </div>
                                        <div>
                                            <Label htmlFor="gps">GPS Address (Optional)</Label>
                                            <Input
                                                id="gps"
                                                value={paymentData.gps}
                                                onChange={(e) => handleInputChange('gps', e.target.value)}
                                                placeholder="e.g., GA-123-4567"
                                            />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="font-serif">Payment Method</CardTitle>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                                        <button
                                            type="button"
                                            onClick={() => setPaymentMethod('card')}
                                            className={`flex flex-col items-center justify-center p-4 rounded-lg border-2 transition-all ${paymentMethod === 'card' ? 'border-primary bg-primary/5' : 'border-muted hover:border-primary/50'}`}
                                        >
                                            <CreditCard className="w-6 h-6 mb-2" />
                                            <span>Credit/Debit Card</span>
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setPaymentMethod('mtn')}
                                            className={`flex flex-col items-center justify-center p-4 rounded-lg border-2 transition-all ${paymentMethod === 'mtn' ? 'border-yellow-500 bg-yellow-500/5' : 'border-muted hover:border-yellow-500/50'}`}
                                        >
                                            <Smartphone className="w-6 h-6 mb-2 text-yellow-500" />
                                            <span>MTN Mobile Money</span>
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setPaymentMethod('vodafone')}
                                            className={`flex flex-col items-center justify-center p-4 rounded-lg border-2 transition-all ${paymentMethod === 'vodafone' ? 'border-red-500 bg-red-500/5' : 'border-muted hover:border-red-500/50'}`}
                                        >
                                            <Wifi className="w-6 h-6 mb-2 text-red-500" />
                                            <span>Vodafone Cash</span>
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setPaymentMethod('airteltigo')}
                                            className={`flex flex-col items-center justify-center p-4 rounded-lg border-2 transition-all ${paymentMethod === 'airteltigo' ? 'border-blue-500 bg-blue-500/5' : 'border-muted hover:border-blue-500/50'}`}
                                        >
                                            <Phone className="w-6 h-6 mb-2 text-blue-500" />
                                            <span>AirtelTigo Money</span>
                                        </button>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    {paymentMethod === 'card' ? (
                                        <>
                                            <div>
                                                <Label htmlFor="nameOnCard">Name on Card</Label>
                                                <Input
                                                    id="nameOnCard"
                                                    value={paymentData.nameOnCard}
                                                    onChange={(e) => handleInputChange('nameOnCard', e.target.value)}
                                                    required={paymentMethod === 'card'}
                                                />
                                            </div>
                                            <div>
                                                <Label htmlFor="cardNumber">Card Number</Label>
                                                <Input
                                                    id="cardNumber"
                                                    placeholder="1234 5678 9012 3456"
                                                    value={paymentData.cardNumber}
                                                    onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                                                    required={paymentMethod === 'card'}
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
                                                        required={paymentMethod === 'card'}
                                                    />
                                                </div>
                                                <div>
                                                    <Label htmlFor="cvv">CVV</Label>
                                                    <Input
                                                        id="cvv"
                                                        placeholder="123"
                                                        value={paymentData.cvv}
                                                        onChange={(e) => handleInputChange('cvv', e.target.value)}
                                                        required={paymentMethod === 'card'}
                                                    />
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <div className="space-y-4">
                                            <div>
                                                <Label>Mobile Number</Label>
                                                <div className="flex gap-2
">
                                                    <div className="w-32
">
                                                        <Select 
                                                            value={paymentData.mobileNetwork}
                                                            onValueChange={(value) => handleInputChange('mobileNetwork', value)}
                                                        >
                                                            <SelectTrigger>
                                                                <SelectValue placeholder="Network" />
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                <SelectItem value="mtn">MTN</SelectItem>
                                                                <SelectItem value="vodafone">Vodafone</SelectItem>
                                                                <SelectItem value="airteltigo">AirtelTigo</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                    </div>
                                                    <Input
                                                        type="tel"
                                                        placeholder="e.g., 0244 123 4567"
                                                        value={paymentData.mobileNumber}
                                                        onChange={(e) => handleInputChange('mobileNumber', e.target.value)}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-sm text-blue-700 dark:text-blue-300">
                                                <p>You will receive a payment request on your mobile number to complete the transaction.</p>
                                                {paymentMethod === 'mtn' && (
                                                    <p className="mt-2 font-medium">Dial *170# to check your balance or make payments.</p>
                                                )}
                                                {paymentMethod === 'vodafone' && (
                                                    <p className="mt-2 font-medium">Dial *110# to check your balance or make payments.</p>
                                                )}
                                                {paymentMethod === 'airteltigo' && (
                                                    <p className="mt-2 font-medium">Dial *110# to check your balance or make payments.</p>
                                                )}
                                            </div>
                                        </div>
                                    )}
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