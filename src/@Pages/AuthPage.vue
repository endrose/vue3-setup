<template>
  <div class="bg-green-200 w-full h-full">
    <input type="button" class="bg-blue-300 p-1 m-1 rounded-md cursor-pointer hover:bg-blue-600 hover:text-white"
      value="Authorize Me" @click="authorize">

    <span :class="auth.is_authorized ? 'text-green-600' : 'text-red-500'">{{ auth.is_authorized }}</span>
  </div>
</template>

<script setup lang="ts">

// we can import ref, router and other items from vue, vue-router, pinia each time, or use auto plugin to do it once.
// now, we dont need to import ref keyword
import authStore from '@/@Stores/authStore';
// const isAuthorized = ref<boolean>(false); //this state remains onliy in this component. So store it in pini store to share with other comps


const auth = authStore.useAuthStore();


function getRandomString(): string {
  return (Math.random().toString(36).substring(2, 10));
}

function authorize() {
  console.log(getRandomString());
  let uname = getRandomString()
  auth.authenticate(!auth.is_authorized, uname); //either give direct value o invert it.
}

</script>

<style scoped></style>  