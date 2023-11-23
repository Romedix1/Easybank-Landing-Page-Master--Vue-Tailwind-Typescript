<template>
    <section class="hero--section bg-VeryLightGray xl: xl:flex-row-reverse xl:relative xl:top-0 xl:h-[600px] xl:pt-24">
        <div class="sm:grid sm:place-items-center xl:block">
            <img src="../assets/images/image-mockups.png" alt="Mockup image" class="relative -top-32 sm:w-8/12 lg:w-6/12 lg:-top-44 xl:w-[650px] xl:absolute xl:-top-24 xl:-right-28"/>
        </div>

            <article class="relative -top-24 text-center grid place-items-center xl:text-left xl:-top-0 xl:block xl:pl-28 xl:w-8/12">
                <h1 class="text-3xl font-normal w-11/12 xl:text-4xl xl:w-9/12 ">Next generation digital banking</h1>

                <p class="mt-6 text-GrayishBlue font-light w-11/12 xl:text-lg xl:w-9/12">Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more</p>
            
                <button class="hero--button mt-10  text-White py-2.5 px-9 rounded-full"><a href="">Request Invite</a></button>
            </article>
    </section>
</template>

<style scoped>
    .hero--section
    {
        background: url(../assets/images/bg-intro-mobile.svg) no-repeat;
        background-size:  contain;
        background-position: left 0 top -40px;
        background-color: hsl(0, 0%, 98%) !important;
    }

    @media (min-width: 640px) {
        .hero--section
        {
            background-size: 450px;
            background-position: right 0 top -40px;
        }
    }

    @media (min-width: 1280px) {
        .hero--section
        {
            background: url(../assets/images/bg-intro-desktop.svg) no-repeat;
            background-position: top -160px right -300px;
            background-size: 1000px;
        }
    }
    .hero--button
    {
        background: linear-gradient(90deg, hsl(136, 65%, 51%), hsl(192, 70%, 51%));
        transition: .5s;
    }
    .hero--button:hover
    {
        transform: scale(1.05);
    }
</style>