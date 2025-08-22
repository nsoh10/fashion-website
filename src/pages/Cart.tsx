import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useCart } from '@/contexts/CartContext';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';

const Cart = () => {
    const { items, updateQuantity, removeItem, total, clearCart } = useCart();
    const navigate = useNavigate();

    const handleCheckout = () => {
        if (items.length > 0) {
            navigate('/payment');
        }
    };

    const handleBack = () => {
        navigate(-1);
    };

    if (items.length === 0) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center p-4">
                <Card className="w-full max-w-md text-center">
                    <CardHeader>
                        <div className="mx-auto w-12 h-12 bg-muted rounded-full flex items-center justify-center mb-4">
                            <ShoppingBag className="w-6 h-6 text-muted-foreground" />
                        </div>
                        <CardTitle className="font-serif">Your Cart is Empty</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground mb-6">
                            Start exploring our luxury fashion collection
                        </p>
                        <Button variant="outline" onClick={handleBack} className="mb-4 w-full">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Shopping
                        </Button>
                        <Link to="/">
                            <Button variant="luxury" className="w-full">
                                Continue Shopping
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>
        );
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
                    Back
                </Button>
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl font-serif">Shopping Cart</h1>
                    <Button variant="outline" onClick={clearCart} size="sm">
                        Clear Cart
                    </Button>
                </div>

                <div className="grid gap-6 lg:grid-cols-3">
                    <div className="lg:col-span-2 space-y-4">
                        {items.map((item) => (
                            <Card key={item.id} className="overflow-hidden">
                                <CardContent className="p-6">
                                    <div className="flex gap-4">
                                        <div className="w-24 h-24 bg-muted rounded-md flex-shrink-0"></div>
                                        <div className="flex-1">
                                            <h3 className="font-serif text-lg">{item.name}</h3>
                                            <p className="text-muted-foreground">
                                                ₵{item.price.toFixed(2)}
                                                {item.size && ` • Size: ${item.size}`}
                                                {item.color && ` • ${item.color}`}
                                            </p>
                                            <div className="flex items-center justify-between mt-4">
                                                <div className="flex items-center gap-2">
                                                    <Button
                                                        variant="outline"
                                                        size="icon"
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    >
                                                        <Minus className="w-4 h-4" />
                                                    </Button>
                                                    <span className="w-12 text-center">{item.quantity}</span>
                                                    <Button
                                                        variant="outline"
                                                        size="icon"
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    >
                                                        <Plus className="w-4 h-4" />
                                                    </Button>
                                                </div>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    onClick={() => removeItem(item.id)}
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div>
                        <Card className="sticky top-4">
                            <CardHeader>
                                <CardTitle className="font-serif">Order Summary</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex justify-between">
                                    <span>Subtotal</span>
                                    <span>₵{total.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Shipping</span>
                                    <span>Free</span>
                                </div>
                                <div className="border-t pt-4">
                                    <div className="flex justify-between font-medium">
                                        <span>Total</span>
                                        <span>₵{total.toFixed(2)}</span>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className="flex flex-col gap-3">
                                <Button
                                    onClick={handleCheckout}
                                    variant="luxury"
                                    className="w-full"
                                >
                                    Proceed to Checkout
                                </Button>
                                <Link to="/">
                                    <Button variant="outline" className="w-full">
                                        Continue Shopping
                                    </Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;