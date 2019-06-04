<template>
  <li>{{ todo }}--<button @click="delTodo">delete</button></li>
</template>

<script>
export default {
  props:{
    todo:String,
    index:Number,
    id:Number
  },
  methods:{
    delTodo(){
      this.$emit('abc',this.index,this.id)
    }
  }
  
}
</script>


<style lang="less">

</style>
