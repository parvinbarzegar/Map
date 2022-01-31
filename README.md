# Map project

## Technology used
- Typescript,
- SASS,
- BEM.

## Libraries
- react-leaflet, leaflet: creating the map,
- react-dom: creating the modal component using createportal that is a function to render children into a DOM node that exists outside the DOM hierarchy of the parent component,
- axios: reading data from the APIs,
- Jest: writing the unit tests,
- react testing library: used with Jest in unit tests.


## Performane notes:
- As we have 740 entities from the API, loading all markers on the map can be time consuming. To avoid performance issues, the locations that are NOT covered by the current map (not shown on the screen) are filtered out from retrieved harbor list. This strategy reduces the number of entities when loading markers on the map. Note that the new markers would be loaded when users move on the map (zoom in/out, moving to left/right/top/bottom).

- Markers' popup are only rendered when the user clicks on (select) a marker. Selecting a marker also calls our weather API to retrieve and show weather information.


