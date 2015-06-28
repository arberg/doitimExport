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

var tagSeparator = ":";
var allTaskLines = "";
var noTasks = TASKS.length;
for (var i = 0; i < noTasks; i++) {
  var task = TASKS[i]; 
  // var thisTaskLine = task.title; 
  var thisTaskLine = "** " + ( (task.attribute == "noplan")?
                               "WAITING":
                               ( (task.attribute == "next")?
                                 "NEXT":
                                 ( (task.attribute == "plan")?
                                   "SCHEDULED":
                                   " "
                                 )
                               )
                             );
  thisTaskLine = thisTaskLine + ( (task.priority)?
                                  (" [#" + (
                                    (task.priority-1)?
                                      (task.priority-2)?
                                      (task.priority-3)?
                                      "fuck?":"A":"B":"C")
                                   + "] ") 
                                  :" " );
  // WRONG: thisTaskLine = thisTaskLine + (task.priority-1 == 0)?(task.priority-2==0)?(task.priority-3==0)?"":"C":"B":"A" + "ok"

  thisTaskLine = thisTaskLine + task.title + "     ";
  // var thisTaskLine = thisTaskLine +" !p"+task.priority;


  var tags = task.tags;
  var thisTaskLine = thisTaskLine + tagSeparator + ((contextLookup(task.context) == "missing")?
                                                    "":
                                                    ("@"+contextLookup(task.context) + tagSeparator));
  
  if (!(typeof tags === 'undefined')) {
    var noTags = task.tags.length;
    for (var j = 0; j < noTags; j++) {
      thisTaskLine =  thisTaskLine + tags[j] + tagSeparator;
    }
    // thisTaskLine = thisTaskLine + tagSeparator;
  }
  thisTaskLine = thisTaskLine + '\n';

  if (!(typeof task.notes === 'undefined')) {
    // replace new lines in notes with '/n', because I want one task on each line
    // var notes = task.notes.replace(/[\r\n]/g, "/n").replace(/[\n]/g, "/n");
    var thisTaskLine = thisTaskLine + task.notes + "\n"; 
  }
  allTaskLines = allTaskLines + thisTaskLine + "\n\n";
}
console.log(allTaskLines);
copy(allTaskLines);
