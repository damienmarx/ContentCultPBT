import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  Layout, 
  Eye, 
  Download, 
  Star, 
  Search, 
  Filter,
  ArrowRight,
  Sparkles,
  Zap,
  Shield
} from "lucide-react";
import { Link } from "wouter";

const templates = [
  {
    id: 1,
    name: "Luxe Noir",
    category: "Premium Dark",
    price: "Included",
    rating: 4.9,
    image: "https://picsum.photos/seed/noir/800/600",
    features: ["Dark Mode", "Video Background", "High Conversion"],
  },
  {
    id: 2,
    name: "Rose Gold",
    category: "Elegant",
    price: "Included",
    rating: 4.8,
    image: "https://picsum.photos/seed/rose/800/600",
    features: ["Soft Palette", "Gallery Focus", "Mobile Optimized"],
  },
  {
    id: 3,
    name: "Brutal Minimal",
    category: "Modern",
    price: "$49",
    rating: 4.7,
    image: "https://picsum.photos/seed/brutal/800/600",
    features: ["Bold Typography", "Fast Loading", "Custom Grid"],
  },
  {
    id: 4,
    name: "Vibrant Pop",
    category: "Energetic",
    price: "Included",
    rating: 4.6,
    image: "https://picsum.photos/seed/pop/800/600",
    features: ["Bright Colors", "Interactive Elements", "Social Sync"],
  },
  {
    id: 5,
    name: "Classic Silk",
    category: "Traditional",
    price: "$29",
    rating: 4.8,
    image: "https://picsum.photos/seed/silk/800/600",
    features: ["Clean Layout", "Text Focused", "SEO Ready"],
  },
  {
    id: 6,
    name: "Cyber Punk",
    category: "Futuristic",
    price: "$79",
    rating: 4.9,
    image: "https://picsum.photos/seed/cyber/800/600",
    features: ["Neon Accents", "Animated Transitions", "Crypto Ready"],
  },
];

export default function Templates() {
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
            <Link href="/templates" className="text-primary">Templates</Link>
            <Link href="/exclusive" className="hover:text-primary transition-colors">Exclusive</Link>
            <Link href="/subscriptions" className="hover:text-primary transition-colors">Subscriptions</Link>
          </div>
          <Button size="sm" className="bg-primary hover:bg-primary/90">START BUILDING</Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 text-9xl font-serif font-bold rotate-12">LUXE</div>
          <div className="absolute bottom-10 right-10 text-9xl font-serif font-bold -rotate-12">CREATOR</div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-6xl md:text-8xl font-serif font-bold leading-none mb-8">
                Premium <br />
                <span className="italic text-white/80 underline decoration-white/30 underline-offset-8">Templates</span>
              </h1>
              <p className="text-xl text-primary-foreground/80 mb-10 leading-relaxed">
                Launch your creator empire with high-converting, professional designs. Optimized for 18+ content, mobile-first, and fully customizable.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="secondary" className="h-14 px-8 font-bold uppercase tracking-widest">
                  BROWSE ALL
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 font-bold uppercase tracking-widest border-white/30 hover:bg-white/10">
                  CUSTOM DESIGN
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b bg-muted/30 sticky top-16 z-40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:row items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar">
            {["All", "Premium", "Minimal", "Bold", "Dark", "Light"].map((cat) => (
              <Button key={cat} variant={cat === "All" ? "default" : "ghost"} size="sm" className="rounded-full px-6 font-bold uppercase tracking-widest text-[10px]">
                {cat}
              </Button>
            ))}
          </div>
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-grow md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search templates..." 
                className="pl-10 pr-4 py-2 bg-white dark:bg-slate-900 border rounded-full text-sm w-full outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <Button variant="outline" size="icon" className="rounded-full flex-shrink-0">
              <Filter className="size-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {templates.map((template, i) => (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="group border-none shadow-xl overflow-hidden rounded-3xl bg-white dark:bg-slate-900">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={template.image} 
                      alt={template.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <Button variant="secondary" size="sm" className="rounded-full font-bold uppercase tracking-widest text-[10px]">
                        <Eye className="size-3 mr-2" /> Preview
                      </Button>
                      <Button size="sm" className="rounded-full font-bold uppercase tracking-widest text-[10px]">
                        <Download className="size-3 mr-2" /> Select
                      </Button>
                    </div>
                    <div className="absolute top-4 left-4 flex gap-2">
                      <div className="bg-white/90 backdrop-blur-md text-black px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                        {template.category}
                      </div>
                      <div className="bg-primary text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                        {template.price}
                      </div>
                    </div>
                  </div>
                  <CardHeader className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-2xl font-serif">{template.name}</CardTitle>
                      <div className="flex items-center gap-1 text-sm font-bold">
                        <Star className="size-4 fill-primary text-primary" />
                        {template.rating}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {template.features.map((feature, j) => (
                        <span key={j} className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground bg-muted px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-8">
            <Sparkles className="size-10" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Need a Custom Design?</h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            Our elite design team can build a bespoke platform tailored specifically to your brand identity and content style.
          </p>
          <Button size="lg" className="h-14 px-10 font-bold uppercase tracking-widest rounded-full">
            TALK TO A DESIGNER <ArrowRight className="ml-2 size-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-xs text-muted-foreground uppercase tracking-widest font-bold">
          © 2026 Luxe Creator. All rights reserved. 18+ Platform.
        </div>
      </footer>
    </div>
  );
}
