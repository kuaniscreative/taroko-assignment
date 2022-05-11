# Taroko Assignment

## Start
Make sure you have the [server](https://github.com/resumecompanion/taroko_server) running on port 3000.
If the server port has been changed, please sync the port number to `next.config.js`.

`$ yarn dev` to start development mode, port 3030.

## Structure
#### `/core` 
This is where you put your components, hooks and utils by feature.

#### `/pages`
Each page entry. The component here utilizes other components from `/core` to compose the page.

#### `/theme`
Design system related files live here.

#### `/ui`
UI components live here. Make sure they are not feature specific component, if so then they should be under `/core`.

#### `util`
Helpers, utility types go here

