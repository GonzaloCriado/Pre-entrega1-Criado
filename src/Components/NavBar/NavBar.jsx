import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import CartWidget from "../CartWidget/CartWidget";
function NavBar() {
return (
    <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
    <div className="container-fluid">
        <h1>POP COTILLÓN</h1>
        <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <a className="nav-link cart-icon" href="#">
        <i className="bi bi-cart"></i> Carrito
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
            <li className="nav-item">
            <a className="nav-link" href="#">
                Inicio
            </a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">
                Catálogo
            </a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">
                Contacto
            </a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">
                Ubicación
            </a>
            </li>
        </ul>
        </div>
    </div>
    </nav>
);
}

export default NavBar;
