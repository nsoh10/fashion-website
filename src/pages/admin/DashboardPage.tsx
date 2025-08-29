import React from 'react';
import { 
  Users, 
  Package, 
  ShoppingBag, 
  DollarSign, 
  ArrowUp, 
  ArrowDown, 
  TrendingUp,
  Plus,
  User,
  Clock,
  CheckCircle2,
  XCircle,
  Activity,
  RefreshCw,
  ArrowRight,
  Calendar,
  MoreVertical
} from 'lucide-react';
import { UserAvatar } from '@/components/UserAvatar';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { cn } from '@/lib/utils';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { formatCurrency } from '@/lib/formatters';
import { getRandomProductImage } from '@/lib/images';

const monthlySalesData = [
  { name: 'Jan', revenue: 4000, orders: 2400, users: 2400 },
  { name: 'Feb', revenue: 3000, orders: 1398, users: 2210 },
  { name: 'Mar', revenue: 2000, orders: 9800, users: 2290 },
  { name: 'Apr', revenue: 2780, orders: 3908, users: 2000 },
  { name: 'May', revenue: 1890, orders: 4800, users: 2181 },
  { name: 'Jun', revenue: 2390, orders: 3800, users: 2500 },
  { name: 'Jul', revenue: 3490, orders: 4300, users: 2100 },
];

const recentActivities = [
  { id: 1, user: 'John Doe', action: 'placed a new order', time: '2 min ago', amount: formatCurrency(149.99) },
  { id: 2, user: 'Jane Smith', action: 'signed up', time: '10 min ago', amount: null },
  { id: 3, user: 'Acme Corp', action: 'made a purchase', time: '1 hour ago', amount: formatCurrency(299.99) },
  { id: 4, user: 'Mike Johnson', action: 'requested a return', time: '3 hours ago', amount: formatCurrency(89.99) },
  { id: 5, user: 'Sarah Williams', action: 'wrote a review', time: '5 hours ago', amount: null },
];

// Mock data
const stats = [
  {
    title: 'Total Revenue',
    value: formatCurrency(45231.89),
    icon: <DollarSign className="h-4 w-4" />,
    change: 20.1,
    trend: 'up',
  },
  {
    title: 'Orders',
    value: '1,234',
    icon: <ShoppingBag className="h-4 w-4" />,
    change: 12.3,
    trend: 'up',
  },
  {
    title: 'Products',
    value: '573',
    icon: <Package className="h-4 w-4" />,
    change: 5.2,
    trend: 'up',
  },
  {
    title: 'Customers',
    value: '3,287',
    icon: <Users className="h-4 w-4" />,
    change: 18.3,
    trend: 'up',
  },
];

const recentOrders = [
  {
    id: 'ORD-001',
    customer: 'Alex Johnson',
    status: 'completed',
    date: '2023-06-15',
    amount: 149.99,
    product: 'Classic White T-Shirt',
    image: '/placeholder.svg'
  },
  {
    id: 'ORD-002',
    customer: 'Maria Garcia',
    status: 'processing',
    date: '2023-06-14',
    amount: 89.99,
    product: 'Slim Fit Jeans',
    image: '/placeholder.svg'
  },
  {
    id: 'ORD-003',
    customer: 'James Wilson',
    status: 'pending',
    date: '2023-06-14',
    amount: 199.99,
    product: 'Leather Jacket',
    image: '/placeholder.svg'
  },
  {
    id: 'ORD-004',
    customer: 'Sarah Miller',
    status: 'completed',
    date: '2023-06-13',
    amount: 249.99,
    product: 'Running Shoes',
    image: '/placeholder.svg'
  },
  {
    id: 'ORD-005',
    customer: 'Robert Taylor',
    status: 'failed',
    date: '2023-06-12',
    amount: 179.99,
    product: 'Baseball Cap',
    image: '/placeholder.svg'
  },
];

const topProducts = [
  { 
    name: 'Classic White T-Shirt', 
    sales: 342, 
    revenue: 5129.99,
    image: '/placeholder.svg'
  },
  { 
    name: 'Slim Fit Jeans', 
    sales: 256, 
    revenue: 3840.00,
    image: '/placeholder.svg'
  },
  { 
    name: 'Leather Jacket', 
    sales: 198, 
    revenue: 5940.00,
    image: '/placeholder.svg'
  },
  { 
    name: 'Running Shoes', 
    sales: 176, 
    revenue: 4399.99,
    image: '/placeholder.svg'
  },
  { 
    name: 'Baseball Cap', 
    sales: 154, 
    revenue: 1155.00,
    image: '/placeholder.svg'
  },
];

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactElement; 
  change: number;
  trend: 'up' | 'down';
}

