<script lang="ts" setup>
  import { House } from 'lucide-vue-next'
  import {
        NavigationMenu,
        NavigationMenuItem,
        NavigationMenuLink,
        NavigationMenuList,
        navigationMenuTriggerStyle,
        } from '@/components/ui/navigation-menu'
  import CarrusImaginum from '@/components/ui/CarrusImaginum.vue'
import { scrollToSection } from '@/utils/scrollToSection';

  

  const photos = ["justice", "arkham", "superman", "varios", "villana", "villano", "grupo", "robin", "anne", "joker", "resplandor", "cat", "gafas", "league", "fondoVerde"];

</script>

<template>
    <div class="batman">
        <nav class="extra-nav flex flex-col sm:flex-row justify-between px-3">
            <RouterLink to="/">
                <House class="icon-home" />
            </RouterLink>
            <NavigationMenu>
                <NavigationMenuList class="flex flex-col sm:flex-row">

                    <NavigationMenuItem>
                        <a href="#" @click.prevent="scrollToSection('#')">
                            <NavigationMenuLink :class="[navigationMenuTriggerStyle(), 'text-md hover:bg-[#6A5ACD] hover:text-white transition-all']">
                                Portada
                            </NavigationMenuLink>
                        </a>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <a href="#" @click.prevent="scrollToSection('#vehiculis')">
                            <NavigationMenuLink :class="[navigationMenuTriggerStyle(), 'text-md hover:bg-[#6A5ACD] hover:text-white transition-all']">
                                Vehículos
                            </NavigationMenuLink>
                        </a>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <a href="#" @click.prevent="scrollToSection('#videre')">
                            <NavigationMenuLink :class="[navigationMenuTriggerStyle(), 'text-md hover:bg-[#6A5ACD] hover:text-white transition-all']">
                                Imágenes
                            </NavigationMenuLink>
                        </a>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <a href="#" @click.prevent="scrollToSection('#contactus')">
                            <NavigationMenuLink :class="[navigationMenuTriggerStyle(), 'text-md hover:bg-[#6A5ACD] hover:text-white transition-all']">
                                Contacto
                            </NavigationMenuLink>
                        </a>
                    </NavigationMenuItem>

                </NavigationMenuList>
            </NavigationMenu>
        </nav>

        <header class="titulus">
            <h1>Batman</h1>
            <div id="titulus-batman" class="titulus-img"></div>
            <p>Él puede tomar la decisión que nadie más puede, la decisión correcta</p>
        </header>

        <section id="vehiculis">
            <div class="vehiculis-arca">
                <div class="item unus">
                    <div class="notitia">
                    <h2>Avión</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula vulputate elit eget fermentum. Ut laoreet ante lacus. Quisque ut tincidunt metus. Curabitur congue, arcu nec tempus sodales, neque sem ultrices mauris, eu tincidunt nibh nibh eu massa. Aenean rhoncus quis nibh ac facilisis.</p>
                    <small>Fabricado en 2005</small>
                    </div>
                    <img src="/imagines/batman/avion.jpg"/>
                </div>

                <div class="item duo">
                    <div class="notitia">
                    <h2>Moto</h2>
                    <p>Nulla aliquip cupidatat voluptate veniam nostrud aliquip sit enim officia. Sit eu pariatur officia qui dolor adipisicing cupidatat. Sit consectetur et eu ut esse laboris nulla.</p>
                    <small>Fabricado en 2006</small>
                    </div>
                    <img src="/imagines/batman/moto.jpg"/>
                </div>
                
                <div class="item tribus">
                    <div class="notitia">
                    <h2>Coche</h2>
                    <p>Irure adipisicing est minim eu ad dolor. Eu ea commodo pariatur ut occaecat in cupidatat reprehenderit ut laborum duis. Sunt minim ex fugiat reprehenderit. Lorem consectetur reprehenderit commodo non</p>
                    <small>Fabricado en 2007</small>
                    </div>
                    <img src="/imagines/batman/car.jpg"/>
                </div>
            </div>

            <div class="vehiculis-titulus">
                <h1>Vehículos de Batman</h1>
            </div>
        </section>

        <section id="videre" class="bg-gray-900 w-full flex justify-center items-center min-h-[60vh] lg:min-h-[95vh]">
          <CarrusImaginum
          basePath="/imagines/batman" 
          :photos="photos"
          :autoplayDelay="2000"
          />
        </section>
    </div>
</template>

<style>
.batman {
    font-family: Arial, Helvetica, sans-serif;
}

.icon-home {
  color: slateblue;
  width: 3rem;
  height: 3rem;
}

.icon-home:hover {
  color: white ;
  background-color: slateblue ;
  width: 4rem;
  height: 4rem;
}

.extra-nav {
  background-color: white;
  opacity: 0.7;
  box-shadow: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  width: 11rem;
  border-radius: 0 0 1rem 0;
  z-index: 1;
}

@media (min-width: 640px){
  .extra-nav {
    width: 100%;
    border-radius: 0;
    opacity: 1;
    left: 0;
  }
}

.titulus-img {
  background-size: 100% 100%;
  background-position: center center;
  background-image: url("/imagines/batman/batman.jpg");
  min-height: 100vh;
}

.titulus-img:hover {
  background-size: 115% 115%;
}

.titulus > h1 {
  position: absolute;
  top: 63%;
  width: 100%;
  text-align: center;
  font-size: 5rem; 
  color: white;
  pointer-events:none; 
  font-family: batman;
}

.titulus > p {
  position: absolute;
  top: 36%;
  width: 100%;
  text-align: center;
  font-size: 2rem;
  color: white;
  pointer-events:none;
  display: none;
  font-family: batman;
}

@media (min-width: 768px) {
    .titulus > p {
        display: block;
    }
}

#vehiculis {
  max-width: 510px;
  margin: 0 auto;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
}

.vehiculis-arca {
  order: 1;
  display: flex;
  flex-direction: column;
}

.vehiculis-titulus {
  height: 5.5rem; /* 88px */
  font-size: 2rem;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item {
  padding: 1.5rem 0;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.item > img {
    width: 450px;
}

.unus {
  background-color: rgba(220, 220, 220, 0.2) ; 
  order: 2;
}

.duo {
  background-color: rgba(220, 220, 220, 0.8);
}

.tribus {
  background-color: rgba(220, 220, 220, 0.8);
  order: 2;
}

.notitia {
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
 
.notitia > small {
  font-weight: bold;
  padding: 1rem;
}
 
.notitia > h2 {
 font-size: 1.7rem; 
 font-weight: 600;
 color: rgba(0, 0, 0, 0.7);
 padding-bottom: 1rem;
} 

@media (min-width: 640px) {
  #vehiculis {
    max-width: 576px;
  }
}

@media (min-width: 768px) {
  #vehiculis {
    max-width: 900px;
  }

  .item {
    flex-direction: row;
    height: 320px;
  }

  .notitia {
    width: 40%;
  }

  .unus > img {
    order: -1;
  }
}

@media (min-width: 1024px) {
  #vehiculis {
    max-width: 1280px;
  }
  
  .item {
    flex-direction: column;
    height: 560px;
  }

  .vehiculis-arca {
    flex-direction: row;
  }

  .notitia {
    width: 90%;
  }
}

</style>