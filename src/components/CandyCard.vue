<template>
    <div>
        <h2>what the hell</h2>
        <h2>{{ sweet.name }}</h2>
        <p>{{ sweet.id }}</p>
    </div>
</template>

<script>
    export default {
        name : "CandyCard",
        props: {
            "name" : String,
            "id" : Number
        }
    }
</script>

<style lang="sass" scoped>

</style>