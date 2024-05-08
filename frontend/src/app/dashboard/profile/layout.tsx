import { Fragment, type ReactNode } from "react";

const ProfileLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="color-black">
            <article>Profile Sidebar</article>
            {children}
        </div>
    )
}

export default ProfileLayout;