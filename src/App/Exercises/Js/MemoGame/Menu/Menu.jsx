import './Menu.css';

export const Menu = ({ label, children }) => {
  return (
    <div className="Menu">
      <div className="menu-label">{label}</div>
      {children}
    </div>
  );
};
