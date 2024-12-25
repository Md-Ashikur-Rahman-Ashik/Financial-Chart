import FinancialChart from "@/components/FinancialChart";

export default function Home() {
  return (
    <div className="container mx-auto">
      <h1 className="text-center font-bold text-2xl">Financial Dashboard</h1>
      <FinancialChart />
    </div>
  );
}
