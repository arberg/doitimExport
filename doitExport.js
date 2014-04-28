function contextLookup(ctxId) {
	var arr = Doit.contexts;
    for(var i=0; i< arr.length; i++) {
        if (arr[i].uuid == ctxId) return arr[i].name;
    }
    return "missing";
}

function projLookup(projId) {
	var projects = Doit.projects;
    for(var i=0; i< projects.length; i++) {
        if (projects[i].uuid == projId) return projects[i].name;
    }
    return "missing";
}

var tagSeparator = "&";
var allTaskLines = "";
var noTasks = TASKS.length;
for (var i = 0; i < noTasks; i++) {
	var task = TASKS[i]; 
	var thisTaskLine = task.title; 
	var thisTaskLine = thisTaskLine +" !p"+task.priority; 
	var thisTaskLine = thisTaskLine +" ^"+task.attribute; 
	var thisTaskLine = thisTaskLine +" #"+projLookup(task.project); 
	var thisTaskLine = thisTaskLine +" @"+contextLookup(task.context); 
	var tags = task.tags; 
	if (!(typeof tags === 'undefined')) {
		var noTags = task.tags.length;
		for (var j = 0; j < noTags; j++) {
		 	thisTaskLine =  thisTaskLine + " " + tagSeparator + tags[j];
		}
	}
	if (!(typeof task.notes === 'undefined')) {
		// replace new lines in notes with '/n', because I want one task on each line
		var notes = task.notes.replace(/[\r\n]/g, "/n").replace(/[\n]/g, "/n");
		var thisTaskLine = thisTaskLine +" [["+notes+"]]"; 
	}
  	allTaskLines = allTaskLines + thisTaskLine + "\n";
}
console.log(allTaskLines);
copy(allTaskLines);