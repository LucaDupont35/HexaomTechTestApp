import NavItem, { Item } from "./NavItem";

export type ItemList = { items: Item[] };

const NavList = ({ items }: ItemList) => {
    return (
        <ul className="space-y-2 mt-4">
            {items.map((item, index) => (
                <li key={index}>
                    <NavItem {...item} />
                </li>
            ))}
        </ul>
    );
};
export default NavList;
