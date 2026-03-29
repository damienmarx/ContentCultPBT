import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  Lock, 
  Play, 
  Image as ImageIcon, 
  Video, 
  Download, 
  Heart, 
  MessageCircle, 
  Share2,
  Star,
  Shield,
  Zap,
  ArrowRight
} from "lucide-react";
import { Link } from "wouter";

const contentItems = [
  {
    id: 1,
    title: "Midnight Elegance",
    type: "Video",
    duration: "12:45",
    price: "$19.99",
    likes: 1245,
    comments: 84,
    image: "https://picsum.photos/seed/midnight/800/600",
    locked: true,
  },
  {
    id: 2,
    title: "Silk & Satin Series",
    type: "Photo Pack",
    count: "24 Photos",
    price: "$14.99",
    likes: 845,
    comments: 42,
    image: "https://picsum.photos/seed/silk/800/600",
    locked: true,
  },
  {
    id: 3,
    title: "Behind the Scenes: Paris",
    type: "Vlog",
    duration: "45:00",
    price: "$29.99",
    likes: 2451,
    comments: 156,
    image: "https://picsum.photos/seed/paris/800/600",
    locked: true,
  },
  {
    id: 4,
    title: "Morning Rituals",
    type: "Video",
    duration: "08:30",
    price: "$9.99",
    likes: 542,
    comments: 21,
    image: "https://picsum.photos/seed/morning/800/600",
    locked: true,
  },
  {
    id: 5,
    title: "Golden Hour Shoot",
    type: "Photo Pack",
    count: "15 Photos",
    price: "$12.99",
    likes: 742,
    comments: 38,
    image: "https://picsum.photos/seed/golden/800/600",
    locked: true,
  },
  {
    id: 6,
    title: "Exclusive Q&A",
    type: "Video",
    duration: "25:15",
    price: "$19.99",
    likes: 1124,
    comments: 92,
    image: "https://picsum.photos/seed/qa/800/600",
    locked: true,
  },
];

export default function ExclusiveContentPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Navbar */}
      <nav className="border-b border-white/10 sticky top-0 bg-black/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-serif font-bold text-xl">L</div>
            <span className="font-serif font-bold text-xl tracking-tight">LUXE CREATOR</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-white/60">
            <Link href="/dashboard" className="hover:text-primary transition-colors">Dashboard</Link>
            <Link href="/templates" className="hover:text-primary transition-colors">Templates</Link>
            <Link href="/exclusive" className="text-primary">Exclusive</Link>
            <Link href="/subscriptions" className="hover:text-primary transition-colors">Subscriptions</Link>
          </div>
          <Button size="sm" className="bg-primary hover:bg-primary/90">MY LIBRARY</Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,#3a1510_0%,transparent_60%),radial-gradient(circle_at_10%_80%,#FF1493_0%,transparent_50%)] opacity-40 blur-[100px]" />
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-bold uppercase tracking-widest mb-8">
              <Lock className="size-3" />
              Vault Access Required
            </div>
            <h1 className="text-6xl md:text-9xl font-serif font-bold leading-none mb-8 tracking-tighter">
              The <span className="italic text-primary">Exclusive</span> <br />
              Vault
            </h1>
            <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
              Unlock the most intimate and high-production content from our top-tier creators. Secure, encrypted, and strictly for premium members.
            </p>
            <div className="flex justify-center gap-6">
              <Button size="lg" className="h-16 px-12 text-xl font-bold tracking-tight rounded-full bg-primary hover:bg-primary/90">
                UNLOCK ALL ACCESS
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-20 bg-black/50 backdrop-blur-3xl">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-serif font-bold">Latest Releases</h2>
            <div className="flex gap-4">
              <Button variant="outline" size="sm" className="rounded-full border-white/10 hover:bg-white/5 uppercase tracking-widest text-[10px] font-bold">
                <Video className="size-3 mr-2" /> Videos
              </Button>
              <Button variant="outline" size="sm" className="rounded-full border-white/10 hover:bg-white/5 uppercase tracking-widest text-[10px] font-bold">
                <ImageIcon className="size-3 mr-2" /> Photos
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {contentItems.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="group relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-white/5">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 blur-[2px] group-hover:blur-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                  
                  {/* Lock Overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                      <Lock className="size-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold mb-2">{item.title}</h3>
                    <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-white/60 font-bold mb-6">
                      <span>{item.type}</span>
                      <span className="w-1 h-1 bg-white/20 rounded-full" />
                      <span>{item.duration || item.count}</span>
                    </div>
                    <Button className="w-full h-12 rounded-xl bg-white text-black font-bold uppercase tracking-widest hover:bg-white/90">
                      UNLOCK FOR {item.price}
                    </Button>
                  </div>

                  {/* Stats Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-white/60">
                    <div className="flex gap-4">
                      <span className="flex items-center gap-1"><Heart className="size-3" /> {item.likes}</span>
                      <span className="flex items-center gap-1"><MessageCircle className="size-3" /> {item.comments}</span>
                    </div>
                    <span className="flex items-center gap-1"><Star className="size-3 fill-primary text-primary" /> Premium</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Protection Banner */}
      <section className="py-12 border-y border-white/10 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-12 md:gap-24">
          <div className="flex items-center gap-3 text-white/40 uppercase tracking-widest text-[10px] font-bold">
            <Shield className="size-4 text-primary" /> Encrypted Streaming
          </div>
          <div className="flex items-center gap-3 text-white/40 uppercase tracking-widest text-[10px] font-bold">
            <Lock className="size-4 text-primary" /> Secure Payouts
          </div>
          <div className="flex items-center gap-3 text-white/40 uppercase tracking-widest text-[10px] font-bold">
            <Zap className="size-4 text-primary" /> Instant Access
          </div>
          <div className="flex items-center gap-3 text-white/40 uppercase tracking-widest text-[10px] font-bold">
            <Star className="size-4 text-primary" /> Verified Creators
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-xs text-white/20 uppercase tracking-widest font-bold mb-8">
            © 2026 Luxe Creator. All rights reserved. 18+ Platform.
          </div>
          <div className="flex justify-center gap-8 text-[10px] text-white/40 uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Compliance</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
