<template>
    <div class="article-container">
        <h1>Articles: </h1>
        <div class="article-header">
           <h4>{{ article_id }} {{title}} </h4> 
        </div>
        <div class="article-body">
           <p>{{article_text}} </p>
        </div>
        <div class="article-footer">
           {{author}} {{date_published}} {{date_edited}}
        </div>
    </div>

    <form>
        <div>
            <h2>Comments: </h2>
        </div>
      
        <div  v-for="(item,index) in comments" :key="index">
            <h4>{{item.name}}</h4>
              {{item.content}} <br/> {{ item.time }}
            <button @click="deleteItem(index)">X</button>
            </div>
            <br/> 
            <label>Name: </label> 
            <input type="text" v-model="newComment.name" />
            <label> Comment: </label>
            <textarea type="text" v-model="newComment.content" />
            <br/>
            <button @click="handleSubmit">Submit</button> 
            <button @click="addComment()">Submit</button>
        
    </form>

</template>

<script>
export default {
    props: {
        article_text:String,
        title:String,
        author: String,
        date_published:String,
        date_edited:String
    },
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
        id:this.newComment.CurrentComment,
       //id:4,
        name:this.newComment.name, 
        content:this.newComment.content,
        time:new Date(),
      })
      this.newComment.name= " "
      this.newComment.content= " "
     // this.newContent.time= ''
      this.CurrentComment++
    },
    deleteItem(index){
            this.comments.splice(index,1)
        }
  },
}
</script>