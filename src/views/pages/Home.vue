<template>
  <div>
    <h1>Welcome to my blog!</h1>

    <em v-if="loading">Loading articles...</em>

    <ul v-if="articles.length">
        <li v-for="article in articles" :key="article.article_id">
          <router-link :to="'/articles/'+ article.article_id">
            {{ article.title + ' by ' + article.author }}
          </router-link>
        </li>
    </ul>
    <div v-if="error">
        {{ error }}
    </div>
</div>

</template>


<script>
import { articleService } from "../../services/article.service.js";

export default {
  data() {
    return {
      articles: [],
      error: "",
      loading: true
    }
  },
  mounted() {
  articleService.getAll()
  .then(articles => {
      this.articles = articles
      this.loading = false
    })
    .catch(error => this.error = error);
    }
  }
</script>