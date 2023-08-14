<script lang="ts">
	import { onMount } from 'svelte';
	import WidgetWrapper from './UX/WidgetWrapper.svelte';
	//import { supabase } from '@c/API/supabase';
	import { logout } from '@c/API/appwrite/appwrite';
	import { log, notification } from '@c/API/storage';
	import * as ClientStorage from '@c/API/storage';
	import { cleanStores } from "nanostores";

	let mounted = false;

	const handleLogout = async () => {
		try {
			await logout();
			ClientStorage.locker('email', String(undefined));
			ClientStorage.locker('uuid', String(undefined));
			ClientStorage.locker('last', String(undefined));
            ClientStorage.locker('emailVerification',  String(undefined));
            ClientStorage.locker('phoneVerification',  String(undefined));
            ClientStorage.locker('phone', String(undefined));
			ClientStorage.locker('username', String(undefined));
			location.assign('/account/login');
			} catch (error) {
			if (error instanceof Error) {
				log(error.message);
				notification(error.message);
			}
		}
	};

	onMount(() => {
		mounted = true;
	});

	$: if (mounted) {
		handleLogout();
	}
</script>

<WidgetWrapper
	background="https://images.unsplash.com/photo-1530406472580-81dc39c4babe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1446&q=80">
	<selection class="flex flex-col justify-center items-center">
		<div
			class="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-orange-400" />
		<p class="py-5 text-lg gradient-text">Logging Out...</p>
	</selection>
</WidgetWrapper>
