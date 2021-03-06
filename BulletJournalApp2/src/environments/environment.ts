// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig:{
    apiKey: "AIzaSyALiIn7JnDTU52ct4DWqNtse1Cz4jstDlA",
    authDomain: "bullet-journal-application.firebaseapp.com",
    databaseURL: "https://bullet-journal-application.firebaseio.com",
    projectId: "bullet-journal-application",
    storageBucket: "",
    messagingSenderId: "288971587196"
  }
};
