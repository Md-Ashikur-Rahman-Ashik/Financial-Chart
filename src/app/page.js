import FinancialChart from "@/components/FinancialChart";
import LightChart from "@/components/LightChart";

export default function Home() {
  return (
    <div className="container mx-auto">
      <h1 className="text-center font-bold text-2xl">
        Financial Dashboard using Apex Charts
      </h1>
      <FinancialChart />

      <div className="my-10">
        <h1 className="text-center font-bold text-2xl">
          Financial Dashboard using Tradingview Lightweight Chart
        </h1>
        <LightChart />
      </div>
    </div>
  );
}
