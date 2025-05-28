import { NavLink } from 'react-router-dom';
import '../assets/styles/admin-panel.css';

export default function Sidebar() {
    return (
        <aside className="sidebar">
            <h2>Admin</h2>
            <ul>
                <li><NavLink to="/admin">Dashboard</NavLink></li>
                <li><NavLink to="/">Početna</NavLink></li>
            </ul>
        </aside>
    );
}