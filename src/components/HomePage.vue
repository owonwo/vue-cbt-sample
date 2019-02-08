<template>
  <div id="homepage" class="text-center container">
    <h1>9to5</h1>
    <h3>Test your fit with work and be the wiser</h3>
    <div class="instruction">
      <h5>INSTRUCTIONS</h5>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur culpa ipsum libero velit, sint sequi totam qui, ipsam consequatur, rem laboriosam facere excepturi sunt aspernatur, esse quasi aut deleniti facilis accusantium. Quae adipisci consectetur necessitatibus facilis vero sunt numquam animi dolorem assumenda recusandae architecto et officia veniam consequuntur, doloribus beatae?
      </p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem beatae ipsum at consectetur pariatur eaque, neque consequatur distinctio reiciendis, quod maiores assumenda dolore, animi debitis dolorum quos ex. Minus, ex!</p>
      <p>Please start when ready!</p>
      <div class="text-center">
        <router-link :to="{name: 'Questions'}" tag="button" class="wg-btn is-scaling">
        	Start
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>
