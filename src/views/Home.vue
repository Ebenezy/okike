<template>
    <div class="homepage">
        <div class="container">
            <div class="head-section">
                <div class="hotline">
                    <div class="call-img">
                        <a href="tel:09012300000"><img src="./../assets/images/call.svg"></a>
                    </div>
                    <div class="hotlin">
                        <p>Hotline</p>
                        <a href="tel:09012300000">0901 230 0000</a>
                    </div>
                </div>
                <div class="logo">
                    <router-link to="/"><img src="./../assets/images/okike-logo-color.svg"></router-link>
                </div>
                <div class="cart">
                    <div class="search-img">
                        <div><img src="./../assets/images/search.svg" class="search-here" id="show"></div>
                        <div class="menu2" style="display: none;">
                            <input type="text" name="text" placeholder="Search" class="enter-search" >
                            <button class="send-search-btn">Search</button>
                        </div>
                    </div>
                    <div class="cart-img">
                        <img src="./../assets/images/cart.svg">
                    </div>
                </div>
            </div>
            <!-- navbar	-->
            <div class="bg-white nav-bar2">
                <nav class="navbar navbar-expand-lg px-0">
                    <router-link to="/" class="navbar-brand">
                        <img class="logo-okike" src="./../assets/images/okike-logo-color.svg" alt="logo">
                    </router-link>
                    <button class="navbar-toggler text-dark" data-toggle="collapse" data-target="#navbarSupportedContent">
                        <span class="fa fa-bars color-pink"></span>
                    </button>

                    <div class="collapse navbar-collapse bg-menu" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto menu orange menu-color">
                            <li class="nav-item ">
                                <a class="nav-link" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active1" href="#"> Food Menu</a>
                            </li>
                            <li class="nav-item ">
                                <a class="nav-link " href="#">Okike Select</a>
                            </li>
                            <li class="nav-item ">
                                <a class="nav-link " href="#">About Us</a>
                            </li>
                            <li class="nav-item ">
                                <a class="nav-link" href="#">Contact Us</a>
                            </li>
                        </ul>

                    </div>
                    <div class="navbar-text small text-truncate mt-1 w-50 text-right order-1 order-md-last"></div>
                </nav>
            </div>
            <!-- navbar	end-->

            <div class="row m-t-30">
                <div class="col-md-8">
                    <div class="okike-slider">
                        <div id="demo" class="carousel slide" data-ride="carousel">
                            <ul class="carousel-indicators">
                                <li data-target="#demo" data-slide-to="0" class="active"></li>
                                <li data-target="#demo" data-slide-to="1"></li>
                                <li data-target="#demo" data-slide-to="2"></li>
                            </ul>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div class="show-txt">
                                        <h1 class="show-txt1">Abacha <br>Select</h1>
                                        <p class="show-txt2">Mouth Watering <br>Deliciousness</p>
                                        <button class="order-now-btn">ORDER NOW</button>
                                    </div>
                                    <img src="./../assets/images/okike-abacha3.jpg" class="shows" alt="Okike" width="100%" height="100%">

                                </div>
                                <div class="carousel-item">
                                    <div class="show-txt">
                                        <h1 class="show-txt1">Boli <br>Select</h1>
                                        <p class="show-txt2">Mouth Watering <br>Deliciousness</p>
                                        <button class="order-now-btn">ORDER NOW</button>
                                    </div>
                                    <img src="./../assets/images/boli-fish3.jpg" class="shows" alt="Okike" width="100%" height="100%">

                                </div>
                                <div class="carousel-item">
                                    <div class="show-txt">
                                        <h1 class="show-txt1">Palm Wine <br>Select</h1>
                                        <p class="show-txt2">Mouth Watering <br>Deliciousness</p>
                                        <button class="order-now-btn">ORDER NOW</button>
                                    </div>
                                    <img src="./../assets/images/palmwine3.jpg" class="shows" alt="Okike" width="100%" height="100%">

                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#demo" data-slide="prev">
                                <span class="carousel-control-prev-icon"></span>
                            </a>
                            <a class="carousel-control-next" href="#demo" data-slide="next">
                                <span class="carousel-control-next-icon"></span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="okike-right p-b-29">
                        <div class="boli-box">
                            <h1 class="boli-title">Boli <br>Select</h1>
                            <p class="boli-text">Mouth Watering <br>Deliciousness</p>
                            <button class="order-now-btn">ORDER NOW</button>
                        </div>
                        <img src="./../assets/images/boli-fish3.jpg">
                    </div>
                    <div class="okike-right2">
                        <div class="palmwine-box">
                            <h1 class="boli-title">Palm Wine <br>Select</h1>
                            <p class="boli-text">Mouth Watering <br>Deliciousness</p>
                            <button class="order-now-btn">ORDER NOW</button>
                        </div>
                        <img src="./../assets/images/palmwine3.jpg">
                    </div>
                </div>
            </div>
            <div class="eat-today text-center">
                <h2 class="">What do you want to eat today?</h2>
                <div class="category">
                    <div class="row">
                        <div class="col-md-3 "></div>
                        <div class="col-md-3 ">
                            <div class="okike-flex">
                                <div class="abacha">
                                    <img src="./../assets/images/abacha.svg">
                                    <p>Abacha</p>
                                </div>
                                <div class="abacha">
                                    <img src="./../assets/images/boli.svg">
                                    <p>Boli</p>
                                </div>
                                <div class="abacha">
                                    <img src="./../assets/images/palmwine.svg">
                                    <p>Palm Wine</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 ">
                            <div class="okike-flex">
                                <div class="abacha">
                                    <img src="./../assets/images/achicha.svg">
                                    <p>Achicha</p>
                                </div>
                                <div class="abacha">
                                    <img src="./../assets/images/okpa.svg">
                                    <p>Okpa</p>
                                </div>
                                <div class="abacha">
                                    <img src="./../assets/images/fish.svg">
                                    <p>Fish</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 "></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  <!--<div class="home">-->
    <!--<img alt="Vue logo" src="../assets/logo.png">-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <!--</div>-->
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld
  }
}
</script>
