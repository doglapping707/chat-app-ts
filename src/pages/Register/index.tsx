export default function Register() {
    return (
        <div id="form">
            <div className="container">
                <h1>Register</h1>
                <form action="">
                    <div className="input_area">
                        <label htmlFor="">Display Name</label>
                        <input type="text" placeholder="Display Name" />
                    </div>
                    <div className="input_area">
                        <label htmlFor="">Email</label>
                        <input type="text" placeholder="Email" />
                    </div>
                    <div className="input_area">
                        <label htmlFor="">Password</label>
                        <input type="text" placeholder="Password" />
                    </div>
                    <button>Sign up</button>
                </form>
                <p>You do have an account?<a href="#">Login</a></p>
            </div>
        </div>
    )
}
