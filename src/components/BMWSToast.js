import React from 'react';
import {Slide, Snackbar} from '@material-ui/core';

const TransitionUp = props => (
	<Slide {...props} direction="up" />
)

export default function BMWSToast({message, ...rest}) {
	return (
		<Snackbar
          	autoHideDuration={2000}
          	TransitionComponent={TransitionUp}
          	ContentProps={{
          	  'aria-describedby': 'message-id',
          	}}
          	message={<span id="message-id">{message}</span>}
          	{...rest}
        />
    )
}
