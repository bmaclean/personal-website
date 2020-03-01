import React, {useState} from 'react';
// import {Link} from 'gatsby';
import {Parallax} from 'react-spring/renderprops-addons';

import {Toast, Layout, NetlifyStaticForm, SEO} from '../components';
import {Contact, Greeting, Services} from '../views';
import Logo from '../images/curly-brackets.png';

const IndexPage = () => {
	const [alertOpen, setAlertOpen] = useState(false);

	return (
		<Layout>
			<SEO image={Logo} title="Home" />
			<NetlifyStaticForm />
			<Parallax pages={2.6}>
				<Greeting offset={0} speed={0.5} />
				<Services offset={0.9} speed={0.5} />
				<Contact offset={1.8} speed={0.5} onSubmit={() => setAlertOpen(true)} />
			</Parallax>
			<Toast 
				open={alertOpen}
	          	onClose={() => setAlertOpen(false)} 
	          	message="Submitted!"
	        />
		</Layout>
	);
};

export default IndexPage;
