import styles from './HeroStyles.module.css';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import mailLight from '../../assets/mail-light.png'; 
import mailDark from '../../assets/mail-dark.png'; 
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const mailIcon = theme === 'light' ? mailLight : mailDark;


  return (
    <section id="hero" className={styles.container}>
      <div className={styles.themeToggle}>
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Toggle theme"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Mrutyunjaya
          <br />
          Senapati
        </h1>
        <h2>Fullstack Developer</h2>
        <span>
          <a href="https://twitter.com/Jay0o07" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/MrutyunjayaSenapati" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://linkedin.com/in/mrutyunjaya-senapati" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
          <a href="mailto:mrutyunjayasenapati007@gmail.com" target="_blank">
            <img src={mailIcon} alt="Email icon" />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for developing modern, scalable, and high-performance web applications.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
