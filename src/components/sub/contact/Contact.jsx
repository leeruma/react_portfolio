import Layout from '../../common/layout/Layout';
import styles from './Contact.module.scss';
// import clsx from 'clsx';

export default function Contact() {
	return (
		<Layout title={'Contact'} className={'contact'} styleName={styles.contact}>
			<p>Contact 페이지입니다.</p>
		</Layout>
	);
}
