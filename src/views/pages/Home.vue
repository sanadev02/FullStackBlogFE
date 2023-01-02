<template>
  <div>
    <h1>Welcome to my blog!</h1>

    <em v-if="loading">Loading articles...</em>

    <ul v-if="articles.length">
        <li v-for="article in articles" :key="article.article_id">
          <!-- <router-link :to="'/article/'+ article.article_id"> -->
            {{ article.titles + ' by ' + article.author }}
          <!-- </router-link> -->
        </li>
    </ul>

    <em v-if="loading">Loading comments...</em>
    <ul v-if="comments.length">
        <li v-for="comment in comments" :key="comment.comment_id">
          <router-link :to="'/article/'+ comment.comment_id">
            {{ comment.title + ' by ' + comment.author }}
          </router-link>
        </li>
    </ul>

    <div v-if="error">
        {{ error }}
    </div>
</div>

  <br/>
  <!-- <Comment/> -->
</template>


<script>
import { articleService } from "../../services/article.service"
import { commentService } from "../../services/comment.service"

export default {
  data() {
    return {
      articles: [],
      comments: [],
     // num_comments: null,
     // comment: "",
      error: "",
      loading: true
    }
  },
  // created() {
  //   this.article.loading = true;
  //   this.comments.loading = true;

  //   articleService.getOne(this.$route.params.id)
  //   .then((article) => {
  //     this.article = article;
  //     commentService.getAll(this.$route.params.id)
  //     .then((comments)=> {
  //       this.comments = comments
  //       this.num_comments = comments.length
  //     })
  //     .catch(error => this.error = error)
  //   })
  //   .catch(error => this.error = error)
  // },



mounted() {
  fetch("http://localhost:3333/articles")
    .then(res => res.json())
    .then(data => {
        console.log(data, 'data is here')
        this.articles = data
        this.loading = false
    })
    .catch((error) => {
        console.log("Err", error)
        return Promise.reject(error)
     
    }),
    fetch("http://localhost:3333/comments")
    .then(res => res.json())
    .then(data => {
        console.log(data, 'commentss is here')
        this.comments = data
        this.loading = false
    })
    .catch((error) => {
        console.log("Err", error)
        return Promise.reject(error)
     
    })
    // articleService.getAll()
    // .then(articles => {
    //     console.log(articles, 'yayy')
    //     this.articles = articles
    //     this.loading = false
    //   }
    // )
    
}
    
    // try {
    //    console.log(articles, 'articles should be here')
    //   // this.articles = articles
    // } catch (error) {
    //   console.log(error)
    // }
   
  //   .then(articles => {
  //     console.log(articles, 'home page')
  //     this.articles = articles
  //     this.loading = false
  //   })
  //   .catch(error => this.error = error);
   }

</script>