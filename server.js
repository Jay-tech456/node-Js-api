var express = require('express');

var app = express();
var bodyParser = require('body-parser'); 

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: false})); 
var ingredients = [
    
    {
        "id": "as121", 
        "text": "eggs"
        
    }, 
    {
        "id": "as131", 
        "text": "milk"
    }, 
    {
        "id": "as141", 
        "text": "cheese"
    }, 
    { 
        "id": "as654", 
        "text": "frog"
    
    }
];



app.get('/', function(request, response) { 
    response.send(ingredients); 
});

app.post('/', function(request, response) { 
    var ingredient = request.body; 
    if (!ingredient || ingredient.text == ""){ 
        response.status(500).send({ error: "Your ingredient must have text"}); 
    } else { 
        ingredient.push(ingredient); 
        response.status(200).send(ingredients); 
    }
}); 


app.put('/ingredients/:ingredientId', function(request, response) { 
    var newText = request.body.text; 
    
    for(var x = 0; x < ingredients.length; x++) { 
        var ing = ingredients[x]; 
        
        if(ing.id === request.params.ingredientId) { 
            ingredients[x].text = newText;
            break;
        }
    }
    response.send(ingredients); 
})

app.listen(3000, function(){ 
            console.log("first Api running on prot 3000!"); 
});