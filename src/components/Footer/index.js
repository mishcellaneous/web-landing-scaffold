import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import cx from 'classnames';

import Logo from 'components/Logo';
import styles from './styles.module.scss';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      gitBranch(current: { eq: true }) {
        ...GitInfo
      }
      markdownRemark(frontmatter: { name: { eq: "Footer" } }) {
        ...FooterContent
      }
    }
  `);

  const { html, frontmatter } = data.markdownRemark;

  return (
    <footer id={`${frontmatter.name}`} className={cx('footer', styles.Footer)}>
      <Logo className={styles.Logo} />
      <div
        className={cx(styles.Content)}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </footer>
  );
};

export default Footer;