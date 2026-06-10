import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const savedUser = JSON.parse(localStorage.getItem("user"));

        if (
            savedUser &&
            savedUser.email === form.email &&
            savedUser.password === form.password
        ) {
            localStorage.setItem("isAuthenticated", "true");
            navigate("/dashboard");
        } else {
            alert("Invalid credentials");
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow">
                <h2 className="text-3xl font-bold mb-6 text-center">
                    Login
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full border p-3 rounded-lg"
                        onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                        }
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full border p-3 rounded-lg"
                        onChange={(e) =>
                            setForm({ ...form, password: e.target.value })
                        }
                    />

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white p-3 rounded-lg"
                    >
                        Login
                    </button>
                </form>

                <p className="mt-4 text-center">
                    Don't have an account?{" "}
                    <Link
                        to="/signup"
                        className="text-blue-600 font-medium"
                    >
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Login;