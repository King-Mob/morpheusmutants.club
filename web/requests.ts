const interdreamingAnswerRoom = "!EkIXgPnqQrlsdFgNqm:spacetu.be";
const interdreamingBotAccessToken = "syt_aW50ZXJkcmVhbWluZ3JlZ3VsYXRpb25vZmZpY2UuYm90_gbRyUJxnibwMfleFAJmp_3FjnEs";

export function sendAnswer(answer) {
    return fetch(`https://matrix.spacetu.be/_matrix/client/v3/rooms/${interdreamingAnswerRoom}/send/m.room.message`, {
        method: "POST",
        body: JSON.stringify({
            msgtype: "m.text",
            body: answer
        }),
        headers: {
            "Authorization": `Bearer ${interdreamingBotAccessToken}`
        }
    })
}