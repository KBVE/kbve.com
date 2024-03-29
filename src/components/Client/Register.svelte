<script lang="ts" context="module">
	declare global {
		interface Window {
			sitekey: string;
			hcaptchaOnLoad: Function;
			onSuccess: Function;
			onError: Function;
			onClose: Function;
			onExpired: Function;
			hcaptcha: any;
			Toastify: any;
		}
	}

	declare var hcaptcha: any;
	declare var Toastify: any;

	export enum CaptchaTheme {
		DARK = 'dark',
		LIGHT = 'light',
	}
	//
</script>

<script lang="ts">
	import { onMount, onDestroy, createEventDispatcher } from 'svelte';
	import { appwriteFunctions } from '@c/API/appwrite/appwrite';
	import { log, notification$, toast$, notification, tasker } from '@c/API/storage';
	import * as kbve from '@c/kbve';

	import WidgetWrapper from './UX/WidgetWrapper.svelte';

	//@ts-ignore
	const browser = import.meta.env.SSR === undefined ? true : !import.meta.env.SSR;

	const dispatch = createEventDispatcher();

	export let sitekey: string = kbve.hcaptcha_site_key ;
	export let apihost: string = kbve.hcaptcha_api;
	export let hl: string = '';
	export let reCaptchaCompat: boolean = false;
	export let theme: CaptchaTheme = CaptchaTheme.LIGHT;
	export let size: 'normal' | 'compact' | 'invisible' = 'compact';

	export const reset = () => {
		if (mounted && loaded && widgetID) hcaptcha.reset(widgetID);
	};

	export const execute = (options: any) => {
		if (mounted && loaded && widgetID)
			return hcaptcha.execute(widgetID, options);
	};

	export const toast = () => {
		if(mounted && loaded)
		{
			new Toastify({
				text: $toast$,
				duration: 3000,
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

	const id = Math.floor(Math.random() * 100);

	let mounted = false;
	let loaded = false;
	let widgetID: any;
	let skeleton: any;

	const query = new URLSearchParams({
		recaptchacompat: reCaptchaCompat ? 'on' : 'off',
		onload: 'hcaptchaOnLoad',
		render: 'explicit',
	});
	const scriptSrc = `${apihost}?${query.toString()}`;

	onMount(() => {
		if (browser && !sitekey) sitekey = window.sitekey;

		if (browser) {
			window.hcaptchaOnLoad = () => {
				// consumers can attach custom on:load handlers
				dispatch('load');
				loaded = true;
			};

			window.onSuccess = (token: any) => {
				dispatch('success', {
					token: token,
				});
				captchaToken = token;
			};

			window.onError = () => {
				dispatch('error');
			};

			window.onClose = () => {
				dispatch('close');
			};

			window.onExpired = () => {
				dispatch('expired');
				reset();
			};
		}

		dispatch('mount');
		mounted = true;
	});

	onDestroy(() => {
		if (browser) {
			//@ts-ignore
			window.hcaptchaOnLoad = null;
			//@ts-ignore
			window.onSuccess = null;
		}
		// guard against script loading race conditions
		// i.e. if component is destroyed before hcaptcha reference is loaded
		if (loaded) hcaptcha = null;
	});

	$: if (mounted && loaded) {
		widgetID = hcaptcha.render(`h-captcha-${id}`, {
			sitekey,
			hl, 
			theme,
			callback: 'onSuccess',
			'error-callback': 'onError',
			'close-callback': 'onClose',
			'expired-callback': 'onExpired',
			size,
		});
		skeleton = window.document.getElementById('skeleton') as HTMLElement;
		if(skeleton) skeleton.remove();
		tasker(toast$, "Register Your KBVE Global").then(toast);
	}

	let usernameRegex = new RegExp(/^[a-z0-9]+$/i);

	let loading = false;
	let username = '';
	let email = '';
	let confirm = '';
	let password = '';
	let captchaToken = '';

	const dismiss = async () => {
		notification('');
	};

	const ValidInput = () => {
		if (username.length < 8) {
			notification('username has to be 8 or more characters');
			toast();
			reset();
			return false;
		} else if (!usernameRegex.test(username)) {
			notification('username has to be alpha-numeric a-Z and 0-9 only ');
			toast();
			reset();
			return false;
		} else if (confirm != password) {
			notification('passwords do not match');
			toast();
			reset();
			return false;
		} else if (password.length < 8) {
			notification('password has to be at least 8 characters or stronger ');
			toast();
			reset();
			return false;
		} else {
			return true;
		}
	};

	const handleRegister = async () => {
		if (ValidInput()) _handleRegister();
	};

	const _handleRegister = async () => {
		try {
			loading = true;

			const _FData = { username: username, email: email, password: password, 'h-captcha-response': captchaToken}

			const _F = await appwriteFunctions.createExecution('register', JSON.stringify(_FData), false, '/', 'POST');

			const { status, responseBody } = _F;

		
			if(status === "completed")
			{
				notification(`Yes! ${responseBody}`)
				toast()
				tasker(toast$, 'Account Ready!').then(toast)
				setTimeout(() => {
					location.assign('/account/login/')
				},2000)
				
			}
			else
			{
				throw new Error(responseBody)
			}
	



		} catch (error) {
			if (error instanceof Error) {
				log(error.message);
				notification(error.message);
				toast();
				reset();
			}
			loading = false;
		} 
	};
</script>

<svelte:head>
	{#if mounted && !window?.hcaptcha}
		<script src={scriptSrc} async defer></script>
	{/if}
</svelte:head>

<WidgetWrapper
	background="https://images.unsplash.com/photo-1597851065532-055f97d12e47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80">
	<section class="">
		<div
			class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
			<a href="/#" class="flex items-center mb-6">
				<img
					class="w-32 mr-2"
					src="https://kbve.com/assets/img/letter_logo.svg"
					alt="logo" />
			</a>
			<div
				class="w-full bg-transparent rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
				<div class="p-6 space-y-4 md:space-y-6 sm:p-8">
					<div class="min-h-[100px]">
						{#if $notification$}
							<h1>
								<div
									id="toast-default"
									class="flex items-center w-full max-w-xs p-4 bg-offset rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
									role="alert">
									<div
										class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200">
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
							</h1>
						{:else}
							<h1
								class="text-xl font-bold leading-tight tracking-tight gradient-text md:text-2xl">
								Register your KBVE Account!
							</h1>
						{/if}
					</div>
					<form
						class="space-y-4 md:space-y-6"
						action="#"
						on:submit|preventDefault={handleRegister}>
						<div>
							<label for="email" class="block mb-2 text-sm font-medium"
								>Your email</label>
							<input
								type="email"
								name="email"
								id="email"
								class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="name@company.com"
								required
								bind:value={email} />
						</div>
						<div>
							<label for="username" class="block mb-2 text-sm font-medium"
								>Your Username</label>
							<input
								type="text"
								name="username"
								id="username"
								class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Username-chan"
								required
								bind:value={username} />
						</div>
						<div>
							<label for="password" class="block mb-2 text-sm font-medium"
								>Password</label>
							<input
								type="password"
								name="password"
								id="password"
								placeholder="••••••••"
								class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								required
								bind:value={password} />
						</div>
						<div>
							<label for="password" class="block mb-2 text-sm font-medium"
								>Confirm Password</label>
							<input
								type="password"
								name="confirm"
								id="confirm"
								placeholder="••••••••"
								class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								required
								bind:value={confirm} />
						</div>
						<div id="h-captcha-{id}" class="flex justify-center " />
						<div class="flex items-center justify-between">
							<div class="flex items-start" />
							<a
								href="/account/recovery"
								class="text-sm font-medium text-secondary hover:underline dark:text-primary-500"
								>Forgot password?</a>
						</div>
						<button
							type="submit"
							class="w-full bg-secondary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
							disabled={loading}
							><span>{loading ? 'Loading' : 'Register'}</span></button>
						<p class="text-sm font-light text-primary">
							Have an account yet? <a
								href="/account/login"
								class="font-medium text-primary-600 hover:underline dark:text-primary-500"
								>Login!</a>
						</p>
					</form>
				</div>
			</div>
		</div>
	</section>
</WidgetWrapper>
