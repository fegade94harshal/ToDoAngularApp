// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  base_url:"http://localhost:8080/ToDo/",
  note_url:"http://localhost:8080/ToDo/note/",
  user_Url:"http://localhost:8080/ToDo/user/",
  forgotPass:"http://localhost:8080/ToDo/",
  register:"http://localhost:8080/ToDo/register"
};
