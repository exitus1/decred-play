import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import DcrIcon from "@/components/DcrIcon";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-start justify-center pt-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/15 rounded-full blur-[80px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight animate-fade-in">
            <span className="text-foreground">P2P Gaming</span>
            <br />
            <span className="text-gradient">On Decred</span>
          </h1>

          {/* Subheadline */}
          <p className="font-mono text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Bet peer-to-peer over matches of{" "}
            <span className="text-accent font-semibold">Poker</span> and{" "}
            <span className="text-primary font-semibold">Pong</span> using
            cryptographic signatures. No middlemen. No trust required.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <Button variant="hero" size="xl" asChild>
              <a href="#download" className="group">
                Download Now
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="https://victorduarte.site/blog/schnorr/" target="_blank" rel="noopener noreferrer">
                Learn About Schnorr
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-gradient mb-1">2</div>
              <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Games</div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-gradient-accent mb-1">P2P</div>
              <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Direct Betting</div>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <div className="flex justify-center mb-1">
                <DcrIcon size={40} />
              </div>
              <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">Native Currency</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
