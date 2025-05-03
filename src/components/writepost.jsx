import React, { Component } from 'react';
import axios from 'axios';
export default class Writepost extends Component {

    state = {
        title: '',
        body: ''
    }

    formSubmit = (e) => {
        e.preventDefault();
        //alert('This is just test');
        axios.post('/user', { // Where this url will be redirect 
            title: this.state.title, // All that value which its will take
            body: this.state.body
        })
            .then(function (response) { // use for success 
                console.log(response);
            })
            .catch(function (error) {// use for error 
                console.log(error);
            });
    }


    render() {
        return (
            <center>

                <div>
                    <div className="jumbotron col-lg-4">
                        <form onSubmit={this.formSubmit}>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="title"
                                    name="title"
                                    required
                                    onChange={(event) => this.setState({ title: event.target.value })}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Details</label>
                                <textarea
                                    className="form-control"
                                    name="body"
                                    style={{ resize: "both" }}
                                    onChange={(event) => this.setState({ body: event.target.value })}
                                    defaultValue="Write post"
                                />
                            </div>

                            <button type="submit" className="btn btn-primary">Publish</button>
                        </form>
                    </div>
                </div>


            </center >
        );
    }

}


//{ this.state.title }  {this.state.body}
