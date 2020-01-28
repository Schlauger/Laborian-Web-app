alert("\'Bonjour mon ami\'")

var cnt=1;

function person(name,age){
    this.name=name;
    this.age=age;
this.adult= function(){
return (this.age>=18)?"Welcome":"You are not adult.";};
}

alert("You are running " + navigator.appName + "browser")
var p1= new person("Jack",25);
document.write("Hellon "+p1.name+"! "+ p1.adult());

// alert("Bonjour mon ami")
