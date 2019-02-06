## CHSIE Popups

This plugin works with Formidable to produce popups from forms.

It is a custom project for the University of Washington Center for Health Sciences Interprofessional Education, Research and Practice (CHSIE).

## Objectives

- Create an interface that allows non-coding admins to build custom popups for grant-related data collection.
- Integrate that interface with the WordPress admin area and the Formidable form builder.
- Save collected data to the database using an easily-accessible model.
- Integrate and automate display of that data into the current CHSIE Popups plugin.

This interface uses React for the UI and Redux for the data model; all data will be stored in a single serialized object within the database.
Alternatives were explored, but the key is to keep the data easily interoperable with other plugins and extensions for future use. The current build displays the Redux store to enable development of a watertight data model.  

Take a look!  I've included the current build folder in this repo, so the plugin should work just fine.

**To install the plugin:**
1. Download and extract it.
2. Enter the innermost `chsie-popups-master` folder, and zip the `chsie-popups` folder there.
3. Upload the zipped `chsie-popups.zip` you made like any other plugin, then activate it in WordPress.

If you're just interested in looking at the React/Redux app, find it in `chsie-popups/chsie-popups/admin/app`.
Be forewarned, it hasn't yet been ejected from Create React App.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), uses [React Spring](https://github.com/react-spring/react-spring) for animations, and [Styled Components](https://github.com/styled-components/styled-components) for CSS.  

It's a work in progress, so be gentle. :)
