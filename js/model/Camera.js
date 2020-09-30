class Camera {
    constructor(id,name, image, description, price) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.description = description;
        this.price = price;
    }

    getFullName(){
        return this.name + ' ' +  this.id;
    }
}