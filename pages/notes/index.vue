<script setup>
import Card from '@/components/notes/Card.vue'

definePageMeta({
	path: '/'
});
</script>

<template>
	<div>
		<div class="container mx-auto">
			<div class="grid lg:grid-cols-2 gap-4">
				<Card data=""/>
				<Card/>
				<Card/>
				<Card/>
				<Card/>
				<Card/>
			</div>
		</div>
	</div>
</template>