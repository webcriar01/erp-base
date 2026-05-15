import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 bg-slate-100 min-h-screen">

        <Topbar />

        <div className="p-6">
          {children}
        </div>

      </div>

    </div>
  );
}