import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { 
  ArrowRight, 
  Shield, 
  Zap, 
  TrendingUp, 
  Users, 
  DollarSign, 
  CheckCircle2,
  Star,
  Globe,
  Lock
} from "lucide-react";

const stats = [
  { label: "Active Creators", value: 2847 },
  { label: "Monthly Revenue", value: 12400000 },
  { label: "Satisfaction Rate", value: 98 },
];

const services = [
  {
    title: "Automated Templates",
    desc: "Launch your platform in minutes with high-converting, premium templates designed for 18+ content.",
    icon: Zap,
  },
  {
    title: "Multi-Platform Proliferation",
    desc: "Automatically sync and distribute your content across all major creator platforms simultaneously.",
    icon: Globe,
  },
  {
    title: "Content Protection",
    desc: "Advanced DMCA protection and automated watermarking to keep your exclusive content secure.",
    icon: Shield,
  },
  {
    title: "Revenue Optimization",
    desc: "Smart pricing algorithms and subscription management to maximize your monthly earnings.",
    icon: TrendingUp,
  },
];

const steps = [
  { title: "Apply", desc: "Submit your creator profile for a quick review by our team." },
  { title: "Choose Template", desc: "Select from our library of premium, high-converting designs." },
  { title: "Upload Content", desc: "Bulk upload your media and set your subscription tiers." },
  { title: "Go Live", desc: "Launch your platform and start earning from day one." },
];

const testimonials = [
  {
    name: "Sasha Luxe",
    handle: "@sashaluxe",
    testimonial: "Luxe Creator transformed my business. The automated distribution saves me 20 hours a week.",
    revenue: "$45,000",
    period: "Monthly",
  },
  {
    name: "Marcus V",
    handle: "@marcusv",
    testimonial: "The content protection alone is worth the price. I finally feel secure about my exclusive work.",
    revenue: "$12,000",
    period: "Monthly",
  },
];

