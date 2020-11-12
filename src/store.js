import { writable } from 'svelte/store';

/**
 * Reading localStorage
 * 
 * Get projects from browser localStorage or initialize empty array if not.
 */
var savedProjects;
const savedProjectsJSON = window.localStorage.getItem('projects');
if ( savedProjectsJSON ) {
	savedProjects = JSON.parse(savedProjectsJSON);
} else {
	savedProjects = [];
}

const savedRate = window.localStorage.getItem('currentRate') | 0; // Get currentRate from localStorage or 0 if none.


/**
 * Declare and export stores.
 */

export var currentView = writable('TasksButtonsList');

export var currentRate = writable(0.0);

export const projects = writable(savedProjects);

/**
 * Update localStorage on stores changes.
 */

projects.subscribe(
	(projects)=>{
		const projectsJSON = JSON.stringify(projects);
		localStorage.setItem('projects', projectsJSON);
	}
);


currentRate.subscribe(
	(currentRate)=>{
		const currentRateJSON = JSON.stringify(currentRateJSON);
		localStorage.setItem('currentRate', currentRateJSON);
	}
);