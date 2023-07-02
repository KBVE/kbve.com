import DOMPurify from 'dompurify';

export const clean = (data) => {
	return DOMPurify.sanitize(data, {
		USE_PROFILES: { html: false, mathMl: false, svg: false },
	});
};

//?     Both functions below are from Gibolt to address the _blank target vulnerability.
export const onClickUrl = (url) => {
	return () => openInNewTab(url);
};

export const openInNewTab = (url) => {
	const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
	if (newWindow) newWindow.opener = null;
};

export const elementButtonClick = (__url, __text) => {
	return (
		<>
			<button
				type="button"
				className="m-1 px-8 py-3 font-semibold rounded bg-gray-100 text-gray-800 hover:bg-gray-300"
				onClick={onClickUrl(__url)}
			>
				{__text}
			</button>
		</>
	);
};

export const BgWrapper = (props) => {
	return (
		<div className="flex flex-wrap">
			<div className="w-full px-3">
				<div className="relative flex flex-col min-w-0 break-words bg-offset shadow-soft-xl rounded-2xl bg-clip-border">
					<div className="flex-auto ">
						<div className="flex flex-wrap">
							<div className="rounded-lg shadow w-full">
								<div className="w-full max-w-full px-3">
									<div className="border-black/12.5 shadow-soft-xl relative flex h-full min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-offset bg-clip-border p-4">
										<div
											className="relative h-full overflow-hidden bg-cover rounded-xl"
											style={{ backgroundImage: `url(${props.src})` }}
										>
											<span className="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-gray-900 to-slate-800 opacity-80" />
											<div className="relative z-10 flex flex-col flex-auto h-full p-4">
												{props.children}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export const elementErrorMessage = (__message) => {
	return (
		<>
			<div
				id="alert-additional-content-2"
				className="p-4 mb-4 text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
				role="alert"
			>
				<div className="flex items-center">
					<svg
						aria-hidden="true"
						className="w-5 h-5 mr-2"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<title>Info</title>
						<path
							fillRule="evenodd"
							d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
							clipRule="evenodd"
						/>
					</svg>
					<span className="sr-only">Info</span>
					<h3 className="text-lg font-medium">Alert</h3>
				</div>
				<div className="mt-2 mb-4 text-sm">
				<p>{__message}</p>

				</div>
				<div className="flex">
					<button
						type="button"
						className="text-white bg-red-800 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
					>
						<svg
							aria-hidden="true"
							className="-ml-0.5 mr-2 h-4 w-4"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>	
							<title>Eye</title>
							<path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
							<path
								fillRule="evenodd"
								d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
								clipRule="evenodd"
							/>
						</svg>
						View more
					</button>
					<button
						type="button"
						className="text-red-800 bg-transparent border border-red-800 hover:bg-red-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-red-600 dark:border-red-600 dark:text-red-500 dark:hover:text-white dark:focus:ring-red-800"
						data-dismiss-target="#alert-additional-content-2"
						aria-label="Close"
					>
						Dismiss
					</button>
				</div>
			</div>
		</>
	);
};
