<template>
  <div id="app">
    <div class="container-content">
      <TitleDiv/>
      <ProgressBar/>
      <TaskInput/>
      <TaskCards/>
    </div>
  </div>
</template>

<script>
import TitleDiv from '@/components/TittleComponent.vue'
import ProgressBar from "@/components/ProgressBar.vue"
import TaskInput from "@/components/InputTask.vue"
import TaskCards from '@/components/TaskCard.vue'


export default{
  name:"app",
  components:{ TitleDiv, ProgressBar, TaskInput, TaskCards }
}
</script>

<style lang="scss">

body{
  background: linear-gradient(to right, #E5E5BE, #003973);
}

#app{
  border: solid 2px white;
  color: white;
}

.container-content{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

</style>
