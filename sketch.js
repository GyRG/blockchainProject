
var hashGenesis = document.getElementById("formulario"); 

var hash = 'hash, este es un hash para generar más objetos' ;
var leng = hash.length;
var obj = new Array(leng);
var caract = new Array(leng);
var offset = 2;
  


function setup(){
    createCanvas(400,400);
    background(0);
    for (var i=0; i<obj.length; i++ )
    {
        caract[i] = hash.charAt(i);
        // console.log(caract[i]);
        obj[i]=new Objeto((width)*((i+offset)/(leng+5)),0,0,0,0.1,caract[i]);
        
    }
    
    
}
function draw (){
    background (20,20,20);
    
    for (var j=0; j<obj.length; j++)
    {
        obj[j].show();     
    }


    
    
}

class Objeto {

    constructor (w,h,radius, vel, acc, caracter)
    {
        this.w = w;
        this.h = h;
        this.radius = radius;
        this.vel = vel;
        this.acc = acc;
        this.c = caracter;
    }

    show ()
    {
        
        fill(220,100,120);
        //textSize(50);
        text(this.c,this.w,this.h,this.radius);
        //ellipse(this.w,this.h,this.radius,this.radius);
        this.acc+=0.02-random(0.02); 
        this.vel += this.acc-random(1);
        this.h += this.vel;
        
        if (this.h>height)
        {
            this.h=-20;
            this.vel=0.1-random(100); 
            this.acc+=random(0.1);
        }

    }

    repos(){
        
        this.acc = 0;
    }

    

}