<script>
import { ref } from "vue";

import Card from "@/components/notes/Card.vue";
import FormModal from "@/components/notes/FormModal.vue";

export default {
	name: "notes",
	components: { Card, FormModal },
	data() {
		return {
			isLoading: true,
			data: {},
			dataSelected: ref({}),
			links: {},
		};
	},
	async mounted() {
		const config = useRuntimeConfig();
		let url = config.public.apiUrl + "api/v1/note";

		// console.log("url", url);

		this.getNotes(url);
	},
	methods: {
		getNotes: async function (url) {
			await fetch(url)
				.then((response) => response.json())
				.then(async (data) => {
					// console.log(data);
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
		onCloseModal(value) {
			this.showModal = value;
			this.setSelectedData({});
		},
		setSelectedData(value) {
			this.dataSelected = value;
			console.log("setSelectedData", this.dataSelected);
		},
	},
	setup() {
		const showModal = ref(false);
		return {
			showModal,
		};
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
					<Card
						:data="e"
						@click="
							showModal = !showModal;
							setSelectedData(e);
						"
					/>
				</div>
			</div>

			<p>{{ links.next }}</p>
		</div>
	</div>

	<FormModal :show="showModal" @closed="onCloseModal">
		<form>
			<div class="mb-3">
				<input
					id="title"
					type="text"
					placeholder="Title"
					:value="dataSelected.title"
					class="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
				/>
			</div>
			<div class="mb-3">
				<textarea
					id="body"
					row="3"
					placeholder="Description"
					:value="dataSelected.body"
					class="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
				></textarea>
			</div>
		</form>
	</FormModal>
</template>
