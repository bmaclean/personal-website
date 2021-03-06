import React from 'react';

/**
 * Static form to help Netlify bots find and create Contact form.
 */
export default function NetlifyStaticForm() {
	return (
		<form
			method="post"
			data-netlify="true"
			name="contact"
			css={{display: 'none'}}
		>
			<input type="hidden" name="form-name" value="contact" />
			<input type="text" name="name" id="name" />
			<input type="text" name="company" id="company" />
			<input type="text" name="phone" id="phone" />
			<input type="text" name="email" id="email" />
			<textarea name="description" id="description" />
			<input type="submit" value="" />
		</form>
	);
}
