import { Spade, Gamepad2 } from "lucide-react";

const GamesSection = () => {
  const games = [
    {
      id: "poker",
      title: "Poker",
      description: "Classic Texas Hold'em with cryptographic card dealing. Every shuffle is provably fair using Schnorr signatures.",
      icon: Spade,
      color: "primary",
      features: ["Texas Hold'em", "Provably Fair", "P2P Betting", "DCR Stakes"],
    },
    {
      id: "pong",
      title: "Pong",
      description: "The arcade classic reimagined for the blockchain era. Fast-paced matches with instant settlements.",
      icon: Gamepad2,
      color: "accent",
      features: ["Real-time Play", "Low Latency", "Instant Payouts", "Competitive"],
    },
  ];

  return (
    <section id="games" className="py-24 relative">
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
          {games.map((game, index) => (
            <div
              key={game.id}
              className={`group relative rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 transition-all duration-500 hover:border-${game.color}/50 hover:shadow-[0_0_40px_hsl(var(--${game.color})/0.15)]`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-${game.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-${game.color}/10 border border-${game.color}/30 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <game.icon className={`h-8 w-8 ${game.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl font-bold mb-3 text-foreground group-hover:text-gradient transition-all duration-300">
                  {game.title}
                </h3>

                {/* Description */}
                <p className="font-mono text-sm text-muted-foreground mb-6 leading-relaxed">
                  {game.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {game.features.map((feature) => (
                    <span
                      key={feature}
                      className={`px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider border ${
                        game.color === 'primary' 
                          ? 'border-primary/30 text-primary bg-primary/5' 
                          : 'border-accent/30 text-accent bg-accent/5'
                      }`}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Corner Decoration */}
              <div className={`absolute top-4 right-4 w-2 h-2 rounded-full ${game.color === 'primary' ? 'bg-primary' : 'bg-accent'} animate-pulse`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
