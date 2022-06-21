import './styles.scss';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

const Header = ({ list, zenMode, toggleZenMode }) => (
  <header className="menu">
    <nav>
      {
        list.map(({ label, route }) => (
          <NavLink
            key={ label }
            className="menu-link"
            to={route}
          >
            {label}
          </NavLink>
        ))
      }
      <button onClick={toggleZenMode} className="menu-btn" type="button">
        {
          zenMode ? 'Désactiver Zen Mode' : 'Activer le mode zen'
        }
      </button>
    </nav>
  </header>
);

Header.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired
  })).isRequired,
  zenMode: PropTypes.bool.isRequired,
  toggleZenMode: PropTypes.func.isRequired,
};

export default Header;