<template>
  <div>
    <h1>Welcome to my blog!</h1>

    <em v-if="loading">Loading articles...</em>

    <ul v-if="articles.length">
        <li v-for="article in articles" :key="article.article_id">
          <router-link :to="'/article/'+ article.article_id">
            {{ article.title + ' by ' + article.author }}
          </router-link>
        </li>
    </ul>
    <div v-if="error">
        {{ error }}
    </div>
</div>
<!-- <Article/> -->

</template>


<script>
import { articleService } from "../../services/article.service.js";
import Article from "../pages/Article.vue";

export default {
  data() {
    return {
      articles: [],
      error: "",
      loading: true
    }
  },
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
  articleService.getAll()
  .then(articles => {
     // console.log(articles, 'home page')
      this.articles = articles
      this.loading = false
    })
    .catch(error => this.error = error);
    },
    components: {
      Article,
    }
  }
</script>