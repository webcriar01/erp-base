"use client";

import { createProduct } from "@/services/products";
import { useState } from "react";

export default function ProductForm() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      await createProduct({
        name,
        category,
        price: Number(price),
        stock: Number(stock),
      });

      alert("Produto cadastrado!");

      setName("");
      setCategory("");
      setPrice("");
      setStock("");

      window.location.reload();
    } catch (error) {
      alert("Erro ao cadastrar produto");
      console.error(error);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl border border-slate-200 mb-6"
    >
      <h2 className="text-xl font-bold mb-4">Novo Produto</h2>

      <div className="grid grid-cols-4 gap-4">
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-slate-300 rounded-lg p-3"
          required
        />

        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-slate-300 rounded-lg p-3"
          required
        />

        <input
          type="number"
          placeholder="Preço"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border border-slate-300 rounded-lg p-3"
          min="0"
          step="0.01"
          required
        />

        <input
          type="number"
          placeholder="Estoque"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          className="border border-slate-300 rounded-lg p-3"
          min="0"
          step="1"
          required
        />
      </div>

      <button
        type="submit"
        className="mt-4 bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition"
      >
        Salvar Produto
      </button>
    </form>
  );
}
