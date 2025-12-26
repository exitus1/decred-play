import { Button } from "@/components/ui/button";
import { Download, Apple, Monitor } from "lucide-react";
import { useState, useEffect } from "react";

type Platform = "windows" | "macos" | "linux" | "unknown";

const detectOS = (): Platform => {
  const userAgent = navigator.userAgent.toLowerCase();
  
  if (userAgent.includes("win")) return "windows";
  if (userAgent.includes("mac")) return "macos";
  if (userAgent.includes("linux")) return "linux";
  
  return "unknown";
};

const DownloadSection = () => {
  const [detectedOS, setDetectedOS] = useState<Platform>("unknown");
  const [showAllPlatforms, setShowAllPlatforms] = useState(false);

  useEffect(() => {
    setDetectedOS(detectOS());
  }, []);

  const platformsMap = {
    windows: {
      name: "Windows",
      icon: Monitor,
      description: "Windows 10/11 (64-bit)",
      file: "windows-amd64",
      key: "windows" as Platform,
    },
    macos: {
      name: "macOS",
      icon: Apple,
      description: "macOS 11+ (Intel & Apple Silicon)",
      file: "darwin-amd64",
      key: "macos" as Platform,
    },
    linux: {
      name: "Linux",
      icon: Monitor,
      description: "Ubuntu 20.04+ / Debian 11+",
      file: "linux-amd64",
      key: "linux" as Platform,
    },
  };

  const platforms = Object.values(platformsMap);
  const detectedPlatform = detectedOS !== "unknown" ? platformsMap[detectedOS] : null;
  const shouldShowAll = showAllPlatforms || detectedOS === "unknown";

  const downloadUrl = "https://github.com/vctt94/pokerbisonrelay/releases/tag/v0.0.1-rc0";

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

        {/* Version Badge */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-sm text-foreground">
              Latest: <span className="text-primary">v0.0.1-rc0</span>
            </span>
          </div>
        </div>

        {/* Detected OS Download */}
        {!shouldShowAll && detectedPlatform && (
          <div className="max-w-md mx-auto mb-8">
            <a
              href={downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-xl border-2 border-primary/50 bg-card/50 backdrop-blur-sm p-8 text-center transition-all duration-300 hover:border-primary hover:shadow-[0_0_40px_hsl(var(--primary)/0.25)] block"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 border border-primary/30 mb-4 group-hover:scale-110 transition-transform duration-300">
                <detectedPlatform.icon className="h-8 w-8 text-primary" />
              </div>

              {/* Platform Name */}
              <h3 className="font-display text-xl font-bold text-foreground mb-1">
                Download for {detectedPlatform.name}
              </h3>

              {/* Description */}
              <p className="font-mono text-sm text-muted-foreground mb-4">
                {detectedPlatform.description}
              </p>

              {/* Download Button */}
              <div className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-mono text-sm group-hover:bg-primary/90 transition-colors">
                <Download className="h-4 w-4" />
                <span>Download Now</span>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>

            {/* Show other platforms link */}
            <button
              onClick={() => setShowAllPlatforms(true)}
              className="mt-4 font-mono text-sm text-muted-foreground hover:text-primary transition-colors mx-auto block"
            >
              Looking for a different platform?
            </button>
          </div>
        )}

        {/* All Platforms Download Cards */}
        {shouldShowAll && (
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {platforms.map((platform) => (
              <a
                key={platform.name}
                href={downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative rounded-xl border bg-card/50 backdrop-blur-sm p-6 text-center transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)] ${
                  platform.key === detectedOS
                    ? "border-primary/50 ring-1 ring-primary/20"
                    : "border-border/50"
                }`}
              >
                {/* Recommended badge */}
                {platform.key === detectedOS && (
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-primary text-primary-foreground text-xs font-mono">
                    Recommended
                  </div>
                )}

                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <platform.icon className="h-7 w-7 text-primary" />
                </div>

                {/* Platform Name */}
                <h3 className="font-display text-lg font-bold text-foreground mb-1">
                  {platform.name}
                </h3>

                {/* Description */}
                <p className="font-mono text-xs text-muted-foreground mb-4">
                  {platform.description}
                </p>

                {/* Download Button */}
                <div className="flex items-center justify-center gap-2 text-primary font-mono text-sm">
                  <Download className="h-4 w-4" />
                  <span>Download</span>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            ))}
          </div>
        )}

        {/* GitHub Link */}
        <div className="text-center">
          <Button variant="terminal" size="lg" asChild>
            <a
              href={downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="gap-3"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              View on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
