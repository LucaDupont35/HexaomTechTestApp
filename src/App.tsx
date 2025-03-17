 import {ComponentPropsWithoutRef} from "react";
 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 import NavBar from "./components/nav/NavBar.tsx";
 import Header from "./components/header/Header.tsx";


 export type ButtonProps = ComponentPropsWithoutRef<"button"> & {color?: string};

export const Button = (props: ButtonProps) => {
    return <button onClick={props.onClick} id="test" style={{
        color : props.color ? props.color : "blue",
    }}{...props}>{props.children}</button>;
}



type GreetingProps = {
    name?: string;
    items?: string[];
}

export const Greeting = (props: GreetingProps) => {
    return <div>
        <p>Hello {props.name ?? "World"}</p>
        <ul className="list-inside list-disc">
            {props.items?.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
        </div>;
}

 export const App = () => {
     return (
         <Router>
             <div className="flex">
                 <NavBar />
                 <div className="flex-1">
                     <Routes>
                         <Route path="/" element={<Header></Header>} />
                         <Route path="/academy" element={<Header></Header>} />
                         <Route path="/chat" element={<Header></Header>} />
                         <Route path="/contacts" element={<Header></Header>} />
                         <Route path="/ecommerce/orders" element={<Header></Header>} />
                         <Route path="/ecommerce/products" element={<Header></Header>} />
                         <Route path="/file-manager" element={<Header></Header>} />
                         <Route path="/help-center/faq" element={<Header></Header>} />
                         <Route path="/help-center/support" element={<Header></Header>} />
                         <Route path="/mailbox" element={<Header></Header>} />
                         <Route path="*" element={<Header></Header>} />
                     </Routes>
                 </div>
             </div>
         </Router>
     );
 };
