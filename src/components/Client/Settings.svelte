<script lang="ts" context="module">
    declare global {
        interface Window {
            Toastify: any;
			openpgp: any;
        }
    }

    declare var Toastify: any;
	declare var openpgp: any;
</script>

<script lang="ts">
	import { Textarea, Label, Input } from 'flowbite-svelte';

    import { onMount, onDestroy, createEventDispatcher } from 'svelte';
    import { appwriteFunctions } from "@c/API/appwrite/appwrite"; // Appwrite
	import { log, notification$, toast$, notification, tasker, kbve$ } from '@c/API/storage';

    import WidgetWrapper  from './UX/WidgetWrapper.svelte';

    //@ts-ignore
    const browser = import.meta.env.SSR === undefined ? true : !import.meta.env.SSR;

    const dispatch = createEventDispatcher();
    
    // [EXPORT]
    export const toast = ( message? : string, duration?: number) => {
		if(mounted)
		{
			new Toastify({
				text: message ?? $toast$,
				duration: duration ?? 3000,
				destination: "#",
				newWindow: false,
				close: true,
				gravity: "top", // `top` or `bottom`
				position: "right", // `left`, `center` or `right`
				stopOnFocus: true, // Prevents dismissing of toast on hover
				style: {
					background: "linear-gradient(to right, #FF8A4C, #8DA2FB)",
				},
				onClick: function(){} // Callback after click
				}).showToast();
		}
	}

    export const dismiss = async () => {
		notification('');
	};

    // [VAR]

    let mounted = false;
    let loading = false;
    let skeleton: any;
    let bio = '';
    let pgp = '';
	let username = '';
	let uuid = '';
	let email = '';
	let phone = '';
	let op = 1;

	//	[UI]

	let textAreaProps = {
		id: 'pgp',
		name: 'pgp',
		label: 'Your message',
		rows: 4,
		placeholder: 'Please paste your public key here... Make sure its your PUBLIC key!'
	};

    // []
	
	const handleSettings = async () => {

		console.log(`Submitting PGP Key: ${pgp}`);
		
	};

	const handlePGP = async () => {
		loading = true;
		op = 0.4
		toast("Verifying PGP", 5000);
		try { 
			 	const publicKey = await openpgp.readKey({ armoredKey: pgp})
				toast("Adding Public Key to API", 5000)
				const _FData = {pgp: pgp}
			 	const _F = await appwriteFunctions.createExecution('settings', JSON.stringify(_FData), false, '/pgp', 'POST');

				const { status, errors } = _F;

				if(errors) {
					toast(`Error: ${errors}`, 5000)
				}

				if(status === "completed") 
				{
					toast(`Updated! Reloading!`, 5000);
				}

		}
		catch (e) {
			toast(`Error: ${e.message}`, 5000);
		}
		op = 1
		loading = false;

	}

    // [CORE]

    onMount( () => {
		if(browser)
		{
			console.log('browser')
		}
        dispatch('mount');
        mounted = true;
    })
    
    onDestroy( () => {

    })

    $: if(mounted) {
		username = $kbve$.username;
		uuid = $kbve$.uuid;
		email = $kbve$.email;
		phone = $kbve$.phone;
        skeleton = window.document.getElementById('skeleton') as HTMLElement;
        if(skeleton) skeleton.remove();
		toast("Welcome to the Account Settings");
        }


</script>

