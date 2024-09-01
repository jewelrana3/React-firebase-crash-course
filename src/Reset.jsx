import { useState } from "react";
import { sendPasswordReset } from "./firebase";

export default function Reset() {
  const [email, setEmail] = useState("");
  return (
    <div className="flex flex-col p-4 justify-center items-center">
      <h1 className="text-3xl my-2">Reset Your Password</h1>
      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mx-2 my-2 p-1 border border-gray-100 rounded-sm"
          placeholder="Enter email address"
        />
      </div>
      <button onClick={() => sendPasswordReset(email)}>Forget Password</button>
    </div>
  );
}
