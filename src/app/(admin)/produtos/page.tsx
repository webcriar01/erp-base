import DeleteProductButton from "@/modules/products/components/DeleteProductButton";
import ProductForm from "@/modules/products/components/ProductForm";
import { getProducts } from "@/services/products";

type Props = {
  searchParams: Promise<{
    search?: string;
  }>;
};

function formatPrice(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

export default async function ProdutosPage({ searchParams }: Props) {
  const params = await searchParams;
  const produtos = await getProducts(params.search);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-slate-800">Produtos</h1>

        <form className="mb-6">
          <input
            type="text"
            name="search"
            placeholder="Buscar produto pelo nome..."
            defaultValue={params.search || ""}
            className="w-full max-w-md border border-slate-300 rounded-lg p-3"
          />
        </form>
      </div>

      <ProductForm />

      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="text-left p-4">Nome</th>
              <th className="text-left p-4">Categoria</th>
              <th className="text-left p-4">Preço</th>
              <th className="text-left p-4">Estoque</th>
              <th className="text-left p-4">Status</th>
              <th className="text-left p-4">Ações</th>
            </tr>
          </thead>

          <tbody>
            {produtos.map((produto) => (
              <tr
                key={produto.id}
                className="border-t border-slate-200 hover:bg-slate-50 transition"
              >
                <td className="p-4">{produto.name}</td>
                <td className="p-4">{produto.category}</td>
                <td className="p-4">{formatPrice(produto.price)}</td>
                <td className="p-4">{produto.stock}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      produto.status === "Ativo"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {produto.status}
                  </span>
                </td>
                <td className="p-4">
                  <DeleteProductButton id={produto.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
