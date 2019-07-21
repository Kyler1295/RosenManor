<template>
    <div class="photo-section" :style="{'backgroundImage': 'url(' + photoPath + ')' }"></div>
</template>

<script>
export default {
    name: 'PhotoSection',
    props: ['photoPath']
}
</script>

<style lang="scss" scoped>
// Photo Section
  .photo-section {
    height: 40vh;
    width: 100%;
    background-position: center;
    background-size: cover;
  }
</style>
