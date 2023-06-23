import { NavLink } from 'react-router-dom';
import { ReactComponent as FaqIcon } from '../Components/Icons/messages.svg';
import './styles/aside.css';
import React from 'react';
export function AppAside() {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <NavLink to="dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="cv">CV</NavLink>
          </li>
          <li>
            <NavLink to="Calendar">Kalendarz</NavLink>
          </li>
          <li>
            <NavLink to="Settings">Settings</NavLink>
          </li>
          <li>
            <NavLink to="blocks">Bloki</NavLink>
          </li>
          <li>
            <NavLink to="exercises">Ćwiczenia</NavLink>
          </li>
          <li>
            <FaqIcon />
            <NavLink to="Faq">FAQ</NavLink>
          </li>
        </ul>
      </nav>
      <p style={{ padding: '1rem 0' }}>Sidebar items, widgets, etc</p>
    </aside>
  );
}
