<template>
  <div>
    <em v-if="loading">Loading article...</em>

    <ul v-if="articles.length">
        <li v-for="article in articles" :key="article.article_id">
          <router-link :to="'/' + article.article_id"> 
          {{ article.title }}
          {{ 'Written By : ' + article.author }}
          {{ 'Published: '+ article.date_published }}
          {{ 'Edited: '+ article.date_edited }}
            {{ article.article_text }}
          </router-link>
        </li>
    </ul>
<br/>
    <div>
    <em v-if="loading">Loading comments...</em>
    <ul v-if="comments.length">
        <li v-for="comment in comments" :key="comment.comment_id">
          <router-link :to="'/'+ comment.comment_id">
            {{ comment.title + ' by ' + comment.author }}
          </router-link>
        </li>
    </ul>
    </div>

  </div>
<!-- 
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
    </div> -->

    <!-- <form>
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
        
    </form> -->

</template>

<script>
import { articleService } from "../../services/article.service.js"
import { commentService } from "../../services/comment.service.js"

export default {
  data() {
    return {
      articles: [],
      comments: [],
      num_comments: null,
      comment: "",
      error: "",
      loading: true
    }
  },
    props: {
      article_id: String,
        article_text: String,
        title: String,
        author: String,
        date_published: String,
        date_edited: String
    },
  data() {
    return {
      newComment:{
        name:'',
        content:'',
        CurrentComment: 4,
      },
      // comments:[
      //   {"id":1, name:"Lucy", content:"Hi, Edward wanna play?",time:'29 minutes ago'},
      //   {"id":2, name:"Edward", content:"Yes, I want to join to play",time:'27 minutes ago'},
      //   {"id":3, name:"Lucy", content:"When do you have free time",time:'26 minutes ago'},
      // ]
    }
  },
  methods:{
    addComment() {
      this.comments.push({
        id:this.newComment.CurrentComment,
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
    },

  mounted() {
    fetch("http://localhost:3333/articles/"+id )
    .then((response)=> {
        if(response.status === 200){
          console.log(response, 'data is working')
            return response.json();
        }else{
            throw "Something went wrong"
        }
    })
    .then((resJson)=> {
        return resJson
    })
    .catch((error) => {
        console.log("Err",error)
        return Promise.reject(error)
    }),
    
    fetch("http://localhost:3333/articles/"+ id + "/comments")
    .then((response) => {
        if(response.status === 200){
            return response.json();
        }else if(response.status ===400){
            throw "Not found"
        }
        else{
            throw "Something went wrong"
        }
    })
    .then((resJson) => {
        return resJson
    })
    .catch((error) => {
        console.log("Err", error)
        return Promise.reject(error)
    }),
    
    this.articles.loading = true,
    this.comments.loading = true,

    articleService.getOne(this.$route.params.id)
    .then((articles) => {
      console.log(articles, 'articles should be here')

      this.articles = articles;
      commentService.getAll(this.$route.params.id)
      .then((comments)=> {
        this.comments = comments
        this.num_comments = comments.length
      })
      .catch(error => this.error = error)
    })
    .catch(error => this.error = error)
  }
  }
}
</script>