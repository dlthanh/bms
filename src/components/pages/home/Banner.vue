<template>
    <div class="banner">
        <div class="banner-image swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="../../../assets/images/banner-1.jpg" alt="">
                </div>

                <div class="swiper-slide">
                    <img src="../../../assets/images/banner-1.jpg" alt="">
                </div>
            </div>
        </div>

        <div class="banner-content">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <p class="stroke">Visual</p>
                        <p class="shape">Upgrade & Caring</p>
                        <p class="description">Cải thiện hiệu quả về mặt hình ảnh bằng các định dạng mới - trending - sáng tạo nhưng không mất đi bản chất nhận diện thương hiệu của brand. Sản phẩm sinh ra dành cho những doanh nghiệp có nhu cầu cao về hình ảnh nhưng chưa xây dựng được đội production đủ tầm.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper';

export default {
    data() {
        return {}
    },
    mounted() {
        var home_banner = new Swiper('.banner-image')
    }
}
</script>

<style>

</style>