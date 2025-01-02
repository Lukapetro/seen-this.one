"use client";

const Footer = () => {
  return (
    <footer className="sticky bottom-0 z-50 w-full border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="text-sm text-foreground/60">
            Built by{" "}
            <a
              href="https://github.com/lukapetro"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-foreground/80 hover:text-foreground transition-colors hover:underline underline-offset-4"
            >
              Luka Petrovic
            </a>
          </div>
          <div className="text-sm text-foreground/60">
            Data from{" "}
            <a
              href="https://messari.io"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-foreground/80 hover:text-foreground transition-colors hover:underline underline-offset-4"
            >
              Messari
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
