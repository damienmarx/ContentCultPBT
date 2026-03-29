import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Eye, 
  ArrowUpRight, 
  ArrowDownRight,
  MoreVertical,
  Plus,
  LayoutDashboard,
  Settings,
  LogOut,
  Bell,
  Search
} from "lucide-react";
import { cn } from "@/lib/utils";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from "recharts";
import { Link } from "wouter";

const data = [
  { name: "Mon", revenue: 4000, views: 2400 },
  { name: "Tue", revenue: 3000, views: 1398 },
  { name: "Wed", revenue: 2000, views: 9800 },
  { name: "Thu", revenue: 2780, views: 3908 },
  { name: "Fri", revenue: 1890, views: 4800 },
  { name: "Sat", revenue: 2390, views: 3800 },
  { name: "Sun", revenue: 3490, views: 4300 },
];

const recentActivity = [
  { id: 1, user: "Alex J.", action: "Subscribed to Gold Tier", amount: "$49.99", time: "2 mins ago", status: "success" },
  { id: 2, user: "Sarah M.", action: "Purchased Exclusive Pack", amount: "$24.99", time: "15 mins ago", status: "success" },
  { id: 3, user: "Mike R.", action: "Renewed Subscription", amount: "$19.99", time: "1 hour ago", status: "success" },
  { id: 4, user: "Emma W.", action: "Tipped on Post", amount: "$10.00", time: "3 hours ago", status: "success" },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#020617] flex">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-white dark:bg-[#020617] hidden lg:flex flex-col sticky top-0 h-screen">
        <div className="p-6 border-b">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-serif font-bold text-xl">L</div>
            <span className="font-serif font-bold text-xl tracking-tight">LUXE</span>
          </Link>
        </div>
        <nav className="flex-grow p-4 space-y-2">
          <Button variant="ghost" className="w-full justify-start gap-3 bg-primary/10 text-primary hover:bg-primary/20">
            <LayoutDashboard className="size-5" /> Dashboard
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3 text-muted-foreground hover:text-foreground">
            <TrendingUp className="size-5" /> Analytics
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3 text-muted-foreground hover:text-foreground">
            <Users className="size-5" /> Subscribers
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3 text-muted-foreground hover:text-foreground">
            <DollarSign className="size-5" /> Payouts
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3 text-muted-foreground hover:text-foreground">
            <Settings className="size-5" /> Settings
          </Button>
        </nav>
        <div className="p-4 border-t">
          <Button variant="ghost" className="w-full justify-start gap-3 text-destructive hover:bg-destructive/10">
            <LogOut className="size-5" /> Logout
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-8">
        <header className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-serif font-bold">Creator Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, Sasha Luxe. Here's what's happening today.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search analytics..." 
                className="pl-10 pr-4 py-2 bg-white dark:bg-slate-900 border rounded-lg text-sm w-64 outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <Button variant="outline" size="icon" className="relative">
              <Bell className="size-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-white" />
            </Button>
            <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-primary overflow-hidden">
              <img src="https://picsum.photos/seed/avatar/100/100" alt="Avatar" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { label: "Total Revenue", value: "$12,450", change: "+12.5%", icon: DollarSign, color: "text-green-600" },
            { label: "Active Subs", value: "1,284", change: "+5.2%", icon: Users, color: "text-blue-600" },
            { label: "Profile Views", value: "45.2K", change: "-2.1%", icon: Eye, color: "text-purple-600", negative: true },
            { label: "Conversion", value: "3.8%", change: "+0.4%", icon: TrendingUp, color: "text-orange-600" },
          ].map((stat, i) => (
            <Card key={i} className="border-none shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={cn("p-2 rounded-lg bg-opacity-10", stat.color.replace('text', 'bg'))}>
                    <stat.icon className={cn("size-6", stat.color)} />
                  </div>
                  <div className={cn(
                    "flex items-center text-xs font-bold",
                    stat.negative ? "text-red-600" : "text-green-600"
                  )}>
                    {stat.negative ? <ArrowDownRight className="size-3 mr-1" /> : <ArrowUpRight className="size-3 mr-1" />}
                    {stat.change}
                  </div>
                </div>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground font-bold">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <Card className="lg:col-span-2 border-none shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-xl font-serif">Revenue Overview</CardTitle>
                <CardDescription>Daily revenue trends for the last 7 days</CardDescription>
              </div>
              <Button variant="outline" size="sm">Download CSV</Button>
            </CardHeader>
            <CardContent className="h-[350px] pt-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="var(--primary)" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fontSize: 12, fill: '#64748B' }} 
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fontSize: 12, fill: '#64748B' }} 
                    tickFormatter={(value) => `$${value}`}
                  />
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="var(--primary)" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorRevenue)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl font-serif">Recent Activity</CardTitle>
              <CardDescription>Latest interactions from your fans</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="p-4 flex items-start gap-4 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden flex-shrink-0">
                      <img src={`https://picsum.photos/seed/${activity.user}/100/100`} alt={activity.user} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div className="flex-grow min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-sm truncate">{activity.user}</span>
                        <span className="text-[10px] text-muted-foreground uppercase font-bold">{activity.time}</span>
                      </div>
                      <div className="text-xs text-muted-foreground mb-1">{activity.action}</div>
                      <div className="text-sm font-bold text-primary">{activity.amount}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t">
                <Button variant="ghost" className="w-full text-xs uppercase tracking-widest font-bold text-muted-foreground hover:text-primary">
                  View All Activity
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid sm:grid-cols-3 gap-6">
          <Button className="h-24 flex flex-col gap-2 bg-primary hover:bg-primary/90 rounded-2xl">
            <Plus className="size-6" />
            <span className="uppercase tracking-widest text-xs font-bold">New Post</span>
          </Button>
          <Button variant="outline" className="h-24 flex flex-col gap-2 border-2 rounded-2xl">
            <LayoutDashboard className="size-6" />
            <span className="uppercase tracking-widest text-xs font-bold">Manage Content</span>
          </Button>
          <Button variant="outline" className="h-24 flex flex-col gap-2 border-2 rounded-2xl">
            <Users className="size-6" />
            <span className="uppercase tracking-widest text-xs font-bold">Fan Messages</span>
          </Button>
        </div>
      </main>
    </div>
  );
}
