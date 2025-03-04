class Rectangle{
    constructor(width, height){
        this.width=width;
        this.height=height;
    }
    area(){
        return this.height*this.width;
    }
    perimeter(){
        return 2*(this.height+this.width);
    }
}

const rectangle = new Rectangle(2,3);
console.log(rectangle.area());
console.log(rectangle.perimeter());
 


class Square extends Rectangle{
    constructor(width, height) {
        super(width, height);
    }
    isSquare(){
        return this.height === this.width;
    }
}
const square = new Square(2,2);
console.log(square.isSquare());
