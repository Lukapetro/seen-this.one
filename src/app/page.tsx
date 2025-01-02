import Footer from "./components/Footer";
import Header from "./components/Header";
import IndexComparisonChart from "./components/IndexComparisonChart";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background bg-[linear-gradient(to_bottom,transparent_0%,rgb(17,17,17)_100%)]">
      <Header />
      <main className="flex-1">
        <div className="mx-auto w-full max-w-6xl px-4 py-12 md:py-16">
          <div className="space-y-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight text-foreground/90">
                Market Trend Analysis
              </h2>
              <p className="text-muted-foreground text-lg">
                Visualizing the parallels between historical DeFi growth and
                current AI market trends.
              </p>
            </div>
            <IndexComparisonChart />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
