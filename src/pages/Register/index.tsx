export default function Register() {
    return (
        <div className="form_container">
            <h1>Register</h1>
            <form action="">
                <input type="text" placeholder="Display Name" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Password" />
                <button>Sign up</button>
            </form>
            <p>You do have an account?<a href="#">Login</a></p>
        </div>
    )
}
