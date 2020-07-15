const key = "PU4ECnUK6j4GLPtnAnpeM5NOsDNHo8uX";
var link = "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=";
var url = link + key;
var maindiv=document.createElement("div");
maindiv.setAttribute("class","container");
document.body.append(maindiv);


async function topstories() {
  try {
    var data = await (await fetch(url)).json();
    console.log(data);
    console.log(url);
    for(let k=0;k<data.results.length;k++){
    var div = document.createElement("div");
    div.setAttribute("class", "container");

   

    var div1 = document.createElement("div");
    div1.setAttribute("class", "row1");
    div1.innerHTML = data.results[k].title;
    div.appendChild(div1);

    var div2 = document.createElement("div");
    div2.setAttribute("class", "row");
    div2.innerHTML = data.results[k].abstract;
    div.appendChild(div2);

   
    var x = document.createElement("A");
    x.setAttribute("class", "a");
    var t = document.createTextNode("read the article");
    x.setAttribute("href", data.results[k].url);
    x.appendChild(t);
    div2.appendChild(x);

    var img = document.createElement("img");
    img.setAttribute("class", "img");
    img.setAttribute("src", data.results[k].multimedia[0].url);

    div.appendChild(img);
    maindiv.appendChild(div);


    }
  } 
  catch(err) {
    console.log(err);
  }
}
topstories();
