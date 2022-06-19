import React, {useState} from "react";
import ProjectForm from "./ProjectForm";
import ProjectList from "./ProjectList"

const Projects = () => {
	const initialProjects = [
		{
			name: "Unicorn Project",
			description: "DummyCorp will orchestrate the commonly-accepted buzzword 'B2C'. Imagine a combination of SVG and RDF. What does the term 'frictionless' really mean?"
		},
		{
			name: "Phoenix Project",
			description: "DummyCorp practically invented the term 'R&D'. What does it really mean to benchmark 'compellingly'? The capacity to utilize globally leads to the capacity to scale ultra-macro-intuitively."
		},
		{
			name: "Dragon Project",
			description: "Have you ever been unable to evolve your feature set? In one step? DummyCorp pride ourselves not only on our feature set, but our simple administration and non-complex configuration."
		}
	]

	const addProject = (project) => {
		// add project to start of list so it displays first
		// then add in a copy of existing projects (using spread operator)
		setProjects([project, ...projects])
	}

	const [projects, setProjects] = useState(initialProjects)

	return(
		<div>
			<h1>Projects</h1>
			<ProjectForm addProject={addProject} />
			<ProjectList projects={projects} />
		</div>
	)
}

export default Projects;