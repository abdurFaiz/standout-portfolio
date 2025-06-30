import NavLink from "../../../components/NavLink";

export default function NavBar() {
    return (
        <header>
            <nav className="flex items-center justify-between flex-wrap px-7 pt-5 z-50 top-0 sticky bg-background-custom/90 backdrop-blur-sm">
                <NavLink activeClassName="font-semibold text-accent-orange" href="/"
                    className="font-Swiss721BT text-neutral-black-custom uppercase text-lg">
                    Home
                </NavLink>
                <NavLink activeClassName="font-semibold text-accent-orange" href="/about"
                    className="font-Swiss721BT text-neutral-black-custom uppercase text-lg">
                    About
                </NavLink>
                <NavLink activeClassName="font-semibold text-accent-orange" href="/work"
                    className="font-Swiss721BT text-neutral-black-custom uppercase text-lg">
                    Work
                </NavLink>
                <NavLink activeClassName="font-semibold text-accent-orange" href="/service"
                    className="font-Swiss721BT text-neutral-black-custom uppercase text-lg">
                    Service
                </NavLink>
                <NavLink activeClassName="font-semibold text-accent-orange" href="/fun"
                    className="font-Swiss721BT text-neutral-black-custom uppercase text-lg">
                    Fun
                </NavLink>
                <NavLink activeClassName="font-semibold text-accent-orange" href="/contact"
                    className="font-Swiss721BT text-neutral-black-custom uppercase text-lg">
                    Contact
                </NavLink>
            </nav>
        </header>
    )
}