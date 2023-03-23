<template>
  <div 
    class="navigation-content"
  >
    <ul>
      <li
        v-for="(link, key) in data"
        v-bind:key="key"
      >
        <NuxtLink
          :to="link._path"
          @click="hamburgerMenuToggled = (hamburgerMenuToggled == false ? true : false)"
        >
          <Icon
            :name="link.icon"
            size="1em"
          />
          {{ link.title }}
        </NuxtLink>
      </li>
    </ul>
    <div class="socials">
      <NavigationSocial href="https://www.facebook.com/wanda.tuerlinckx" iconName="bxl:facebook"/>
      <NavigationSocial href="https://www.linkedin.com/in/wanda-tuerlinckx-3618ab104/" iconName="bxl:linkedin"/>
      <NavigationSocial href="https://www.instagram.com/wandatuerlinckxphotography/" iconName="bxl:instagram"/>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { storeToRefs } from "pinia";
  import { useNavigationMenuStore } from "~/store/navigationMenuStore"

  const main = useNavigationMenuStore();

  const { hamburgerMenuToggled } = storeToRefs(main);

  const { data } = await useAsyncData(
    () => queryContent('').find()
  )
</script>

<style scoped lang="scss">
  .navigation-content{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100% - 64px);

    ul{
      display: flex;
      flex-direction: column;
      gap: 6px;

      li{
        a{
          background-color: #f9f9f9;
          padding: 6px 10px;
          border-radius: 6px;
          color: #000;

          width: 100%;
          font-size: larger;

          display: flex;
          align-items: center;
          gap: 10px;

          &:hover{
            background-color: #dbdbdb !important;
          }
        }
      }
    }
    .socials{
      display: flex;
      justify-content: space-evenly;
    }
  }

  .router-link-active{
    background-color: #dbdbdb !important;
  }
</style>