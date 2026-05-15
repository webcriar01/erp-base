"use client";

import { deleteProduct } from "@/services/products";

type Props = {
  id: string;
};

export default function DeleteProductButton({ id }: Props) {
  async function handleDelete() {
    const confirmed = confirm("Tem certeza que deseja excluir este produto?");

    if (!confirmed) {
      return;
    }

    try {
      await deleteProduct(id);
      alert("Produto excluído!");
      window.location.reload();
    } catch (error) {
      alert("Erro ao excluir produto");
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
