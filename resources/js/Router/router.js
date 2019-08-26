import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from "../components/login/Login";
import Signup from "../components/login/Signup";
import Forum from "../components/forum/Forum";
import Logout from "../components/login/Logout";
import Read from "../components/forum/Read";
import Create from "../components/forum/Create";
import Category from "../components/category/Create";
import Parallex from "../components/Parallex";

Vue.use(VueRouter);

const routes = [
    {path:'/',component:Parallex},
    {path:'/login',component:Login},
    {path:'/signup',component:Signup},
    {path:'/forum',component:Forum,name:'forum'},
    {path:'/category',component:Category,name:'category'},
    {path:'/ask',component:Create},
    {path:'/logout',component:Logout},
    {path:'/question/:id',component:Read,name:'read'},

];

const router = new VueRouter({
    routes,
    mode:'history'
});

export default router;
