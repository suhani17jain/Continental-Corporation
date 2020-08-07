# Installation
Run the following command to install dependencies.

```
npm install
```
# Run Locally
Run the following command to run locally
```
npm start
```

# Notes
- Dummy JSON data has been prepared in dashboard.json.
- API calls have been made in api.service.ts file.
- Record filtering and sorting functionality has been provided.
- Error handling has been done on API calls and validations have been provided on filtering of data.
- Native CSS and Angular Material are used for UI.
- As we do not have API which can give filtered results, we are performing filters locally. By using "dashboardData" and "displayData", 
  where "dashboardData" represents the entire filtered data and "displayData" limits what is shown on the UI. As infinite-scroll is implemented,
  eventually "displayData" will contain the entire content of dashboardData, after enough scrolls. If an API is provided this function could be 
  replaced with an API call to get data in chunks.

 # Versions
 - Node:  v12.18.3