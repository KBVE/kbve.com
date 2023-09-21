<script lang="ts" context="module">
    declare global {
        interface Window {
            Toastify: any;
            Flowbite: any;
        }
    }

    declare var Toastify: any;
    declare var Flowbite: any;
</script>

<script lang="ts">
    import { onMount, onDestroy, createEventDispatcher } from 'svelte';
    import {appwriteFunctions} from "@c/API/appwrite/appwrite"; // Appwrite
	import { log, notification$, toast$, notification, tasker } from '@c/API/storage';
    import * as kbve from "@c/kbve"; // KBVE

    import WidgetWrapper  from './UX/WidgetWrapper.svelte';

    //@ts-ignore
    const browser = import.meta.env.SSR === undefined ? true : !import.meta.env.SSR;

    const dispatch = createEventDispatcher();
    
    // [EXPORT]
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

    export const dismiss = async () => {
		notification('');
	};

    // [VAR]

    let mounted = false;
    let loaded = false;
    let skeleton: any;
    let bio = '';
    let pgp = '';


    // []

    const _updatePGP = async () => {
        try {

        } catch (e) {
            
        }
    }



    // [CORE]

    onMount( () => {
        dispatch('mount');
        mounted = true;
        //! [TEMP]@REMOVE
        loaded = true;
    })
    
    onDestroy( () => {

    })

    $: if(mounted && loaded) {

        skeleton = window.document.getElementById('skeleton') as HTMLElement;
        if(skeleton) skeleton.remove();
		tasker(toast$, "Welcome to the Account Settings").then(toast);
        }


</script>


<WidgetWrapper
	background="https://images.unsplash.com/photo-1609097828576-3b620e86039e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80">
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
                    
                </div>
            </div>
        </div>



    </section>
</WidgetWrapper>

