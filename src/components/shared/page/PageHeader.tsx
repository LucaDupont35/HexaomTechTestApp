import { ReactNode } from "react";

interface PageHeaderProps {
    children?: ReactNode;
}

const PageHeader = ({ children }: PageHeaderProps) => {
    return (
        <div className="justify-between items-center p-4 border-b border-gray-300">
                {children}
        </div>
    );
};

export default PageHeader;
