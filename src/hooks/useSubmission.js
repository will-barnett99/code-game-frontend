import { useState } from "react";
import postSubmission from "../api/postSubmission";

export default function useSubmission() {
  const [output, setOutput] = useState("");
  const [pass, setPass] = useState(false);

  const runSubmission = async ({ kata_id, user_code }) => {
    try {
      const { result } = await postSubmission({ kata_id, user_code });
      if (result === "PASS") {
        setOutput("Well done");
        setPass(true);
      } else {
        setOutput("Not quite right");
      }
    } catch (error) {
      console.error("Submission failed:", error);
      setOutput("Error submitting code");
    }
  };

  const reset = (initialCode) => {
    setOutput("");
    setPass(false);
    return initialCode;
  };

  return { output, pass, runSubmission, reset, setOutput };
}
