<script lang="ts" setup>
import { House, Menu } from 'lucide-vue-next'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { ref } from 'vue';
import { onMounted } from 'vue';
import { onUnmounted } from 'vue';
  
    interface MenuItem {
        label: string;
        href: string;
        onClick?: () => void;
    }

    interface Props {
        items: MenuItem[];
        homeRoute?: string;
    }

    const videreMenu = ref<boolean>(true);

    const handleRezise = () => {
        if (window.innerWidth <= 640) {
        videreMenu.value = false;
        } else {
        videreMenu.value = true;
        }
    }

    withDefaults(defineProps<Props>(), {
        homeRoute: '/'
    })

    onMounted(() => {
        handleRezise();
        window.addEventListener('resize', handleRezise);
    })

    onUnmounted(() => {
        window.removeEventListener('resize', handleRezise);
    })
</script>

<template>
    <div>
        <Toggle class="fixed top-2 right-4 bg-slate-500" @click="videreMenu = !videreMenu" >
          <Menu />
        </Toggle>

        <nav v-if="videreMenu" class="extra-nav flex flex-col sm:flex-row justify-between px-3">
            <RouterLink :to="homeRoute">
                <House class="icon-home" />
            </RouterLink>
            <NavigationMenu>
                <NavigationMenuList class="flex flex-col sm:flex-row">

                    <NavigationMenuItem v-for="item in items" :key="item.label">
                        <a 
                        :href="item.href" 
                        @click.prevent="item.onClick ? item.onClick() : null"
                        >
                            <NavigationMenuLink :class="[navigationMenuTriggerStyle(), 'text-md hover:bg-[#6A5ACD] hover:text-white transition-all']">
                                {{ item.label }}
                            </NavigationMenuLink>
                        </a>
                    </NavigationMenuItem>

                </NavigationMenuList>
            </NavigationMenu>
        </nav>

        
    </div>
</template>

<style>

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

</style>