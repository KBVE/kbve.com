export const addUnityListener = () => {
    if(window.vuplex)
    {
        _addUnityListener()
    }
    else {
        window.addEventListener('vuplexready', _addUnityListener);
    }

}

export const sendMessageUnity = ({ type, message }) => {
	if (window.vuplex) {
		_sendMessageUnity(type, message);
	} else {
		window.addEventListener('vuplexready', _sendMessageUnity(type, message));
	}
};

const _sendMessageUnity = ({ type, message }) => {
	console.log(`Sending ${type} -> ${message}`);
	window.vuplex.postMessage({ type: type, message: message });
};

const _addUnityListener = () => {
    window.vuplex.addEventListener('message', function(event)
    {
        const json = event.data;
        console.log(`JSON ${json}`);
    });
}