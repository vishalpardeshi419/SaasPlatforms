import { Fragment, type ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="color-red">
            <article>Dashboard Sidebar</article>
            {children}
        </div>
    )
}

export default DashboardLayout;