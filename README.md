Doit.im export of tasks (because Doit.im still does not support it at the time of writing).

In Chrome: open up the Doit.im website.

(optional) Make a custom filter that will show you all tasks.

Open up a list view for your custom filter (works with any list view really)

Open up the Developer Console (option+command+i on the Mac, Ctrl-Shift-i on windows).

Paste javascript code in js-files into the console and hit enter. The task-lines will now be in the clipboard (if successful)

Go into your favorite text editor and paste, but save file as UTF-8 (in case of special language chars)


The script exports: Task name, Priority, tags, context, Project, and notes.
It does not export subtasks. 

Links for info on Chrome Console developing:
http://stackoverflow.com/questions/2934787/view-list-of-all-javascript-variables-in-google-chrome-console
https://developers.google.com/chrome-developer-tools/docs/console