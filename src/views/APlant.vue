<template>
  <div class="A Plant">
    <h1>A Plant</h1>

<ul>
<p class="item" >
<span class="id"> <b>Id:</b> {{Plant.id}} </span><br>
<span class="type"> <b>Plant type:</b> {{Plant.type}} </span> 
<span class="description"> <b>Plant description:</b> {{Plant.description}} </span>
</p>
</ul>

<div class="form-group">
<label for="id">id: </label>
        <input
         name="id"
          type="text"
          id="id"
          required
          v-model="Plant.id"
          class="form-control"
        />
 </div>

<div class="form-group">
<label for="type">type: </label>
        <input
         name="type"
          type="text"
          id="type"
          required
          v-model="Plant.type"
          class="form-control"
        />
</div>

<div class="form-group">
<label for="description">description: </label>
        <input
         name="description"
          type="text"
          id="description"
          required
          v-model="Plant.description"
          class="form-control"
        />
</div>

<div>
      <button @click="updatePlant" class="updatePlant" >Update Plant</button> 
      <button @click="deletePlant" class="deletePlant" >Delete Plant</button> 
</div>

    <h2>Reservation for Plant with ID: {{Plant.id}}</h2>

 
<p class="item" v-for= "Reservation in Reservations" :key="Reservation.res_id">

<span class="res_id"> <b>Reservation Id:</b> {{Reservation.res_id}} </span><br>

     <label for="sdate">Start date: </label>

    <input
         name="sdate"
          type="text"
          id="sdate"
          required
          v-model="Reservation.sdate"
          class="sdate"
        />

     <label for="edate">End date: </label>

    <input
         name="edate"
          type="text"
          id="edate"
          required
          v-model="Reservation.edate"
          class="edate"
        />
<span class="updateReservation" @click="updateReservation(Reservation.res_id, Reservation.sdate, Reservation.edate)"> <b> update </b></span> 
<span class="deleteReservation" @click="deleteReservation(Reservation.res_id)"> <b> delete </b></span> 
</p>


    <h2>Add Reservation for Plant with ID: {{Plant.id}}</h2>


<div class="form-group">
<label for="res_id">Reservation ID: </label>
        <input
         name="res_id"
          type="text"
          id="res_id"
          required
          v-model="Reservation.res_id"
          class="form-control"
        />
</div>

<div class="form-group">
<label for="sdate">Start date: </label>
        <input
         name="sdate"
          type="text"
          id="sdate"
          required
          v-model="Reservation.sdate"
          class="form-control"
        />
</div>

<div class="form-group">
<label for="edate">End date: </label>
        <input
         name="edate"
          type="text"
          id="edate"
          required
          v-model="Reservation.edate"
          class="form-control"
        />
</div>

<div>
      <button @click="addReservation" class="addReservation" >Add Reservation</button> 
</div>

</div>
</template>


<script>
import dataaxios from "../dataaxios";
export default {
  name: "APlant",
 data() {
    return {
            Plant: {
        id: "",
        type: "",
        description: ""
      },
      currentIndex: -1,
      type: "",
      Reservation: {
        res_id: "",
        sdate: "",
        edate: "",
        },
      Reservations: []
    };
},
 methods: {
    fetchAPlant(id) {
      dataaxios.getPlantbyId(id)
        .then(response => {
          this.Plant = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    updatePlant(){
      dataaxios.updatePlant(this.Plant.id, this.Plant)
        .then(response => {
          console.log(response.data);
          window.location.replace("http://localhost:8082/aplant/" + this.Plant.id);

        })
        .catch(e => {
          console.log(e);
        });

    },
      deletePlant(){
      dataaxios.deletePlant(this.Plant.id)
        .then(response => {
          console.log(response.data);
          window.location.replace("http://localhost:8082/allplants");
        })
        .catch(e => {
          console.log(e);
        });

    },
     addReservation() {
      var data = {
        res_id: this.Reservation.res_id,
        sdate: this.Reservation.sdate,
        edate: this.Reservation.edate,
      };
      dataaxios.createReservation(this.Plant.id, data)
        .then(response => {
          console.log(response.data);
         window.location.replace("http://localhost:8082/aplant/" + this.Plant.id);
            })
        .catch(e => {
          console.log(e);
        });
    },
    fetchReservations(id) {
      dataaxios.getAllReservations(id)
        .then(response => {
          this.Reservations = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },



    updateReservation(dres_id, dsdate, dedate){
         var data = {
        res_id: dres_id,
        sdate: dsdate,
        edate: dedate,
      }; 
        dataaxios.updateReservation(this.Plant.id, dres_id, data)
        .then(response => {
          console.log(response.data);
          window.location.replace("http://localhost:8082/aplant/"+this.Plant.id);

        })
        .catch(e => {
          console.log(e);
        });
    },

    deleteReservation(dres_id){
       dataaxios.deleteReservation(this.Plant.id, dres_id)
        .then(response => {
          console.log(response.data);
         window.location.replace("http://localhost:8082/aplant/"+this.Plant.id);
        })
        .catch(e => {
          console.log(e);
        });
    },

    },

mounted() {
this.fetchAPlant(this.$route.params.id);
},
created(){
this.fetchReservations(this.$route.params.id);
 
}

}
</script>

<style scoped>
h1 {
  font-size: 20px ;
}

.item{
background: rgb(47, 255, 141);
margin-bottom: 5px;
padding: 3px 5px;
}

</style>