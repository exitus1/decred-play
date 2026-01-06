import DcrIcon from "@/components/DcrIcon";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/30 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <DcrIcon size={24} />
            <span className="font-display font-bold text-lg">
              <span className="text-foreground">DECRED</span>
              <span className="text-gradient"> GAMING</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8">
            <a
              href="https://github.com/vctt94/pokerbisonrelay"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              GitHub
            </a>
            <a
              href="https://victorduarte.site/blog/schnorr/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Documentation
            </a>
            <a
              href="https://decred.org"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Decred
            </a>
          </div>

          {/* Copyright */}
          <div className="font-mono text-xs text-muted-foreground">
            <span className="text-accent">&lt;/&gt;</span> Built on Decred · {new Date().getFullYear()}
          </div>
        </div>

        {/* Terminal Style Signature */}
        <div className="mt-8 pt-6 border-t border-border/30 text-center">
          <code className="font-mono text-xs text-muted-foreground/60">
            // Trustless gaming. Powered by cryptography.
          </code>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
