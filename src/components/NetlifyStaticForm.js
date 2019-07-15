import React from 'react';

export default function NetlifyStaticForm() {
	return (
		<form method="post" data-netlify="true" name="contact">
			<input type="hidden" name="form-name" value="contact" />
			<input type="text" name="name" id="name"  />
			<input type="text" name="email" id="email"  />
			<textarea name="description" id="message"  />
			<input type="submit" value="Send Message" />
		</form>
	);
}
