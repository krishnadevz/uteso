import React from 'react'
import Card from 'react-bootstrap/Card'
 function projects() {
    return (
        <div className="projects"> 
          <b>Projects Section More On Github</b>
            <Card style={{ width: '18rem'}} className="projects">
         
  <Card.Body>
    <Card.Title>Reactjs Portfolio</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Portfolio In React</Card.Subtitle>
    <Card.Text>
i created portfolio in react you can use it for yours otherwise check it out .
    </Card.Text>
    <Card.Link href="https://github.com/krishnadevz/ReactPortfolio">Github Repo</Card.Link>
    <Card.Link href="https://npmiam.firebaseapp.com">Live Preview</Card.Link>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }} className="projects">
            <b>Projects Section2</b>
  <Card.Body >
    <Card.Title>React</Card.Title>
    <Card.Subtitle className="mb-2 text-muted ">ReactThings</Card.Subtitle>
    <Card.Text>
   This Repository includes my basic practice Scripts and some basic projects related to Reactjs
    </Card.Text>
    <Card.Link href="https://github.com/krishnadevz/ReactThings">Github Repo</Card.Link>
  </Card.Body>
</Card>
        </div>
    )
}
export default projects;