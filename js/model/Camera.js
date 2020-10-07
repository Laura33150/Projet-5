class Camera {
    constructor(id,name, imageUrl, description, price, lenses) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
        this.lenses = lenses;
    }

    getFullName(){
        return 'Voici  ' +  this.name;
    }
}