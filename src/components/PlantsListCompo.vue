<template>
<div id= "comp-list-one">
        <h1>This is Plants list Componenet </h1>
<ul>
<li class="item" v-for= "plant in plantsList" :key="plant.id">
<span class="id"> <b>Id:</b> {{plant.id}} </span><br>
<span class="type"> <b>Plant type:</b> {{plant.type}} </span> 
<span class="description"> <b>Plant description:</b> {{plant.description}} </span>
</li>
</ul>
</div>
</template>

<script>
export default {
  name: "PlantsListCompo",
props:         ["plantsList"]  ,
data:()=>{
    return{
  }},
 };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- Remove the scoped and notice the diffrence -->
<style scoped>
h1 {
  font-size: 20px ;
}

.item{
background: rgb(47, 255, 141);
margin-bottom: 5px;
padding: 3px 5px;
}
#comp-list-one{
background: #6e8b97;
box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
margin-bottom: 30px;
padding: 10px 20px;
}
#comp-list-one ul{
padding: 0;
}
#comp-list-one li{
display: inline-block;
margin-right: 10px;
margin-top: 10px;
padding: 20px;
background: rgba(255,255,255,0.7);
}
</style>