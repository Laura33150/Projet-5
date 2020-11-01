/**
 * @returns [Camera]
 */
export async function apiGetAllCamerasInfos() {
    let response = await fetch('http://localhost:3000/api/cameras');
    let data = await response.json();
    return data;
};

export async function apiGetCameraInfo(id) {
    let response = await fetch('http://localhost:3000/api/cameras/'+id);
    let data = await response.json();
    return data;
 };

 /*
 * Expects request to contain:
 * contact: {
 *   firstName: string,
 *   lastName: string,
 *   address: string,
 *   city: string,
 *   email: string
 * }
 * products: [string] <-- array of product _id
 * */
 export async function apiSendOrder(contact){
    let response = await fetch('http://localhost:3000/api/cameras/order',{
        method: "POST",
        body: {contact:contact, products: products}
    });
    let data = await response.json();
    return data;
 }