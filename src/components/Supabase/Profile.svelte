<script lang="ts" context="module">
	declare global {
		interface Window {}
	}
</script>

<script lang="ts">
	//  Svelte
	import { onMount, onDestroy, createEventDispatcher } from 'svelte';
	import WidgetWrapper from './UX/WidgetWrapper.svelte';
	//  Supabase
	import { supabase, supabase_user$, getProfile } from '@c/API/supabase';
	import { username$, email$, uuid$, avatar$ } from '@c/API/storage';

	let mounted = false;
	let profileLoad = false;
	let skeleton: any;

	const dispatch = createEventDispatcher();

	const userData = async () => {
		getProfile({ __cache: false });
		profileLoad = true;
	};

	onMount(() => {
		mounted = true;
	});

	onDestroy(() => {});

	$: if (mounted && !profileLoad) {
		userData();
		skeleton = window.document.getElementById('skeleton') as HTMLElement;
		if (skeleton) skeleton.remove();
	}
</script>

<WidgetWrapper
	background="https://images.unsplash.com/photo-1530406472580-81dc39c4babe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1446&q=80">
	<selection>
		<div class="p-6 sm:p-12">
			<div
				class="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
				<img
					src={$avatar$}
					alt="User Avatar"
					class="self-center flex-shrink-0 w-48 h-48 border rounded-full md:justify-self-start bg-gray-500 border-gray-700" />

				<div class="flex flex-col">
					<h4 class="text-lg font-semibold text-center md:text-left">
						{$username$}
					</h4>
					<div
						class="flex row gap-2 items-center bg-gray-500 p-1 px-2 rounded-lg border border-[#1c033c] m-2">
						<p class="text-sm">
							{$uuid$}
						</p>
					</div>

					<div class="flex flex-col items-start gap-2 ">
						{$email$}
					</div>
				</div>
			</div>
			<div class="flex justify-center pt-4 space-x-4 align-center">
				<a
					rel="noopener noreferrer"
					href="/#"
					aria-label="GitHub"
					class="p-2 rounded-md text-gray-100 hover:text-violet-400">
					<svg
						viewBox="0 0 496 512"
						xmlns="http://www.w3.org/2000/svg"
						class="w-4 h-4 fill-current">
						<title>Github</title>
						<path
							d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
					</svg>
				</a>
			</div>
		</div>
	</selection>
</WidgetWrapper>
