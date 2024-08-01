<template>
  <div class="container mx-auto p-4 md:p-8 max-w-5xl mx-auto p-4 md:p-8 h-screen h-v-center">
    <form class="shadow-md rounded px-8 pt-6 pb-8 mb-4 min-w-full">
      <div class="mb-4">
        <label class="block text-sm font-bold mb-2" for="username">
          Username
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          id="username" type="text" placeholder="Username">
      </div>
      <div class="mb-4">
        <label class="block text-sm font-bold mb-2" for="email">
          Email
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          id="email" type="email" placeholder="Email">
      </div>
      <div class="mb-4">
        <label class="block text-sm font-bold mb-2" for="password">
          Password
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password" type="password" placeholder="Password">
      </div>
      <div class="mb-4">
        <label class="block text-sm font-bold mb-2" for="confirm-password">
          Confirm Password
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          id="confirm-password" type="password" placeholder="Confirm Password">
      </div>
      <div class="flex items-center justify-between">
        <UButton 
          size="xl"
          class="font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit">
          Register
        </UButton>
      </div>
    </form>
  </div>
</template>
<script setup>

</script>