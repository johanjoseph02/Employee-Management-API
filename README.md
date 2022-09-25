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
    - https://employee-mgmt-kzilla.herokuapp.com/api/search-employee?email=johanisrecruited@srmkzilla.xyz<img width="1295" alt="search-employee" src="https://user-images.githubusercontent.com/69423830/192150534-7ffd8dfb-87c3-4f15-a9fd-9987a90cb7a5.png">

- GET: Show all existing employees in database
    - https://employee-mgmt-kzilla.herokuapp.com/api/show-employees<img width="1295" alt="show-employees" src="https://user-images.githubusercontent.com/69423830/192150570-4657f44e-5f45-41bb-b965-06a9ad573ef0.png">

- POST: Add new employee 
    - https://employee-mgmt-kzilla.herokuapp.com/api/add-employee<img width="1295" alt="add-employee" src="https://user-images.githubusercontent.com/69423830/192150588-686dc205-4f2f-43af-80b5-e3568ffebdf2.png">

- PUT: Update existing emplyee via unique ID
    - https://employee-mgmt-kzilla.herokuapp.com/api/update-employee/id/t_KA6nvjenuQAb5qblMrCQbk<img width="1295" alt="update-employee" src="https://user-images.githubusercontent.com/69423830/192150628-03bd2747-814f-482e-b599-c472aa1d7e1d.png">

- DELETE: Delete existing employee via email and unique ID
    - https://employee-mgmt-kzilla.herokuapp.com/api/delete-employee/email<img width="1295" alt="delete-employee-email" src="https://user-images.githubusercontent.com/69423830/192150645-993f65b7-2cbe-4290-aaf6-83920f94a96a.png">
    
    - https://employee-mgmt-kzilla.herokuapp.com/api/delete-employee/id<img width="1295" alt="delete-employee-id" src="https://user-images.githubusercontent.com/69423830/192150660-628630bc-458a-49d2-b929-421144cb9f9c.png">



### [SRMKZILLA Recruitments '22](https://recruitments.kzilla.xyz)
