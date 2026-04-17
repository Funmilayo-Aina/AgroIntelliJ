function predict() {
    const data = {
        Rainfall: parseFloat(document.getElementById("rainfall").value),
        Temperature: parseFloat(document.getElementById("temperature").value),
        NDVI: parseFloat(document.getElementById("ndvi").value),
        SoilMoisture: parseFloat(document.getElementById("soil").value)
    };

    fetch('/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("result").innerText =
            "Predicted Yield: " + data.prediction;
    });
    function drawChart(explanations) {
    const ctx = document.getElementById('chart');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: explanations,
            datasets: [{
                label: 'Impact',
                data: [3, 2, 1]
            }]
        }
    });
    fetch("https://your-cloud-run-url/predict", {
    method: "POST",
    body: formData
})
.then(res => res.json())
.then(data => {
    alert("Predicted Yield: " + data.prediction);
});
}
}