<template>
  <div>
    <input type="text" placeholder="请输入内容.." v-model="inputVal" ref="myinput">
    <button @click="addTodo">add</button>

<ul>
  <!--v-for 要与 key 连用，否则会报错 ；删除操作，涉及到子组件要修改父组件的数据，所以父组件要绑定一个自定义事件给子组件，从而修改数据；todo要传给Todoitem组件 ,渲染到页面-->
  <Todoitem 
  v-for="(item,index) in todolist" 
  :key="item.id"  
  @abc="delTodo"
  :todo="item.name"
  :index="index"
  :id="item.id"
   />
</ul>
  </div>
</template>


<script>
import Todoitem from './Todoitem.vue'


export default {
  data(){
    return {
      inputVal:'',
      todolist: []
    }
  },
  components:{
    Todoitem
  },
  methods:{
    addTodo(){
      let obj={
        // id自动添加
        name:this.inputVal
      }

      this.$http.post('/todolist',obj)
      .then(res=>{
        console.log(res)
        this.todolist.push(res)
      })
      .catch(err=>{
        alert('新增失败',err.message)
      })
    },

    delTodo(index,id){
      console.log(id,index);
      
      this.$http.delete(`/todolist/${id}`)
      .then(res=>{
        this.todolist.splice(index,1)
      })
      .catch(err=>{
        alert('删除失败',err.message)
      })
    }
  },
  created(){
     this.$http.get('/todolist')
      .then(res=>{
        console.log(res);
        
          this.todolist=res;
      })
       .catch(err=>{
        alert('网络异常',err.message)
      })
    }
}
</script>


<style>

</style>