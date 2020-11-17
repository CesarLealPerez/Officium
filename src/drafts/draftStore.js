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

const savedRateJSON = window.localStorage.getItem('currentRate') | '0'; // Get currentRate from localStorage or 0 if none.
const savedRate = JSON.parse(savedRateJSON);

/**
 * Declare and export stores.
 */

export var currentView = writable('TasksButtonsList');
export var currentTaskStart = writable(null);
export var currentTaskReference = writable(null);

export var currentRate = writable(savedRate);

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
		const currentRateJSON = JSON.stringify(currentRate);
		localStorage.setItem('currentRate', currentRateJSON);
	}
);
