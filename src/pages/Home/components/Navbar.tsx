export default function Navbar() {
    return (
        <div id="navbar">
            <div className="user">
                <img src="https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&w=800" alt="avater" />
                <div className="user_info">
                    <span className="name">Lisa Fotios</span>
                    <div className="status">
                        <p>Active now</p>
                        <span className="status_dot material-symbols--circle"></span>
                    </div>
                </div>
            </div>
            <button>Logout</button>
        </div>
    )
}