const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  icon, 
  change, 
  trend 
}) => (
  <Card className="relative overflow-hidden transition-all hover:shadow-md">
    <div className="absolute right-4 top-4 opacity-10">
      {React.cloneElement(icon, { className: 'h-12 w-12' } as React.HTMLAttributes<SVGElement>)}
    </div>
    <CardHeader className="pb-2">
      <CardDescription className="text-sm font-medium text-muted-foreground">
        {title}
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      <div className="mt-2 flex items-center text-xs">
        {trend === 'up' ? (
          <ArrowUp className="h-3 w-3 text-green-500 mr-1" />
        ) : (
          <ArrowDown className="h-3 w-3 text-red-500 mr-1" />
        )}
        <span className={cn(
          'font-medium',
          trend === 'up' ? 'text-green-500' : 'text-red-500'
        )}>
          {change}% from last month
        </span>
      </div>
    </CardContent>
  </Card>
);

const StatusBadge = ({ status }: { status: string }) => {
  const statusMap: Record<string, string> = {
    completed: 'bg-green-100 text-green-800',
    processing: 'bg-blue-100 text-blue-800',
    pending: 'bg-amber-100 text-amber-800',
    failed: 'bg-red-100 text-red-800',
  };

  const statusIcons: Record<string, React.ReactNode> = {
    completed: <CheckCircle2 className="h-3 w-3 mr-1" />,
    processing: <Clock className="h-3 w-3 mr-1" />,
    pending: <Clock className="h-3 w-3 mr-1" />,
    failed: <XCircle className="h-3 w-3 mr-1" />,
  };

  return (
    <Badge 
      className={`${statusMap[status] || 'bg-gray-100 text-gray-800'} text-xs font-medium capitalize`}
    >
      {statusIcons[status]}
      {status}
    </Badge>
  );
};

