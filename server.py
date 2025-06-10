from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from openai import OpenAI

app = Flask(__name__)
CORS(app)

messages = []
replies = []

client = OpenAI(
    # YOUR API KEY
    api_key=""
)

@app.route('/compute', methods=['POST'])
def send():
    data = request.get_json()
    message = data.get('content') if data else None

    if message:
        messages.append(message)
        print(message)
        response = client.responses.create(
            model="gpt-4o",
            instructions="You are a mathematics assisstant",
            input=message,
        )
        print(response.output_text)
        replies.append(response.output_text)
        return jsonify({'response': response.output_text})
    
    return jsonify({'status':'error', 'message': 'No Message recieved'}), 400

@app.route('/', methods=['GET'])
def return_html():
    return f"<p>{replies}<--BREAK--></p><br>"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000, debug=True)

    
