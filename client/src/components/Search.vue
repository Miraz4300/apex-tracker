<template>
    <section class="search">
        <h1> Apex Legends Track Stats </h1>
        <form v-on:submit.prevent="onSubmit">
            <div class="form-group">
                <label for="platform">Platform</label>
                <select name="platform" id="platform" v-model="platform">
                    <option value="psn">Playstation</option>
                    <option value="xbl">Xbox</option>
                    <option value="origin">Origin</option>
                </select>
            </div>
            <div class="form-group">
                <label for="gamertag">Gamertag</label>
                <input type="text" name="" v-model="gamertag" id="gamertag"
                placeholder="PSN ID, Xbox Live gamertag, Origin ID"/>
            </div>
            <div class="orm-grop">
                <input type="submit" value="Submit" class="btn"/>
            </div>
        </form>
    </section>
</template>

<script>
export default {
    name: 'Search',
    data(){
        return{
            platform: "origin",
            gamertag: ""
        };
    },
    beforeCreate(){
        document.body.className = "body-bg-image"
    },
    methods: {
        onSubmit(){
            if(!this.gamertag){
                console.log("Please enter gamertag!");
            } else{
                console.log("empty/failed")
            }
        }
    }
};
</script>

<style>

</style>