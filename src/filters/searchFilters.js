export function filterApps(apps, filters) {
  if (apps.length === 0) return [];

  let filteredApps = apps.filter(function(app){
    if (
      filterBySearchField(app, filters) &&
      filterByFoundation(app, filters) &&
      filterByBuildpack(app, filters) &&
      filterByAppState(app, filters)
    ) {
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
  let pieces = searchField.split(' ');
  let matched = false;

  pieces.forEach(piece => {
    if (matchName(app, piece) || matchApi(app, piece) || matchBuildpack(app, piece)) {
      matched = true
    }
  })
  return matched

}

function filterByFoundation(app, filters) {
  let foundations = filters.selectedFoundations;
  let matched = false;
  foundations.forEach(foundation => {
    if (app.api === foundation) {
      matched = true;
    }
  });
  return matched;
}

function filterByBuildpack(app, filters) {
  let selectedBuildpacks = filters.selectedBuildpacks;
  let matched = false;
  selectedBuildpacks.forEach(buildpack => {
    if (app.buildpack.toLowerCase() === buildpack.toLowerCase()) {
      matched = true;
    }
  })
  return matched;
}

function filterByAppState(app, filters) {
  let selectedAppStates = filters.selectedAppStates;
  let matched = false;
  selectedAppStates.forEach(state => {
    if (app.state.toLowerCase() === state.toLowerCase()) {
      matched = true;
    }
  })
  return matched;
}

function matchName(app, piece) {
  return app.name.toLowerCase().search(piece.toLowerCase()) !== -1
}

function matchApi(app, piece) {
  return app.api.toLowerCase().search(piece.toLowerCase()) !== -1
}

function matchBuildpack(app, piece) {
  if (app.buildpack === null ) return true;
  return app.buildpack.toLowerCase().search(piece.toLowerCase()) !== -1
}
