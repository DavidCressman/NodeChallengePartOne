import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import 'antd/dist/antd.css';
import './index.css';
import { Input} from 'antd';



class booksearch extends Component {

state = {

    title: '',
    author: '',

  };



  componentDidMount() {
    let url = 'book/'+this.state.title;
    {(url !== "book/") && 

    axios
      .get(url)
      .then(res => {
        const data = res.data;
        console.log(data)
        this.setState({ 
            author: data,
               
        });
      });  }
  }



  
    changehandle = event => {
        this.setState({
        title: event.target.value
        
        },);
    }
    submithandle = event => {
        this.componentDidMount();
    }

  render() {
    const Search = Input.Search;

    return (
      <div className="App">
      <header>
        <h1>Author Search</h1>
      </header>
     
     <body>
       <br></br>
       <br></br>
           <Search
           placeholder="Book Title"
           enterButton="Go"
           style={{ width: 400 }}
           size="medium"
           onChange={this.changehandle}
           onSearch={this.submithandle}/>
           <br></br>

        Author: {(this.state.author !== "") && (this.state.author)}

     </body>

      </div>

    );

  }
}
export default booksearch;
