import CustomerForm from "@/modules/customers/components/CustomerForm";
import DeleteCustomerButton from "@/modules/customers/components/DeleteCustomerButton";
import { getCustomers } from "@/services/customers";

type Props = {
  searchParams: Promise<{
    search?: string;
  }>;
};

export default async function ClientesPage({ searchParams }: Props) {
  const params = await searchParams;
  const clientes = await getCustomers(params.search);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-slate-800">
          Clientes
        </h1>

        <button className="bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition">
          Novo Cliente
        </button>
        <form className="mb-6">
  <input
    type="text"
    name="search"
    placeholder="Buscar cliente pelo nome..."
    defaultValue={params.search || ""}
    className="w-full max-w-md border border-slate-300 rounded-lg p-3"
  />
</form>
      </div>
      <CustomerForm />
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="text-left p-4">Nome</th>
              <th className="text-left p-4">Telefone</th>
              <th className="text-left p-4">Email</th>
              <th className="text-left p-4">Status</th>
              <th className="text-left p-4">Ações</th>
            </tr>
          </thead>

          <tbody>
            {clientes.map((cliente) => (
              <tr
                key={cliente.id}
                className="border-t border-slate-200 hover:bg-slate-50 transition"
              >
                <td className="p-4">{cliente.name}</td>
                <td className="p-4">{cliente.phone}</td>
                <td className="p-4">{cliente.email}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      cliente.status === "Ativo"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {cliente.status}
                  </span>
                </td>
                <td className="p-4">
  <DeleteCustomerButton id={cliente.id} />
</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}