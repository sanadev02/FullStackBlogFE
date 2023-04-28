<template>
  <div id="page">
    <div>
      <em v-if="loading">Loading article...</em>

      <form id="articles" articles :key="articles.article_id" class="form-group">

        <h1>{{ articles.title }}</h1>
        <h4>{{ "Written By : " + articles.author }}</h4>
        <h5> {{ 'Published: '+ articles.date_published }} <br />
          {{ 'Edited: '+ articles.date_edited }}</h5>
        <p> {{ articles.article_text }} </p>
      </form>
    </div>
  </div>
  <br />
  <div class="vue-form">
    <em v-if="loading">Loading comments...</em>
    <br />
    <div comment :key="comments" class="list-item">
      <label> Comments: </label>
      <div>
        {{ comments }}
      </div>
    </div>
<br/>
    <form v-on:submit.prevent="addComments">
      <!-- id="comments" comments :key="comments.article_id" -->
     <label>Post comment here:</label>
      <textarea class="form-control" rows="2" v-model='comment_text' type="comment_text" />
      <br />
      <button type="submit" class="btn btn-dark btn-block">Submit</button>
    </form>
  </div>
  <br />

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
      comment_text: "",
      comment_id: "",
      date_published: "",
      error: "",
      loading: true
    }
  },
  methods:{
    addComments() {
      articleService.getOne(this.$route.params.id)
        .then((articles) => {
          console.log(articles, 'articles should be here')
          this.articles = articles
          this.loading = false

      commentService.getAll(this.$route.params.id)
        .then((comments) => {
          this.comments = comments
          this.num_comments = comments.length
          this.loading = false
  
          commentService.addComments(this.id,this.comment_text)
            .then((result) => {
              this.comment_text = this.comment_text;
              this.id = this.id;
              this.loading = false;
            })
            .catch(error => this.error = error)
            })
            .catch(error => this.error = error)

        })
        .catch(error => this.error = error)
    },
  }
}
</script>

<style>
#page {
  margin: 1%;
}

#title {
  color: #213159;
  font-family: monospace;
  text-decoration: underline;
  text-align: left;
}

#articles {
  display: flexbox;
  text-align: left;
  color: #213159;
  font-family: monospace;
  font-size: 12pt;
  margin: 0;
  width: 65%;
  float: inline-start;
  height: auto;
}

ul {
  list-style-type: square;
  list-style-position: inside;
}

#comments {
  text-align: left;
  color: #213159;
  font-family: monospace;
  font-size: 12pt;
  margin: 0;
  width: 65%;
  float: inline-start;
  height: auto;
}

textarea {
  box-sizing: border-box;
  margin: 0;
  padding: 0%;
}

button {
  box-sizing: border-box;
  margin: 0;
  padding: 1%;
}
</style>