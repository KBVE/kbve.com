<script lang="ts" context="module">
    declare global {
        interface Window {
            Toastify: any;
        }
    }

    declare var Toastify: any;
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

                    </div>
                    <form>

                    </form>
                </div>
            </div>
        </div>
    </section>
</WidgetWrapper>