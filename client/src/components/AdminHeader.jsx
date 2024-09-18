import { Link, useNavigate } from "react-router-dom";

const AdminHeader = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token'); // Remove the token from localStorage
        navigate('/'); // Redirect to the home page
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light w-100">
                <div className="container-fluid">
                    <div className="navbar-nav">
                        <Link className="nav-link" to="/adddoll">Add Doll</Link>
                        <Link className="nav-link" to="/addbook">Add Book</Link>
                        <Link className="nav-link" to="/addoutfit">Add Outfit</Link>
                        <Link className="nav-link" to="/addpattern">Add Pattern</Link>
                    </div>
                    <button className="btn btn-danger ms-auto" onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default AdminHeader;
