# sstm2/streamlit-aggrid dist 

This repo is used to host distributable wheels for our changes to streamlit-aggrid

# Usage Guide

To refer to a version of streamlit-aggrid in this repo...

1. Edit your requirements.txt
1. Add a line like: `streamlit-aggrid @ https://github.com/sstm2/streamlit-aggrid-dist/blob/main/dist/streamlit_aggrid-0.2.3.post2-py3-none-any.whl?raw=true`
  - You can get the URL by viewing the wheel from https://github.com/sstm2/streamlit-aggrid-dist/tree/main/ and copying the link to the "raw"
1. Update your virtual environment: `pip install -r requirements.txt`
1. Done!

# How To Add New Wheels

## Prerequisites
* You will need npm (node packaqge manager) installed. Easiest way on a Mac is `brew install nodejs`
* You will need poetry installed. `pip install poetry` in your base Python environment.

## Let's Go
1. Clone https://github.com/sstm2/streamlit-aggrid `git clone git@github.com:sstm2/streamlit-aggrid.git`
1. Change to the feature branch which has your changes or create a new branch for your changes
1. Make changes
1. Commit
1. Run the build: `npm run build`
1. The new wheel and package should be in dist/
1. Copy the wheel and egg to this repo.
1. Commit and push

