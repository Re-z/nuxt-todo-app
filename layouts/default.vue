<template>
	<v-app>
		<app-header />
		<v-divider></v-divider>
		<v-content >
			<nuxt />
		</v-content>
	</v-app>
</template>

<script>
	import Header from "@/components/Header.vue";
	export default {
		components: {
			"app-header": Header
		}
	};
</script>
