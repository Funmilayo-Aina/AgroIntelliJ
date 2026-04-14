________________________________________
📜 script.js
async function predict() {
    const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            ndvi: document.getElementById("ndvi").value,
            temp: document.getElementById("temp").value,
            soil: document.getElementById("soil").value,
            rain: document.getElementById("rain").value
        })
    });

    const data = await response.json();
    document.getElementById("result").innerText =
        "Predicted Yield: " + data.yield_prediction;