
// const fs = reqire('fs');

// function print(err, data){
//     console.log(data);
// }

// fs.readfile('a.txt','utf8',print);    // this print function will be printed when the reading of file is complete
// fs.readfile('b.txt','utf8',print);
// console.log("!done"); 


class Rectangle{
    constructor(width, height, color){
        this.width = width;              // here "this" take the value which we will provode throught the passsing value during object creation
        this.height = height;            // it is object dependent if we change the object then the vlaue will be taken by that object 
        this.color = color;
    }
    area(){
        return this.width*this.height;
    }
    paint(){
        console.log(`paint with ${this.color} color`);
    }
}

const rect = new Rectangle(2,3,"red");
const ans = rect.area();
console.log(ans);
rect.paint();
