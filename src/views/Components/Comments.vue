<template>
    <div>
      <em v-if="loading">Loading comments...</em>

      <h4>Comments: </h4>
    
    <div  v-for="(item,index) in comments" :key="index">
      <h4>{{item.name}}</h4>
        {{item.content}} <br/> {{ item.time }}
      <button @click="deleteItem(index)">X</button>
      </div>
      <br/> 
      <label>Name: </label> 
      <input type="text" v-model="comments.name" />
      <label> Comment: </label>
      <textarea type="text" v-model="comments.content" />
      <br/>
      <button @click="addComment()">Submit</button>
    </div>
</template>

<script>
import { commentService } from "../../services/comment.service.js"

export default {   
  data() {
    return {
      newComment:{
        name:'',
        content:'',
        CurrentComment: 4,
      },
      comments:[
        {"id":1, name:"Lucy", content:"Hi, Edward wanna play?",time:'29 minutes ago'},
        {"id":2, name:"Edward", content:"Yes, I want to join to play",time:'27 minutes ago'},
        {"id":3, name:"Lucy", content:"When do you have free time",time:'26 minutes ago'},
      ]
    }
  },
  methods:{
    addComment() {
      this.comments.push({
        id:this.comments.CurrentComment,
        name:this.comments.name, 
        content:this.comments.content,
        time:new Date(),
      })
      this.comments.name= " "
      this.comments.content= " "
     // this.newContent.time= ''
      this.CurrentComment++
    },
    deleteItem(index){
            this.comments.splice(index,1)
        }
  },
  mounted() {
    commentService.getAll(this.$route.params.id)
      .then((comments)=> {
        this.comments = comments
        this.num_comments = comments.length
      })
      .catch(error => this.error = error)
    
  }
}
</script>