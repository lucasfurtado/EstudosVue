<template>
    <div class="usuario-detalhe">
        <h2 v-if="!this.usuario">Usuário não selecionado!</h2>
        <div v-else>
            <h2>ID: {{ this.usuario.id }}</h2>
            <h2>Nome: {{ this.usuario.nome }}</h2>
            <h2>Idade: {{ this.usuario.idade }}</h2>
        </div>
    </div>
</template>

<script>
export default {
    props:['usuario'],
    methods:{
        teste(){
            return true;
        }
    }
}
</script>

<style>
    .usuario-detalhe {
        flex: 1;
        border: 1px solid #CCC;
    }
</style>
