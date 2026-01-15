import { useState } from "react"

export default function Question({ q }) {
    const [answer, setAnswer] = useState("");
    const [submitted, setSubmitted] = useState(false);

    function submitAnswer() {
        console.log("sending answer")
        setSubmitted(true);
    }

    return <div className="question-container">
        <p>{q}</p>
        {
            submitted ? <>
                <p>Thank you for submitting an answer.</p>
            </> : <>
                <input type="text" value={answer} onChange={e => setAnswer(e.target.value)}></input>
                <button onClick={submitAnswer}>Submit</button>
            </>
        }

    </div>
}