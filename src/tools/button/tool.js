import {default as React} from 'react';
import ReactDOM from 'react-dom';

export default class Button extends React.Component{
    state = {}

    static get toolbox() {
        return {
          title: 'Button',
          icon: '<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" enable-background="new 0 0 512 512" height="20" viewBox="0 0 512 512" width="20"><path d="m237.102 366v-90.018h-90c-11.046 0-20-8.954-20-20s8.954-20 20-20h90v-90.982c0-11.046 8.954-20 20-20s20 8.954 20 20v90.982h90c11.046 0 20 8.954 20 20s-8.954 20-20 20h-90v90.018c0 11.046-8.954 20-20 20s-20-8.954-20-20zm254.898-15c11.046 0 20-8.954 20-20v-251c0-44.112-35.888-80-80-80h-352c-44.112 0-80 35.888-80 80v352c0 44.112 35.888 80 80 80h352c44.112 0 80-35.888 80-80 0-11.046-8.954-20-20-20s-20 8.954-20 20c0 22.056-17.944 40-40 40h-352c-22.056 0-40-17.944-40-40v-352c0-22.056 17.944-40 40-40h352c22.056 0 40 17.944 40 40v251c0 11.046 8.954 20 20 20z"/></svg>'
        };
      }

      constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
    
      render() {
        const rootNode = document.createElement('div');

        ReactDOM.render(
          (
            <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
          ), rootNode
        );

        return rootNode;
      }
    

    // constructor(props) {
    //     super(props);
    //     this.state = {link: '', name: ''};
    // }

    // handleChange(event) {        
    //     this.setState({
    //       ...this.state,
    //       [event.target.name]: event.target.value
    //     });
    // }

    // sayHello() {
    //   console.log(`${this.state.link} ${this.state.name}`);
    // }

    // // Genera el boton con el evento sayHello
    // render(){
    //     const rootNode = document.createElement('div');

    //     ReactDOM.render(
    //           ( 
    //               <div className="dataButton">
    //                   <input type="text" name="link" id="linkButton" placeholder="Enlace del boton" value={this.state.link} onChange={this.handleChange.bind(this)}/><br/>
    //                   <input type="text" name="name" id="nameButton" placeholder="Nombre del boton" value={this.state.name} onChange={this.handleChange.bind(this)}/><br/>
    //                   <button onClick={this.sayHello}>Clickme!</button>
    //               </div>
    //           ), rootNode);

    //     // ReactDOM.render(
    //     //     (
    //     //         <div className="myButton">
    //     //             <button onClick={this.sayHello} type="button">
    //     //             Boton
    //     //             </button>
    //     //         </div>   
    //     //     ), rootNode);
        
    //     return rootNode;
    // }
  
    save(){
      return {
        
      }
    }
  }