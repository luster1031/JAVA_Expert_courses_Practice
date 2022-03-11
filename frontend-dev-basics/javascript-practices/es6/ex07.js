/*
    class
*/

class Rect{
    constructor(w, h){
        this.w = w;
        this.h = h;
    }
    draw (){
        console.log(`React(w=${this.w}, h= ${this.h})를 그렸습니다.`);
    }
}

//  test1
const rect1 = new Rect(10, 20);
const rect2 = new Rect(100, 200);

rect1.draw();
rect2.draw();

/*
cf. 생성자 함수(prototype) 기반
*/
const Circle=function(x,y,r){
    this.x = x;
    this.y = y;
    this.r = r;
}

Circle.prototype.draw = function(){
    console.log(`Circle(x=${this.x}, y=${this.y}, r=${this.r})를 그렸습니다.`);
}

const c1 = new Circle(10,20,30);
const c2 = new Circle(100,200,300);

c1.draw();
c2.draw();




/**
 * extends 상속
 */
class Shape{
    constructor(bgColor, InColor){
        this.bgColor = bgColor;
        this.InColor = InColor;
    }

    draw(){
        console.log('그릴 수 없습니다.');
    }

    area(){
        console.log('구할 수 없습니다.');
    }
}


class Triangle extends Shape{
    constructor(w, h){
        super('red', 'black');
        this.w = w;
        this.h = h;
    }
    
    
    //@override (typeScript는 사용 가능)
    draw(){
        console.log(`Triangle(w=${this.w}, h=${this.h}, bagColor=${this.bgColor}, InColor=${this.bgColor})`)

    }
}
const t1 = new Triangle(10, 20);
t1.draw();
t1.area();