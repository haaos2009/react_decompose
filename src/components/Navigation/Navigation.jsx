// import a css file containig Navigation styles
import './Navigation.css';
// Create a Navigation function returning the HTML of Navigation block
function Navigation() {
  return (
    <nav className="navigation">
      <a className="navigation__link" href="#about">
        About
      </a>
      <a className="navigation__link" href="#services">
        Services
      </a>
      <a className="navigation__link" href="#contact">
        Contact
      </a>
    </nav>
  );
}
// Add a default export statement for Navigation component to use it in the other files

export default Navigation;
