var wrapper = document.body;

var whack = [
  { color:"cyan", number:0 },
  { color:"purple", number:0 },
  { color:"grey", number:0 }
];

var elements = [];

function whacky(color,number) {
  var that=this;
  
  var pEle = document.createElement("div");
  pEle.classList.add("box");
 
  this.color = color;
  this.number = number;
  
  this.ele = document.createElement("div");
  this.colorEle = document.createElement("h2");
  this.numberEle = document.createElement("h3");
  
  this.colorEle.innerHTML = this.color;
  this.numberEle.innerHTML = this.number;
  
  this.ele.classList.add("box");
 
  this.ele.appendChild(this.colorEle);
  this.ele.appendChild(this.numberEle);

  this.ele.addEventListener("click", function(){
    that.changeNumber();
  })
  
  wrapper.appendChild(this.ele);
  wrapper.appendChild(pEle);
}

whacky.prototype.changeNumber = function() {
  
  this.numberEle.innerHTML = this.number++
  
  if(this.color == "cyan")
 this.ele.style.backgroundColor = "cyan"; 
else if(this.color == "purple")
 this.ele.style.backgroundColor = "purple"; 
  else if(this.color == "grey")
 this.ele.style.backgroundColor = "grey";
};

for(var i=0; i<whack.length;i++){
  elements.push(new whacky(whack[i].color,whack[i].number))
}