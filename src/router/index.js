import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/ListAnimals.vue";
import Add from "@/components/ReceiveShipment.vue";
import Test from "@/components/HelloWorld.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/add',
    name: 'add',
    component: Add
  },
  {
    path: '/test',
    name: 'test',
    component: Test
  }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;