<svelte:head>
	{#if mounted && !window?.openpgp}
		<script src={`https://unpkg.com/openpgp@5.10.2/dist/openpgp.min.js`} async defer></script>
	{/if}
</svelte:head>


<WidgetWrapper
	background="https://images.unsplash.com/photo-1609097828576-3b620e86039e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80">
	<section class="">
                    <div class="min-h-[100px]">
						<div class="w-full px-3 py-16 rounded-3xl sm:px-12 md:px-16 xl:col-span-2 bg-default bg-cover bg-blend-overlay" style="background-image: url('https://kbve.com/assets/img/curved-images/wave.jpg')">
							<h1
									class="text-xl font-bold leading-tight tracking-tight gradient-text md:text-2xl">
									Account Settings
							</h1>
						</div>
                        {#if $notification$}
							
								<div
									id="toast-default"
									class="flex items-center w-full max-w-xs p-4 bg-offset rounded-lg shadow "
									role="alert">
									<div
										class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg">
										<svg
											class="w-4 h-4"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 18 20">
											<path
												stroke="currentColor"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M15.147 15.085a7.159 7.159 0 0 1-6.189 3.307A6.713 6.713 0 0 1 3.1 15.444c-2.679-4.513.287-8.737.888-9.548A4.373 4.373 0 0 0 5 1.608c1.287.953 6.445 3.218 5.537 10.5 1.5-1.122 2.706-3.01 2.853-6.14 1.433 1.049 3.993 5.395 1.757 9.117Z" />
										</svg>
										<span class="sr-only">Fire icon</span>
									</div>
									<div class="ml-3 text-sm font-normal capitalize">
										{$notification$}
									</div>
									<button
										type="button"
										class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
										data-dismiss-target="#toast-default"
										aria-label="Close"
										on:click={dismiss}>
										<span class="sr-only">Close</span>
										<svg
											class="w-3 h-3"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 14 14">
											<path
												stroke="currentColor"
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
										</svg>
									</button>
								</div>
							
						{:else}
							<div>

							</div>
						{/if}
                    </div>
    </section>
	<section class="p-6 text-gray-50" style="opacity: {op};">
		<form  action="" class="container flex flex-col mx-auto space-y-12" on:submit|preventDefault={handleSettings}>
			<fieldset class="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-900/60">
				<div class="space-y-2 col-span-full lg:col-span-1">
					<p class="font-medium">Account Preferences</p>
					<p class="text-xs">The account preferences section allows users to customize their experience by managing settings related to privacy, notifications, and theme, enabling a personalized interaction with the software.</p>
				</div>
				<div class="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
					<div class="col-span-full sm:col-span-3">
						<label for="username" class="text-sm">Username</label>
						<input id="username" type="text" class="w-full rounded-md focus:ring bg-gray-500 border-gray-700 text-gray-900 cursor-not-allowed" bind:value={username} disabled>
					</div>
					<div class="col-span-full sm:col-span-3">
						<label for="uuid" class="text-sm">UUID</label>
						<input id="uuid" type="text" class="w-full rounded-md focus:ring bg-gray-500 border-gray-700 text-gray-900 cursor-not-allowed" bind:value={uuid} disabled>
					</div>
					<div class="col-span-full sm:col-span-3">
						<label for="email" class="text-sm">Email</label>
						<input id="email" type="email"  class="w-full rounded-md focus:ring bg-gray-500  border-gray-700 text-gray-900 cursor-not-allowed" bind:value={email} disabled>
					</div>
					<div class="col-span-full sm:col-span-3">
						<label for="phone" class="text-sm">Phone</label>
						<input id="phone" type="text"  class="w-full rounded-md focus:ring bg-gray-500 border-gray-700 text-gray-900 cursor-not-allowed" bind:value={phone} disabled>
					</div>

				</div>
			</fieldset>
			<fieldset class="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-900">
				<div class="space-y-2 col-span-full lg:col-span-1">
					<p class="font-medium">Profile</p>
					<p class="text-xs">The account profile serves as a public-facing overview, displaying user-provided information such as username, bio, and shared content, allowing other users to learn more about the individual and interact with them.</p>
				</div>
				<div class="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
					<div class="col-span-full sm:col-span-3">
						<label for="username" class="text-sm">Username</label>
						<input id="username" type="text" class="w-full  rounded-md focus:ring  bg-gray-500 border-gray-700 text-gray-900 cursor-not-allowed" bind:value={username} disabled>
					</div>
					<div class="col-span-full sm:col-span-3">
						<label for="uuid" class="text-sm">UUID</label>
						<input id="uuid" type="text"  class="w-full rounded-md focus:ring bg-gray-500 border-gray-700 text-gray-900 cursor-not-allowed"  bind:value={uuid} disabled>
					</div>
					<div class="col-span-full">
						<label for="bio" class="text-sm">Bio</label>
						<textarea id="bio" class="w-full rounded-md focus:ring  bg-gray-500 border-gray-700 text-gray-900 cursor-not-allowed" bind:value={bio} disabled></textarea>
					</div>
					<div class="col-span-full">
						<Label class="pb-2 text-sm text-white-50">PGP</Label>
						<Textarea {...textAreaProps} bind:value={pgp} />
						<div class="flex items-center gap-1">
							<button on:click={handlePGP} type="button" class="relative px-5 py-3 text-sm overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group" disabled={loading}>
								<span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
								<span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
								<span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
								<span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
								<span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
								<span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Update PGP</span>
							</button>
						</div>
					</div>
					
				</div>
			</fieldset>
			
		</form>
	</section>
</WidgetWrapper>

