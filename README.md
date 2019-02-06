# chsie-popups

This plugin works with Formidable to produce popups from forms.

It is a custom project for the University of Washington Center for Health Sciences Interprofessional Education, Research and Practice (CHSIE).

## Objectives

- Create an interface that allows non-coding admins to build custom popups for grant-related data collection.
- Integrate that interface with the WordPress admin area and the Formidable form builder.
- Save collected data to the database using an easily-accessible model.
- Integrate and automate display of that data into the current CHSIE Popups plugin.

This interface uses React for the UI and Redux for the data model; all data will be stored in a single serialized object within the database.
Alternatives were explored, but the key is to keep the data easily interoperable with other plugins and extensions for future use.

The current build displays the Redux store to enable development of a watertight data model.  Take a look!


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
