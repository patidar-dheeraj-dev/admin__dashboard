import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        localStorage.setItem("user", JSON.stringify(form));

        alert("Account created successfully!");
        navigate("/login");
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow">
                <h2 className="text-3xl font-bold mb-6 text-center">
                    Sign Up
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full border p-3 rounded-lg"
                        onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                        }
                    />

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
                        className="w-full bg-green-600 text-white p-3 rounded-lg"
                    >
                        Create Account
                    </button>
                </form>

                <p className="mt-4 text-center">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="text-green-600 font-medium"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Signup;