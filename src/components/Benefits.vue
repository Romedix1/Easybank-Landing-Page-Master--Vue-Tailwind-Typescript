<template>
    <section class="bg-LightGrayishBlue grid place-items-center pb-12 xl:relative xl:-z-10 xl:px-20 xl:pb-12">
        <div class="w-11/12 grid place-items-center mt-16 text-center xl:text-left xl:block">
            <h2 class="text-3xl w-6/12">Why choose Easybank?</h2>
            <p class="text-GrayishBlue mt-4  xl:w-6/12">We leverage Open Banking to turn your bank account into your finacial hub. Control your finances like never before.</p>
        </div>

        <div class="xl:flex xl:mt-12 xl:ml-6 xl:pb-12">
            <article class="grid place-items-center xl:block" v-for="(benefit, index) of benefits" :key="index">
                <img class="mt-14" :src='getImageUrl(benefit.image)' :alt="benefit.alt"/>
                <h3 class="mt-6 text-lg">{{ benefit.header }}</h3>
                <p class="w-11/12 text-center xl:text-left mt-4 text-GrayishBlue">{{ benefit.text }}</p>
            </article>
        </div>
        
    </section>
</template>

<script lang="ts">
    export default {
        data() {
            return {
                benefits: [
                    {image: 'icon-online', alt: 'Online icon', header: 'Online Banking', text: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world'},
                    {image: 'icon-budgeting', alt: 'Budgeting icon', header: 'Simple Budgeting', text: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits."},
                    {image: 'icon-onboarding', alt: 'Onboarding icon', header: 'Fast Onboarding', text: 'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.'},
                    {image: 'icon-api', alt: 'Api icon', header: 'Open API', text: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."},
                ],
            }
        },
        methods: {
            getImageUrl(name: string) {
                return new URL(`../assets/images/${name}.svg`, import.meta.url).href
            }
        }
    }
</script>