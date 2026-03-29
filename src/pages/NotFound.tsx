import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "motion/react";
import { ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-8">
            <Search className="size-12" />
          </div>
          <h1 className="text-8xl font-serif font-bold text-primary mb-4 leading-none">404</h1>
          <h2 className="text-3xl font-serif font-bold mb-6">Page Not Found</h2>
          <p className="text-muted-foreground mb-10 leading-relaxed">
            The exclusive content or page you are looking for has been moved, deleted, or never existed in the first place.
          </p>
          <div className="flex flex-col gap-4">
            <Link href="/">
              <Button size="lg" className="w-full h-14 font-bold uppercase tracking-widest rounded-xl">
                <ArrowLeft className="mr-2 size-5" /> BACK TO HOME
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="w-full h-14 font-bold uppercase tracking-widest rounded-xl">
              CONTACT SUPPORT
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
