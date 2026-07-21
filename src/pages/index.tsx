import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

/** Latest release of the MyTourbook desktop application. */
const DOWNLOAD_URL = 'https://github.com/mytourbook/mytourbook/releases/latest';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            href={DOWNLOAD_URL}
          >
            Download the latest release
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="MyTourbook is a desktop application for visualizing and analyzing GPS tour data."
    >
      <HomepageHeader />
      <main>
        <div className="container">
          <div className="row">
            <div className="col col--6 margin-vert--lg">
              <Heading as="h2">What is MyTourbook?</Heading>
              <p>
                MyTourbook is a desktop application for visualizing and
                analyzing GPS tours recorded by a GPS device, bike computer,
                exercise computer, or ergometer. A <em>tour</em> — a single
                recorded activity — is the core entity MyTourbook helps you
                explore.
              </p>
              <p>
                Import your tours, inspect elevation, speed, heart rate, and
                cadence, and analyze your training over time.
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
