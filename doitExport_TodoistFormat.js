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

var noteNewline = '\x09';
var noteEnd = "\n";//0x09;
var projSeparator = "#";
var timeSeparator = "@";
var tagSeparator = "@";
var ctxSeparator = "@c";
var allTaskLines = "";
var noTasks = TASKS.length;
for (var i = 0; i < noTasks; i++) {
	var task = TASKS[i]; 
	var thisTaskLine = task.title; 
	thisTaskLine = thisTaskLine.replace(/&quot;/g, "\"");
	thisTaskLine = thisTaskLine +" "+timeSeparator+task.attribute; 
	var thisTaskLine = thisTaskLine +" "+projSeparator+projLookup(task.project); 
	thisTaskLine = thisTaskLine +" "+ctxSeparator+contextLookup(task.context).toLowerCase().replace(/[ ]/g, ""); 
	var tags = task.tags; 
	if (!(typeof tags === 'undefined')) {
		var noTags = task.tags.length;
		for (var j = 0; j < noTags; j++) {
			var lowerSpaceTagWithoutSpaces = tags[j].toLowerCase().replace(/[ ]/g, "");
		 	thisTaskLine =  thisTaskLine + " " + tagSeparator + lowerSpaceTagWithoutSpaces;
		}
	}
	if (task.priority > 0) {
		thisTaskLine = thisTaskLine +" !!"+(4-task.priority); 
	}  	
	if (!(typeof task.notes === 'undefined')) {
		// replace new lines in notes with '/n', because I want one task on each line
		var notes = task.notes.replace(/[\r\n]/g, noteNewline).replace(/[\n]/g, noteNewline);
		thisTaskLine = thisTaskLine +noteEnd+"[[NOTE]]: "+notes; 
	}
  	allTaskLines = allTaskLines + thisTaskLine + "\n";
}
console.log(allTaskLines);
copy(allTaskLines);