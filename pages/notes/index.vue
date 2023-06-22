<script>
import { ref } from "vue";
import axios from "axios";

import Card from "@/components/notes/Card.vue";
import FormModal from "@/components/notes/FormModal.vue";
// import Pagination from "@/components/notes/Pagination.vue";

export default {
	name: "notes",
	components: { Card, FormModal },
	data() {
		return {
			isLoading: true,
			data: {},
			dataSelected: ref({}),
			links: {},
			formSubmitted: false,
		};
	},
	async mounted() {
		// console.log("url", url);

		this.getNotes();
	},
	methods: {
		getNotes: async function (url = null) {
			this.isLoading = false;
			this.data = {};
			this.links = {};

			if (!url) {
				const config = useRuntimeConfig();
				url = config.public.apiUrl + "api/v1/note";
			}

			await fetch(url)
				.then((response) => response.json())
				.then(async (data) => {
					// console.log(data.meta.links);
					if (data.data) {
						this.data = data.data;
						this.links = data.meta.links;
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
			// console.log("setSelectedData", this.dataSelected);
		},
		submitForm() {
			const config = useRuntimeConfig();
			let url =
				config.public.apiUrl +
				"api/v1/note" +
				(this.dataSelected.uuid ? "/" + this.dataSelected.uuid : "");

			this.formSubmitted = true;

			// console.log("posturl", url);
			// console.log("submitEvent", this.$refs.title.value);

			let formData = {
				title: this.$refs.title.value,
				body: this.$refs.body.value,
			};
			// console.log("formData", formData);

			if (this.dataSelected.uuid) {
				axios
					.put(url, formData)
					.then((res) => {
						this.onCloseModal(false);
						// console.log("res", res.data);
						this.getNotes();
					})
					.catch((err) => {
						console.log(err);
					})
					.finally(() => {
						//Perform action in always
					});
			} else {
				axios
					.post(url, formData)
					.then((res) => {
						this.onCloseModal(false);
						// console.log("res", res.data);
						this.getNotes();
					})
					.catch((err) => {
						console.log(err);
					})
					.finally(() => {
						//Perform action in always
					});
			}

			this.formSubmitted = false;
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
						@click="
							showModal = !showModal;
							setSelectedData({});
						"
						readonly
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

			<!-- Pagination: start  -->
			<div class="py-2">
				<nav class="block">
					<ul class="flex pl-0 rounded list-none flex-wrap">
						<div v-for="e of links" :key="e">
							<li v-if="e.url">
								<a
									class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-neutral-500 cursor-pointer"
									:class="`${e.active ? 'text-white bg-neutral-500' : 'bg-white text-neutral-500'}`"
									@click="this.getNotes(e.url)"
								>
									<span v-html="e.label"></span>
								</a>
							</li>
						</div>
					</ul>
				</nav>
			</div>
			<!-- Pagination: end  -->

		</div>
	</div>

	<FormModal :show="showModal" @closed="onCloseModal">
		<form @submit.prevent="submitForm">
			<div class="mb-3">
				<input
					ref="title"
					type="text"
					placeholder="Title"
					:value="dataSelected.title"
					class="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
				/>
			</div>
			<div class="mb-3">
				<textarea
					ref="body"
					row="10"
					placeholder="Description"
					:value="dataSelected.body"
					class="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
				></textarea>
			</div>
			<div class="mb-3">
				<button
					class="bg-zinc-500 text-white active:bg-zinc-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
					type="submit"
				>
					{{ dataSelected.uuid ? "Update" : "Create" }}
				</button>
			</div>
		</form>
	</FormModal>
</template>
