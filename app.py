import pdfplumber
from flask import Flask, render_template, request, redirect, url_for, session, jsonify
from werkzeug.utils import secure_filename
import os
import tempfile
import docx
# import openai

app = Flask(__name__)
app.secret_key = 'your_secret_key'  # Replace with a secret key of your choice

# Create a temporary directory for file storage
temp_dir = tempfile.TemporaryDirectory()
upload_folder = temp_dir.name

def pdf_to_text(file_name):
    with pdfplumber.open(file_name) as pdf:
        text = ""
        for page in pdf.pages:
            text += page.extract_text()
            
    text = text.strip()
    paragraphs = text.splitlines()
    
    formatted_text = '\n\n'.join(paragraphs)
    
    return formatted_text

def docx_to_text(file_name):
    doc = docx.Document(file_name)
    text = []
    for paragraph in doc.paragraphs:
        text.append(paragraph.text)
    formatted_text = '\n'.join(text)
    return formatted_text

def txt_to_text(file_name):
    with open(file_name, "r") as file:
        text = file.read()
    return text



box1_output = ""

box1_output_history = []


@app.route('/', methods=['GET', 'POST'])
def index():
    global box1_output
    global box1_output_history
    if request.method == 'POST':
        type=request.form['type']
        print(type)

        if type == 'pdf' :
            pdf_file = request.files['pdf_file']
            filename = os.path.join(upload_folder, secure_filename(pdf_file.filename))
            pdf_file.save(filename)
            output = pdf_to_text(filename)
        elif type == 'docx':
            docx_file = request.files['docx_file']
            filename = os.path.join(upload_folder, secure_filename(docx_file.filename))
            docx_file.save(filename)
            output = docx_to_text(filename)
        elif type == 'txt':
            txt_file = request.files['txt_file']
            filename = os.path.join(upload_folder, secure_filename(txt_file.filename))
            txt_file.save(filename)
            output = txt_to_text(filename)
        print(output)
        # Store the 'output' data in the session
        box1_output = output
        session['output'] = box1_output

        # Remove the temporary file here if needed
        os.remove(filename)
        box1_output_history.append(box1_output)
        
        # Redirect to the result page
        return redirect(url_for('result'))
    
    return render_template('index1.html')

@app.route('/result')
def result():
    # Retrieve the 'output' data from the session
    output = session.get('output', None)

    return render_template('result.html', output=output, box1_output_history=box1_output_history)

# Using API key to get answers
# openai.api_key = "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"

# #Question Answer
# def question_to_answer(question):
#     completion = openai.ChatCompletion.create(model="gpt-3.5-turbo",
#                                               messages=[
#                                               {"role": "user", "content": question}
#                                               ])
#     answer = completion.choices[0].message['content']
#     return answer

import requests

API_URL = "https://api-inference.huggingface.co/models/google/flan-t5-base"
headers = {"Authorization": "Bearer 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"}

def question_to_answer(question):
    response = requests.post(API_URL, headers=headers, json={"inputs": question})
    answer = response.json()
    return answer



question_history = []

@app.route('/')
def home():
    return render_template('result.html',question_history=question_history,output=box1_output)

@app.route('/result', methods=['POST'])
def answer():
    global question_history
    user_question = request.form['question']  # Get the user's question from the HTML form
    # output = request.form['output']

    answer = question_to_answer(user_question)
    
    question_history.append({'question': user_question, 'answer': answer})
    print(question_history)
    print(box1_output)
    return render_template('result.html', question_history=question_history, output=box1_output)

if __name__ == '__main__':
    app.run(debug=True)
