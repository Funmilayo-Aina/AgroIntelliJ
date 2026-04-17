from flask import Flask, render_template, request,jsonify
import os
import pickle
import numpy as np
import shap

app = Flask(__name__)

# Load the trained model
model_path = os.path.join(os.path.dirname(__file__), "model.pkl")
with open(model_path, "rb") as f:
    model = pickle.load(f)
# Load the SHAP explainer
explainer = shap.TreeExplainer(model)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])

def predict():
    data = request.json()
    features = [data['ndvi'], data['apparenttemperatureMin'], data['precipIntensityMax'], data['rain']]
    reshape_features = np.array(features).reshape(1, -1)

    # Make a prediction
    prediction = model.predict(reshape_features)[0]
    shap_values = explainer.shap_values(reshape_features)

    return jsonify({"yield_prediction": float(prediction), "shap_values": shap_values.tolist()})
if __name__ == "__main__":
    app.run(debug=True)
    