<template>
    <div class="article-container">
        <h1>Articles: </h1>
        <div class="article-header">
           <h4> {{title}} </h4> 
        </div>
        <div class="article-body">
           <p>{{article_text}} </p>
        </div>
        <div class="article-footer">
           {{author}} {{date_published}} {{date_edited}}
        </div>
    </div>

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
}
</script>