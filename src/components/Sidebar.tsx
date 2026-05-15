import Link from "next/link";
export default function Sidebar() {
    return (
      <div className="w-64 h-screen bg-slate-900 text-white p-5">
  
        <h1 className="text-2xl font-bold mb-10 border-b border-slate-700 pb-4">
          ERP Base
        </h1>
  
        <ul className="space-y-2">
  
          <li className="p-3 rounded-lg hover:bg-slate-800 cursor-pointer transition">
            Dashboard
          </li>
  
          <Link href="/clientes">
  <li className="p-3 rounded-lg hover:bg-slate-800 cursor-pointer transition">
    Clientes
  </li>
</Link>
  
          <Link href="/produtos">
            <li className="p-3 rounded-lg hover:bg-slate-800 cursor-pointer transition">
              Produtos
            </li>
          </Link>
  
          <li className="p-3 rounded-lg hover:bg-slate-800 cursor-pointer transition">
            Pedidos
          </li>
  
          <li className="p-3 rounded-lg hover:bg-slate-800 cursor-pointer transition">
            Financeiro
          </li>
  
          <li className="p-3 rounded-lg hover:bg-slate-800 cursor-pointer transition">
            PDV
          </li>
  
        </ul>
      </div>
    );
  }