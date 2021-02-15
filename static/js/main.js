// explicit

var explicit = ["Yes", "No"]

// Populate dropbox highest education 
explicit.forEach((exp) => {
   var DDexp = d3.select("#explicit");
   var newoption = DDexp.append("option");
   newoption.attr("value", exp);
   newoption.text(exp);
   Exp = DDexp.node().value;
}); 


function optionChanged() {
  

  // acousticness
var acousticness_input = d3.select("#formGroupExampleInput")
var acousticness = acousticness_input.property('value');

  // danceability 
var danceability_input = d3.select("#formGroupExampleInput2")
var danceability = danceability_input.property('value');

// duration
var duration_input = d3.select("#formGroupExampleInput3")
var duration = duration_input.property('value');

// energy
var energy_input = d3.select("#formGroupExampleInput4")
var energy = energy_input.property('value');

// instrumentalness
var instrumentalness_input = d3.select("#formGroupExampleInput5")
var instrumentalness = instrumentalness_input.property('value');

// liveness
var liveness_input = d3.select("#formGroupExampleInput6")
var liveness = liveness_input.property('value');

// loudness
var loudness_input = d3.select("#formGroupExampleInput7")
var loudness = loudness_input.property('value');

// speechiness
var speechiness_input = d3.select("#formGroupExampleInput8")
var speechiness = speechiness_input.property('value');

// tempo
var tempo_input = d3.select("#formGroupExampleInput9")
var tempo = tempo_input.property('value');

// valence
var valence_input = d3.select("#formGroupExampleInput10")
var valence = valence_input.property('value');

// explicit

var DDexp = d3.select("#explicit");
Exp = DDexp.node().value;

switch (Exp){
    case "Yes":
      Yes = 1,
      No = 0
    
      break; 

    case "No": 
    Yes = 0,
    No = 1
  
    break; 

  }

  console.log(Exp); 
  console.log(Yes, No)



var results = ( `${acousticness}=${danceability}=${duration}=${energy}=${Exp}=${instrumentalness}=${liveness}=${loudness}=${speechiness}=${tempo}=${valence}`)


 
console.log(results)


d3.select("#clicked").attr("href", `answers=${results}`).html;
 

};
 


var button= d3.select("#clicked");

button.on("click", optionChanged); 
