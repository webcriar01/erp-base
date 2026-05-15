import { supabase } from "@/lib/supabase";
import { Customer } from "@/types/customer";

export async function getCustomers(search?: string): Promise<Customer[]> {
  let query = supabase
    .from("customers")
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

export async function createCustomer(data: {
  name: string;
  phone: string;
  email: string;
}) {
  const { error } = await supabase
    .from("customers")
    .insert([
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        status: "Ativo",
      },
    ]);

  if (error) {
    throw new Error(error.message);
  }
}
export async function deleteCustomer(id: string) {
  const { error } = await supabase
    .from("customers")
    .delete()
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }
}