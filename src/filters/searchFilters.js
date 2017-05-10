export function filterApps(apps, filters) {
  if (apps.length === 0) return [];

  let filteredApps = apps.filter(function(app){
    if (filterBySearchField(app, filters) && filterByFoundation(app, filters)) {
      return true;
    } else {
      return false;
    }
  });
  return filteredApps;
}

function filterBySearchField(app, filters) {
  let searchField = filters.searchField;
  if (searchField.length === 0) return true;
  return app.name.toLowerCase().search(searchField.toLowerCase()) !== -1
}

function filterByFoundation(app, filters) {
  let foundations = filters.foundations;
  let matched = false;
  foundations.forEach((foundation) => {
    if (app.api === foundation) {
      matched = true;
    }
  });
  return matched;
}
