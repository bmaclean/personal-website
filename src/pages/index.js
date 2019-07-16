import React, {useState} from 'react';
// import {Link} from 'gatsby';
import {Parallax} from 'react-spring/renderprops-addons';

import {BMWSToast, Layout, NetlifyStaticForm, SEO} from '../components';
import {Contact, Greeting, Services} from '../views';

const IndexPage = () => {
	const [alertOpen, setAlertOpen] = useState(false);

	return (
		<Layout>
			<SEO title="Home" />
			<NetlifyStaticForm />
			<Parallax pages={3.2}>
				<Greeting offset={0} speed={0.5} />
				<Services offset={1} speed={0.5} />
				<Contact offset={2} speed={0.5} onSubmit={() => setAlertOpen(true)} />
			</Parallax>
			<BMWSToast 
				open={alertOpen}
	          	onClose={() => setAlertOpen(false)} 
	          	message="Submitted!"
	        />
		</Layout>
	);
};

export default IndexPage;
