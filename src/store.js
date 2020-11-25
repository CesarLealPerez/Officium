import { writable } from 'svelte/store';

/**
 * Reading localStorage
 * 
 * Get task from browser localStorage or initialize empty array if not.
 */
var savedTasks;
const savedTasksJSON = window.localStorage.getItem('tasks');
	if ( savedTasksJSON ) {
		savedTasks = JSON.parse(savedTasksJSON);
	} else {
		savedTasks = [];
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

<<<<<<< HEAD
export const tasks = writable(savedProjects);
=======
export const tasks = writable(savedTasks);
>>>>>>> e231d158ab0f2da92dbaba104debe0aac50cfcec

/**
 * Update localStorage on stores changes.
 */

tasks.subscribe(
	(tasks)=>{
<<<<<<< HEAD
		const projectsJSON = JSON.stringify(tasks);
		localStorage.setItem('tasks', projectsJSON);
=======
		const tasksJSON = JSON.stringify(tasks);
		localStorage.setItem('tasks', tasksJSON);
>>>>>>> e231d158ab0f2da92dbaba104debe0aac50cfcec
	}
);


currentRate.subscribe(
	(currentRate)=>{
		const currentRateJSON = JSON.stringify(currentRate);
		localStorage.setItem('currentRate', currentRateJSON);
	}
);
 
