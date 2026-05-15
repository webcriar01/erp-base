"use client";

import { deleteCustomer } from "@/services/customers";

type Props = {
  id: string;
};

export default function DeleteCustomerButton({ id }: Props) {
  async function handleDelete() {
    const confirmed = confirm("Tem certeza que deseja excluir este cliente?");

    if (!confirmed) {
      return;
    }

    try {
      await deleteCustomer(id);
      alert("Cliente excluído!");
      window.location.reload();
    } catch (error) {
      alert("Erro ao excluir cliente");
      console.error(error);
    }
  }

  return (
    <button
      onClick={handleDelete}
      className="text-red-600 hover:text-red-800 font-medium"
    >
      Excluir
    </button>
  );
}