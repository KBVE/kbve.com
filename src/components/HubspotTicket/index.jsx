import { h } from 'preact';
import react from '@astrojs/react';
import Styles from './styles.module.scss';
import HubspotForm from 'react-hubspot-form';
function HubspotTicket() {
	return( 
		<div><HubspotForm
   portalId='20854121'
   formId='0b9ff334-c8f1-4ff3-843c-9d0b6a33b1b4'
   onSubmit={() => console.log('Submit!')}
   onReady={(form) => console.log('Form ready!')}
   loading={<div>Loading...</div>}
   /></div>);
}

export default HubspotTicket;
