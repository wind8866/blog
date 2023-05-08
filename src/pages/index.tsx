import React from 'react'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import styles from './index.module.css'
import useBaseUrl from '@docusaurus/useBaseUrl'
import Head from '@docusaurus/Head'

const welcome = ' ~ 欢迎到小屋小憩☕️'

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext()
	console.log(siteConfig)
	return (
		<div
			className="hero"
			style={{ height: 'calc(100vh - 150px)', margin: 'auto' }}
		>
			<div className={styles.welcome_intro}>
				<h1 className={styles.hero_title}>
					<span style={{ color: 'var(--ifm-color-primary)' }}>
						{siteConfig.title}
					</span>
					<small style={{ fontSize: '18px', color: '#999' }}>{welcome}</small>
				</h1>
				<p className="hero__subtitle">{siteConfig.tagline}</p>
			</div>
			<div className={styles.welcome_svg}>
				<img src="https://meoo.space/img/program.svg" />
			</div>
		</div>
	)
}

export default function Home() {
	const { siteConfig } = useDocusaurusContext()
	return (
		<Layout description={siteConfig.tagline}>
			<Head>
				<title>
					{siteConfig.title}
					{welcome}
				</title>
			</Head>
			<HomepageHeader />
			<main>
				<br />
				{/* <HomepageFeatures /> */}
			</main>
		</Layout>
	)
}
