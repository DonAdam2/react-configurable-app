import React from 'react';
import { NavLink } from 'react-router-dom';
// styles
import classes from './Header.scss';
//routes
import { routesConfig } from '@/ts/routing/routingConstants/routesConfig';

const Header = () => {
  const renderLink = ({ to, label }: { to: string; label: string }) => (
    <NavLink to={to} className={(navData) => (navData.isActive ? classes.active : '')}>
      {label}
    </NavLink>
  );

  return (
    <header className={classes.headerWrapper}>
      <nav className={classes.nav}>
        <ul className={classes.ul}>
          {routesConfig.map((el) => (
            <li key={el.path}>{renderLink({ to: el.path, label: el.label })}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
