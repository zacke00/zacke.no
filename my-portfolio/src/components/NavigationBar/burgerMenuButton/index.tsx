interface BurgerMenuProps {
  setMenuOpen: () => void;
}

const BurgerMenu = ({ setMenuOpen }: BurgerMenuProps) => {
  return (
    <button
      onClick={setMenuOpen}
      aria-label="Toggle menu"
      className="fixed top-6 right-0 z-50 bg-black/40 backdrop-blur-md p-3 rounded-tl-[20px] rounded-bl-[20px] shadow-lg border border-white/40 flex flex-col justify-center items-center space-y-1"
    >
      <span className="block w-6 h-0.5 bg-white"></span>
      <span className="block w-6 h-0.5 bg-white"></span>
      <span className="block w-6 h-0.5 bg-white"></span>
    </button>
  );
};

export default BurgerMenu;
