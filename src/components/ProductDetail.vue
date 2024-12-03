<script setup>
import { ref, onMounted } from 'vue';

const id = '1'; // ID sản phẩm có thể được truyền động qua route hoặc prop
const urlDetailProduct = `https://67414054e4647499008d305b.mockapi.io/api/v1/products/${id}`;

const product = ref(null); // Dữ liệu chi tiết sản phẩm
const loading = ref(true); // Trạng thái đang tải
const error = ref(null); // Trạng thái lỗi

async function getProduct() {
  try {
    const response = await fetch(urlDetailProduct);
    if (!response.ok) throw new Error('Failed to fetch product details');
    product.value = await response.json();
  } catch (err) {
    error.value = err.message;
  } finally {
    loading.value = false;
  }
}

// Lấy dữ liệu khi component được mount
onMounted(getProduct);
</script>

<template>
  <div class="container mt-4">
    <!-- Kiểm tra trạng thái tải -->
    <div v-if="loading" class="text-center">
      <p>Loading product details...</p>
    </div>

    <!-- Hiển thị lỗi nếu có -->
    <div v-else-if="error" class="text-center text-danger">
      <p>{{ error }}</p>
    </div>

    <!-- Hiển thị chi tiết sản phẩm -->
    <div v-else>
      <h1 class="mb-4">{{ product.name }} <small class="text-muted">(#{{ product.id }})</small></h1>
      <ul class="list-group">
        <li class="list-group-item"><strong>Quantity:</strong> {{ product.quantity }}</li>
        <li class="list-group-item"><strong>Price:</strong> {{ product.price }} VND</li>
        <li class="list-group-item"><strong>Description:</strong> {{ product.description }}</li>
      </ul>
    </div>
  </div>
</template>
