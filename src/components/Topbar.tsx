export default function Topbar() {
    return (
      <div className="w-full h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6">
  
        <h1 className="text-xl font-semibold text-slate-800">
          Dashboard
        </h1>
  
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-slate-300"></div>
  
          <div>
            <p className="text-sm font-medium text-slate-800">
              Admin
            </p>
  
            <p className="text-xs text-slate-500">
              administrador
            </p>
          </div>
        </div>
  
      </div>
    );
  }