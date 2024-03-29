import DOMPurify from 'dompurify';
import React from 'react';
import { Alert } from 'flowbite-react';
import { HiInformationCircle } from 'react-icons/hi';


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
				className="m-1 px-2 py-2 font-semibold rounded bg-gray-100 text-gray-800 hover:bg-gray-300 text-sm"
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
		<div className="p-2 m-2">  <Alert
		additionalContent={__message}
		color="warning"
		icon={HiInformationCircle}
		rounded
		withBorderAccent
	  >
		<span>
		  <p>
			<span className="font-medium">
			  Warning!
			</span>
			
		  </p>
		</span>
	  </Alert>
	  </div>
	
	)
};
