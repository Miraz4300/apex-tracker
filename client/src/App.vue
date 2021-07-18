<template>
  <div class="container">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
:root {
  --primary-color: #953036;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: var(--primary-color);
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  line-height: 1.6;
}

a {
  color: #fff;
  text-decoration: none;
}

ul {
  list-style: none;
}

.body-bg-no-image {
  background: var(--primary-color);
}

.body-bg-image {
  background: var(--primary-color) url("./assets/apextracker-bg.jpg") no-repeat
    top center;
}

body,
.search::before {
  background: var(--primary-color) url("./assets/apextracker-bg.jpg") no-repeat
    top center;
  background-attachment: fixed;
}
.search {
  border: 2px rgb(0, 0, 0) solid;
  margin-top: 9rem;
  padding: 2rem;
  position: relative;
  overflow: hidden;
}

.search::before {
  filter: blur(10px);
  content: "";
  position: absolute;
  left: -10px;
  top: -10px;
  width: calc(100% + 20px);
  height: calc(100% + 20px);
  z-index: -1;
}

.search::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.35;
  border: 1px solid rgb(0, 0, 0);
  background: rgb(0, 0, 0);
  background-image: url(data:image/png;base64,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);
}

.shadow {
  border-radius: 1px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1), 0 1px 8px rgba(0, 0, 0, 0.2);
}

.container {
  max-width: 960px;
  margin: 1rem auto;
  overflow: auto;
  padding: 0 2rem;
}

.form-group {
  margin: 1rem 0;
}

input,
select,
textarea {
  display: block;
  width: 100%;
  padding: 0.4rem;
  font-size: 1.2rem;
  border: 1px solid #ccc;
}

.btn {
  display: inline-block;
  background: var(--primary-color);
  color: #fff;
  padding: 0.4rem 1.3rem;
  border: none;
  cursor: pointer;
  outline: none;
  margin-top: 1rem;
}

@media (max-width: 700px) {
  body {
    background: var(--primary-color);
  }
}






/* Alpha build of acrylic frontend */


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h1 {
  color: #426696;
  font-weight: 600;
  font-size: 3rem;
  opacity: 0.8;
}

h2,
p {
  color: #658ec6;
  font-weight: 500;
  opacity: 0.8;
}

h3 {
  color: #426696;
  font-weight: 600;
  opacity: 0.8;
}

main {
  font-family: "Poppins", sans-serif;
  min-height: 100vh;
  background: linear-gradient(to right top, #65dfc9, #6cdbeb);
  display: flex;
  align-items: center;
  justify-content: center;
}

.glass {
  background: white;
  min-height: 80vh;
  width: 60%;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3)
  );
  border-radius: 2rem;
  z-index: 2;
  backdrop-filter: blur(2rem);
  display: flex;
}

.circle1,
.circle2 {
  background: white;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.3)
  );
  height: 20rem;
  width: 20rem;
  position: absolute;
  border-radius: 50%;
}

.circle1 {
  top: 5%;
  right: 15%;
}

.circle2 {
  bottom: 5%;
  left: 10%;
}
.dashboard {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3)
  );
  
  border-radius: 2rem;
}
.link {
  display: flex;
  margin: 2rem 0rem;
  padding: 1rem 5rem;
  align-items: center;
}
.link h2 {
  padding: 0rem 2rem;
}

.games {
  flex: 2;
}

.pro {
  background: linear-gradient(to right top, #65dfc9, #6cdbeb);
  border-radius: 2rem;
  color: white;
  padding: 1rem;
  position: relative;
}

.pro img {
  position: absolute;
  top: -10%;
  right: 10%;
}
.pro h2 {
  width: 40%;
  color: white;
  font-weight: 600;
}

/* GAMES */
.status {
  text-align: center;
}


.games {
  margin: 2rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.card {
  display: flex;
  background: linear-gradient(
    to left top,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.5)
  );
  border-radius: 1rem;
  margin: 2rem 0rem;
  padding: 2rem;
  box-shadow: 6px 6px 20px rgba(122, 122, 122, 0.212);
  justify-content: space-between;
}

.progress {
  background: linear-gradient(to right top, #65dfc9, #6cdbeb);
  width: 100%;
  height: 25%;
  border-radius: 1rem;
  position: relative;
  overflow: hidden;
}
.progress::after {
  content: "";
  width: 100%;
  height: 100%;
  background: rgb(236, 236, 236);
  position: absolute;
  left: 60%;
}
.card-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.percentage {
  font-weight: bold;
  background: linear-gradient(to right top, #65dfc9, #6cdbeb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

</style>
