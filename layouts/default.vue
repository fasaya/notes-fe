<template>
	<div class="bg-light-stone pb-5">
		<nav
			class="relative flex flex-wrap items-center justify-between px-3 py-5 bg-light-stone"
		>
			<div
				class="container px-4 mx-auto flex flex-wrap items-center justify-between"
			>
				<div
					class="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start"
				>
					<a
						class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-stone"
						href="#pablo"
					>
						Noteez
					</a>
					<!-- <button
						class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
						type="button"
						v-on:click="toggleNavbar()"
					>
						<i class="fas fa-bars"></i> open
					</button> -->
				</div>
				<div class="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-end">
					<input
						type="text"
						placeholder="Search"
						class="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full pr-10"
					/>
					<span
						class="z-10 h-full leading-snug font-normal text-center text-slate-300 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3"
					>
						<i class="fas fa-user"></i>
					</span>
				</div>
				<!-- <div
					v-bind:class="{ hidden: !showMenu, flex: showMenu }"
					class="lg:flex lg:flex-grow items-center"
				>
					<ul class="flex flex-col lg:flex-row list-none ml-auto">
						<li class="nav-item">
							<input type="text" placeholder="Search" name="" id="" class="px-3 py-2 flex items-center text-xs uppercase leading-snug text-white opacity-75 hover:opacity-100 rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full">
						</li>
						<li class="nav-item">
							<a
								class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
								href="#pablo"
							>
								<i
									class="fab fa-twitter text-lg leading-lg text-white opacity-75"
								/><span class="ml-2">Tweet</span>
							</a>
						</li>
						<li class="nav-item">
							<a
								class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
								href="#pablo"
							>
								<i
									class="fab fa-pinterest text-lg leading-lg text-white opacity-75"
								/><span class="ml-2">Pin</span>
							</a>
						</li>
					</ul>
				</div> -->
			</div>
		</nav>

		<!-- <p>ini layout default</p> -->
		<slot />
	</div>
</template>

<style scoped>
html,
body {
	height: 100vh;
}
</style>

<script>
export default {
	name: "default-navbar",
	data() {
		return {
			showMenu: false,
		};
	},
	methods: {
		toggleNavbar: function () {
			this.showMenu = !this.showMenu;
		},
	},
};
</script>