const pricing = [
  {
    name: "Starter",
    price: "$29",
    features: ["1 Template", "Basic Protection", "Single Platform", "Standard Support"],
  },
  {
    name: "Professional",
    price: "$99",
    features: ["All Templates", "Advanced DMCA", "Multi-Platform", "Priority Support", "Revenue Analytics"],
    popular: true,
  },
  {
    name: "Empire",
    price: "$299",
    features: ["Custom Design", "Legal Team Access", "Unlimited Platforms", "Dedicated Manager", "White-labeling"],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <nav className="border-b sticky top-0 bg-background/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-serif font-bold text-xl">L</div>
            <span className="font-serif font-bold text-xl tracking-tight">LUXE CREATOR</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            <Link href="/dashboard" className="hover:text-primary transition-colors">Dashboard</Link>
            <Link href="/templates" className="hover:text-primary transition-colors">Templates</Link>
            <Link href="/exclusive" className="hover:text-primary transition-colors">Exclusive</Link>
            <Link href="/subscriptions" className="hover:text-primary transition-colors">Subscriptions</Link>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex">LOGIN</Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90">JOIN NOW</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                <Star className="size-3 fill-primary" />
                Premium Creator Platform
              </div>
              <h1 className="text-6xl md:text-8xl font-serif font-bold leading-[0.9] tracking-tighter mb-8">
                Monetize Your <br />
                <span className="text-primary italic">Exclusive</span> Content
              </h1>
              <p className="text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed">
                Join 2,847+ creators earning $12.4M monthly. Automated templates, multi-platform proliferation, and 18+ content protection included.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="h-14 px-8 text-lg font-bold tracking-tight">
                  START YOUR EMPIRE <ArrowRight className="ml-2 size-5" />
                </Button>
                <Button variant="outline" size="lg" className="h-14 px-8 text-lg font-bold tracking-tight">
                  VIEW TEMPLATES
                </Button>
              </div>
              
              <div className="mt-12 grid grid-cols-3 gap-8 border-t pt-8">
                {stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-3xl font-serif font-bold">
                      {stat.label === 'Monthly Revenue' ? `$${(stat.value / 1000000).toFixed(1)}M` : stat.label === 'Satisfaction Rate' ? `${stat.value}%` : stat.value.toLocaleString()}
                    </div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://picsum.photos/seed/luxury/800/1000" 
                alt="Luxury Lifestyle" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold">L</div>
                  <div>
                    <div className="font-bold text-white">Luxe Dashboard</div>
                    <div className="text-xs text-white/60">Real-time earnings tracking</div>
                  </div>
                </div>
                <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "75%" }}
                    transition={{ duration: 2, delay: 1 }}
                    className="h-full bg-primary"
                  />
                </div>
                <div className="flex justify-between mt-2 text-[10px] font-bold text-white uppercase tracking-widest">
                  <span>Monthly Goal</span>
                  <span>75% Achieved</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Premium Services</h2>
            <p className="text-muted-foreground text-lg">Everything you need to build, protect, and monetize your creator empire.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <Card key={i} className="border-none shadow-xl hover:-translate-y-2 transition-transform duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <service.icon className="size-6" />
                  </div>
                  <CardTitle className="text-xl font-serif">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">How It Works</h2>
              <p className="text-muted-foreground text-lg mb-12">Four simple steps to launch your monetized creator platform.</p>
              
              <div className="space-y-8">
                {steps.map((step, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center text-primary font-bold font-serif text-xl">
                      0{i + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-[40px] blur-3xl" />
              <img 
                src="https://picsum.photos/seed/workflow/800/800" 
                alt="Workflow" 
                className="relative rounded-[40px] shadow-2xl border border-white/20"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-primary text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Creator Success Stories</h2>
            <p className="text-primary-foreground/80 text-lg">Real creators earning real money with Luxe Creator.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl border border-white/20">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center font-bold text-2xl">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <div className="font-serif font-bold text-xl">{testimonial.name}</div>
                    <div className="text-sm text-white/60 uppercase tracking-widest">{testimonial.handle}</div>
                  </div>
                </div>
                <p className="text-2xl font-serif italic leading-relaxed mb-8">"{testimonial.testimonial}"</p>
                <div className="flex items-center justify-between border-t border-white/10 pt-8">
                  <div>
                    <div className="text-3xl font-serif font-bold">{testimonial.revenue}</div>
                    <div className="text-xs uppercase tracking-widest text-white/60">{testimonial.period} Revenue</div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="size-4 fill-white text-white" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Transparent Pricing</h2>
            <p className="text-muted-foreground text-lg">Choose the plan that fits your creator journey.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((tier, i) => (
              <Card key={i} className={cn(
                "relative flex flex-col p-8 border-2",
                tier.popular ? "border-primary shadow-2xl scale-105 z-10" : "border-border"
              )}>
                {tier.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                <div className="mb-8">
                  <h3 className="text-2xl font-serif font-bold mb-2">{tier.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-serif font-bold">{tier.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </div>
                <div className="flex-grow space-y-4 mb-8">
                  {tier.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <CheckCircle2 className="size-5 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className={cn(
                  "w-full h-12 font-bold uppercase tracking-widest",
                  tier.popular ? "bg-primary hover:bg-primary/90" : "variant-outline"
                )}>
                  GET STARTED
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">Ready to Monetize?</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join thousands of creators earning premium income with Luxe Creator. Your empire starts here.
          </p>
          <Button size="lg" className="h-16 px-12 text-xl font-bold tracking-tight rounded-full">
            JOIN LUXE CREATOR NOW
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-serif font-bold text-xl">L</div>
                <span className="font-serif font-bold text-xl tracking-tight">LUXE CREATOR</span>
              </Link>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The world's leading platform for premium content creators. Build your empire with the best tools in the industry.
              </p>
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-widest text-xs mb-6">Platform</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li><Link href="/dashboard" className="hover:text-primary transition-colors">Dashboard</Link></li>
                <li><Link href="/templates" className="hover:text-primary transition-colors">Templates</Link></li>
                <li><Link href="/exclusive" className="hover:text-primary transition-colors">Exclusive Content</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-widest text-xs mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-widest text-xs mb-6">Connect</h4>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Discord</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t flex flex-col md:row justify-between items-center gap-4 text-xs text-muted-foreground uppercase tracking-widest font-bold">
            <div>© 2026 Luxe Creator. All rights reserved. 18+ Platform.</div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Compliance</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
