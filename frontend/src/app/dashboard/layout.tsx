import { Fragment, type ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="text-3xl font-bold underline">
            <article>Dashboard Sidebar</article>
            {children}
        </div>
    )
}

export default DashboardLayout;