<template>
  <div >
    <h1 id="titles">Welcome to my blog!</h1>
<br/>
    <em v-if="loading">Loading articles...</em>

    <ul id="articles" v-if="articles.length">
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
    console.log(articles,'articles here')
      this.articles = articles
      this.loading = false
    })
    .catch(error => this.error = error);
    }
  }
</script>

<style>
#titles {
  color: #213159;
  font-family:monospace;
  text-decoration: solid;
  text-align: center;
  font-size:xxx-large;
  padding-bottom: 5%;
}

#articles {
  text-align: left;
  color: #213159;
  font-family:monospace;
  font-size: 12pt;
  width: 65%;
  float:inline-start;
  height: auto;
}
</style>


