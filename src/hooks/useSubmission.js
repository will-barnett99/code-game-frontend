import { useState } from "react";
import postSubmission from "../api/postSubmission";

export default function useSubmission() {
  const [output, setOutput] = useState("");
  const [pass, setPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const runSubmission = async ({ kata_id, user_code }) => {
    setLoading(true);
    setError(null);

    try {
      const { result } = await postSubmission({ kata_id, user_code });
      if (result === "PASS") {
        setOutput("Well done");
        setPass(true);
      } else {
        setOutput("Not quite right");
        setPass(false);
      }
    } catch (err) {
      console.error("Submission failed:", err);
      setError("Submission failed. Please try again later.");
      setOutput("Error submitting code");
      setPass(false);
    } finally {
      setLoading(false);
    }
  };

  const reset = (initialCode) => {
    setOutput("");
    setPass(false);
    setError(null);
    return initialCode;
  };

  return { output, pass, loading, error, runSubmission, reset, setOutput };
}
