/*
    Agenda : 
    -------
    1. De-structuring Objects
*/

const course = {
    courseName : "JS in hindi" ,
    price : "₹999",
    courseInstructor:"hitesh sir"
}

// Destructuring the object course :-
// let {object.property : variableName} = fromWhichObject
const {courseName : crs} = course ;
const {price : p} = course ;
const {courseInstructor : crsi} = course ;

console.log("CourseName : "+crs)
console.log("Price : "+p)
console.log("CourseInstructor : "+crsi) 


/*
    Destructuring is used heavily in React : 
    const navbar = ( {company} ) => {
        // note inside the () there is the place of props 
        // instead of wrtiting props.company all the time we destructured the props object 
        // and getting the company value which is needed directly 
    }

    navbar(company)
*/


/*
    API Introduction 
    ---------------
    > before the API used to return values in XML
    > Now the API respond back by sending JSON (JS object Notation) (which are nothing but objects)
    > Eg : 
            {
                "name" : "hitesh" ,
                "courseName" : "js in hindi" ,
                "price" : "₹999"
            }
    
    > Note that sometimes we also get arrays with a lot of objects within it

    > When we wnt to study the responses sent back by servers we can use online tools 
      like { JSON formatter } website and using the 'tree' structure
*/
