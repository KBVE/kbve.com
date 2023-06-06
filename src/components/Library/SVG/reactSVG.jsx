import React from 'react';
import * as Icons from 'react-icons/md'

const ReactSVG = ({name}) => {

    const Icon = Icons[name] ? Icons[name] : Icons.MdError;

    return <Icon />;

}

export default ReactSVG;