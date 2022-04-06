import http from "./http-axios";

class dataaxios {

    getAllPlants() {
        return http.get("/plants");
    }

    getPlantbyId(id) {
        return http.get('/plants/' + id);
    }

    createPlant(data) {
        return http.post("/plants", data);
    }

    updatePlant(id, data) {
        return http.put('/plants/' + id, data);
    }

    deletePlant(id) {
        return http.delete('/plants/' + id);
    }

    createReservation(id, data) {
        return http.post('/plants/' + id + '/reservations', data);
    }

    getAllReservations(id) {
        return http.get('/plants/' + id + '/reservations');
    }
    updateReservation(id, res_id, data) {
        return http.put('/plants/' + id + '/reservations/' + res_id, data);
    }
    deleteReservation(id, res_id) {
        return http.delete('/plants/' + id + '/reservations/' + res_id);
    }



}
export default new dataaxios();