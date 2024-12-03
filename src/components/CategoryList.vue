<script setup>
import { ref } from 'vue';

const categories = ref([]);
const urlCategories = 'https://67414054e4647499008d305b.mockapi.io/api/v1/categories';

async function getCategories() {
  categories.value = await (await fetch(urlCategories)).json()
}
getCategories();

</script>

<template>
  <div class="container">
    <h1>Danh sách danh mục</h1>
    <table class="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Code</th>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="category in categories" :key="category.id">
          <td>{{ category.id }}</td>
          <td>{{ category.code }}</td>
          <td>{{ category.name }}</td>
          <td>{{ category.description }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
