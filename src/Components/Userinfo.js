import React, { Component } from 'react';
import { LocalForm, Control, Errors } from 'react-redux-form';

class Userinfo extends Component {

    handleSubmit=(values)=>{
        console.log(values.ratings)
    }
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center my-5 ">

                    {/* user input area */}
                    <div className="col-12 col-md-6 ">
                        <LocalForm>
                            <div className="form-group">
                                <label htmlfor="ratings">Rating</label>

                                <Control.select model=".ratings" id="ratings"
                                    className="form-control"
                                >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>

                            </div>
                            <div className="form-group">
                                <label htmlfor="name">Your Name</label>

                                <Control.text model=".name" id="name"
                                    className="form-control"
                                    placeholder="Your Name"

                                />

                            </div>
                            <div className="form-group">
                                <label htmlFor="comment">Comment</label>
                                <Control.textarea model=".comment" id="comment"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </LocalForm>
                    </div>

                    {/* side image */}
                    <div className="col-12 col-md-6">

                    </div>

                </div>

            </div>

        )
    }
}

export default Userinfo;