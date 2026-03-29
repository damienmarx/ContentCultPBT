import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  CheckCircle2, 
  Star, 
  Shield, 
  Zap, 
  Users, 
  DollarSign, 
  ArrowRight,
  Lock,
  Heart,
  MessageCircle,
  Video,
  Image as ImageIcon
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "wouter";

const tiers = [
  {
    name: "Fan",
    price: "$9.99",
    description: "Perfect for casual followers who want to support their favorite creators.",
    features: [
      "Access to public feed",
      "Direct messaging",
      "Exclusive posts",
      "Standard support",
    ],
    icon: Heart,
  },
  {
    name: "Premium",
    price: "$24.99",
    description: "The most popular choice for dedicated fans who want full access.",
    features: [
      "Everything in Fan",
      "Full video library",
      "Behind the scenes",
      "Priority messaging",
      "Monthly exclusive pack",
    ],
    icon: Star,
    popular: true,
  },
  {
    name: "VIP Elite",
    price: "$99.99",
    description: "The ultimate experience for the most loyal and supportive fans.",
    features: [
      "Everything in Premium",
      "1-on-1 video calls",
      "Custom content requests",
      "VIP events access",
      "Personalized gifts",
      "Dedicated account manager",
    ],
    icon: Shield,
  },
];

const creators = [
  { name: "Sasha Luxe", handle: "@sashaluxe", followers: "1.2M", image: "https://picsum.photos/seed/sasha/400/400" },
  { name: "Marcus V", handle: "@marcusv", followers: "845K", image: "https://picsum.photos/seed/marcus/400/400" },
  { name: "Elena R", handle: "@elenar", followers: "2.1M", image: "https://picsum.photos/seed/elena/400/400" },
  { name: "Dante K", handle: "@dantek", followers: "512K", image: "https://picsum.photos/seed/dante/400/400" },
];

export default function SubscriptionsPage() {
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
            <Link href="/subscriptions" className="text-primary">Subscriptions</Link>
          </div>
          <Button size="sm" className="bg-primary hover:bg-primary/90">MY SUBSCRIPTIONS</Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-24 bg-muted/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-8xl font-serif font-bold leading-none mb-8">
                Support Your <br />
                <span className="text-primary italic">Favorites</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed">
                Join thousands of fans supporting the world's most elite creators. Choose a tier that fits your level of support and unlock exclusive access.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="h-14 px-8 font-bold uppercase tracking-widest">
                  EXPLORE CREATORS
                </Button>
                <Button variant="outline" size="lg" className="h-14 px-8 font-bold uppercase tracking-widest">
                  HOW IT WORKS
                </Button>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-4">
              {creators.map((creator, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative group aspect-square rounded-3xl overflow-hidden"
                >
                  <img 
                    src={creator.image} 
                    alt={creator.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="font-bold text-white text-sm">{creator.name}</div>
                    <div className="text-[10px] text-white/60 uppercase tracking-widest font-bold">{creator.handle}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Subscription Tiers</h2>
            <p className="text-muted-foreground text-lg">Choose the perfect level of access to your favorite creator's world.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((tier, i) => (
              <Card key={i} className={cn(
                "relative flex flex-col p-10 border-2 transition-all duration-500",
                tier.popular ? "border-primary shadow-2xl scale-105 z-10 bg-white dark:bg-slate-900" : "border-border bg-muted/20"
              )}>
                {tier.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                    Most Popular
                  </div>
                )}
                <div className="mb-10">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <tier.icon className="size-8" />
                  </div>
                  <h3 className="text-3xl font-serif font-bold mb-2">{tier.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-serif font-bold">{tier.price}</span>
                    <span className="text-muted-foreground uppercase tracking-widest text-xs font-bold">/month</span>
                  </div>
                  <p className="text-muted-foreground text-sm mt-6 leading-relaxed">{tier.description}</p>
                </div>
                
                <div className="flex-grow space-y-5 mb-10">
                  {tier.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-4">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="size-3 text-primary" />
                      </div>
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button className={cn(
                  "w-full h-14 font-bold uppercase tracking-widest rounded-xl",
                  tier.popular ? "bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20" : "variant-outline"
                )}>
                  SELECT {tier.name}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { title: "Direct Access", desc: "Message your favorite creators directly and get personalized responses.", icon: MessageCircle },
              { title: "Exclusive Media", desc: "Unlock thousands of photos and videos you won't find anywhere else.", icon: Video },
              { title: "Secure Platform", desc: "Your data and payments are protected by industry-leading security.", icon: Shield },
              { title: "Instant Delivery", desc: "Get immediate access to all content as soon as you subscribe.", icon: Zap },
            ].map((benefit, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 rounded-full bg-white dark:bg-slate-900 shadow-lg flex items-center justify-center text-primary mx-auto mb-6">
                  <benefit.icon className="size-8" />
                </div>
                <h4 className="text-xl font-serif font-bold mb-4">{benefit.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {[
              { q: "Can I cancel my subscription at any time?", a: "Yes, you can cancel your subscription at any time from your dashboard. You will retain access until the end of your current billing period." },
              { q: "Are payments discrete?", a: "Absolutely. All transactions on Luxe Creator appear as 'LUXE SERVICES' on your bank statement to ensure your privacy." },
              { q: "How do I access exclusive content?", a: "Once you subscribe, all exclusive content for that tier will be automatically unlocked in the creator's vault and your personal library." },
              { q: "What if I want to upgrade my tier?", a: "You can upgrade your tier at any time. The price will be prorated for the remainder of your current billing cycle." },
            ].map((faq, i) => (
              <div key={i} className="border-b pb-8">
                <h4 className="text-lg font-serif font-bold mb-4">{faq.q}</h4>
                <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t bg-background">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-xs text-muted-foreground uppercase tracking-widest font-bold mb-8">
            © 2026 Luxe Creator. All rights reserved. 18+ Platform.
          </div>
          <div className="flex justify-center gap-8 text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Compliance</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
