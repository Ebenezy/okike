<template>
  <div class="welcome-page">
      <div class="simpleslide100">
          <div class="simpleslide100-item bg-img1" style="background-image: url('./../assets/images/okike-abacha.jpg');"></div>
          <div class="simpleslide100-item bg-img1" style="background-image: url('./../assets/images/okike-boli.jpg');"></div>
          <div class="simpleslide100-item bg-img1" style="background-image: url('./../assets/images/okike_palmwine.jpg');"></div>
      </div>

      <div class="flex-col-c-sb size1 overlay1 p-t-20 p-b-40 okike-home">
          <div></div>
          <div class="flex-col-c-m">
              <div class="okike-logo">
                  <img src="./../assets/images/okike-logo-white.svg">
              </div>
              <div class="p-t-50">
                  <h2>
                      <span class="typer" id="main" data-words="#AbachaInLagos,#BoliInLagos,#PalmWineInLagos" data-colors="white" data-delay="100" data-deleteDelay="3000"></span>
                      <span class="cursor" data-owner="main"></span>
                  </h2>
              </div>
          </div>

          <div class="  w-full ">
              <div class="text-center press">
                  <router-link to="Home"><img src="./../assets/images/btn.svg"></router-link>>
              </div>
          </div>
      </div>
  </div>
</template>
