<template>

  <nav class="py-4">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center">
        <NuxtLink to="/" class="text-lg font-bold">INTNET(v2)</NuxtLink>
        <ul class="flex space-x-4">
          <li>
            <NuxtLink to="/" class="text-lg align-middle">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" class="text-lg align-middle">About</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/login" class="text-lg align-middle">Login</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/register" class="text-lg align-middle">Register</NuxtLink>
          </li>
          <li>
            <ClientOnly>
              <UButton :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'" color="gray"
                variant="ghost" aria-label="Theme" @click="isDark = !isDark" class="text-lg align-middle" />
              <template #fallback>
                <div class="w-8 h-8" />
              </template>
            </ClientOnly>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script setup>
const colorMode = useColorMode()
const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
</script>