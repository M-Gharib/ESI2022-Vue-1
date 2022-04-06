<template>
  <div class="All Plants">
    <h1>All Plants</h1>


<ul>
<p class="item" v-for= "plant in Plants" :key="plant.id">
<a class="singleplant" :href="'/aplant/' + plant.id"> 
<span class="id"> <b>Id:</b> {{plant.id}} </span><br>
<span class="type"> <b>Plant type:</b> {{plant.type}} </span> 
<span class="description"> <b>Plant description:</b> {{plant.description}} </span>
</a>
</p>
</ul>

  </div>
</template>


<script>
import dataaxios from "../dataaxios";
export default {
  name: "AllPlants",
 data() {
    return {
      Plants: [],
    };
},
 methods: {
    fetchPlants() {
      dataaxios.getAllPlants()
        .then(response => {
          this.Plants = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
 },
mounted() {
this.fetchPlants();
console.log("mounted");
},

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