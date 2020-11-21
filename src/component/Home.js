import React, { Component } from 'react';
import * as Mui from '@material-ui/core';
import * as Micon from '@material-ui/icons';
import PersonIcon from '@material-ui/icons/Person';

class Home extends Component {
    render(){
        return (
            <div>
                <Mui.Container fixed>
                <Mui.Grid container spacing={3}>
                    <Mui.Grid item xs={2} style={{width: 100}}>
                        <br/>
                        <img src="/Wikipedia.png" style={{width: 110, marginRight: 130}}/>
                        <br/><br/>
                        <div style={{fontSize: 13}}>
                        <a href="#" style={{fontSize: 13}}>Main page<br/>
                        Contents<br/>
                        Current events<br/>
                        Random article<br/>
                        About Wikipedia<br/>
                        Contact us<br/>
                        Donate<br/> 
                        </a>
                        <br/>
                        Contribute<br/>
                        <hr/>
                        <a href="#" style={{fontSize: 13}}>
                        Help<br/>
                        Learn to edit<br/>
                        Community portal<br/>
                        Recent changes<br/>
                        Upload file<br/>
                        </a>
                        <br/>
                        Tools<br/>
                        <hr/>
                        <a href="#" style={{fontSize: 13}}>
                        What links here<br/>
                        Related changes<br/>
                        Special pages<br/>
                        Permanent link<br/>
                        Page information<br/>
                        Cite this page<br/>
                        Wikidata item<br/>
                        </a>
                        <br/>
                        Print/export<br/>
                        <hr/>
                        <a href="#" style={{fontSize: 13}}>
                        Download as PDF<br/>
                        Printable version<br/>
                        </a>
                        <br/>
                        Languages<br/>
                        <hr/>
                        <a href="#" style={{fontSize: 13}}>
                        العربية<br/>
                        Deutsch<br/>
                        Español<br/>
                        Français<br/>
                        हिन्दी<br/>
                        日本語<br/>
                        Português<br/>
                        Русский<br/>
                        中文</a><br/>
                        </div>
                    </Mui.Grid>
                    <Mui.Grid item xs={10}>
                        <h5 style={{textAlign: "right", fontWeight: 500}} >
                        <PersonIcon />
                                Not Logged In&nbsp;&nbsp;
                                <a href="#">Talk </a>&nbsp;&nbsp;
                                <a href="#">Contributions </a>&nbsp;&nbsp;
                                <a href="#">Create account </a>&nbsp;&nbsp;
                                <a href="#">Log in </a>&nbsp;&nbsp;
                         </h5> 
                        <Mui.Button variant="outlined" style={{width: 10, height: 20}}><a href="#" style={{color: "black"}}><h6>Article</h6></a></Mui.Button>
                        <Mui.Button variant="outlined" style={{width: 10, height: 20}}><a href="#" style={{color: "black"}}><h6>Talk</h6></a></Mui.Button>
                        <Mui.Button variant="outlined" style={{width: 10, height: 20, marginLeft: 426}}><a href="#" style={{color: "black"}}><h6>Read</h6></a></Mui.Button>
                        <Mui.Button variant="outlined" style={{width: 10, height: 20}}><a href="#" style={{color: "black"}}><h6>Edit</h6></a></Mui.Button>
                        <Mui.Button variant="outlined" style={{width: 100, height: 20}}><a href="#" style={{color: "black"}}><h6>View&nbsp;History</h6></a></Mui.Button>
                        <input type="text" placeholder="Search Wikipedia" id='search-text-input'></input>
                        <div id='button-holder'>
                            <img src='/search-512.png' />
                        </div>  
                        <Mui.Card variant="outlined" style={{width: 1022}}>
                        <Mui.CardContent>
                    <Mui.Typography variant="h4" component="h2" style={{fontFamily: "Times-new-roman"}}>
                        React (web framework)<hr/>
                    </Mui.Typography>
                            <p style={{fontWeight: 400, fontSize: 15}}>From Wikipedia, the free encyclopedia</p>
                            <p>React (also known as React.js or ReactJS) is an open-source, front end, 
                            JavaScript library[3] for building user interfaces or UI components. It is 
                            maintained by Facebook and a community of individual developers and companies.
                            [4][5][6] React can be used as a base in the development of single-page or 
                            mobile applications. However, React is only concerned with rendering data to 
                            the DOM, and so creating React applications usually requires the use of additional
                             libraries for state management and routing.[7][8] Redux[9] and React Router[10] 
                             are respective examples of such libraries.</p>

                            <Mui.Typography color="textSecondary">
                            adjective
                            </Mui.Typography>
                            <Mui.Typography variant="body2" component="p">
                            well meaning and kindly.
                            <br />
                            {'"a benevolent smile"'}
                            </Mui.Typography>
                            <br/><br/>
                            <Mui.Card variant="outlined" color="secondary" style={{width: 250}}>
                        <Mui.CardContent>
                            <Mui.Typography variant="p" component="p" style={{textAlign: "center", fontWeight: "bold", fontSize: 15}}>
                            Contents [hide]
                            </Mui.Typography>
                            <Mui.Typography container spacing={1} style={{textAlign: "left", fontSize: 13}}>
                            <p>1 <a href="#">Basic usage</a></p>
                            <p>2 <a href="#">	Notable features</a></p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;2.1 <a href="#">	Components</a></p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;2.2 <a href="#">	Functional components</a></p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;2.3 <a href="#">	Class-based components</a></p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;2.4 <a href="#">	Virtual DOM</a></p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;2.5 <a href="#">	Lifecycle methods</a></p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;2.6 <a href="#">	JSX</a></p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;2.7 <a href="#">	Architecture beyond HTML</a></p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;2.8 <a href="#">	React hooks</a></p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.8.1 <a href="#">	Rules of hooks</a></p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.8.2 <a href="#">	Custom hooks</a></p>
                            <p>3 <a href="#">	Common idioms</a></p>
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;3.1 <a href="#">	Use of the Flux architecture</a></p>
                            <p>4 <a href="#">	Future development</a></p>
                            <p>5 <a href="#">	History</a></p>
                            <p>6 <a href="#">	Licensing</a></p>
                            <p>7 <a href="#">	See also</a></p>
                            <p>8 <a href="#">	References</a></p>
                            <p>9 <a href="#">	External links</a></p>
                            </Mui.Typography>
                            <Mui.Typography variant="body2" component="p">
                            well meaning and kindly.
                            <br />
                            {'"a benevolent smile"'}
                            </Mui.Typography>
                        </Mui.CardContent>
                        </Mui.Card>
                        <br/>
                        <Mui.Card variant="outlined" flexGrow={1} style={{width: 250, align: "right"}}>
                        <Mui.CardContent>
                            <Mui.Typography variant="p" component="p" style={{textAlign: "center", fontWeight: "bold", fontSize: 15}}>
                            Contents [hide]
                            </Mui.Typography>
                            <Mui.Typography container spacing={1} style={{textAlign: "left", fontSize: 13}}>
                            <p>1 <a href="#">Basic usage</a></p>
                            <p>2 <a href="#">	Notable features</a></p>
                            </Mui.Typography>
                            <Mui.Typography variant="body2" component="p">
                            well meaning and kindly.
                            <br />
                            {'"a benevolent smile"'}
                            </Mui.Typography>
                        </Mui.CardContent>
                        </Mui.Card>
                        </Mui.CardContent>
                        <Mui.CardContent>
                        <br/>
                    <Mui.Typography variant="h5" component="h2" style={{fontFamily: "Times-new-roman"}}>
                        Basic Usage [edit]<hr/>
                    </Mui.Typography>
                    <p style={{fontWeight: 400, fontSize: 15}}>The following is a rudimentary example of React usage in HTML with JSX and JavaScript.</p>
                    <Mui.Card variant="outlined" style={{width: 900, align: "right", backgroundColor: "secondary"}}>
                        <Mui.CardContent>
                            <Mui.Typography>
                            1 &lt;div id="myReactApp"&gt;&lt;/div&gt;<br/>
                            2<br/>
                            3 &lt;script type="text/babel"&gt;<br/>
                            4 &nbsp;&nbsp;function Greeter(props) [<br/>
                            5 &nbsp;&nbsp;&nbsp;&nbsp;  return &lt;h1&gt;[props.greeting]&lt;/h1&gt;<br/>
                            6 &nbsp;&nbsp;]<br/>
                            7 &nbsp;&nbsp;var App = &lt;Greeter greeting="Hello World!" /&gt;;<br/>
                            8 &nbsp;&nbsp;ReactDOM.render(App, document.getElementById('myReactApp'));<br/>
                            9 &lt;/script&gt;
                            </Mui.Typography>
                        </Mui.CardContent>
                        </Mui.Card>
                        <p style={{fontWeight: 400, fontSize: 15}}>The Greeter function is a React component that accepts a property greeting. 
                        The variable App is an instance of the Greeter component where the greeting property is set to 'Hello World!'. 
                        The ReactDOM.render method then renders our Greeter component inside the DOM element with id myReactApp.
                        When displayed in a web browser the result will be</p>
                        <Mui.Card variant="outlined" style={{width: 900, align: "right", backgroundColor: "secondary"}}>
                        <Mui.CardContent>
                            <Mui.Typography>
                            1 &lt;div id="myReactApp"&gt;&lt;/div&gt;<br/>
                            2 &lt;h1&gt;Hello World!&lt;/h1&gt;
                            3 &lt;/div&gt;
                            </Mui.Typography>
                        </Mui.CardContent>
                        </Mui.Card>
                        <br/>
                    <Mui.Typography variant="h5" component="h2" style={{fontFamily: "Times-new-roman"}}>
                         Notable features [edit]<hr/>
                    </Mui.Typography>
                    <h3>Components [edit]</h3>
                    <p style={{fontWeight: 400, fontSize: 15}}>
                    React code is made of entities called components. 
                    Components can be rendered to a particular element in the DOM using the React DOM library.
                    When rendering a component, one can pass in values that are known as "props"[11]:
                    </p>
                    <Mui.Card variant="outlined" style={{width: 900, align: "right", backgroundColor: "secondary"}}>
                        <Mui.CardContent>
                            <Mui.Typography>
                            ReactDOM.render(&lt;Greeter greeting="Hello World!" /&gt;, document.getElementById('myReactApp'));
                            </Mui.Typography>
                        </Mui.CardContent>
                        </Mui.Card>
                        <p style={{fontWeight: 400, fontSize: 15}}>
                        The two primary ways of declaring components in React is via functional components and class-based components.
                        </p>
                        <h3>Functional components [edit]</h3>
                        <p style={{fontWeight: 400, fontSize: 15}}>
                        Functional components are declared with a function that then returns some JSX.
                        </p>
                        <Mui.Card variant="outlined" style={{width: 900, align: "right", backgroundColor: "secondary"}}>
                            <Mui.CardContent>
                        <Mui.Typography>
                            const Greeting = (props) =&gt; &lt;div&gt;Hello, [props.name]!&lt;/div&gt;;
                        </Mui.Typography>
                        </Mui.CardContent>
                        </Mui.Card>
                        <h3>Class-based components [edit]</h3>
                        <p style={{fontWeight: 400, fontSize: 15}}>
                        Class-based components are declared using ES6 classes.
                        </p>
                        <Mui.Card variant="outlined" style={{width: 900, align: "right", backgroundColor: "secondary"}}>
                            <Mui.CardContent>
                        <Mui.Typography>
                        class ParentComponent extends React.Component [<br/>
                        &nbsp;&nbsp;    state = [ color: 'green' ];<br/>
                        &nbsp;&nbsp;   render() [<br/>
                        &nbsp;&nbsp;&nbsp;        return (<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;        &lt;ChildComponent color=[this.state.color] /&gt;<br/>
                        &nbsp;&nbsp;&nbsp;        );<br/>
                        &nbsp;&nbsp;        ]<br/>
                        &nbsp;    ]
                        </Mui.Typography>
                        </Mui.CardContent>
                        </Mui.Card>
                        <h3>Virtual DOM [edit]</h3>
                        <p style={{fontWeight: 400, fontSize: 15}}>
                        Another notable feature is the use of a virtual Document Object Model, or virtual DOM. 
                        React creates an in-memory data-structure cache, computes the resulting differences, 
                        and then updates the browser's displayed DOM efficiently.[12]. This process is called 
                        reconciliation. This allows the programmer to write code as if the entire page is 
                        rendered on each change, while the React libraries only render subcomponents that 
                        actually change. This selective rendering provides a major performance boost. It saves 
                        the effort of recalculating the CSS style, layout for the page and rendering for the 
                        entire page.
                        </p>
                        <h3>Lifecycle methods [edit]</h3>
                        <p style={{fontWeight: 400, fontSize: 15}}>
                        Lifecycle methods use a form of hooking that allows the execution of code at set 
                        points during a component's lifetime.
                        </p>
                        <ul style={{fontWeight: 400, fontSize: 15}}>
                            <li>shouldComponentUpdate allows the developer to prevent unnecessary re-rendering of a component 
                                by returning false if a render is not required.</li>
                            <li>componentDidMount is called once the component has "mounted" (the component has been created 
                                in the user interface, often by associating it with a DOM node). 
                                This is commonly used to trigger data loading from a remote source via an API.</li>
                            <li>componentWillUnmount is called immediately before the component is torn down or "unmounted". 
                                This is commonly used to clear resource-demanding dependencies to the component that will not 
                                simply be removed with the unmounting of the component (e.g., removing any setInterval() instances 
                                that are related to the component, or an "eventListener" set on the "document" because of the presence 
                                of the component)</li>
                            <li>render is the most important lifecycle method and the only required one in any component. 
                                It is usually called every time the component's state is updated, which should be reflected 
                                in the user interface.</li>
                        </ul>
                        <h3>JSX [edit]</h3>
                        <p style={{fontWeight: 400, fontSize: 15}}>
                        JSX, or JavaScript XML, is an extension to the JavaScript language syntax.[13] Similar in appearance 
                        to HTML, JSX provides a way to structure component rendering using syntax familiar to many developers. 
                        React components are typically written using JSX, although they do not have to be (components may also
                         be written in pure JavaScript). JSX is similar to another extension syntax created by Facebook for PHP 
                         called XHP.
                        </p>
                        <p style={{fontWeight: 400, fontSize: 15}}>
                        An example of JSX code:
                        </p>
                        <Mui.Card variant="outlined" style={{width: 900, align: "right", backgroundColor: "secondary"}}>
                            <Mui.CardContent>
                        <Mui.Typography> 
                        1 class App extends React.Component [<br/>
                        2 &nbsp;&nbsp; render() [<br/>
                        3 &nbsp;&nbsp;&nbsp;   return (<br/>
                        4 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &lt;div&gt;<br/>
                        5 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &lt;p&gt;Header&lt;/p&gt;<br/>
                        6 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &lt;p&gt;Content&lt;/p&gt;<br/>
                        7 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &lt;p&gt;Footer&lt;/p&gt;<br/>
                        8 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   &lt;/div&gt;<br/>
                        9 &nbsp;&nbsp;&nbsp;   );<br/>
                        10 &nbsp;&nbsp;]<br/>
                        11 ]
                        </Mui.Typography>
                        </Mui.CardContent>
                        </Mui.Card>
                        <p style={{fontWeight: 600, fontSize: 15}}>
                        Nested elements
                        </p>
                        <p style={{fontWeight: 400, fontSize: 15}}>
                        Multiple elements on the same level need to be wrapped in a single React element such 
                        as the &lt;div&gt; element shown above, a fragment delineated by &lt;Fragment&gt; or 
                        in its shorthand form &lt;&gt;, or returned as an array.[14][15]
                         </p>
                         <br/><br/>
                         <p style={{fontWeight: 600, fontSize: 15}}>
                         Attributes
                         </p>
                        <p style={{fontWeight: 400, fontSize: 15}}>
                        JSX provides a range of element attributes designed to mirror those provided by HTML. 
                        Custom attributes can also be passed to the component.
                        [16] All attributes will be received by the component as props.
                        </p>
                        <p style={{fontWeight: 600, fontSize: 15}}>
                        JavaScript expressions 
                        </p>
                        <p style={{fontWeight: 400, fontSize: 15}}>
                        JavaScript expressions (but not statements) can be used inside JSX with curly brackets []:
                        </p>
                        <Mui.Card variant="outlined" style={{width: 900, align: "right", backgroundColor: "secondary"}}>
                        <Mui.CardContent>
                            <Mui.Typography>
                            &lt;h1&gt;[10+1]&lt;/h1&gt;
                            </Mui.Typography>
                        </Mui.CardContent>
                        </Mui.Card>
                        <p style={{fontWeight: 400, fontSize: 15}}>
                        The example above will render
                        </p>
                        <Mui.Card variant="outlined" style={{width: 900, align: "right", backgroundColor: "secondary"}}>
                        <Mui.CardContent>
                            <Mui.Typography>
                            &lt;h1&gt;11&lt;/h1&gt;
                            </Mui.Typography>
                        </Mui.CardContent>
                        </Mui.Card>
                        <p style={{fontWeight: 600, fontSize: 15}}>
                        Conditional statements
                        </p>
                        <p style={{fontWeight: 400, fontSize: 15}}>
                        If–else statements cannot be used inside JSX but conditional expressions can be used instead. 
                        The example below will render [ i === 1 ? 'true' : 'false' ] as the string 'true' because i is equal to 1.
                        </p>
                        <Mui.Card variant="outlined" style={{width: 900, align: "right", backgroundColor: "secondary"}}>
                        <Mui.CardContent>
                            <Mui.Typography>
                            1 class App extends React.Component [<br/>
                            2 &nbsp;&nbsp; render() [<br/>
                            3 &nbsp;&nbsp;&nbsp;&nbsp;    const i = 1;<br/>
                            4 &nbsp;&nbsp;&nbsp;&nbsp;    return (<br/>
                            5 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;div&gt;<br/>
                            6 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;h1&gt;[ i === 1 ? 'true' : 'false' ]&lt;/h1&gt;<br/>
                            7 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;/div&gt;<br/>
                            8 &nbsp;&nbsp;&nbsp;&nbsp;     );<br/>
                            9 &nbsp;&nbsp; ]
                            10 ]
                        </Mui.Typography>
                        </Mui.CardContent>
                        </Mui.Card>
                        <p style={{fontWeight: 400, fontSize: 15}}>
                        The above will render
                        </p>
                        <Mui.Card variant="outlined" style={{width: 900, align: "right", backgroundColor: "secondary"}}>
                        <Mui.CardContent>
                            <Mui.Typography>
                            &lt;div&gt;<br/>
                              &nbsp;&nbsp;&lt;h1&gt;true&lt;/h1&gt;<br/>
                            &lt;/div&gt;
                            </Mui.Typography>
                        </Mui.CardContent>
                        </Mui.Card>
                        <p style={{fontWeight: 400, fontSize: 15}}>
                        The above will render
                        </p>
                        <Mui.Card variant="outlined" style={{width: 900, align: "right", backgroundColor: "secondary"}}>
                        <Mui.CardContent>
                            <Mui.Typography>
                            &lt;div&gt;<br/>
                              &nbsp;&nbsp;&lt;h1&gt;true&lt;/h1&gt;<br/>
                            &lt;/div&gt;
                            </Mui.Typography>
                        </Mui.CardContent>
                        </Mui.Card>
                        <p style={{fontWeight: 400, fontSize: 15}}>
                        Functions and JSX can be used in conditionals:
                        </p>
                        <Mui.Card variant="outlined" style={{width: 900, align: "right", backgroundColor: "secondary"}}>
                        <Mui.CardContent>
                            <Mui.Typography>
                            1 class App extends React.Component [<br/>
                            2 &nbsp;&nbsp;&nbsp;&nbsp;render() [<br/>
                            3 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; const sections = [1, 2, 3];<br/>
                            4 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; return (<br/>
                            5 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;div&gt;<br/>
                            6 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [sections.length &gt; 0 && sections.map(n =&gt; ( <br/>
                            7 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; /* 'key' is used by react to keep track of list items and their changes */<br/>
                            8 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; /* Each 'key' must be unique */<br/>
                            9 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;div key=["section-" + n]&gt;Section [n]&lt;/div&gt;<br/>
                            10 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ))]<br/>
                            11 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;/div&gt;<br/>
                            12 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   );<br/>
                            13 &nbsp;&nbsp;&nbsp;&nbsp;       ]<br/>
                            14 ]
                            </Mui.Typography>
                        </Mui.CardContent>
                        </Mui.Card>
                        <p style={{fontWeight: 400, fontSize: 15}}>
                        The above will render
                        </p>
                        <Mui.Card variant="outlined" style={{width: 900, align: "right", backgroundColor: "secondary"}}>
                        <Mui.CardContent>
                            <Mui.Typography>
                            &lt;div&gt;<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;Section 1&lt;/div&gt;<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;Section 2&lt;/div&gt;<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;Section 3&lt;/div&gt;<br/>
                            &lt;/div&gt;
                            </Mui.Typography>
                        </Mui.CardContent>
                        </Mui.Card>
                        <p style={{fontWeight: 400, fontSize: 15}}>
                        Code written in JSX requires conversion with a tool such as Babel before it can be understood by web browsers.[17] 
                        This processing is generally performed during a software build process before the application is deployed.
                        </p>
                         <h3>Architecture beyond HTML</h3>
                         <p style={{fontWeight: 400, fontSize: 15}}>
                        The basic architecture of React applies beyond rendering HTML in the browser. For example, Facebook has dynamic charts that render to &lt;canvas&gt; tags,[18] and Netflix and PayPal use universal loading to render identical HTML on both the server and client.[19][20]
                         </p>
                         <h3>React hooks</h3>
                         <p style={{fontWeight: 400, fontSize: 15}}>
                        Hooks are functions that let developers "hook into" React state and lifecycle features from function components.[21] They make code readable and easily understandable. Hooks don’t work inside classes — they let you use React without classes.[22]
                         </p>
                        <p style={{fontWeight: 400, fontSize: 15}}>
                        React provides a few built-in Hooks like useState,[23] useContext, useReducer and useEffect[24] to name a few. They are all stated in the Hooks API Reference.[25] useState and useEffect, which are the most used, are for controlling states and side effects respectively in React Components.
                         </p>
                        <p style={{fontWeight: 600, fontSize: 15}}>
                        Rules of hooks
                         </p>
                        <p style={{fontWeight: 400, fontSize: 15}}>
                        There are also rules of hooks[26] which must be followed before they can be used.
                         </p>
                         <ol style={{fontWeight: 400, fontSize: 15}}>
                             <li>Hooks should only be called at the top level (not inside loops or if statements).</li>
                             <li>Hooks should only be called from React function components, not normal functions or class components</li>
                         </ol>
                        <p style={{fontWeight: 600, fontSize: 15}}>
                        Custom hooks
                         </p>
                        <p style={{fontWeight: 400, fontSize: 15}}>
                        Building your own hooks[27] which are called custom hooks lets you extract component logic into reusable functions. A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks. The rules of hooks also apply to them i.e, custom hooks should be written in compliance with the rules enforced by React or else there will be high chance of breaking the code's integrity. Check the following link to learn the rules for creating the custom hooks.
                         </p>
                         <Mui.Typography variant="h5" component="h2" style={{fontFamily: "Times-new-roman"}}>
                         Common idioms [edit]<hr/>
                         </Mui.Typography>
                         <p style={{fontWeight: 400, fontSize: 15}}>
                         React does not attempt to provide a complete "application library". It is designed specifically for building user interfaces[3] and therefore does not include many of the tools some developers might consider necessary to build an application. This allows the choice of whichever libraries the developer prefers to accomplish tasks such as performing network access or local data storage. Common patterns of usage have emerged as the library matures.
                         </p>
                         <h3>Use of the Flux architecture [edit]</h3>
                         <p style={{fontWeight: 400, fontSize: 15}}>
                         To support React's concept of unidirectional data flow (which might be contrasted with AngularJS's bidirectional flow), the Flux architecture represents an alternative to the popular model-view-controller architecture. Flux features actions which are sent through a central dispatcher to a store, and changes to the store are propagated back to the view.[28] When used with React, this propagation is accomplished through component properties.
                         </p>
                         <p style={{fontWeight: 400, fontSize: 15}}>
                         Flux can be considered a variant of the observer pattern.[29]
                         </p>
                         <p style={{fontWeight: 400, fontSize: 15}}>
                         A React component under the Flux architecture should not directly modify any props passed to it, but should be passed callback functions that create actions which are sent by the dispatcher to modify the store. The action is an object whose responsibility is to describe what has taken place: for example, an action describing one user "following" another might contain a user id, a target user id, and the type USER_FOLLOWED_ANOTHER_USER.[30] The stores, which can be thought of as models, can alter themselves in response to actions received from the dispatcher.
                         </p>
                         <p style={{fontWeight: 400, fontSize: 15}}>
                         This pattern is sometimes expressed as "properties flow down, actions flow up". Many implementations of Flux have been created since its inception, perhaps the most well-known being Redux, which features a single store, often called a single source of truth.[31]
                         </p>
                         <Mui.Typography variant="h5" component="h2" style={{fontFamily: "Times-new-roman"}}>
                         Future development [edit]<hr/>
                         </Mui.Typography>
                         <p style={{fontWeight: 400, fontSize: 15}}>
                         Project status can be tracked via the core team discussion forum.[32] However, major changes to React go through the Future of React repository issues and pull requests.[33][34] This enables the React community to provide feedback on new potential features, experimental APIs and JavaScript syntax improvements.
                         </p>
                         <Mui.Typography variant="h5" component="h2" style={{fontFamily: "Times-new-roman"}}>
                         History [edit]<hr/>
                         </Mui.Typography>
                         <p style={{fontWeight: 400, fontSize: 15}}>
                        React was created by Jordan Walke, a software engineer at Facebook, who released an early prototype of React called "FaxJS".[35][36] He was influenced by XHP, an HTML component library for PHP. It was first deployed on Facebook's News Feed in 2011 and later on Instagram in 2012.[37] It was open-sourced at JSConf US in May 2013.[36]
                          </p>
                         <p style={{fontWeight: 400, fontSize: 15}}>
                         React Native, which enables native Android, iOS, and UWP development with React, was announced at Facebook's React Conf in February 2015 and open-sourced in March 2015.
                         </p>
                         <p style={{fontWeight: 400, fontSize: 15}}>
                         On April 18, 2017, Facebook announced React Fiber, a new core algorithm of React library for building user interfaces.[38] React Fiber was to become the foundation of any future improvements and feature development of the React library.[39][needs update]
                         </p>
                         <p style={{fontWeight: 400, fontSize: 15}}>
                         On September 26, 2017, React 16.0 was released to the public.[40]
                         </p>
                         <p style={{fontWeight: 400, fontSize: 15}}>
                         On February 16, 2019, React 16.8 was released to the public.[41] The release introduced React Hooks.[42]
                         </p>
                         <p style={{fontWeight: 400, fontSize: 15}}>
                         On August 10, 2020, the React team announced the first release candidate for React v17.0, notable as the first major release without major changes to the React developer-facing API.[43]
                         </p>
                         <p style={{fontWeight: 600, fontSize: 15, textAlign: "center"}}>
                            Versions
                         </p> 
                         <table style={{fontWeight: 400, fontSize: 15}}
                                orientation="vertical"
                                color="primary"
                                aria-label="vertical outlined primary button group"
                         >
                          <thead>
                            <tr>
                                <th>Version</th>
                                <th>Release Date</th>
                                <th>Changes</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                                <td>0.3.0</td>
                                <td>29 May 2013</td>
                                <td>Initial Public Release</td>
                            </tr>
                            <tr>
                                <td>0.4.0</td>
                                <td>20 July 2013</td>
                                <td>Support for comment nodes &lt;div&gt;{/* */}&lt;/div&gt;, Improved server-side rendering APIs, Removed React.autoBind, Support for the key prop, Improvements to forms, Fixed bugs.</td>
                            </tr>
                            <tr>
                                <td>0.5.0</td>
                                <td>20 October 2013</td>
                                <td>Improve Memory usage, Support for Selection and Composition events, Support for getInitialState and getDefaultProps in mixins, Added React.version and React.isValidClass, Improved compatibility for Windows.</td>
                            </tr>
                            <tr>
                                <td>0.8.0</td>
                                <td>20 December 2013</td>
                                <td>Added support for rows &amp; cols, defer &amp; async, loop for &lt;audio&gt; &amp; &lt;video&gt;, autoCorrect attributes. Added onContextMenu events, Upgraded jstransform and esprima-fb tools, Upgraded browserify.</td>
                            </tr>
                            <tr>
                                <td>0.9.0</td>
                                <td>20 February 2014</td>
                                <td>Added support for crossOrigin, download and hrefLang, mediaGroup and muted, sandbox, seamless, and srcDoc, scope attributes, Added any, arrayOf, component, oneOfType, renderable, shape to React.PropTypes, Added support for onMouseOver and onMouseOut event, Added support for onLoad and onError on &lt;img&gt; elements.
                                </td>
                            </tr>
                            <tr>
                                <td>0.10.0</td>
                                <td>21 March 2014</td>
                                <td>Added support for srcSet and textAnchor attributes, add update function for immutable data, Ensure all void elements don't insert a closing tag.</td>
                            </tr>
                            <tr>
                                <td>0.11.0</td>
                                <td>17 July 2014</td>
                                <td>Improved SVG support, Normalized e.view event, Update $apply command, Added support for namespaces, Added new transformWithDetails API, includes pre-built packages under dist/, MyComponent() now returns a descriptor, not an instance.</td>
                            </tr>
                            <tr>
                                <td>0.12.0</td>
                                <td>21 November 2014</td>
                                <td>Added new features Spread operator ([...]) introduced to deprecate this.transferPropsTo, Added support for acceptCharset, classID, manifest HTML attributes, React.addons.batchedUpdates added to API, @jsx React.DOM no longer required, Fixed issues with CSS Transitions.</td>
                            </tr>
                            <tr>
                            <td>0.13.0
                            </td>
                            <td>10 March 2015
                            </td>
                            <td>Deprecated patterns that warned in 0.12 no longer work, ref resolution order has changed, Removed properties this._pendingState and this._rootNodeID, Support ES6 classes, Added API React.findDOMNode(component), Support for iterators and immutable-js sequences, Added new features React.addons.createFragment, deprecated React.addons.classSet.
                            </td></tr>
                            <tr>
                            <td>0.14.1
                            </td>
                            <td>29 October 2015
                            </td>
                            <td>Added support for srcLang, default, kind attributes, and color attribute, Ensured legacy .props access on DOM nodes, Fixed scryRenderedDOMComponentsWithClass, Added react-dom.js.
                            </td></tr>
                            <tr>
                            <td>15.0.0
                            </td>
                            <td>07 April 2016
                            </td>
                            <td>Initial render now uses document.createElement instead of generating HTML, No more extra &lt;span&gt;s, Improved SVG support, ReactPerf.getLastMeasurements() is opaque, New deprecations introduced with a warning, Fixed multiple small memory leaks, React DOM now supports the cite and profile HTML attributes and cssFloat, gridRow and gridColumn CSS properties.
                            </td></tr>
                            <tr>
                            <td>15.1.0
                            </td>
                            <td>20 May 2016
                            </td>
                            <td>Fix a batching bug, Ensure use of the latest object-assign, Fix regression, Remove use of merge utility, Renamed some modules.
                            </td></tr>
                            <tr>
                            <td>15.2.0
                            </td>
                            <td>01 July 2016
                            </td>
                            <td>Include component stack information, Stop validating props at mount time, Add React.PropTypes.symbol, Add onLoad handling to &lt;link&gt; and onError handling to &lt;source&gt; element, Add isRunning() API, Fix performance regression.
                            </td></tr>
                            <tr>
                            <td>15.3.0
                            </td>
                            <td>30 July 2016
                            </td>
                            <td>Add React.PureComponent, Fix issue with nested server rendering, Add xmlns, xmlnsXlink to support SVG attributes and referrerPolicy to HTML attributes, updates React Perf Add-on, Fixed issue with ref.
                            </td></tr>
                            <tr>
                            <td>15.3.1
                            </td>
                            <td>19 August 2016
                            </td>
                            <td>Improve performance of development builds, Cleanup internal hooks, Upgrade fbjs, Improve startup time of React, Fix memory leak in server rendering, fix React Test Renderer, Change trackedTouchCount invariant into a console.error.
                            </td></tr>
                            <tr>
                            <td>15.4.0
                            </td>
                            <td>16 November 2016
                            </td>
                            <td>React package and browser build no longer includes React DOM, Improved development performance, Fixed occasional test failures, update batchedUpdates API, React Perf, and ReactTestRenderer.create().
                            </td></tr>
                            <tr>
                            <td>15.4.1
                            </td>
                            <td>23 November 2016
                            </td>
                            <td>Restructure variable assignment, Fixed event handling, Fixed compatibility of browser build with AMD environments.
                            </td></tr>
                            <tr>
                            <td>15.4.2
                            </td>
                            <td>06 January 2017
                            </td>
                            <td>Fixed build issues, Added missing package dependencies, Improved error messages.
                            </td></tr>
                            <tr>
                            <td>15.5.0
                            </td>
                            <td>07 April 2017
                            </td>
                            <td>Added react-dom/test-utils, Removed peerDependencies, Fixed issue with Closure Compiler, Added a deprecation warning for React.createClass and React.PropTypes, Fixed Chrome bug.
                            </td></tr>
                            <tr>
                            <td>15.5.4
                            </td>
                            <td>11 April 2017
                            </td>
                            <td>Fix compatibility with Enzyme by exposing batchedUpdates on shallow renderer, Update version of prop-types, Fix react-addons-create-fragment package to include loose-envify transform.
                            </td></tr>
                            <tr>
                            <td>15.6.0
                            </td>
                            <td>13 June 2017
                            </td>
                            <td>Add support for CSS variables in style attribute and Grid style properties, Fix AMD support for addons depending on react, Remove unnecessary dependency, Add a deprecation warning for React.createClass and React.DOM factory helpers.
                            </td></tr>
                            <tr>
                            <td>16.0.0
                            </td>
                            <td>26 September 2017
                            </td>
                            <td>Improved error handling with introduction of "error boundaries", React DOM allows passing non-standard attributes, Minor changes to setState behavior, remove react-with-addons.js build, Add React.createClass as create-react-class, React.PropTypes as prop-types, React.DOM as react-dom-factories, changes to the behavior of scheduling and lifecycle methods.
                            </td></tr>
                            <tr>
                            <td>16.1.0
                            </td>
                            <td>9 November 2017
                            </td>
                            <td>Discontinuing Bower Releases, Fix an accidental extra global variable in the UMD builds, Fix onMouseEnter and onMouseLeave firing, Fix &lt;textarea&gt; placeholder, Remove unused code, Add a missing package.json dependency, Add support for React DevTools.
                            </td></tr>
                            <tr>
                            <td>16.3.0
                            </td>
                            <td>29 March 2018
                            </td>
                            <td>Add a new officially supported context API, Add new packagePrevent an infinite loop when attempting to render portals with SSR, Fix an issue with this.state, Fix an IE/Edge issue.
                            </td></tr>
                            <tr>
                            <td>16.3.1
                            </td>
                            <td>03 April 2018
                            </td>
                            <td>Prefix private API, Fix performance regression and error handling bugs in development mode, Add peer dependency, Fix a false positive warning in IE11 when using Fragment.
                            </td></tr>
                            <tr>
                            <td>16.3.2
                            </td>
                            <td>16 April 2018
                            </td>
                            <td>Fix an IE crash, Fix labels in User Timing measurements, Add a UMD build, Improve performance of unstable_observedBits API with nesting.
                            </td></tr>
                            <tr>
                            <td>16.4.0
                            </td>
                            <td>24 May 2018
                            </td>
                            <td>Add support for Pointer Events specification, Add the ability to specify propTypes, Fix reading context, Fix the getDerivedStateFromProps() support, Fix a testInstance.parent crash, Add React.unstable_Profiler component for measuring performance, Change internal event names.
                            </td></tr>
                            <tr>
                            <td>16.5.0
                            </td>
                            <td>05 September 2018
                            </td>
                            <td>Add support for React DevTools Profiler, Handle errors in more edge cases gracefully, Add react-dom/profiling, Add onAuxClick event for browsers, Add movementX and movementY fields to mouse events, Add tangentialPressure and twist fields to pointer event.
                            </td></tr>
                            <tr>
                            <td>16.6.0
                            </td>
                            <td>23 October 2018
                            </td>
                            <td>Add support for contextType, Support priority levels, continuations, and wrapped callbacks, Improve the fallback mechanism, Fix gray overlay on iOS Safari, Add React.lazy() for code splitting components.
                            </td></tr>
                            <tr>
                            <td>16.7.0
                            </td>
                            <td>20 December 2018
                            </td>
                            <td>Fix performance of React.lazy for lazily-loaded components, Clear fields on unmount to avoid memory leaks, Fix bug with SSR, Fix a performance regression.
                            </td></tr>
                            <tr>
                            <td>16.8.0
                            </td>
                            <td>06 February 2019
                            </td>
                            <td>Add Hooks, Add ReactTestRenderer.act() and ReactTestUtils.act() for batching updates, Support synchronous thenables passed to React.lazy(), Improve useReducer Hook lazy initialization API.
                            </td></tr>
                            <tr>
                            <td>16.8.6
                            </td>
                            <td>27 March 2019
                            </td>
                            <td>Fix an incorrect bailout in useReducer(), Fix iframe warnings in Safari DevTools, Warn if contextType is set to Context.Consumer instead of Context, Warn if contextType is set to invalid values.
                            </td></tr>
                            <tr>
                            <td>16.9.0
                            </td>
                            <td>9 August 2019
                            </td>
                            <td>Add &lt;React.Profiler&gt; API for gathering performance measurements programmatically. Remove unstable_ConcurrentMode in favor of unstable_createRoot
                            </td></tr>
                            <tr>
                            <td>16.10.0
                            </td>
                            <td>27 September 2019
                            </td>
                            <td>Fix edge case where a hook update wasn't being memoized. Fix heuristic for determining when to hydrate, so we don't incorrectly hydrate during an update. Clear additional fiber fields during unmount to save memory. Fix bug with required text fields in Firefox. Prefer Object.is instead of inline polyfill, when available. Fix bug when mixing Suspense and error handling.
                            </td></tr>
                            <tr>
                            <td>16.10.1
                            </td>
                            <td>28 September 2019
                            </td>
                            <td>Fix regression in Next.js apps by allowing Suspense mismatch during hydration to silently proceed
                            </td></tr>
                            <tr>
                            <td>16.10.2
                            </td>
                            <td>3 October 2019
                            </td>
                            <td>Fix regression in react-native-web by restoring order of arguments in event plugin extractors
                            </td></tr>
                            <tr>
                            <td>16.11.0
                            </td>
                            <td>22 October 2019
                            </td>
                            <td>Fix mouseenter handlers from firing twice inside nested React containers. Remove unstable_createRoot and unstable_createSyncRoot experimental APIs. (These are available in the Experimental channel as createRoot and createSyncRoot.)
                            </td></tr>
                            <tr>
                            <td>16.12.0
                            </td>
                            <td>14 November 2019
                            </td>
                            <td>React DOM - Fix passive effects (<code>useEffect</code>) not being fired in a multi-root app.
                            <p>React Is - Fix <code>lazy</code> and <code>memo</code> types considered elements instead of components
                            </p>
                            </td></tr>
                            <tr>
                            <td>16.13.0
                            </td>
                            <td>26 February 2020
                            </td>
                            <td>Features added in React Concurrent mode.
                            <p>Fix regressions in React core library and React Dom.
                            </p>
                            </td>
                            <td>
                            </td></tr>
                            <tr>
                            <td>16.13.1
                            </td>
                            <td>19 March 2020
                            </td>
                            <td>Fix bug in legacy mode Suspense.
                            <p>Revert warning for cross-component updates that happen inside class render lifecycles 
                            </p>
                            </td>
                            <td>
                            </td></tr>
                            <tr>
                            <td>16.14.0
                            </td>
                            <td>14 October 2020
                            </td>
                            <td>Add support for the new JSX transform.
                            </td>
                            <td>
                            </td></tr>
                            <tr>
                            <td>17.0.0
                            </td>
                            <td>20 October 2020
                            </td>
                            <td>"No New Features" enables gradual React updates from older versions.
                            <p>Add new JSX Transform, Changes to Event Delegation
                            </p>
                            </td></tr></tbody></table>   
                         <Mui.Typography variant="h5" component="h2" style={{fontFamily: "Times-new-roman"}}>
                         Licensing [edit]<hr/> 
                         </Mui.Typography>
                         <p style={{fontWeight: 400, fontSize: 15}}>
                         The initial public release of React in May 2013 used the Apache License 2.0. In October 2014, React 0.12.0 replaced this with the 3-clause BSD license and added a separate PATENTS text file that permits usage of any Facebook patents related to the software:[44]
                         </p>
                         <p style={{fontWeight: 400, fontSize: 15}}>
                         The license granted hereunder will terminate, automatically and without notice, for anyone that makes any claim (including by filing any lawsuit, assertion or other action) alleging (a) direct, indirect, or contributory infringement or inducement to infringe any patent: (i) by Facebook or any of its subsidiaries or affiliates, whether or not such claim is related to the Software, (ii) by any party if such claim arises in whole or in part from any software, product or service of Facebook or any of its subsidiaries or affiliates, whether or not such claim is related to the Software, or (iii) by any party relating to the Software; or (b) that any right in any patent claim of Facebook is invalid or unenforceable.
                         </p>
                         <p style={{fontWeight: 400, fontSize: 15}}>
                         This unconventional clause caused some controversy and debate in the React user community, because it could be interpreted to empower Facebook to revoke the license in many scenarios, for example, if Facebook sues the licensee prompting them to take "other action" by publishing the action on a blog or elsewhere. Many expressed concerns that Facebook could unfairly exploit the termination clause or that integrating React into a product might complicate a startup company's future acquisition.[45]
                         </p>
                         <p style={{fontWeight: 400, fontSize: 15}}>
                         Based on community feedback, Facebook updated the patent grant in April 2015 to be less ambiguous and more permissive:[46] 
                         </p>
                         <p style={{fontWeight: 400, fontSize: 15}}>
                         The license granted hereunder will terminate, automatically and without notice, if you (or any of your subsidiaries, corporate affiliates or agents) initiate directly or indirectly, or take a direct financial interest in, any Patent Assertion: (i) against Facebook or any of its subsidiaries or corporate affiliates, (ii) against any party if such Patent Assertion arises in whole or in part from any software, technology, product or service of Facebook or any of its subsidiaries or corporate affiliates, or (iii) against any party relating to the Software. [...] A "Patent Assertion" is any lawsuit or other action alleging direct, indirect, or contributory infringement or inducement to infringe any patent, including a cross-claim or counterclaim.[47]
                         </p>
                         <p style={{fontWeight: 400, fontSize: 15}}>
                         The Apache Software Foundation considered this licensing arrangement to be incompatible with its licensing policies, as it "passes along risk to downstream consumers of our software imbalanced in favor of the licensor, not the licensee, thereby violating our Apache legal policy of being a universal donor", and "are not a subset of those found in the [Apache License 2.0], and they cannot be sublicensed as [Apache License 2.0]".[48] In August 2017, Facebook dismissed the Apache Foundation's downstream concerns and refused to reconsider their license.[49][50] The following month, WordPress decided to switch its Gutenberg and Calypso projects away from React.[51]
                         </p>
                         <p style={{fontWeight: 400, fontSize: 15}}>
                         On September 23, 2017, Facebook announced that the following week, it would re-license Flow, Jest, React, and Immutable.js under a standard MIT License; the company stated that React was "the foundation of a broad ecosystem of open source software for the web", and that they did not want to "hold back forward progress for nontechnical reasons".[52]
                         </p>
                         <p style={{fontWeight: 400, fontSize: 15}}>
                         On September 26, 2017, React 16.0.0 was released with the MIT license.[53] The MIT license change has also been backported to the 15.x release line with React 15.6.2.[54]
                         </p>
                         <Mui.Typography variant="h5" component="h2" style={{fontFamily: "Times-new-roman"}}>
                         See also [edit]<hr/>
                         </Mui.Typography>
                         <ul style={{fontWeight: 400, fontSize: 15}}>
                        <li>React Native</li>
                        <li>AngularJS</li>
                        <li>Angular</li>
                        <li>Backbone.js</li>
                        <li>Ember.js</li>
                        <li>Svelte</li>
                        <li>Vue.js</li>
                        <li>Comparison of JavaScript libraries</li>
                        <li>Web Components</li>
                         </ul>
                         <Mui.Typography variant="h5" component="h2" style={{fontFamily: "Times-new-roman"}}>
                         References [edit]<hr/>
                         </Mui.Typography>
                         <Mui.Grid container spacing={3}>
                         <Mui.Grid item xs={6}>    
                         <ol style={{fontWeight: 400, fontSize: 15}}>
                            <li>Hooks should only be called at the top level (not inside loops or if statements).</li>
                            <li>Hooks should only be called from React function components, not normal functions or class components</li>
                            <li>Occhino, Tom; Walke, Jordan. "JS Apps at Facebook". YouTube. Retrieved 22 Oct 2018.</li>
                            <li>"Releases – Facebook/React". GitHub.</li>
                            <li>"React - A JavaScript library for building user interfaces". React. Retrieved 7 April 2018.</li>
                            <li>Krill, Paul (May 15, 2014). "React: Making faster, smoother UIs for data-driven Web apps". InfoWorld.</li>
                            <li>Hemel, Zef (June 3, 2013). "Facebook's React JavaScript User Interfaces Library Receives Mixed Reviews". InfoQ.</li>
                            <li>Dawson, Chris (July 25, 2014). "JavaScript's History and How it Led To ReactJS". The New Stack.</li>
                            <li>Dere, Mohan (2018-02-19). "How to integrate create-react-app with all the libraries you need to make a great app". freeCodeCamp. Retrieved 2018-06-14.</li>
                            <li>Samp, Jon (2018-01-13). "React Router to Redux First Router". About Codecademy. Retrieved 2018-06-14.</li>
                            <li>"Redux · A Predictable State Container for JS Apps". redux.js.org. Retrieved 2019-10-23.</li>
                            <li>"React Router: Declarative Routing for React". ReactRouterWebsite. Retrieved 2019-10-23.</li>
                            <li>"Components and Props". React. Facebook. Retrieved 7 April 2018.</li>
                            <li>"Refs and the DOM". React Blog.</li>
                            <li>"Draft: JSX Specification". JSX. Facebook. Retrieved 7 April 2018.</li>
                            <li>Clark, Andrew (September 26, 2017). "React v16.0§New render return types: fragments and strings". React Blog.</li>
                            <li>"React.Component: render". React.</li>
                            <li>Clark, Andrew (September 26, 2017). "React v16.0§Support for custom DOM attributes". React Blog.</li>
                            <li>Fischer, Ludovico (2017-09-06). React for Real: Front-End Code, Untangled. Pragmatic Bookshelf. ISBN 9781680504484.</li>
                            <li>"Why did we build React? – React Blog".</li>
                            <li>"PayPal Isomorphic React". Archived from the original on 2019-02-08.</li>
                            <li>"Netflix Isomorphic React".</li>
                            <li>"Hooks at a Glance – React". reactjs.org. Retrieved 2019-08-08.</li>
                            <li>"What the Heck is React Hooks?". Soshace. 2020-01-16. Retrieved 2020-01-24.</li>
                            <li>"Using the State Hook – React". reactjs.org. Retrieved 2020-01-24.</li>
                            <li>"Using the Effect Hook – React". reactjs.org. Retrieved 2020-01-24.</li>
                            <li>"Hooks API Reference – React". reactjs.org. Retrieved 2020-01-24.</li>
                        </ol>
                         </Mui.Grid> 
                         <br/><br/>
                         <Mui.Grid item xs={6}>
                            <ol style={{fontWeight: 400, fontSize: 15}}>
                            <li>"Rules of Hooks – React". reactjs.org. Retrieved 2020-01-24.</li>
                            <li>"Building Your Own Hooks – React". reactjs.org. Retrieved 2020-01-24.</li>
                            <li>"In Depth OverView". Flux. Facebook. Retrieved 7 April 2018.</li>
                            <li>Johnson, Nicholas. "Introduction to Flux - React Exercise". Nicholas Johnson. Retrieved 7 April 2018.</li>
                            <li>Abramov, Dan. "The History of React and Flux with Dan Abramov". Three Devs and a Maybe. Retrieved 7 April 2018.</li>
                            <li>"State Management Tools - Results". The State of JavaScript. Retrieved 7 April 2018.</li>
                            <li>"Meeting Notes". React Discuss. Retrieved 2015-12-13.</li>
                            <li>"reactjs/react-future - The Future of React". GitHub. Retrieved 2015-12-13.</li>
                            <li>"facebook/react - Feature request issues". GitHub. Retrieved 2015-12-13.</li>
                            <li>Walke, Jordan. "FaxJS". Retrieved 11 July 2019.</li>
                            <li>Papp, Andrea (4 April 2018). "The History of React.js on a Timeline". RisingStack. Retrieved 11 July 2019.</li>
                            <li>"Pete Hunt at TXJS".</li>
                            <li>Frederic Lardinois (18 April 2017). "Facebook announces React Fiber, a rewrite of its React library". TechCrunch. Retrieved 19 April 2017.</li>
                            <li>"React Fiber Architecture". Github. Retrieved 19 April 2017.</li>
                            <li>""React v16.0". react.js. 2017-09-26. Retrieved 2019-05-20.</li>
                            <li>""React v16.8". react.js. 2019-02-16. Retrieved 2019-05-20.</li>
                            <li>"Introducing Hooks". react.js. Retrieved 2019-05-20.</li>
                            <li>url=https://reactjs.org/blog/2020/08/10/react-v17-rc.html</li>
                            <li>"React CHANGELOG.md". GitHub.</li>
                            <li>Liu, Austin. "A compelling reason not to use ReactJS". Medium.</li>
                            <li>"Updating Our Open Source Patent Grant".</li>
                            <li>"Additional Grant of Patent Rights Version 2". GitHub.</li>
                            <li>"ASF Legal Previously Asked Questions". Apache Software Foundation. Retrieved 2017-07-16.</li>
                            <li>"Explaining React's License". Facebook. Retrieved 2017-08-18.</li>
                            <li>"Consider re-licensing to AL v2.0, as RocksDB has just done". Github. Retrieved 2017-08-18.</li>
                            <li>"WordPress to ditch React library over Facebook patent clause risk". TechCrunch. Retrieved 2017-09-16.</li>
                            <li>"Relicensing React, Jest, Flow, and Immutable.js". Facebook Code. 2017-09-23.</li>
                            <li>Clark, Andrew (September 26, 2017). "React v16.0§MIT licensed". React Blog.</li>
                            <li>Hunzaker, Nathan (September 25, 2017). "React v15.6.2". React Blog.</li>
                            </ol>
                         </Mui.Grid>
                         </Mui.Grid>
                         <br/>
                         <Mui.Typography variant="h5" component="h2" style={{fontFamily: "Times-new-roman"}}>
                         External links [edit]<hr/>
                         </Mui.Typography>
                         <ul style={{fontWeight: 400, fontSize: 15}}>
                             <li>Official website</li>
                         </ul>
                         </Mui.CardContent>
                        </Mui.Card>
                     </Mui.Grid>
                </Mui.Grid>
                </Mui.Container>
            </div>
        )
    }
}

export default Home;