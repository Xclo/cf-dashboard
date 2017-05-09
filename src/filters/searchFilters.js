export function filterApps(apps, filters) {
  if (apps.length === 0) return [];

  let filteredApps = apps.filter(function(app){
    if (filterBySearchField(app, filters)) {
      return true;
    } else {
      return false;
    }
  });
  return filteredApps;
}

export function filterBySearchField(app, filters) {
  let searchField = filters.searchField;
  if (searchField.length === 0) return true;
  return app.name.toLowerCase().search(searchField.toLowerCase()) !== -1
}
