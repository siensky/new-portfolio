import "../css/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#home">Home</a>
        <a href="#about">About Me</a>
        <a href="#experience">Erfarenhet</a>
        <a href="#projects">Mina Projekt</a>
        <a href="#contact">Kontakta mig</a>
      </div>
    </nav>
  );
};

export default Navbar;
