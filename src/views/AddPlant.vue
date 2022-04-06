<template>
  <div class="submit-form">
      <h1>Add a Plant</h1>

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

      <button @click="addPlant" class="addPlant" >add Plant</button> 

  </div>

</template>

<script>
import dataaxios from "../dataaxios";
export default {
  name: "AddPlant",
  data() {
    return {
      Plant: {
        id: "",
        type: "",
        description: ""
      },
    };
  },
  methods: {
    addPlant() {
      var data = {
        id: this.Plant.id,
        type: this.Plant.type,
        description: this.Plant.description
      };
      dataaxios.createPlant(data)
        .then(response => {
          console.log(response.data);
          window.location.replace("http://localhost:8082/allplants");
        })
        .catch(e => {
          console.log(e);
        });
    },
}}
</script>

<style>

</style>