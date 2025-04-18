import { useState, useEffect } from "react";

export default function Access({ setBlur }) {
    const [accessKey, setAccessKey] = useState("");
    const [scanStage, setScanStage] = useState("ready");

    useEffect(() => {
        const prevAccessKey = localStorage.getItem("IRO_access_key");
        if (prevAccessKey) {
            setAccessKey(prevAccessKey);
            setBlur(false);
        }
    }, []);

    function beginScan() {
        setScanStage("started");
        setTimeout(() => {
            setScanStage("keysFound");
        }, 2000);
        setTimeout(() => {
            setScanStage("deviceProfiled");
        }, 5700);
    }

    function selectAccessKey() {
        setAccessKey("SubOffice2GBpass.rsa");
        localStorage.setItem("IRO_access_key", "SubOffice2GBpass.rsa");
        setBlur(false);
    }

    let scanResult;

    if (scanStage === "ready") scanResult = <button onClick={beginScan}>Begin scan</button>;

    if (scanStage === "started") scanResult = <p>Scanning...</p>;

    if (scanStage === "keysFound")
        scanResult = (
            <>
                <p>Scanning...</p>
                <p>Keys found.</p>
                <p>Profiling device...</p>
            </>
        );

    if (scanStage === "deviceProfiled")
        scanResult = (
            <>
                <p>Scanning...</p>
                <p>Keys found.</p>
                <p>Profiling device...</p>
                <p>Device regularity confirmed.</p>
                <p>Access key found: SubOffice2GBpass.rsa</p>
                <button onClick={selectAccessKey}>Use key SubOffice2GBpass.rsa</button>
            </>
        );

    return (
        <div id="access-header">
            {accessKey ? (
                <p>Restricted Interdreaming Regulation Office Archive Section. Accessed with key {accessKey}</p>
            ) : (
                <>
                    <p>You are entering a restricted section of the Interdreaming Regulation Office Archive. </p>
                    <p>To proceed the server needs to scan your device for access keys and profile the device.</p>
                    <p> This is necessary to prevent irregular data transfer to unauthorised entitites.</p>
                    {scanResult}
                </>
            )}
        </div>
    );
}
