# NOTES - CR 2

### React
	- No tests? Why no TDD?
	- Awesome use of Dumb Components and Connect()
	- Google Auth broken on FE
	- Unnecessary {children} in Main (Login) Component
	- No nesting of routes
	- Ordering flow incomplete on MVP 

### Redux
	- Logging Middleware in DEV only
	- Why associations in Action creator?
	- CRUD actions for reviews/orders? Which are necessary?
	- Move constants outta Front end root

### Workflow
	- Move index.scss into public
	- Great Readme
	- No more direct commits to master (merges only)
	- Imbalanced commit ratio
	- Good User stories... Wireframes too? Front end ticketing is still somewhat uneven

### Deployment
	- NODE_ENV defaults to production, so specify development (which you've been doing)
	- Webpack can be dev dependency, and we can get rid of build process in postinstall... Not wrong, just want to discuss)
	- export NODE_ENV declarations

### Discussion
	- How will we architect new features?
