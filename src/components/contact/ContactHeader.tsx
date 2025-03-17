const ContactHeader = ({ contactCount, children }: { contactCount: number, children?: React.ReactNode }) => {
    return (
        <div className="flex justify-between items-center p-4 shadow-md rounded-lg">
            <div>
                <h1 className="text-6xl font-bold py-2">Contacts</h1>
                <p className="text-gray-500 text-2xl">{contactCount} contacts</p>
            </div>
            {children}
        </div>
    );
};

export default ContactHeader;