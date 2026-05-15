interface Props {
    title: string;
    value: string;
  }
  
  export default function DashboardCard({
    title,
    value,
  }: Props) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
  
        <p className="text-sm text-slate-500">
          {title}
        </p>
  
        <h2 className="text-3xl font-bold text-slate-800 mt-2">
          {value}
        </h2>
  
      </div>
    );
  }