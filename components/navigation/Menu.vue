<template>
  <div 
    :class="{'menu-active' : hamburgerMenuToggled}"
    class="navigation-menu"
  >
    <div class="options-flex">
      <NavigationHamburger />
      <div>
        <NavigationAppearance />
      </div>
    </div>

    <NavigationContent v-if="hamburgerMenuToggled"/>
  </div>
</template>

<script setup lang="ts">
  import { storeToRefs } from "pinia";
  import { useNavigationMenuStore } from "~/store/navigationMenuStore"

  const main = useNavigationMenuStore();

  const { hamburgerMenuToggled } = storeToRefs(main);
</script>

<style scoped lang="scss">
  .navigation-menu{
    position: fixed;
    z-index: 100;
    min-width: 400px;

    //Background Glass Effect
    background: #f9f9f9;
    margin: 16px;
    padding: 6px;
    border-radius: 16px;

    filter: drop-shadow(0 0 0.75rem #fff);

    .options-flex{
      display: flex;
      justify-content: space-between;
      padding: 10px;

      div{
        display: flex;
        gap: 10px;
      }
    }
  }

  .menu-active{
    height: calc(100% - 32px);
  }

  @media screen and (max-width: 950px) {
    .navigation-menu{
      min-width: calc(100% - 32px);
    }
  }
</style>