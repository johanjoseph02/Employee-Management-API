# Employee Management API
### API to perform CRUD operations on a company's employee database

<br>
<div align="center">
  <img alt="srmkzilla" src="https://recruitments.kzilla.xyz/static/media/srmkzilla_logo_white.d48be4bc.svg" height="90" />
</div>
<br>
<div align="center">
  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
  <img alt="supabase" src="https://raw.githubusercontent.com/github/explore/f4ec5347a36e06540a69376753a7c37a8cb5a136/topics/supabase/supabase.png" height="50" />
  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
  <img alt="nodejs" src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" height="50" />
  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
  <img alt="typescript" src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" height="50" />
  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
  <img alt="express" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/express.svg" height="50" />
</div>

## Built with:
- Node.js
- Typescript
    - Statically typed language, preferred over traditional Java for its strict typing
- Express.js
    - Backend framework used to create RESTful APIs
- Supabase
    - An open-source PostgreSQL database, a Firebase alternative and self-hosted

## Deployed using Heroku:
https://employee-mgmt-kzilla.herokuapp.com/

## API Routes:
- GET: Search for an existing employee via email or unique ID
    - https://employee-mgmt-kzilla.herokuapp.com/api/search-employee?email=johanisrecruited@srmkzilla.xyz
- GET: Show all existing employees in database
    - https://employee-mgmt-kzilla.herokuapp.com/api/show-employees
- POST: Add new employee 
    - https://employee-mgmt-kzilla.herokuapp.com/api/add-employee
- PUT: Update existing emplyee via unique ID
    - https://employee-mgmt-kzilla.herokuapp.com/api/update-employee/id/t_KA6nvjenuQAb5qblMrCQbk
- DELETE: Delete existing employee via email 
    - https://employee-mgmt-kzilla.herokuapp.com/api/delete-employee/email
    - https://employee-mgmt-kzilla.herokuapp.com/api/delete-employee/id

### [SRMKZILLA Recruitments '22](https://recruitments.kzilla.xyz)