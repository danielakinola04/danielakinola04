import React from 'react';
import Project from './Project';


const ProjectList = () => {
return (
<div>
<h1 style = {{margin: '50px'}}>Projects</h1>
<Project name="Project Number 1" />
<Project name="Project Number 2"/>
<Project name="Project Number 3"/>
</div>
);
};


export default ProjectList;
