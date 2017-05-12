import _ from 'lodash'

import {
  SEARCH_FIELD_UPDATED,
  TOGGLE_FOUNDATION,
  FETCH_FOUNDATIONS_FULFILLED,
  TOGGLE_BUILDPACK,
  TOGGLE_APP_STATE,
  FETCH_APPS_FULFILLED
} from '../actions/types'

export default function reducer(state = {
    availableFoundations: [],
    selectedFoundations: [],
    searchField: '',
    selectedBuildpacks: [],
    availableBuildpacks: [],
    selectedAppStates: [],
    availableAppStates: []
  }, action) {
    switch (action.type) {
      case FETCH_FOUNDATIONS_FULFILLED: {
        //when foundations are initially loaded, select them all
        let foundations = [];
        action.payload.forEach((foundation) => {
          foundations.push(foundation.api)
        })

        return {
          ...state,
          availableFoundations: foundations,
          selectedFoundations: foundations
        }
      }

      case FETCH_APPS_FULFILLED: {
        let buildpacks = _.uniq(_.map(action.payload, app => {
          return app.buildpack;
        }));

        let appStates = _.uniq(_.map(action.payload, app => {
          return app.state;
        }));

        return {
          ...state,
          selectedBuildpacks: buildpacks,
          availableBuildpacks: buildpacks,
          selectedAppStates: appStates,
          availableAppStates: appStates
        }
      }

      case TOGGLE_FOUNDATION: {
        let foundations = [...state.selectedFoundations]
        if (foundations.indexOf(action.payload) !== -1) {
          foundations.splice(foundations.indexOf(action.payload), 1)
        } else {
          foundations.push(action.payload);
        }
        return {
          ...state,
          selectedFoundations: foundations
        }
      }
      case SEARCH_FIELD_UPDATED: {
        return {
          ...state,
          searchField: action.payload
        }
      }

      case TOGGLE_BUILDPACK: {
        let buildpacks = [...state.selectedBuildpacks]
        if (buildpacks.indexOf(action.payload) !== -1) {
          buildpacks.splice(buildpacks.indexOf(action.payload), 1)
        } else {
          buildpacks.push(action.payload);
        }
        return {
          ...state,
          selectedBuildpacks: buildpacks
        }
      }

      case TOGGLE_APP_STATE: {
        let appStates = [...state.selectedAppStates]
        if (appStates.indexOf(action.payload) !== -1) {
          appStates.splice(appStates.indexOf(action.payload), 1)
        } else {
          appStates.push(action.payload);
        }
        return {
          ...state,
          selectedAppStates: appStates
        }
      }

      default:
        return state;
    }
}
