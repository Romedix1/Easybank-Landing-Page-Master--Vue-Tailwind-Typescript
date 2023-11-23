<template>
    <section class="bg-VeryLightGray grid place-items-center pt-12 pb-12 xl:grid-col-2 xl:place-items-start xl:px-6 xl:pt-24 xl:-top-0 xl:relative xl:pb-36">
        <h4 class="text-2xl xl:text-4xl xl:ml-24">Latest Articles</h4>

        <div class="xl:flex xl:justify-center xl:w-screen">
            <div class="grid place-items-center xl:flex xl:justify-center xl:w-screen xl:items-start xl:gap-10">
                <article class="w-10/12 mt-10 relative overflow-hidden grid place-items-center bg-White rounded-xl sm:w-7/12 xl:w-[260px] 2xl:w-[350px] xl:items-start" v-for="(article, index) of articles" :key="index">
                    <img class="relative -top-6 xl:h-52 xl:w-full " :src='getImageUrl(article.image)' :alt="article.alt"/>

                    <div class="bg-White relative -top-12 w-full px-8 xl:-top-6">
                        <p class="text-GrayishBlue font-bold text-[13px] mt-8">By {{ article.creator }}</p>
                        <h5 class="mt-4 text-[16px] hover:text-LimeGreen cursor-pointer duration-300">{{ article.header }}</h5>

                        <p class="text-GrayishBlue mt-4 text-[14px]">{{ article.text }}</p>
                    </div>
                    
                </article>
            </div>
        </div>
        
        
    </section>
</template>

<script lang="ts">
    export default {
        data() {
            return {
                articles: [
                    {image: 'image-currency', alt: 'Currency image', creator: 'Claire Robinson', header: 'Receive money in any currency with no fees', text: 'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …'},
                    {image: 'image-restaurant', alt: 'Restaurant image', creator: 'Wilson Hutton', header: 'Treat yourself without worrying about money', text: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …"},
                    {image: 'image-plane', alt: 'Plane image', creator: 'Wilson Hutton', header: 'Take your Easybank card wherever you go', text: 'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …'},
                    {image: 'image-confetti', alt: 'Confetti image', creator: 'Claire Robinson', header: 'Our invite-only Beta accounts are now live!', text: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ..."},
                ],
            }
        },

        methods: {
            getImageUrl(name: string) {
                return new URL(`../assets/images/${name}.jpg`, import.meta.url).href
            }
        }
    }
</script>