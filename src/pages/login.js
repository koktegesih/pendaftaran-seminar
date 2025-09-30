// pages/login.js

import { useState } from "react";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import Cookies from "js-cookie"; // ✅ import js-cookie

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitted(true);

    if (!username || !password) return;

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/admin/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }
      );

      const result = await response.json();

      if (response.ok) {
        Cookies.set("authToken", result.token, {
          expires: 7, // 7 hari
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
        });

        router.push("/pendaftar");
      } else {
        setError(result.message || "Login failed");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <Layout>
      <section className="h-100">
        <div className="container h-100">
          <div className="row justify-content-sm-center h-100">
            <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
              <div className="text-center my-5" />
              <div className="card shadow-lg">
                <div className="card-body p-5">
                  <h1 className="fs-4 card-title fw-bold mb-4">Login</h1>
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="mb-3">
                      <label className="mb-2 text-muted" htmlFor="username">
                        Username
                      </label>
                      <input
                        id="username"
                        type="text"
                        className={`form-control ${
                          submitted && !username ? "is-invalid" : ""
                        }`}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                      />
                      <div className="invalid-feedback">
                        Username is required
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="text-muted" htmlFor="password">
                        Password
                      </label>
                      <input
                        id="password"
                        type="password"
                        className={`form-control ${
                          submitted && !password ? "is-invalid" : ""
                        }`}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <div className="invalid-feedback">
                        Password is required
                      </div>
                    </div>

                    {error && <div className="text-danger mb-3">{error}</div>}

                    <div className="d-flex align-items-center justify-content-center">
                      <button type="submit" className="btn btn-primary">
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
