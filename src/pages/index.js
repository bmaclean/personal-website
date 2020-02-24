import React, {useState} from 'react';
// import {Link} from 'gatsby';
import {Parallax} from 'react-spring/renderprops-addons';

import {Toast, Layout, NetlifyStaticForm, SEO} from '../components';
import {Contact, Greeting, Services} from '../views';
import Logo from '../images/temp-logo.png';

const IndexPage = () => {
	const [alertOpen, setAlertOpen] = useState(false);

	return (
		<Layout>
			<SEO image={Logo} title="Home" />
			<NetlifyStaticForm />
		</Layout>
	);
};

export default IndexPage;
