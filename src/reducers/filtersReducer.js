import _ from 'lodash'

import * as types from '../actions/types'

export default function reducer(state = {
    availableFoundations: [],
    selectedFoundations: [],
    searchField: '',
    selectedBuildpacks: [],
    availableBuildpacks: [],
    selectedAppStates: [],
    availableAppStates: [],
    sortBy: 'name-asc'
  }, action) {
    switch (action.type) {
      case types.FETCH_FOUNDATIONS_FULFILLED: {
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

      case types.FETCH_APP_FULFILLED: {
        let buildpacks = [...state.availableBuildpacks]
        buildpacks.push(action.payload.buildpack);
        buildpacks = _.uniq(buildpacks);

        let appStates = [...state.availableAppStates]
        appStates.push(action.payload.state)
        appStates = _.uniq(appStates);

        return {
          ...state,
          selectedBuildpacks: buildpacks,
          availableBuildpacks: buildpacks,
          selectedAppStates: appStates,
          availableAppStates: appStates
        }
      }

      case types.TOGGLE_FOUNDATION: {
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
      case types.SEARCH_FIELD_UPDATED: {
        return {
          ...state,
          searchField: action.payload
        }
      }

      case types.TOGGLE_BUILDPACK: {
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

      case types.TOGGLE_APP_STATE: {
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

      case types.SORT_UPDATED: {
        return {
          ...state,
          sortBy: action.payload
        }
      }

      default:
        return state;
    }
}
