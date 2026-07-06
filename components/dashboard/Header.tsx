export default function Header() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      <div>
        <h1 className="text-xl font-bold text-slate-800">
          4LINK Management
        </h1>
        <p className="text-sm text-gray-500">
          Powered by OJIEID GROUP
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="text-right">
          <p className="font-semibold">Admin</p>
          <p className="text-sm text-gray-500">
            Administrator
          </p>
        </div>

        <div className="w-10 h-10 rounded-full bg-cyan-600 flex items-center justify-center text-white font-bold">
          A
        </div>
      </div>
    </header>
  );
}