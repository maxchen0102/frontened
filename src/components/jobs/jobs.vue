
<template lang="">
    <h1>jobs-List</h1>
    <div v-for="job in jobs" :key="job.id" >
        <h2>{{job.name}}</h2>
    </div>
</template>
<script>
export default {
    name: 'JobList',
    data() {
        return {
            jobs: [
                { name: "max", id: 1 },
                { name: "qwe", id: 2 },
                { name: "asd", id: 3 }
            ]
        }
    }
}
</script>
<style lang="">
    
</style>