<template>
  <div>
    <em v-if="loading">Loading article...</em>
  
        <form articles :key="articles.article_id">
         <h1>{{ articles.title }}</h1>
         <h4>{{ 'Written By : ' + articles.author }}</h4>
         <h5> {{ 'Published: '+ articles.date_published }} <br/>
         {{ 'Edited: '+ articles.date_edited }}</h5>
         <p> {{ articles.article_text }} </p> 
      
        </form>
  </div>

<br/>
    <div>
    <!-- <Comments/> -->
    </div>

</template>

<script>
import { articleService } from "../../services/article.service.js"
import { commentService } from "../../services/comment.service.js"
import Comments from "../Components/Comments.vue"

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
  components:{
    Comments
  },
  mounted() {
    articleService.getOne(this.$route.params.id)
    .then((articles) => {
      console.log(articles, 'articles should be here')
      this.articles = articles
      this.loading= false
      // commentService.getAll(this.$route.params.id)
      // .then((comments)=> {
      //   this.comments = comments
      //   this.num_comments = comments.length
      // })
      // .catch(error => this.error = error)
    
    })
      .catch(error => this.error = error);
    
    }
}
</script>