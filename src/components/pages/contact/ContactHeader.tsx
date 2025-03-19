import { ReactNode } from "react";
import PageHeader from "../../shared/page/PageHeader.tsx";

interface ContactHeaderProps {
    contactCount: number;
    children?: ReactNode;
}

const ContactHeader = ({ contactCount, children }: ContactHeaderProps) => {
    return (
        <PageHeader>
            <div className="pb-2">
                <h1 className="text-3xl font-bold">Contacts</h1>
                <span>{contactCount} contacts</span>
            </div>
            <div className="flex items-center gap-4">
                {children}
            </div>
        </PageHeader>
    );
};

export default ContactHeader;
