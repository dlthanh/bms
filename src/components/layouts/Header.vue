<template>
    <header class="header container-fluid">
        <div class="header-wrapper w1120">
            <div class="header-logo">
                <router-link :to="{name: 'home'}">
                    <img src="../../assets/images/logo.svg" alt="">
                </router-link>
            </div>

            <ul class="header-nav">
                <li>
                    <router-link :to="'#'">What We Do?</router-link>
                </li>
                <li>
                    <router-link :to="'#'">Who Are We?</router-link>
                </li>
                <li>
                    <router-link :to="'#'">Come and Join!</router-link>
                </li>
                <li>
                    <router-link :to="'#'">Get In Touch!</router-link>
                </li>
            </ul>
        </div>
    </header>
</template>

<script>
export default {

}
</script>

<style>

</style>