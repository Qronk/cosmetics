<template>
  <div class="home">
    <!--<Navbar></Navbar>-->
      <!--<Hero/>-->
    <!--<login></login>-->
    <!--<router-view/>-->
    <Navbar></Navbar>
    <Hero></Hero>
    <about></about>


  </div>
  <!--<v-toolbar v-if="checkk>0" color="white" tabs>-->
  <!--<v-toolbar-title>-->

  <!--</v-toolbar-title>-->
  <!--<v-spacer></v-spacer>-->
  <!--<div style="width: 35%;">-->
  <!--<v-text-field-->
  <!--v-model="search"-->
  <!--append-icon="search"-->
  <!--label="Search"-->
  <!--hide-details-->

  <!--&gt;</v-text-field>-->
  <!--</div>-->
  <!--<v-tabs slot="extension" grow style="cursor: pointer;">-->
  <!--<v-tabs-slider color="blue"></v-tabs-slider>-->
  <!--<v-tab @click="showbrands(chosenbrand.brand)">-->
  <!--<img style="height: 30px;" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHfWjqnsj7wQTEm2-jsn8I8LgwoSl3ZKa0knUQ169-sFQIG4UffQ">-->
  <!--</v-tab>-->
  <!--<v-tab-->
  <!--v-for="models in filteredModels"-->
  <!--@click="showmod(models)"-->
  <!--&gt;-->
  <!--{{ models.model }}-->
  <!--</v-tab>-->
  <!--</v-tabs>-->
  <!--</v-toolbar>-->
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero.vue";
import about from "@/components/about.vue";
import Navbar from "@/components/Navbar.vue";


export default {
  name: "home",
  components: {
    Hero,Navbar,about
  }
};
</script>

<style>

</style>

