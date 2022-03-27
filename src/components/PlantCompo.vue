<template>
  <div class="hello">
    <h1>This is the first Componenet </h1>
    <h1>{{ msg }}</h1>
      <button id="example" v-on:click="sayHi">Say Hi</button>
  </div>
</template>

<script>
export default {
  name: "PlantCompo",
props: {
    msg: {type: String, required: true, default: 'no value was passed', 
    validator: function(msg){return msg.length>1}}
  },
data:()=>{
    return{
     HiText: ", we are learning Vue",
     isAvailable: Boolean,
  }},
methods: {
    sayHi: function (event) {
      // `this` inside methods point to the Vue instance
      alert('Hello ' + this.HiText + '!')
      // `event` is the native DOM event
      alert(event.target.tagName)
    }
  },
created(){
 console.log('The component is created')
 },
mounted(){
 console.log('The component is mounted')
 },
updated(){
 console.log('The component is updated')
 },
unmounted(){
 console.log('The component is unmounted')
 },
destroyed(){
 console.log('The component is destroyed')
 },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- Remove the scoped and notice the diffrence -->
<style scoped>
h1 {
  font-size: 20px ;
}
</style>