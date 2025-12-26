import { Spade, Gamepad2 } from "lucide-react";
import pokerScreenshot from "@/assets/poker-screenshot.jpg";
import pongScreenshot from "@/assets/pong-screenshot.jpg";
const GamesSection = () => {
  const games = [{
    id: "poker",
    title: "Poker",
    description: "Classic Texas Hold'em with cryptographic card dealing. Every shuffle is provably fair using Schnorr signatures.",
    icon: Spade,
    color: "primary",
    features: ["Texas Hold'em", "Provably Fair", "P2P Betting", "DCR Stakes"],
    screenshot: pokerScreenshot
  }, {
    id: "pong",
    title: "Pong",
    description: "The arcade classic reimagined for the blockchain era. Fast-paced matches with instant settlements.",
    icon: Gamepad2,
    color: "accent",
    features: ["Real-time Play", "Low Latency", "Instant Payouts", "Competitive"],
    screenshot: pongScreenshot
  }];
  return <section id="games" className="py-24 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-sm text-accent uppercase tracking-widest mb-4 block">
            // AVAILABLE GAMES
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Choose Your <span className="text-gradient">Arena</span>
          </h2>
          <p className="font-mono text-muted-foreground max-w-xl mx-auto">
            Two games, infinite possibilities. Bet against other players directly using the Decred network.
          </p>
        </div>

        {/* Games Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {games.map((game, index) => <div key={game.id} className="group relative rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)]" style={{
          animationDelay: `${index * 0.2}s`
        }}>
              {/* Screenshot */}
              <div className="relative h-48 overflow-hidden">
                <img src={game.screenshot} alt={`${game.title} gameplay`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                
                {/* Icon Overlay */}
                <div className={`absolute top-4 left-4 inline-flex items-center justify-center w-12 h-12 rounded-xl ${game.color === 'primary' ? 'bg-primary/20 border-primary/40' : 'bg-accent/20 border-accent/40'} border backdrop-blur-sm`}>
                  <game.icon className={`h-6 w-6 ${game.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                </div>

                {/* Live Badge */}
                <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 rounded-full bg-card/80 backdrop-blur-sm border border-border/50">
                  <div className={`w-2 h-2 rounded-full ${game.color === 'primary' ? 'bg-primary' : 'bg-accent'} animate-pulse`} />
                  <span className="font-mono text-xs text-foreground uppercase">Available</span>
                </div>
              </div>
              
              <div className="relative z-10 p-6">
                {/* Title */}
                <h3 className="font-display text-2xl font-bold mb-3 text-foreground">
                  {game.title}
                </h3>

                {/* Description */}
                <p className="font-mono text-sm text-muted-foreground mb-6 leading-relaxed">
                  {game.description}
                </p>

                {/* Features */}
                
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default GamesSection;