<template>
    <nav :class="{ 'fixed': navMenuStatus, 'relative': !navMenuStatus }" class="w-screen flex justify-between lg:items-center lg:justify-around py-6 px-8 lg:px-0 z-40 bg-White 2xl:px-24 2xl:justify-between">
        <img src="../assets/images/logo.svg" alt="Logo icon" />

        <ul class="hidden lg:flex">
          <li class="mx-2.5 cursor-pointer text-GrayishBlue hover:text-black duration-300 border-b-White border-b-2 hover:border-b-LimeGreen text-lg">Home</li>
          <li class="mx-2.5 cursor-pointer text-GrayishBlue hover:text-black duration-300 border-b-White border-b-2 hover:border-b-LimeGreen text-lg">About</li>
          <li class="mx-2.5 cursor-pointer text-GrayishBlue hover:text-black duration-300 border-b-White border-b-2 hover:border-b-LimeGreen text-lg">Contact</li>
          <li class="mx-2.5 cursor-pointer text-GrayishBlue hover:text-black duration-300 border-b-White border-b-2 hover:border-b-LimeGreen text-lg">Blog</li>
          <li class="mx-2.5 cursor-pointer text-GrayishBlue hover:text-black duration-300 border-b-White border-b-2 hover:border-b-LimeGreen text-lg">Carrers</li>
        </ul>

        <button class="nav--button hidden lg:block text-White py-2.5 px-9 rounded-full text-[15px]">Request Invite</button>

        <img @click="toogleMenu" class="cursor-pointer lg:hidden" :src="!navMenuStatus ? getImageUrl('icon-hamburger') : getImageUrl('icon-close')" :alt="!navMenuStatus ? 'Open menu status' : 'Close menu status'" />

        <section v-if="navMenuStatus" class="nav--menu_opened    absolute z-10 w-screen h-screen top-[68px] left-0 flex justify-center items-start lg:hidden">
            <article :class="{ 'menu-open': navMenuStatus, 'menu-closed': hideMenu }" class="nav--menu_opened-list relative z-40 bg-White top-6 w-10/12">
                <ul class="text-center py-7 font-bold">
                    <li class="duration-300 hover:text-GrayishBlue"><a href="">Home</a></li>
                    <li class="my-4 duration-300 hover:text-GrayishBlue"><a href="">About</a></li>
                    <li class="my-4 duration-300 hover:text-GrayishBlue"><a href="">Contact</a></li>
                    <li class="my-4 duration-300 hover:text-GrayishBlue"><a href="">Blog</a></li>
                    <li class="duration-300 hover:text-GrayishBlue"><a href="">Carrers</a></li>
                </ul>
            </article>
            
        </section>
    </nav>
</template>

<style scoped>
    .nav--menu_opened
    {
        background: rgba(0, 0, 0, .6);
    }

    .nav--menu_opened-list {
      transform: scaleY(0);
      transform-origin: top;
      transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
    }

    .menu-open {
      animation: fadeIn 0.5s ease-in-out forwards;
    }

    .menu-closed {
      animation: fadeOut 0.5s ease-in-out forwards;
    }

    .nav--button
    {
        background: linear-gradient(90deg, hsl(136, 65%, 51%), hsl(192, 70%, 51%));
        transition: .5s;
    }
    .nav--button:hover
    {
        transform: scale(1.05);
    }

    @keyframes fadeIn {
      0% {
        transform: scaleY(0);
      }
      100% {
        transform: scaleY(1);
      }
    }

    @keyframes fadeOut {
      0% {
        transform: scaleY(1);
      }
      100% {
        transform: scaleY(0);
      }
    }
</style>

<script lang="ts">
    export default {
        data() {
            return {
                navMenuStatus: false,
                hideMenu: false,
            };
        },
        methods: {
            toogleMenu() {
                if (this.navMenuStatus) {
                    this.hideMenu = true
                    setTimeout(() => {
                    this.navMenuStatus = false;
                    }, 500);
                } else {
                    this.hideMenu = false
                    this.navMenuStatus = true;
                }
            },
            getImageUrl(name: string) {
                return new URL(`../assets/images/${name}.svg`, import.meta.url).href
            }
        },
    }
</script>