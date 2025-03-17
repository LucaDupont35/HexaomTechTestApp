const ContactHeader = ({ contactCount }: { contactCount: number }) => (
    <div className="bg-white p-4 shadow-md rounded-lg mb-4">
        <h1 className="text-3xl font-bold">Contacts</h1>
        <p className="text-gray-500">Vous avez {contactCount} contacts.</p>
    </div>
);
export default ContactHeader;