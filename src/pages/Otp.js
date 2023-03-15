import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// import { Link } from "react-router-dom";
const Otp = () => {
  const [one, set1] = useState("");
  const [two, set2] = useState("");
  const [three, set3] = useState("");
  const [four, set4] = useState("");
  const [five, set5] = useState("");
  const [six, set6] = useState("");

  const navigate = useNavigate();

  const handleSucc = async (e) => {
    e.preventDefault();
    navigate("/succ");
  };
  return (
    <form onSubmit={handleSucc}>
      <div class="containero">
        <h2>Verify Your Account</h2>
        <p>Enter the code below to confirm your email address</p>

        <div class="code-container">
          <div>
            <input
              type="number"
              className="code"
              placeholder={0}
              min={0}
              max={9}
              value={one}
              onChange={(e) => set1(e.target.value)}
            />
            <input
              type="number"
              className="code"
              placeholder={0}
              min={0}
              max={9}
              value={two}
              onChange={(e) => set2(e.target.value)}
            />
            <input
              type="number"
              className="code"
              placeholder={0}
              min={0}
              max={9}
              value={three}
              onChange={(e) => set3(e.target.value)}
            />
            <input
              type="number"
              className="code"
              placeholder={0}
              min={0}
              max={9}
              value={four}
              onChange={(e) => set4(e.target.value)}
            />
            <input
              type="number"
              className="code"
              placeholder={0}
              min={0}
              max={9}
              value={five}
              onChange={(e) => set5(e.target.value)}
            />
            <input
              type="number"
              className="code"
              placeholder={0}
              min={0}
              max={9}
              value={six}
              onChange={(e) => set6(e.target.value)}
            />
          </div>
        </div>

        <div>
          <button
            // type="button"
            class="btn btn-primary"
            // onSubmit={handleSucc}
            type="submit"
          >
            Verify
          </button>
        </div>

        <small className="info">
          If you didn't receive a code !!{" "}
          <strong className="resend"> RESEND</strong>
        </small>
      </div>
    </form>
  );
};

export default Otp;

//login-->otp
