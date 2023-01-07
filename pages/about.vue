<template>
    <div>
        <h2>about</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptate quam praesentium veritatis nostrum
            ducimus officiis animi optio distinctio laboriosam facere, recusandae vero aperiam atque, cumque repellendus
            incidunt molestias libero?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptate quam praesentium veritatis nostrum
            ducimus officiis animi optio distinctio laboriosam facere, recusandae vero aperiam atque, cumque repellendus
            incidunt molestias libero?</p>
        <div>{{ data }}</div>
    </div>
</template>
<script setup>
// const { data } = await useFetch('/api/ninja?name=hamid', {
//   method: 'post',
//   body: {age: 25}
// })

const { data } = await useFetch('/api/currency/GBP')

</script> 

<style scoped>
h2 {
    margin-bottom: 20px;
    font-size: 36px;
}

p {
    margin: 20px 0;
}
</style>