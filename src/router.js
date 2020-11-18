'use strict';

import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '@/views/homepage.vue';
import CollagePage from '@/views/collagepage.vue';

Vue.use(Router);

const router = new Router({
	// mode: 'history',
	// base: process.env.BASE_URL,
	routes: [
	{
		path: '/',
		name: 'home',
		component: HomePage,
	},
	{
		path: '/climatecollage',
		name: 'collage',
		component: CollagePage,
	},
],
});

router.beforeEach((to, from, next) => {
	next();
});

export default router;
