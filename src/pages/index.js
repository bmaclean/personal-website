import React, {useState} from 'react';

import {Layout, NetlifyStaticForm, SEO} from '../components';
import Logo from '../images/temp-logo.png';

const IndexPage = () => {
	return (
		<Layout>
			<SEO image={Logo} title="Home" />
			<NetlifyStaticForm />
		</Layout>
	);
};

export default IndexPage;
