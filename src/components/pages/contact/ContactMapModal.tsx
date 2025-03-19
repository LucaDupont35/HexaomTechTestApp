import { useEffect, useState } from "react";
import Modal from "../../shared/modal/Modal.tsx";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface Contact {
    id: number;
    firstName: string;
    lastName: string;
    city: string;
    postalCode: string;
}

interface MapModalProps {
    isOpen: boolean;
    onClose: () => void;
    contacts: Contact[];
}

const MapModal = ({ isOpen, onClose, contacts }: MapModalProps) => {
    const [locations, setLocations] = useState<{ lat: number; lng: number; name: string }[]>([]);

    const fetchCoordinates = async (city: string, postalCode: string) => {
        try {
            const response = await fetch(
                `https://nominatim.openstreetmap.org/search?city=${city}&postalcode=${postalCode}&country=France&format=json`
            );
            const data = await response.json();
            if (data.length > 0) {
                return {
                    lat: parseFloat(data[0].lat),
                    lng: parseFloat(data[0].lon),
                    name: `${city} (${postalCode})`,
                };
            }
        } catch (error) {
            console.error("Erreur lors de la récupération des coordonnées :", error);
        }
        return null;
    };

    useEffect(() => {
        if (isOpen) {
            const loadLocations = async () => {
                const results = await Promise.all(
                    contacts.map((contact) => fetchCoordinates(contact.city, contact.postalCode))
                );
                setLocations(results.filter((loc) => loc !== null) as { lat: number; lng: number; name: string }[]);
            };

            loadLocations();
        }
    }, [isOpen, contacts]);

    if (!isOpen) return null;

    return (

        <Modal isOpen={isOpen} onClose={onClose} title="Géolocalisation des contacts">
            <div className="w-full h-96">
                <MapContainer center={[46.603354, 1.888334]} zoom={6} className="h-full w-full">
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    {locations.map((loc, index) => (
                        <Marker key={index} position={[loc.lat, loc.lng]}>
                            <Popup>{loc.name}</Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </Modal>
    );
};

export default MapModal;
