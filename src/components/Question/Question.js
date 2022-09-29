import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='ques-ans'>
            <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        How does React works?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Introduction to ReactJS:</strong>Let us understand this with a practical example.

Let’s say one of your friends posted a photograph on Facebook. Now you go and like the image and then you started checking out the comments too. Now while you are browsing over comments you see that the likes count has increased by 100, since you liked the picture, even without reloading the page. This magical count change is because of ReactJS. 
React is a declarative, efficient, and flexible JavaScript library for building user interfaces. ‘V’ denotes the view in MVC. ReactJS is an open-source, component-based front end library responsible only for the view layer of the application. It is maintained by Facebook.
React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes. The declarative view makes your code more predictable and easier to debug.
A React application is made of multiple components, each responsible for rendering a small, reusable piece of HTML. Components can be nested within other components to allow complex applications to be built out of simple building blocks. A component may also maintain an internal state – for example, a TabList component may store a variable corresponding to the currently open tab. 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
      What are the differences between props and state?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Difference between props and state:</strong>The Data is passed from one component to another.	The Data is passed within the component only.
It is Immutable (cannot be modified).	It is Mutable ( can be modified).
Props can be used with state and functional components.	State can be used only with the state components/class component (Before 16.0).
Props are read-only.	State is both read and write.
Points Discussed:
Props are used to pass data from one component to another.
The state is a local data storage that is local to the component only and cannot be passed to other components.
The this.setState property is used to update the state values in the component. 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
        What are the use cases of useEffect other than API calling?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>useEffect use cases</strong>
        1.Running once on mount: fetch API data
        2.Running on state change: validating input field
        3.Running on state change: live filtering
        4.Running on state change: trigger animation on new array value
        5.Running on props change: update paragraph list on fetched API data update
        6.Running on props change: updating fetched API data to get BTC updated price
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Question;