<template>
    <div>
        <h4>Messages</h4>
        <ul v-for="message in messages" :key="message">
            <li>{{message}}</li>
        </ul>
    </div>
</template>

<script>
export default {    
    data() {
        return {
            messages: ["Mamad", "nubari"]
        };
    }
    
}
</script>
<style scoped>

</style>