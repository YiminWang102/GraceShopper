# CODE REVIEW 1

## README
	- What's in a good readme?

## Workflow
	- Establish an equitable commit ratio, sometimes pair programming will skew this
	- Work back to front. Robustly tested API before thinking about Front end
	- User Stories + Wireframes before tickets on FE
	- Writing good tickets 
	- 15 - 60 mins of work
	- As specific as possible (GET ROUTE FOR PRODUCT not PRODUCT ROUTES)
	- Semantic commit messages - you're half way there:

	   - the type of commit (feature, test, fix, style, refactor, etc.)
	   - the subject of the committed code
	   - a present-tense description of what the commited code does

## Routes
	- No tests? How do we test for auth?
	- Route tests - creating user classes in before Hook
	- Tdd
	- Great use of router.param for eager resolving of promises
	- How can we protect user updated by user class/ auth status?
	- Conventional Statuses = 200 for GET, 201 for POST 200 for PUT (204 if PUT works but no update nec), and 204 for DELETE
	- Refactor Order Put into more synchronous-looking promise chain
	


## Models
	- Bool instead of String on Cart status
	- take a SEAT (Stop Everything And Test)
	- Assemble array of promises and .all() them to calculate line item total
	- Why not have category as ENUM on product?
	- Why have Order belong to many Products (m : m) ?
	- Nice job avoiding Sequelize.ARRAY! 


