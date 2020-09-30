/**
 * @returns [Camera]
 */
async function apiGetAllCamerasInfos() {
    response = await fetch('http://localhost:3000/api/cameras');
    let data = await response.json();
    return data;
};

async function apiGetCameraInfo(id) {
    response = await fetch('http://localhost:3000/api/cameras/'+id);
    let data = await response.json();
    return data;
 };