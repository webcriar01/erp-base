import DashboardCard from "@/components/DashboardCard";

export default function Home() {
  return (
    <div>

      <h2 className="text-3xl font-bold text-slate-800 mb-6">
        Dashboard
      </h2>

      <div className="grid grid-cols-4 gap-6">

        <DashboardCard
          title="Faturamento"
          value="R$ 12.500"
        />

        <DashboardCard
          title="Clientes"
          value="150"
        />

        <DashboardCard
          title="Pedidos"
          value="32"
        />

        <DashboardCard
          title="Produtos"
          value="89"
        />

      </div>

    </div>
  );
}