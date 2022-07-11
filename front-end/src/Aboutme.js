import './Aboutme.css'

/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const Aboutme = props => {
  return (
    <>
      <h1>Kevin Dong</h1>
      <p>
        Hi, my name is Kevin. I am an upcoming sophomore at Winston Churchill High School in Potomac, Maryland. 
        I have a passion for contest math, but I'm branching out and exploring new topics, including computer science. 

      </p>
      <img src="kevinchurch.jpg"></img>
    </>
  )
}

// make this component available to be imported into any other file
export default Aboutme
