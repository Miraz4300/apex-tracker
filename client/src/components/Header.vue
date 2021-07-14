<template>
    <header>
        <img :src="image" class="center">
    </header>
</template>

<script>
export default {
    name: 'Header',
    data(){
        return{
            image: require("@/assets/logo.png")
        };
    }
};
</script>

<style>
  img {
      width: 200px;
      margin-top: 0.5rem;
  }
  .center {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

  @media(max-width: 700px){
      img{
          display: block;
          margin: auto;
      }
  }
</style>