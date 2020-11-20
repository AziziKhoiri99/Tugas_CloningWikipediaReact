import React, { Component } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import * as Mui from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

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
                                Not Logged In&nbsp;&nbsp;
                                <a href="#">Talk </a>&nbsp;&nbsp;
                                <a href="#">Contributions </a>&nbsp;&nbsp;
                                <a href="#">Create account </a>&nbsp;&nbsp;
                                <a href="#">Log in </a>&nbsp;&nbsp;
                         </h5> 
                        <Mui.Button variant="outlined" style={{width: 10, height: 20}}><a href="#" style={{color: "black"}}><h6>Article</h6></a></Mui.Button>
                        <Mui.Button variant="outlined" style={{width: 10, height: 20}}><a href="#" style={{color: "black"}}><h6>Talk</h6></a></Mui.Button>
                        <Mui.Button variant="outlined" style={{width: 10, height: 20, marginLeft: 410}}><a href="#" style={{color: "black"}}><h6>Read</h6></a></Mui.Button>
                        <Mui.Button variant="outlined" style={{width: 10, height: 20}}><a href="#" style={{color: "black"}}><h6>Edit</h6></a></Mui.Button>
                        <Mui.Button variant="outlined" style={{width: 100, height: 20}}><a href="#" style={{color: "black"}}><h6>View&nbsp;History</h6></a></Mui.Button>
                        &nbsp;&nbsp;<Mui.InputBase
                            style={{width: 200}}
                            placeholder="Search Wikipedia"
                            variant="outlined"
                         />
                        <Mui.IconButton type="submit" aria-label="search">
                            <SearchIcon />
                        </Mui.IconButton>
                        <Mui.Card variant="outlined">
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
                        <Mui.Card variant="outlined" style={{width: 250, align: "right"}}>
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