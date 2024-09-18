import { Link } from "react-router-dom"
import AdminHeader from "../components/AdminHeader"

const Dashboard = () => {
    return (
        <div>
            <AdminHeader />
            <div className="container px-5 my-3 text-dark">
                <div className="row justify-content-center mb-4 text-center bg-transparent-white">
                    <h2 className="display-6 text-custom fw-bolder">Admin Dashboard</h2>
                </div>

                <div className="row justify-content-center mb-4 bg-transparent-white">
                <Link to="/adddoll" >Add Doll</Link>
                <Link to="/addbook" >Add Book</Link>
                <Link to="/addoutfit" >Add Outfit</Link>
                <Link to="/addpattern" >Add Pattern</Link>
                </div>
        </div>
        </div>
    )
}

export default Dashboard