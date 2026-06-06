import Dashboard from "../components/Dashboard";
import "../globals.css";

export default function DashboardLayout({ children }) {
  return <section className="grid grid-cols-5">
    <div className="col-span-1">
        <Dashboard></Dashboard>
    </div>
    <div className="col-span-4">
        {children}
    </div>
    </section>
}
