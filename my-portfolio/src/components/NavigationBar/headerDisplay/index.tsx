interface HeaderDisplayProps {
    menuOpen: boolean;
}

const HeaderDisplay = ({ menuOpen }: HeaderDisplayProps) => {
    return (
        <nav
                className={`fixed top-0 left-0 w-full bg-orangeSun o-20 text-black transform transition-transform duration-300 z-40 ${
                    menuOpen ? "translate-y-0" : "-translate-y-full"
                }`}
            >
                <div className="p-6">
                    <ul className="flex flex-row justify-center gap-20">
                        <li>
                            <a href="#home" className="text-white">Home</a>
                        </li>
                        <li>
                            <a href="#projects" className="text-white">Projects</a>
                        </li>
                        <li>
                            <a href="#contact" className="text-white">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
    )

}

export default HeaderDisplay;