const DashboardPage = () => {
  const totalRevenue = stats.reduce((sum, stat) => {
    if (stat.title === 'Total Revenue') {
      return sum + parseFloat(stat.value.replace(/[^0-9.-]+/g, ''));
    }
    return sum;
  }, 0);

  const totalSales = recentOrders.length;
  const completedOrders = recentOrders.filter(order => order.status === 'completed').length;
  const conversionRate = Math.round((completedOrders / totalSales) * 100) || 0;

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between space-y-2 md:flex-row md:items-center md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's what's happening with your store today.
          </p>
        </div>
        <div className="flex items-center space-x-2
        ">
          <Button variant="outline" size="sm">
            <Clock className="mr-2 h-4 w-4" />
            This Month
          </Button>
          <Button size="sm">
            <Plus className="mr-2 h-4 w-4" />
            Add Report
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <StatCard key={i} {...stat} />
        ))}
      </div>

      {/* Analytics Charts */}
      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-medium">Revenue Overview</h3>
              <p className="text-sm text-muted-foreground">Last 7 months performance</p>
            </div>
            <Button variant="outline" size="sm" className="h-8">
              <Calendar className="h-4 w-4 mr-2" />
              This Year
            </Button>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={monthlySalesData}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#000000" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#000000" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <XAxis 
                  dataKey="name" 
                  stroke="#888888" 
                  fontSize={12} 
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis 
                  stroke="#888888" 
                  fontSize={12} 
                  tickLine={false} 
                  axisLine={false}
                  tickFormatter={(value) => formatCurrency(Number(value))}
                />
                <Tooltip />
                <Area 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#000000" 
                  fillOpacity={1} 
                  fill="url(#colorRevenue)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-medium">Orders & Users</h3>
              <p className="text-sm text-muted-foreground">Monthly comparison</p>
            </div>
            <Button variant="outline" size="sm" className="h-8">
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </Button>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlySalesData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis 
                  dataKey="name" 
                  stroke="#888888" 
                  fontSize={12} 
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis 
                  stroke="#888888" 
                  fontSize={12} 
                  tickLine={false} 
                  axisLine={false}
                />
                <Tooltip />
                <Legend />
                <Bar dataKey="orders" fill="#000000" radius={[4, 4, 0, 0]} />
                <Bar dataKey="users" fill="#888888" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Revenue Overview</CardTitle>
                <CardDescription>Sales performance for the current month</CardDescription>
              </div>
              <Button variant="outline" size="sm" className="h-8">
                Export
              </Button>
            </div>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="h-[300px] flex items-center justify-center rounded-lg bg-muted/50">
              <div className="text-center p-6 max-w-sm mx-auto">
                <TrendingUp className="h-12 w-12 mx-auto text-primary/50 mb-4" />
                <h3 className="text-lg font-medium mb-1">Revenue Chart</h3>
                <p className="text-sm text-muted-foreground">
                  Visual representation of your sales data will appear here.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Sales Summary</CardTitle>
            <CardDescription>Key metrics for your store</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Total Revenue</span>
                <span className="text-sm font-semibold">{formatCurrency(totalRevenue)}</span>
              </div>
              <Progress value={85} className="h-2" />
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Orders</span>
                <span className="text-sm font-semibold">{totalSales} orders</span>
              </div>
              <Progress value={conversionRate} className="h-2" />
              <p className="text-xs text-muted-foreground mt-1">
                {conversionRate}% conversion rate
              </p>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Active Customers</span>
                <span className="text-sm font-semibold">1,234</span>
              </div>
              <div className="flex -space-x-2">
                {['John D', 'Jane S', 'Alex M', 'Sam W', 'Taylor R'].map((name, i) => (
                  <UserAvatar 
                    key={i}
                    name={name}
                    gender={name.includes('Jane') || name.includes('Taylor') ? 'female' : 'male'}
                    className="h-8 w-8 border-2 border-background"
                  />
                ))}
                <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center text-xs font-medium">
                  +12
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity and Quick Actions */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest actions in your store</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="p-4 hover:bg-muted/50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <UserAvatar 
                        name={activity.user}
                        gender={activity.user.includes('Jane') || activity.user.includes('Sarah') ? 'female' : 'male'}
                        className="h-10 w-10"
                      />
                      <div>
                        <p className="text-sm font-medium">
                          <span className="font-semibold">{activity.user}</span> {activity.action}
                        </p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                    {activity.amount && (
                      <span className="text-sm font-medium">{activity.amount}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="border-t p-4">
            <Button variant="ghost" size="sm" className="w-full">
              View all activity <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button variant="outline" className="w-full justify-start">
              <Plus className="mr-2 h-4 w-4" />
              Add New Product
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Users className="mr-2 h-4 w-4" />
              Manage Users
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <ShoppingBag className="mr-2 h-4 w-4" />
              Process Orders
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Activity className="mr-2 h-4 w-4" />
              View Reports
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Section */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
            <CardDescription>Latest transactions from your store</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <p className="font-medium">#{order.id}</p>
                      <StatusBadge status={order.status} />
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="h-12 w-12 rounded-md overflow-hidden flex-shrink-0 bg-muted flex items-center justify-center">
                        <img 
                          src={order.image} 
                          alt={order.product}
                          className="h-full w-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = '/placeholder.svg';
                            target.className = 'h-8 w-8 text-muted-foreground';
                          }}
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{order.customer}</p>
                        <p className="text-xs text-muted-foreground">
                          {order.product}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{formatCurrency(order.amount)}</p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(order.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="border-t px-6 py-3">
            <Button variant="ghost" size="sm" className="w-full">
              View all orders
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Products</CardTitle>
            <CardDescription>Best selling products by revenue</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProducts.map((product, i) => (
                <div key={i} className="flex items-center">
                  <div className="h-10 w-10 rounded-md overflow-hidden flex-shrink-0 mr-3 bg-muted flex items-center justify-center">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/placeholder.svg';
                        target.className = 'h-6 w-6 text-muted-foreground';
                      }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{product.name}</p>
                    <p className="text-xs text-muted-foreground">{product.sales} sold</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{formatCurrency(product.revenue)}</p>
                    <p className="text-xs text-muted-foreground">
                      {Math.round((product.revenue / totalRevenue) * 100)}% of sales
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="border-t px-6 py-3">
            <Button variant="ghost" size="sm" className="w-full">
              View all products
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;
