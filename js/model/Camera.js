export default class Camera {
    constructor(data) {
        this.id = data._id;
        this.name =data.name;
        this.imageUrl = data.imageUrl;
        this.description = data.description;
        this.price = data.price;
        this.lenses = data.lenses;
    }

    getFullName(){
        return 'Voici  ' +  this.name;
    }
}