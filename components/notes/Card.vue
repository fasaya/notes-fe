<template>
	<div class="w-full max-w-full min-w-full">
		<div
			class="bg-white rounded-md p-4 m-2 flex flex-col justify-between leading-normal shadow-md"
		>
			<div class="mb-8">
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
				<div class="text-stone font-bold text-xl mb-2">
					{{ data.title }}
				</div>
				<p class="text-gray-500 text-base">
                    {{ data.title }}
					<!-- Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Voluptatibus quia, nulla! Maiores et perferendis eaque,
					exercitationem praesentium nihil. -->
				</p>
			</div>
			<div class="flex items-center">
				<div class="text-sm">
					<!-- <p class="text-gray-900 leading-none">Jonathan Reinink</p> -->
					<p class="text-gray-600">Aug 18</p>
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
console.log('props', props.data);
</script>
