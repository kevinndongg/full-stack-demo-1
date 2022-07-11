import './Aboutme.css'

/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const Aboutme = props => {
  return (
    <>
      <img src="kevinchurch.jpg" alt="Kevin Dong" align="right"></img>
      <h1>Kevin Dong</h1>
      
      <p>
        Hi, my name is Kevin. I am an upcoming sophomore at Winston Churchill High School in Potomac, Maryland. 
        I have a passion for contest math, but I'm branching out and exploring new topics, including computer science. 
        I enjoy the thrill of solving a complex problem with peers. I'm excited to be a part of this amazing team to create a functional Kyros app!
      </p>
      
    </>
  )
}

// make this component available to be imported into any other file
export default Aboutme
