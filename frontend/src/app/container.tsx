import { ReactNode } from "react";

const Container = ({ children, classNames }: { children: ReactNode, classNames?: string }) => {
    return <div className="container-max-width w-full mx-auto px-4">
        <div className={`${classNames}`}>
            {children}
        </div>
    </div >
}
export default Container;