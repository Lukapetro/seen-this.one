import Image from "next/image";
import Link from "next/link";

export default function DisclaimerPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-12">
      <Link
        href="/"
        className="inline-flex items-center text-sm text-foreground/60 hover:text-foreground/80 transition-colors mb-8"
      >
        ← Back to Home
      </Link>

      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground/90">Data Sources & Methodology</h1>
          <p className="mt-4 text-muted-foreground">
            This page explains how i gather and process the data displayed in the charts.
          </p>
        </div>

        <div className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground/90">DeFi Index (2020-2021)</h2>
            <p className="text-muted-foreground">
              The DeFi Index data is sourced from TradingView (chart ID: GsKbLgSZ) using monthly closing candle values. 
              This represents the historical market performance during the DeFi boom period from April 2020 to April 2021.
            </p>
            <div className="rounded-lg border border-border/40 bg-card p-4">
              <p className="text-sm text-muted-foreground">
                Source: <a href="https://it.tradingview.com/chart/GsKbLgSZ/?symbol=oBITSTAMP%3ABTCUSD" target="_blank" rel="noopener noreferrer" className="font-medium text-foreground hover:underline">TradingView Chart</a>
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground/90">AI Index (2024-Current)</h2>
            <p className="text-muted-foreground">
              The AI Index data is sourced from <a href="https://www.cookie.fun" target="_blank" rel="noopener noreferrer" className="font-medium text-foreground hover:underline">cookie.fun</a>, tracking the current market trends in the AI sector. 
              The values represent monthly market performance starting from 2024.
            </p>
            <div className="rounded-lg border border-border/40 bg-card p-4">
              <p className="text-sm text-muted-foreground flex items-center">
                <span>Source:</span>{" "}
                <span className="inline-flex items-center gap-1 ml-2">
                  <Image src="/cookie.png" alt="Cookie.fun logo" width={16} height={16} />
                  <a href="https://www.cookie.fun" target="_blank" rel="noopener noreferrer" className="font-medium text-foreground hover:underline">
                    Cookie.fun
                  </a>
                </span>
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground/90">Data Processing</h2>
            <p className="text-muted-foreground">
              All values are represented in billions of USD ($B) and are based on monthly closing values to ensure consistency 
              across both indices. This methodology was chosen to provide the most accurate and comparable view of market trends 
              between these two significant periods in the crypto market.
            </p>
          </section>

          <div className="rounded-lg border border-border/40 bg-card p-4 mt-8">
            <p className="text-sm text-muted-foreground">
              <strong>Disclaimer:</strong> The information provided is for informational purposes only and should not be considered 
              as financial advice. Market data can be volatile and past performance does not guarantee future results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
