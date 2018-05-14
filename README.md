# angular-v6-playground
### Install & Build element
npm i
npm run build:elements

------------
### See it in action
Open *elements/demo.html*

------------
### Angular API to DOM API
**Angular API -> Elements -> DOM API
@Input('author') author: **string** ---> author="A author"
@Output('complete') complete: **EventEmitter**<string> --->
**document**.**getElementById****('anId').**addEventlistener**('complete', **function**(e) => {}, false);
