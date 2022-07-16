<template>
    <div class="input-task">
        <input type="text" placeholder="Alguma tarefa?">
        <button>+</button>
    </div>
</template>

<scriptlang=>
export default{

}
</script>

<style lang="scss">
    .input-task{
        margin-top: 20px;
        margin-bottom: 20px;
    }

    input{
        background: none;
        color: white
    }

    ::placeholder{
        color:white
    }

</style>