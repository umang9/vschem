import React, {Component} from 'react';

class DashBoard extends Component {
    render() {
        return (
            <div className="page-wrapper">
                <div className="row page-titles">
                    <div className="col-md-5 align-self-center">
                        <h3 className="text-themecolor">Dashboard</h3>
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

export default DashBoard;
