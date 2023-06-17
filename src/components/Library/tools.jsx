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
				className="m-2 px-8 py-3 font-semibold rounded bg-gray-100 text-gray-800"
				onClick={onClickUrl(__url)}
			>
				{__text}
			</button>
		</>
	);
};