import { Key, Users, Trophy, Shield } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: Key,
      title: "Generate Keys",
      description: "Create your Schnorr signature keypair using Decrediton or Cake Wallet. Your private key never leaves your device.",
    },
    {
      number: "02",
      icon: Users,
      title: "Find Opponent",
      description: "Connect with other players in customizable game rooms.",
    },
    {
      number: "03",
      icon: Shield,
      title: "Lock Bets",
      description: "Both players cryptographically commit their bets using multi-signature transactions.",
    },
    {
      number: "04",
      icon: Trophy,
      title: "Play & Settle",
      description: "Game outcomes are verified on-chain. Winner receives funds automatically.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 relative bg-card/30">
      <div className="absolute inset-0 scanlines" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-sm text-primary uppercase tracking-widest mb-4 block">
            // PROTOCOL
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            How <span className="text-gradient-accent">Schnorr</span> Works
          </h2>
          <p className="font-mono text-muted-foreground max-w-2xl mx-auto">
            Trustless betting powered by advanced cryptography. Every bet is secured by the same signatures that protect the Decred blockchain.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative flex items-start gap-6 mb-12 last:mb-0"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-20 w-px h-full bg-gradient-to-b from-primary/50 to-transparent" />
              )}

              {/* Number Badge */}
              <div className="relative flex-shrink-0">
                <div className="w-16 h-16 rounded-xl bg-card border border-primary/30 flex items-center justify-center group-hover:border-primary transition-colors duration-300">
                  <span className="font-mono text-xl font-bold text-primary">{step.number}</span>
                </div>
                <div className="absolute -inset-2 rounded-xl bg-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="flex-1 pt-2">
                <div className="flex items-center gap-3 mb-2">
                  <step.icon className="h-5 w-5 text-accent" />
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {step.title}
                  </h3>
                </div>
                <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Note */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="rounded-xl border border-accent/30 bg-accent/5 p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-accent" />
                </div>
              </div>
              <div>
                <h4 className="font-display font-bold text-accent mb-2">
                  Why Schnorr Signatures?
                </h4>
                <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                  Schnorr signatures enable secure multi-party computation without trusted dealers. 
                  This means players can jointly create signatures that neither party could create alone, 
                  ensuring fair and trustless betting outcomes.
                </p>
                <a
                  href="https://victorduarte.site/blog/schnorr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 font-mono text-sm text-accent hover:underline"
                >
                  Read the full technical breakdown →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
