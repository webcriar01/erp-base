"use client";
import { createCustomer } from "@/services/customers";
import { useState } from "react";

export default function CustomerForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();

  try {

    await createCustomer({
      name,
      phone,
      email,
    });

    alert("Cliente cadastrado!");

    setName("");
    setPhone("");
    setEmail("");

    window.location.reload();

  } catch (error) {

    alert("Erro ao cadastrar cliente");

    console.error(error);

  }
}
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl border border-slate-200 mb-6"
    >
      <h2 className="text-xl font-bold mb-4">
        Novo Cliente
      </h2>

      <div className="grid grid-cols-3 gap-4">

        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-slate-300 rounded-lg p-3"
        />

        <input
          type="text"
          placeholder="Telefone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border border-slate-300 rounded-lg p-3"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-slate-300 rounded-lg p-3"
        />

      </div>

      <button
        type="submit"
        className="mt-4 bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition"
      >
        Salvar Cliente
      </button>

    </form>
  );
}