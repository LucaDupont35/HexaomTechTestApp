import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HexaomHeader from "./components/header/HexaomHeader.tsx";
import ContactPage from "./components/pages/contact/ContactPage.tsx";
import HexaomNavBar from "./components/nav/HeaxomNavBar.tsx";

export const App = () => {
    return (
        <Router>
            <div className="flex h-screen overflow-hidden">
                <HexaomNavBar/>
                <div className="flex-1">
                    <Routes>
                        <Route path="/" element={<HexaomHeader />} />
                        <Route path="/academy" element={<HexaomHeader />} />
                        <Route path="/chat" element={<HexaomHeader />} />
                        <Route path="/contacts" element={<div><HexaomHeader /><ContactPage /></div>} />
                        <Route path="/ecommerce/orders" element={<HexaomHeader />} />
                        <Route path="/ecommerce/products" element={<HexaomHeader />} />
                        <Route path="/file-manager" element={<HexaomHeader />} />
                        <Route path="/help-center/faq" element={<HexaomHeader />} />
                        <Route path="/help-center/support" element={<HexaomHeader />} />
                        <Route path="/mailbox" element={<HexaomHeader />} />
                        <Route path="*" element={<HexaomHeader />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};
