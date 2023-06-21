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
	<div class="flex justify-center">
		<div class="container mx-2">
			
			<div>
				<div
					class="relative flex w-full flex-wrap items-stretch mb-3 lg:w-2/3 mx-auto px-2 pt-3 lg:pt-1"
				>
					<input
						type="text"
						placeholder="+ create new notes"
						class="px-3 py-3 placeholder-medium-stone text-slate-600 relative bg-light-stone-2 rounded text-base border-0 outline-none focus:outline-none focus:ring w-full pl-10 hover:cursor-pointer"
					/>
				</div>
			</div>

			<div class="grid lg:grid-cols-2 gap-4">
				<!-- {{ isLoading ? "Loading..." : "" }} -->

				<div v-for="e of data" :key="e" :to="'/note/' + e.uuid">
					<Card :data="e" />
				</div>
			</div>
		</div>
	</div>
</template>
