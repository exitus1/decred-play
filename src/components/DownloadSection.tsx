import { Download, Apple, Monitor } from "lucide-react";

type Platform = "windows" | "macos" | "linux";

const platformsMap: Record<Platform, { name: string; icon: typeof Monitor; description: string }> = {
  windows: {
    name: "Windows",
    icon: Monitor,
    description: "Windows 10/11 (64-bit)",
  },
  macos: {
    name: "macOS",
    icon: Apple,
    description: "macOS 11+ (Intel & Apple Silicon)",
  },
  linux: {
    name: "Linux",
    icon: Monitor,
    description: "Ubuntu 20.04+ / Debian 11+",
  },
};

const games = [
  {
    name: "Poker",
    description: "Classic Texas Hold'em",
    downloadUrl: "https://github.com/vctt94/pokerbisonrelay/releases/tag/v0.0.1-rc0",
    version: "v0.0.1-rc0",
    color: "primary" as const,
  },
  {
    name: "Pong",
    description: "The arcade classic with some Decred flair",
    downloadUrl: "https://github.com/vctt94/pongbisonrelay/releases/tag/v0.0.1",
    version: "v0.0.1",
    color: "accent" as const,
  },
];

const DownloadSection = () => {
  return (
    <section id="download" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-sm text-accent uppercase tracking-widest mb-4 block">
            // GET STARTED
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Download <span className="text-gradient">Decred Gaming</span>
          </h2>
          <p className="font-mono text-muted-foreground max-w-xl mx-auto">
            Available for all major platforms. Open source and fully auditable.
          </p>
        </div>

        {/* Game Download Blocks */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {games.map((game) => (
            <div
              key={game.name}
              className={`group relative rounded-2xl border bg-card/50 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_hsl(var(--${game.color})/0.2)] ${
                game.color === "primary" ? "border-primary/30 hover:border-primary/60" : "border-accent/30 hover:border-accent/60"
              }`}
            >
              {/* Game Info */}
              <div className="p-6">
                {/* Version Badge */}
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border bg-background/50 mb-4 ${
                  game.color === "primary" ? "border-primary/50" : "border-accent/50"
                }`}>
                  <div className={`w-2 h-2 rounded-full animate-pulse ${game.color === "primary" ? "bg-primary" : "bg-accent"}`} />
                  <span className={`font-mono text-xs ${game.color === "primary" ? "text-primary" : "text-accent"}`}>
                    {game.version}
                  </span>
                </div>

                <h3 className={`font-display text-2xl font-bold mb-2 ${game.color === "primary" ? "text-gradient" : "text-gradient-accent"}`}>
                  {game.name}
                </h3>
                <p className="font-mono text-sm text-muted-foreground mb-6">
                  {game.description}
                </p>

                {/* Platform Downloads */}
                <div className="space-y-3">
                  {Object.entries(platformsMap).map(([key, platform]) => (
                    <a
                      key={key}
                      href={game.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-between p-3 rounded-lg border transition-all duration-200 hover:bg-primary/5 ${
                        game.color === "primary" 
                          ? "border-primary/20 hover:border-primary/40" 
                          : "border-accent/20 hover:border-accent/40"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <platform.icon className={`h-5 w-5 ${game.color === "primary" ? "text-primary" : "text-accent"}`} />
                        <div>
                          <span className="font-mono text-sm text-foreground">{platform.name}</span>
                          <p className="font-mono text-xs text-muted-foreground">{platform.description}</p>
                        </div>
                      </div>
                      <Download className={`h-4 w-4 ${game.color === "primary" ? "text-primary" : "text-accent"}`} />
                    </a>
                  ))}
                </div>

                {/* GitHub Link */}
                <a
                  href={game.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center justify-center gap-2 font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
