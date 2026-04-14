from flask import Flask, request,jsonify
import os
import pickle
import numpy as np
app = Flask(__name__)

# Load the trained model
model_path = os.path.join(os.path.dirname(__file__), "model.pkl")
with open(model_path, "rb") as f:
    model = pickle.load(f)

@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()
    features = [data['ndvi'], data['temp'], data['soil'], data['rain']]

    # Make a prediction
    prediction = model.predict(np.array([features]))

    return jsonify({"yield_prediction": float(prediction[0])})
if __name__ == "__main__":
    app.run(debug=True)
    