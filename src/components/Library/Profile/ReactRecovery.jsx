import React, { useState } from 'react';
import { user$ } from '@lib/appwrite';
import { useStore } from '@nanostores/react';

const ReactRecovery = () => {
    const $user = useStore(user$);


}

export default ReactRecovery;