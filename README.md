# What's this? #

Doit.im export of tasks (because Doit.im still does not support it at the time of writing).

# How to? #

## when exporting to todoist ##

Do the following In Chrome:

- open up the Doit.im website.

- (optional) Make a custom filter that will show you all tasks.

- Open up a list view for your custom filter (works with any list view really)

- Open up the Developer Console (option+command+i on the Mac, Ctrl-Shift-i on windows).

- Paste javascript code in js-files into the console and hit enter. The task-lines will now be in the clipboard (if successful)

- Go into your favorite text editor and paste, but save file as UTF-8 (in case of special language chars)

The script exports: **Task name, Priority, tags, context, Project, and notes.**
It does *not* export subtasks. 

## Export to org-mode ##

Using the
[recommanded organization method](https://github.com/ttimasdf/org-gtd-feature-lists/blob/master/7-project_management.org),

- open each of your goals view (if you are premium, use custom filters
is good as well) and run
[projects export](https://github.com/ttimasdf/doitimExport/blob/master/doitExport_org-projects.js)
and paste them into a `.org` file.

- open each project and run
  [items export](https://github.com/ttimasdf/doitimExport/blob/master/doitExport_org-items.js)
  to paste todo items into each projects.
- If you have any subtasks, copy all lines of subtasks from the task
  view and paste into the org file, placing the cursor at the beginning.
- Invoke `<f3> - SPC C-u C-c C-c C-n C-a <f4>` to define a macro for adding [checkboxs](https://github.com/ttimasdf/org-gtd-feature-lists/blob/master/2-checkbox.org).
- Press `<f4>` as many times as needed to add checkbox for each subtask.
- (Optional) add a counter in the task title like `[1/3]` or `[33%]`, details at [here](https://github.com/ttimasdf/org-gtd-feature-lists/blob/master/2-checkbox.org#the-count-of-checkbox-of-the-same-grade-15)

Links for info on Chrome Console developing:
http://stackoverflow.com/questions/2934787/view-list-of-all-javascript-variables-in-google-chrome-console
https://developers.google.com/chrome-developer-tools/docs/console
