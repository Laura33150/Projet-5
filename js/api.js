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