<template>
  <TodoHeader></TodoHeader>
  <TodoInput v-on:saveInput="saveOneInput"></TodoInput>
  <TodoList v-on:removeItem="remove" v-on:finsh="finsh"></TodoList>
  <TodoFooter v-on:clearAll="clearAll"></TodoFooter>

</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  name: 'App',
  components: {
    TodoHeader,TodoInput,TodoList,TodoFooter
  },
  data(){
    return {
      todoList:[]
    }
  },
  methods:{
    remove(item,index){
          localStorage.removeItem(item)
         this.todoList.splice(index,1)
    },
    finsh(item){
        item.complete =  !item.complete
        localStorage.removeItem(item)
        localStorage.setItem(item.item,JSON.stringify(item))
    },
    saveOneInput(input){
      console.log(input);
        var obj = {complete : false, item: input}
        localStorage.setItem(input,JSON.stringify(obj))
         this.todoList.push(obj)
      },
       clearAll(){
        localStorage.clear()
        this.todoList = []
      }
  },
  created(){
    if (localStorage.length > 0) {
      for(let i = 0; i < localStorage.length; i++){
          let item = localStorage.getItem(localStorage.key(i))
          this.todoList.push(JSON.parse(item))
      }
    }
}
}
</script>

<style>

</style>
