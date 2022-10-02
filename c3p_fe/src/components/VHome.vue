<template>
    <div class="greetings">
        <h1>Bienvenido! <span> {{username}} </span></h1>
    </div>
</template>
<script>
export default {
    name:"VHome",

    data: function(){
        return{
            username:localStorage.getItem('username') || "none"
        }
    }
}
</script>
<style scoped>

</style>