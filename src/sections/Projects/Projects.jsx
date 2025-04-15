import styles from './ProjectsStyles.module.css';
import cookshare from '../../assets/cookshare.png';
import HMS from '../../assets/HMS.png';
import chatapp from '../../assets/chatapp.png';
import youClone from '../../assets/youClone.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={cookshare}
          link="https://github.com/MrutyunjayaSenapati/CookShare"
          h3="CookShare"
          p="A modern recipe-sharing platform where users can discover, upload, and manage their favorite dishes."
        />
        <ProjectCard
          src={HMS}
          link="https://github.com/MrutyunjayaSenapati/Hospital-Management-System-"
          h3="Hospital Management System"
          p="A robust web-based system for managing appointments, patients, and staff data in hospitals."
        />
        <ProjectCard
          src={chatapp}
          link="https://github.com/MrutyunjayaSenapati/ChatApp"
          h3="Chat App"
          p="Real-time chat application where users can connect and communicate via mobile and desktop."
        />
        <ProjectCard
          src={youClone}
          link="https://github.com/MrutyunjayaSenapati/yt-video"
          h3="YouTube Clone"
          p="A YouTube-inspired platform to watch and explore trending videos across the globe."
        />
      </div>
    </section>
  );
}

export default Projects;
