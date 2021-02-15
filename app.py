from flask import Flask, render_template, redirect, jsonify, request
import pandas as pd 
import os
import pickle 
import sys
import numpy as np
from sklearn.linear_model import LogisticRegression

# from flask_pymongo import PyMongo
# import scrape_mars

# Create an instance of Flask
app = Flask(__name__)



# Route to render index.html template using data from Mongo
@app.route("/")
def home():



    # Return template and data
    return render_template("index.html")


# Route that will trigger the scrape function
@app.route("/Visualisations.html")
def Viz():

    return render_template("Visualisations.html")

# Route that will trigger the scrape function
@app.route("/Visualisations2.html")
def Viz2():

    return render_template("Visualisations2.html")    


    # Route that will trigger the scrape function
@app.route("/questions.html")
def questions():

    return render_template("questions.html")

@app.route("/answers=<acousticness>=<danceability>=<duration>=<energy>=<Exp>=<instrumentalness>=<liveness>=<loudness>=<speechiness>=<tempo>=<valence>")
def Results(acousticness, danceability, duration, energy, Exp, instrumentalness, liveness, loudness, speechiness, tempo, valence): 

    # Exp binary

    if Exp == "Yes":
        exp = 1
    
    else: 
        exp = 0

    filename = 'spotify_model'
    loaded_model = pickle.load(open(filename, 'rb'))


    response = [acousticness, danceability, duration, energy, exp, instrumentalness, liveness, loudness, speechiness, tempo, valence]
   
    results_list =[]

    for item in response:
        results_list.append(float(item))


    new_value = np.array(results_list)
    new_value = np.expand_dims(new_value, 0)
    prediction = loaded_model.predict(new_value)


    if prediction == 1 : 
        Content = "Even Tom Haverford would say your song is a BANGER!!!"
    elif prediction == 0: 
        Content = "Your song did not pass Tom Haverford's rigorous testing. Unfortunately it is not a banger"

    return render_template("answers.html", Content=Content)



if __name__ == "__main__":
    app.run(debug=True)