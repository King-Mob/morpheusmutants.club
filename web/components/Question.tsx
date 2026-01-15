import { useState } from "react";
import { sendAnswer } from "../requests";

export default function Question({ q }) {
    const [answer, setAnswer] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [received, setReceived] = useState(false);
    const [error, setError] = useState("");

    async function submitAnswer() {
        setSubmitted(true);
        const answerResponse = await sendAnswer(`${q} \n\n ${answer}`);
        const answerResult = await answerResponse.json();

        if (answerResult.event_id) {
            setReceived(true);
            setError("");
        }
        else {
            setSubmitted(false);
            setError("Something went wrong. Wait a few minutes then retry.")
        }
    }

    return <div className="question-container">
        <p>{q}</p>
        {
            submitted ? received ? <><p>Thank you for submitting an answer.</p></> : <>
                <p>Processing answer</p>
            </> : <>
                <input type="text" value={answer} onChange={e => setAnswer(e.target.value)}></input>
                <button onClick={submitAnswer}>Submit</button>
            </>
        }
        <p>{error}</p>

    </div>
}