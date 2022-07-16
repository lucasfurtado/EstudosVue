<template>
    <div class="task-container">
        <div class="task-card"></div>
        <div class="task-card"></div>
        <div class="task-card"></div>
    </div>
</template>

<script>
export default{
    props :{
        cards : null
    }
}
</script>


<style>
    .task-container{
        display: flex;
        flex-direction: row;
        align-content: center;
        justify-content: center;
        flex-wrap: wrap;
        height: 100%;
        width: 100%;
        border: solid 2px white;
    }

    .task-card{
        width: 100px;
        height: 50px;
        margin: 10px;
        background: #E25342;
    }
</style>