import styles from './Layout.module.scss';
import clsx from 'clsx';

export default function Layout({ title, children }) {
	return (
		<section className={clsx(styles.layout)}>
			<figure></figure>

			<div className={clsx(styles.content)}>
				<h1>{title}</h1>
				{/* 해당컴포넌트로 특정 컨텐츠를 감싸주면 감싸진내용들이 props.children으로 전달됨 */}
				{children}
			</div>
		</section>
	);
}
