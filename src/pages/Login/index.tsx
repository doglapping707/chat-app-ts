export default function Login() {
    return (
        <div id="form">
            <div className="container">
                <h1>Login</h1>
                <form action="">
                    <div className="input_area">
                        <label htmlFor="">Email</label>
                        <input type="text" placeholder="Email" />
                    </div>
                    <div className="input_area">
                        <label htmlFor="">Pawssword</label>
                        <input type="text" placeholder="Password" />
                    </div>
                    <a href="#">Forgot your password?</a>
                    <button>Sign in</button>
                </form>
                <p>You don't have an account?<a href="#">Register</a></p>
            </div>
        </div>
    )
}
