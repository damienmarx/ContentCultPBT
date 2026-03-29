import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  Play, 
  Video, 
  Image as ImageIcon, 
  Zap, 
  Shield, 
  Star, 
  ArrowRight,
  Lock,
  Heart,
  MessageCircle,
  Share2,
  Download,
  Eye,
  TrendingUp,
  Users,
  DollarSign
} from "lucide-react";
import { Link } from "wouter";

const scenarios = [
  {
    id: 1,
    title: "The Morning Routine",
    description: "A high-production, intimate look at a creator's morning ritual. Perfect for building a personal connection with fans.",
    stats: { revenue: "$4,500", conversions: "12%", views: "24K" },
    image: "https://picsum.photos/seed/morning/800/600",
    tags: ["Lifestyle", "Intimate", "High-Prod"],
  },
  {
    id: 2,
    title: "Behind the Scenes: Paris",
    description: "Exclusive travel content that showcases the luxury lifestyle fans aspire to. High engagement and shareability.",
    stats: { revenue: "$12,400", conversions: "18%", views: "85K" },
    image: "https://picsum.photos/seed/paris/800/600",
    tags: ["Travel", "Luxury", "Vlog"],
  },
  {
    id: 3,
    title: "The Midnight Series",
    description: "A dark, moody, and highly exclusive series for premium tiers only. Drives high-value subscription upgrades.",
    stats: { revenue: "$8,200", conversions: "24%", views: "15K" },
    image: "https://picsum.photos/seed/midnight/800/600",
    tags: ["Exclusive", "Dark", "Premium"],
  },
  {
    id: 4,
    title: "Interactive Q&A Session",
    description: "Direct fan interaction that builds long-term loyalty and recurring revenue. High retention rates.",
    stats: { revenue: "$3,100", conversions: "8%", views: "12K" },
    image: "https://picsum.photos/seed/qa/800/600",
    tags: ["Interactive", "Community", "Live"],
  },
];

export default function ScenarioShowcase() {
  return (
    <div className="min-h-screen bg-[#151619] text-white font-mono">
      {/* Navbar */}
      <nav className="border-b border-white/10 sticky top-0 bg-[#151619]/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-serif font-bold text-xl">L</div>
            <span className="font-serif font-bold text-xl tracking-tight">LUXE</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-[10px] uppercase tracking-[0.2em] font-bold text-white/40">
            <Link href="/dashboard" className="hover:text-primary transition-colors">Dashboard</Link>
            <Link href="/templates" className="hover:text-primary transition-colors">Templates</Link>
            <Link href="/exclusive" className="hover:text-primary transition-colors">Exclusive</Link>
            <Link href="/scenarios" className="text-primary">Scenarios</Link>
          </div>
          <Button size="sm" className="bg-primary hover:bg-primary/90 rounded-none h-8 text-[10px] uppercase tracking-[0.2em] font-bold">
            NEW SCENARIO
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-24 border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="grid grid-cols-12 h-full">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="border-r border-white/20 h-full" />
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/30 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
              <Zap className="size-3" />
              Scenario Optimization Engine v2.4
            </div>
            <h1 className="text-5xl md:text-8xl font-serif font-bold leading-none mb-8 tracking-tighter uppercase">
              Content <br />
              <span className="text-primary italic">Scenarios</span>
            </h1>
            <p className="text-sm text-white/40 mb-12 max-w-xl leading-relaxed uppercase tracking-widest font-bold">
              Proven content frameworks designed to maximize engagement, retention, and revenue for premium creators.
            </p>
            <div className="flex gap-6">
              <Button size="lg" className="h-14 px-10 text-xs font-bold tracking-[0.2em] uppercase rounded-none bg-primary hover:bg-primary/90">
                DEPLOY SCENARIO
              </Button>
              <Button variant="outline" size="lg" className="h-14 px-10 text-xs font-bold tracking-[0.2em] uppercase rounded-none border-white/10 hover:bg-white/5">
                VIEW DOCUMENTATION
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scenario Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {scenarios.map((scenario, i) => (
              <motion.div
                key={scenario.id}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-[#1A1B1E] border border-white/10 p-8 group hover:border-primary/50 transition-colors duration-500">
                  <div className="relative aspect-video overflow-hidden mb-8 border border-white/10">
                    <img 
                      src={scenario.image} 
                      alt={scenario.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                    <div className="absolute top-4 left-4 flex gap-2">
                      {scenario.tags.map((tag, j) => (
                        <span key={j} className="bg-black/80 backdrop-blur-md text-white/60 px-2 py-1 text-[8px] font-bold uppercase tracking-[0.2em] border border-white/10">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-serif font-bold uppercase tracking-tight mb-2">{scenario.title}</h3>
                      <p className="text-xs text-white/40 leading-relaxed uppercase tracking-widest font-bold">{scenario.description}</p>
                    </div>
                    <div className="w-12 h-12 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Play className="size-6" />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
                    <div>
                      <div className="text-[8px] uppercase tracking-[0.2em] text-white/40 font-bold mb-1">Avg Revenue</div>
                      <div className="text-xl font-bold text-primary">{scenario.stats.revenue}</div>
                    </div>
                    <div>
                      <div className="text-[8px] uppercase tracking-[0.2em] text-white/40 font-bold mb-1">Conversion</div>
                      <div className="text-xl font-bold">{scenario.stats.conversions}</div>
                    </div>
                    <div>
                      <div className="text-[8px] uppercase tracking-[0.2em] text-white/40 font-bold mb-1">Total Views</div>
                      <div className="text-xl font-bold">{scenario.stats.views}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hardware Stats */}
      <section className="py-24 border-t border-white/10 bg-black/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12">
            {[
              { label: "System Uptime", value: "99.98%", icon: Shield },
              { label: "Data Throughput", value: "1.2 TB/s", icon: Zap },
              { label: "Active Nodes", value: "12,482", icon: Users },
              { label: "Network Latency", value: "12ms", icon: Globe },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 border border-white/10 flex items-center justify-center text-white/20 mx-auto mb-6">
                  <stat.icon className="size-6" />
                </div>
                <div className="text-[8px] uppercase tracking-[0.2em] text-white/40 font-bold mb-2">{stat.label}</div>
                <div className="text-2xl font-bold tracking-tighter">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-[8px] uppercase tracking-[0.2em] font-bold text-white/20">
          <div>© 2026 LUXE CREATOR // SCENARIO ENGINE</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Compliance</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Globe(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}
