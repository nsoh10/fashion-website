import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Search, MoreVertical, Check, X, Clock, Truck } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

// Mock data - in a real app, this would come from an API
const mockOrders = [
  { 
    id: '#ORD-1001', 
    customer: 'John Doe', 
    date: '2023-06-15', 
    status: 'completed',
    total: 254.97,
    items: 3,
  },
  { 
    id: '#ORD-1002', 
    customer: 'Jane Smith', 
    date: '2023-06-16', 
    status: 'processing',
    total: 129.99,
    items: 1,
  },
  { 
    id: '#ORD-1003', 
    customer: 'Robert Johnson', 
    date: '2023-06-17', 
    status: 'shipped',
    total: 89.98,
    items: 2,
  },
  { 
    id: '#ORD-1004', 
    customer: 'Emily Davis', 
    date: '2023-06-17', 
    status: 'pending',
    total: 199.97,
    items: 4,
  },
];

export const OrdersPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [orders, setOrders] = useState(mockOrders);

  const filteredOrders = orders.filter(order => 
    order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.customer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return { bg: 'bg-green-100 text-green-800', icon: <Check className="h-3 w-3" /> };
      case 'processing':
        return { bg: 'bg-blue-100 text-blue-800', icon: <Clock className="h-3 w-3" /> };
      case 'shipped':
        return { bg: 'bg-purple-100 text-purple-800', icon: <Truck className="h-3 w-3" /> };
      case 'pending':
        return { bg: 'bg-yellow-100 text-yellow-800', icon: <Clock className="h-3 w-3" /> };
      case 'cancelled':
        return { bg: 'bg-red-100 text-red-800', icon: <X className="h-3 w-3" /> };
      default:
        return { bg: 'bg-gray-100 text-gray-800', icon: null };
    }
  };

  const updateOrderStatus = (orderId: string, newStatus: string) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Orders</h1>
          <p className="text-muted-foreground">Manage and track your store's orders</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Export</Button>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search orders..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Items</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order) => {
                const status = getStatusBadge(order.status);
                return (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell>{order.customer}</TableCell>
                    <TableCell>{new Date(order.date).toLocaleDateString()}</TableCell>
                    <TableCell>{order.items} item{order.items !== 1 ? 's' : ''}</TableCell>
                    <TableCell>${order.total.toFixed(2)}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span className={`h-2 w-2 rounded-full ${status.bg.split(' ')[0]}`}></span>
                        <span className="capitalize">{order.status}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => updateOrderStatus(order.id, 'processing')}>
                            <Clock className="mr-2 h-4 w-4" />
                            Mark as Processing
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => updateOrderStatus(order.id, 'shipped')}>
                            <Truck className="mr-2 h-4 w-4" />
                            Mark as Shipped
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => updateOrderStatus(order.id, 'completed')}>
                            <Check className="mr-2 h-4 w-4" />
                            Mark as Completed
                          </DropdownMenuItem>
                          <DropdownMenuItem 
                            className="text-destructive"
                            onClick={() => updateOrderStatus(order.id, 'cancelled')}
                          >
                            <X className="mr-2 h-4 w-4" />
                            Cancel Order
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                );
              })
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="h-24 text-center">
                  No orders found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default OrdersPage;
