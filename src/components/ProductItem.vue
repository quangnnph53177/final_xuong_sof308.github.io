<script setup>
import { BIconCart, BIconEye } from 'bootstrap-icons-vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();
const product = defineProps({
  id: Number,
  name: String,
  price: Number,
  quantity: Number,
  description: String,
});

const cart = ref([]);

const addToCart = () => {
  // Thêm sản phẩm vào giỏ hàng (lưu trong localStorage hoặc state global)
  let currentCart = JSON.parse(localStorage.getItem('cart')) || [];
  
  const existingProduct = currentCart.find(item => item.id === product.id);
  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    currentCart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(currentCart)); // Lưu lại giỏ hàng vào localStorage
  
  // Chuyển hướng đến trang giỏ hàng
  router.push('/cart');
};
</script>

<template>
  <div class="card">
    <img class="card-image-top" src="https://placehold.co/150" alt="NoImage" width="100%" />
    <div class="card-body">
      <h4 class="card-title">{{ product.name }}</h4>
      <p class="card-text">{{ product.price }} VND</p>
      <RouterLink to="/product/1" class="btn btn-success">
        <BIconEye />
      </RouterLink>
      <button class="btn btn-warning ml-2" @click="addToCart">
        <BIconCart />
        Thêm vào giỏ hàng
      </button>
    </div>
  </div>
</template>
