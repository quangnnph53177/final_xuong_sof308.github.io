<script setup>
import { ref, onMounted } from 'vue';

const cart = ref([]);

// Lấy giỏ hàng từ localStorage khi trang tải
const getCart = () => {
  cart.value = JSON.parse(localStorage.getItem('cart')) || [];
};

// Cập nhật giỏ hàng vào localStorage
const updateCart = () => {
  localStorage.setItem('cart', JSON.stringify(cart.value));
};

// Gọi getCart khi trang tải
onMounted(() => {
  getCart();
});
</script>

<template>
  <div class="container">
    <h1>Giỏ hàng</h1>

    <div v-if="cart.length > 0">
      <ul>
        <li v-for="item in cart" :key="item.id">
          Tên: {{ item.name }} - Số lượng: {{ item.quantity }} - Giá: {{ item.price }} VND
        </li>
      </ul>
      <button class="btn btn-primary">Thanh toán</button>
    </div>
    <div v-else>
      <p>Giỏ hàng của bạn đang trống.</p>
    </div>
  </div>
</template>
