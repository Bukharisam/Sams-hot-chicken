import { useState } from "react";
import "./AdminLogin.css";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    // At least 16 chars, 1 uppercase, 1 lowercase, 1 number, 1 special char
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{16,}$/;
    return regex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Clear previous errors
    setError("");

    // Email validation
    if (!email) {
      setError("Email is required");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    // Password validation
    if (!password) {
      setError("Password is required");
      return;
    }

    if (password.length < 16) {
      setError("Password must be at least 16 characters");
      return;
    }

    if (!validatePassword(password)) {
      setError(
        "Password must contain uppercase, lowercase, number, and special character",
      );
      return;
    }

    // All validations passed
    console.log("Form submitted successfully:", { email, password });
  };

  return (
    <div className="admin-login-page">
      <div className="admin-login-card">
        {error && <p className="admin-login-error">{error}</p>}

        <form onSubmit={handleSubmit} className="admin-login-form">
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;

/*
1. Created a component AdminLogin
2. Imported useState from react
3. Created 2 state variables email and password using useState hook
4. the 2 variables are the 2 values returned from useState whhich is an Array. 

5. Created a handleSubmit function to handle form submission
6. it basically is an fucntion that runs when the form is submitted.
(e) = the event object - contains info about what was submitted.
7. e.preventDefault() prevents page refresh on form submission. and our dataof useState not lost. 

8. <form /> element is used to create a form in react.
9. onSubmit attribute is used to specify the function to run when the form is submitted.
10. so it will run <form onSubmit={handleSubmit}> when the form is submitted.

11. <input /> element is used to create input fields in the form.
12. type attribute specifies the type of input field (text, password, etc)
13. value{email} this is an attribute that showcase what was typed in the input field.
14. event.target.value = gets the value typed in the input field.
15. onChange={(e) => setEmail(e.target.value)} this is an attribute that runs when the value
in the input field changes and updates the state variable using the updater function.

to prevent the page from refreshing on submit we write
e.preventDeafault(); = prevent page refresh

================== For stronger validation ==========================
1. Check if email is empty, if so set error state to "Email is required"
2. Check if password is empty, if so set error state to "Password is required"

Email validation regex stronger validation. 
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
  setError("Invalid email format");
}

Strong password regex (copy/paste when needed)
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
if (!passwordRegex.test(password)) {
  setError("Password too weak");
}
=====================================================================


*/
