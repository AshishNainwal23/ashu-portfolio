import styles from "./ProjectsStyles.module.css";
import mintra from "../../assets/mintra-clone.png";
import book from "../../assets/book-store.png";
import movie from "../../assets/movie.png";
import chatapp from "../../assets/chatapp.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={mintra}
          link="https://github.com/AshishNainwal23/Myntra-Clone-with-React-and-Redux-Toolkit-"
          h3="Mintra Clone"
          p="Ecommerce Website"
        />
        <ProjectCard
          src={book}
          link="https://github.com/AshishNainwal23/Online-Book-Store"
          h3="Book Vault"
          p="Book Shop"
        />
        <ProjectCard
          src={movie}
          link="https://github.com/AshishNainwal23/Movie-recommended-system"
          h3="Movie Mate"
          p="Recommendation System"
        />
        <ProjectCard
          src={chatapp}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Chat Wave"
          p="RealTime Chat App"
        />
      </div>
    </section>
  );
}

export default Projects;
