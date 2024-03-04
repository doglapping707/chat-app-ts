export default function Navbar() {
    return (
        <div id="navbar">
            <div className="user">
                <img src="https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&w=800" alt="avater" />
                <div className="user_info">
                    <span className="myname">Lisa Fotios</span>
                    <p>Active now<span className="status_dot material-symbols--circle"></span></p>
                </div>
            </div>
            <button>Logout</button>
        </div>
    )
}
