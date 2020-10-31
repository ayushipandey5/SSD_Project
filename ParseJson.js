startPos = [-4, 5, -7];
increment = 2;
letterscaleFactor = 1;
letterIdentifier = "#letter-";
objPath = "/alphabets/"
scaleFactor = 0.1;
function ShowLetter(letter,position)
{
    
    console.log(letter);
    posx = startPos[0] + (position - 1) * increment;
    posy = startPos[1];
    posz = startPos[2];
    //console.log(letterId);
    var el = letter;// document.querySelector(letterId);
    let scale = el.getAttribute("scale").clone() // clone the scale vector
    scale.multiplyScalar(scaleFactor);
    el.setAttribute("scale", scale);
    el.setAttribute("position", { x: posx, y: posy, z: posz });
    el.setAttribute("visible",true);
}
AFRAME.registerComponent('letters',{
    init:function(){
        // let base = document.createElement('#letter-c');
        // base.setAttribute('position',"-4 1 -7");
        // //base.setAttribute('color', "red");
        // base.setAttribute('obj-model','obj: #letter-c-obj; mtl: #letter-c-mtl')
        // console.log(this.data);
        // //sphere.setAttribute('color',this.data.sphereColor);
        // this.el.appendChild(base);
    }
});
function CreateLetter(letter, position)
{
    console.log(letter);
    console.log(position);
    letterId = letterIdentifier + letter;
    var el = document.querySelector("#letter" + position);
    console.log(el);
    el.setAttribute('obj-model', { obj: objPath + letter + ".obj" })
    ShowLetter(el, position)
}
$(document).ready(function ()
{
    //CreateLetter("a", 1);
    //CreateLetter("b", 2);
    //CreateLetter("b", 2);
    //CreateLetter("c", 3);
    //ShowLetter("a", 1);
    //ShowLetter("b", 2);
    var objects = jQuery.parseJSON( '{\
        "CurrentLevel": "2",\
        "PointsToNextLevel": "40",\
        "JumbledLetters": ["A", "P", "Q", "G", "R"],\
        "TotalAnswers": "52",\
        "Words": [{\
            "word": "Alphabet",\
            "Score": "50"\
        }, {\
            "Word": "Aeroplane",\
            "Score": "46"\
        }, {\
            "Word": "Bet",\
            "Score": "30"\
        }]\
    }' );
    for(var i = 0; i < objects["JumbledLetters"].length; i++)
    {
        console.log(objects["JumbledLetters"][i]);
        CreateLetter(objects["JumbledLetters"][i], i + 1);
    }
});



