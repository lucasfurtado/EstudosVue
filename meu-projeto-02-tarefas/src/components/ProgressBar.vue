<template>
    <div class="progress-bar-container">
        <div class="progress-bar">
            <div class="progress-value">{{progress}}%</div>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            progress : 100
        }
    }
}
</script>

<style>
.progress-bar-container{
    width: 50%;
    height: 15px;
    border: 1px solid white;
}

.progress-bar{
    width: 100%;
    height: 15px;
    background: #67AA5C;
    position: relative;
}

.progress-value{
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>