<template>
	<div class="w-full max-w-full min-w-full cursor-pointer">
		<div
			class="bg-white rounded-md p-4 m-2 flex flex-col justify-between leading-normal shadow-md min-h-full"
		>
			<div class="mb-2" v-if="data.body || data.title">
				<!-- <p class="text-sm text-gray-600 flex items-center">
					<svg
						class="fill-current text-gray-500 w-3 h-3 mr-2"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
					>
						<path
							d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"
						/>
					</svg>
					Members only
				</p> -->
				<div
					class="text-stone font-bold text-xl mb-2"
					v-if="data.title"
				>
					{{ data.title }}
				</div>
				<p id="note-form-body" class="text-gray-500 text-base" v-if="data.body">
					{{ truncate(data.body, 150) }}
				</p>
			</div>
			<div class="flex items-center">
				<div class="text-xs">
					<!-- <p class="text-gray-900 leading-none">Jonathan Reinink</p> -->
					<p class="text-gray-600">{{ data.created_at }}</p>
				</div>
			</div>
			<!-- <div class="pt-4 pb-2">
				<span
					class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
					>#photography</span
				>
				<span
					class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
					>#travel</span
				>
				<span
					class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
					>#winter</span
				>
			</div> -->
		</div>
	</div>
</template>

<script setup>
const props = defineProps(["data"]);
// console.log('props', props.data);
function truncate(str, n){
  return (str.length > n) ? str.slice(0, n-1) + '...' : str;
};
</script>

<style>
#note-form-body {
	/* white-space: wrap; */
    overflow: hidden;
	text-overflow: ellipsis
}
</style>