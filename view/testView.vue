<template>
    <div>
        <h1>这是页面{{ index }}</h1>
        <input v-model="data">
    </div>
</template>

<script>
module.exports = {
    props: {index: String},

    data() {
        return {
            data: 'test'
        }
    }
}
</script>
