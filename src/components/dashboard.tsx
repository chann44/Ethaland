import { StrategyBanner } from "@/components/strategy";
import { BackButton } from "@/components/back-button";
import { CurrencyCluster } from "./currencyCluster";
import { VaultCard } from "./vault-card";
import { CoinStoreProvider } from "@/store/coin-store";
import { AmountStoreProvider } from "@/store/ammount-store";
import { Form } from "@/components/form";

export function Dashboard() {
  return (
    <CoinStoreProvider>
      <section className="mx-auto flex w-full max-w-5xl flex-col gap-y-14">
        <div className="flex flex-col gap-y-7">
          <BackButton />
          <div className="mb-5 flex flex-col items-center gap-5 md:flex-row">
            <CurrencyCluster />
            <h1 className="text-4xl font-medium">Ethereum vault</h1>
          </div>
          <div className="flex w-full flex-col items-center gap-10 md:flex-row">
            <AmountStoreProvider>
              <Form />
              <VaultCard />
            </AmountStoreProvider>
          </div>
        </div>
        <StrategyBanner />
      </section>
    </CoinStoreProvider>
  );
}
