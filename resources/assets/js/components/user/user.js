import React, {Component} from 'react';

class User extends Component {

    constructor(props, context) {
        super(props, context);
        console.log(this.props.match.params.id);
    }

    render() {
        return (
            <div className="page-wrapper">
                <div className="row page-titles">
                    <div className="col-md-5 align-self-center">
                        <h3 className="text-themecolor">User</h3>
                    </div>

                    <div>
                        <button
                            className="right-side-toggle waves-effect waves-light btn-inverse btn btn-circle btn-sm pull-right m-l-10">
                            <i className="ti-settings text-white"></i>
                        </button>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">
                                    This is some text within a card block.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default User;
