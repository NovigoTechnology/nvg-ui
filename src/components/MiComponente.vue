<template>
    <Button label="Click me!" @click="handleClick" />
  </template>
  
  <script setup>
  import Button from 'primevue/button'
  
  const handleClick = () => {
    console.log('Button clicked!')
  }
  </script>
  
  <style scoped>
  /* Tus estilos aquí */
  </style>