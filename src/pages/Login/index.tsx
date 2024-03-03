export default function Login() {
    return (
        <div id="form">
            <div className="container">
                <h1>Login</h1>
                <form action="">
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Password" />
                    <a href="#">Forgot your password?</a>
                    <button>Sign in</button>
                </form>
                <p>You don't have an account?<a href="#">Register</a></p>
            </div>
        </div>
    )
}
