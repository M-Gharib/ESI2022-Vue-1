<template>
  <div class="plants">
    <h1>This is the plants page</h1>
    <plant-compo msg= "This is a plant component" />


<!-- <v-text> -->
    <h2> v-on </h2> 
    <p v-text= "message"> </p>

<!-- <v-html> -->
    <h2> v-html </h2> 
    <p v-html= 'messageHtml'> </p>

<!-- v-on -->
<h2> v-on </h2> 
<p @click= 'count++'> Hello {{nameClick}}, you have clicked {{count}} times </p>

<p @click= 'toBePaid'> Money to be paid - check the console </p>

<!-- <v-show> -->
<h2> v-show </h2> 
<h1 v-show="true">Hello!</h1>
<h1 v-show ="count>4"> v-show test count: {{count}}</h1>

<!-- v-once -->
<h2> v-once through componenet </h2> 
<plant-compo v-once msg = "This is a plant component XX" />

<!-- v-else-if  -->
<h2> v-else-if </h2>
<p v-if= "Math.random() > 0.4"> Appear if random number bigger than 0.4  </p>
<p v-else-if = "Math.random() == 0.4"> Appear if random number equal  to 0.4  </p>
<p v-else> "random number not bigger than 0.4" </p>

<!-- v-bind -->
<h2> v-bind</h2>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png" alt="Vue logo"  width="100" height="100">
<p> Hard coded Image source </p>
<img src="imageSrc" alt="Vue logo" width="100" height="100">
<p> Image source provided without bind</p>
<img v-bind:src="imageSrc" alt="Vue logo" width="100" height="100">
<p> Image source provided with bind</p>

<!-- v-model vs  v-bind -->
<h2> v-model vs  v-bind</h2>
<form>
<input type = "text" :value= "writeSomething" placeholder= "using v-bind">
<input type = "text" v-model = "writeSomething" placeholder= "using v-model">
</form>
<p> You wrote {{writeSomething}}</p>

<!-- v-for -->
<h2> v-for, props: and components </h2>
<plants-list-compo :plantsList="plantsList"/>

<!-- Method vs Computed properties-->
<h2> Method vs Computed properties </h2>

<p> {{toBePaid()}} </p>
<p> {{toBePaid()}} </p>
<p> {{toBePaid()}} </p>

<p> {{toBePaidComputed}} </p>
<p> {{toBePaidComputed}} </p>
<p> {{toBePaidComputed}} </p>

<!-- Watched properties (Watchers) -->
<h2> Watched properties (Watchers) </h2>

<label> Pay in Euro </label>
<input type="text" v-model="Euro"><br>

<label> Pay in US Dollar </label>
<input type="text" v-model="Dollar"><br>


</div>
</template>

<script>
// @ is an alias to /src
import PlantCompo from "@/components/PlantCompo.vue";
import PlantsListCompo from "@/components/PlantsListCompo.vue";
export default {
  name: "Plants",
    components: {
    PlantCompo,
    PlantsListCompo
  },
  data: function() {
  return {
    plantsList : [
    {id: '1', type: 'heavy vehicle', description: 'can be used for heavy work'},
    {id: 2, type: 'medium vehicle', description: 'can be used for medium to heavy work'},
    {id: 3, type: 'light vehicle', description: 'can be used for light work'},
    ],
    billsTobepaid: [
    {id: '1', price: 344},
    {id: 2, price: 360},
    ],



writeSomething: "",
  imageSrc:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png",
  message: "Hi, I am a v-text",
  nameClick: 'John',
  count: 0,
  messageHtml: "<h1> Hi, I am a v-HTML<h1/>",
  money: "",
  Methodmoney:"",
  Euro:"",
  Dollar: ""
  }
  
  },
methods: {
    toBePaid: function () {
         console.log("Method run");
        var Methodmoney =  "Sum to be paid = " + (this.billsTobepaid[0].price + this.billsTobepaid[1].price) + " Euro"; 
         console.log(Methodmoney)
        return Methodmoney;
    }
  },

 computed:{
    toBePaidComputed: function () {
   console.log("Computed run"); 
   var money = "Computed sum to be paid = " + (this.billsTobepaid[0].price + this.billsTobepaid[1].price) + " Euro";
   console.log(money)
   return money;
    }
  },
  
watch:{
Euro: function(w){
    this.Dollar = w *2;
},
Dollar: function(w){
    this.Euro = w /2;
},
}


};
</script>

<style scoped>
h2 {
    color: green;
}
</style>