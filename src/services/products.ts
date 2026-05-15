import { supabase } from "@/lib/supabase";
import { Product } from "@/types/product";

export async function getProducts(search?: string): Promise<Product[]> {
  let query = supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false });

  if (search) {
    query = query.ilike("name", `%${search}%`);
  }

  const { data, error } = await query;

  if (error) {
    throw new Error(error.message);
  }

  return data || [];
}

export async function createProduct(data: {
  name: string;
  category: string;
  price: number;
  stock: number;
}) {
  const { error } = await supabase.from("products").insert([
    {
      name: data.name,
      category: data.category,
      price: data.price,
      stock: data.stock,
      status: "Ativo",
    },
  ]);

  if (error) {
    throw new Error(error.message);
  }
}

export async function deleteProduct(id: string) {
  const { error } = await supabase.from("products").delete().eq("id", id);

  if (error) {
    throw new Error(error.message);
  }
}
