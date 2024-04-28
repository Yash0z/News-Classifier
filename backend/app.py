from flask import Flask, jsonify, request # type: ignore
from flask_cors import CORS # type: ignore
import pickle

app = Flask(__name__)
CORS(app)

model_path = "naive_bayes_model.pkl"

with open(model_path, 'rb') as model_file:
    model = pickle.load(model_file)

def predict_news(input_text):
    prediction = model.predict([input_text])
    probability = model.predict_proba([input_text])[0][1] * 100
    return prediction[0], probability

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    input_text = data['text']
    prediction, probability = predict_news(input_text)
    
    if prediction == 1:
        result = "Unreliable"
    else:
        result = "Reliable"
    
    return jsonify({'prediction': result, 'probability': probability})

if __name__ == '__main__':
    app.run(debug=True)
