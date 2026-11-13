import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'What I Write',
    Svg: require('@site/static/img/writing.svg').default,
    description: (
      <>
        User guides, API docs, how-to articles and more - in plain, friendly language.
      </>
    ),
  },
  {
    title: 'My Tools',
    Svg: require('@site/static/img/applications.svg').default,
    description: (
      <>
      Vs Code, Github, Markdown, docusaurus, Word and API tools.
      </>
    ),
  },
  {
    title: 'My Approach',
    Svg: require('@site/static/img/approach.svg').default,
    description: (
      <>
      Research. Simplify. Document. 
      Always with the user in mind.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
