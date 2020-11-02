/**
 * @returns [Camera]
 */
export async function apiGetAllCamerasInfos() {
    let response = await fetch('http://127.0.0.1:3000/api/cameras');
    let data = await response.json();
    return data;
};

export async function apiGetCameraInfo(id) {
    let response = await fetch('http://127.0.0.1:3000/api/cameras/'+id);
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
 export async function apiSendOrder(data){
         let response = await fetch('http://localhost:3000/api/cameras/order',{
        method: "POST",
        body: JSON.stringify(data),
        headers: new Headers({
            "Content-Type": "application/json"
        }) 
    });
    return  await response.json();
    
 }