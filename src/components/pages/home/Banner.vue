<template>
    <div class="banner">
        <div class="banner-iamge swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="../../../assets/images/banner-1.jpg" alt="">
                </div>

                <div class="swiper-slide">
                    <img src="../../../assets/images/banner-1.jpg" alt="">
                </div>
            </div>
        </div>

        <div class="banner-content swiper-container">
            <div class="swiper-wrapper">
                 <div class="swiper-slide">
                     abcd
                 </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    mounted() {
        var home_banner = new Swiper('.swiper-container')
    }
}
</script>

<style>

</style>