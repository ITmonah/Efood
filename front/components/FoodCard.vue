<template>
  <div class="food_card"><img :src="product.image" alt="" /></div>
</template>

<script>
export default defineComponent({
  props: {
    product: Object,
  },
});
</script>

<style scoped>
.food_card img {
  width: 144px;
  height: 144px;
  object-fit: contain;
}
</style>