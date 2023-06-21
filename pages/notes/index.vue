<script>
import Card from "@/components/notes/Card.vue";

export default {
	name: "notes",
	components: { Card },
	data() {
		return {
			isLoading: true,
			data: {},
			links: {},
		};
	},
	async mounted() {
		const config = useRuntimeConfig();
		let url = config.public.apiUrl + "api/v1/note";

		console.log("url", url);

		await fetch(url)
			.then((response) => response.json())
			.then(async (data) => {
				console.log(data);
				if (data.data) {
					this.data = data.data;
					this.links = data.links;
				}
				this.isLoading = false;
			})
			.catch((err) => {
				console.log(err);
				this.isLoading = false;
			});
	},
};

definePageMeta({
	path: "/",
});
</script>

<template>
	<div>
		<div class="container mx-auto">
			<div class="grid lg:grid-cols-2 gap-4">
				<!-- {{ isLoading ? "Loading..." : "" }} -->

				<div v-for="e of data" :key="e" :to="'/note/' + e.uuid">
					<Card :data="e" />
				</div>

			</div>
		</div>
	</div>
</template>
