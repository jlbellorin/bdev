import render from './render.js';
import projects from './projects.js';

const projectTemp = (project) => `
  <div class="project">
    <div class="project__side project__side--front" style="background-image: url(${project.bgImg});">
      &nbsp;
    </div>
    <div class="project__side project__side--back">
      <div class="project__back-grid">
        <p class="project__title">${project.title}</p>
        <p class="project__description">${project.desc}</p>
        <a href="${project.link}" class="btn btn--white">Visit!</a>
      </div>
    </div>
  </div>
`;

projects.slice(0, 3).forEach(project => render(projectTemp(project), '#preview-projects'));
projects.forEach(project => render(projectTemp(project), '#all-projects'));
