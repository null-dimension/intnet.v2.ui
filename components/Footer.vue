<template>
  <footer class="py-12 max-w-5xl mx-auto p-4 md:p-8">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap justify-between text-right">
        <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
          <h5 class="text-lg font-bold mb-4">About Us</h5>
          <p class="text-sm">Lorem ipsum dolor sit amet, consectetur.</p>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
          <h5 class="text-lg font-bold mb-4">Quick Links</h5>
          <ul class="list-unstyled">
            <li class="mb-2"><a href="#" class="text-sm">Home</a></li>
            <li class="mb-2"><a href="#" class="text-sm">About</a></li>
            <li class="mb-2"><a href="#" class="text-sm">Contact</a></li>
          </ul>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
          <h5 class="text-lg font-bold mb-4">Follow Us</h5>
          <ul class="list-unstyled">
            <li class="mb-2"><a href="#" class="text-sm">Twitter</a></li>
            <li class="mb-2"><a href="#" class="text-sm">Facebook</a></li>
            <li class="mb-2"><a href="#" class="text-sm">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div class="text-center mt-8">
        <p class="text-sm">Copyright {{year}}. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>
<script setup>

const year = new Date().getFullYear()

</script>