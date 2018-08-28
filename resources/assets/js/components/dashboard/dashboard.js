import React, {Component} from 'react';
import axios from 'axios'


class DashBoard extends Component {

    constructor(prop){
        super(prop);
    }

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
                        <div className="col-lg-12 col-md-12">
                            <div className="card card-default">
                            <div className="card-header">
                                <div className="card-actions">
                                    <a className="" data-action="collapse"><i className="ti-minus"></i></a>
                                    <a className="btn-minimize" data-action="expand">
                                        <i className="mdi mdi-arrow-expand"></i></a>
                                    <a className="btn-close" data-action="close"><i className="ti-close"></i>
                                    </a>
                                </div>
                                <h4 className="card-title m-b-0">CET Test</h4>
                            </div>
                            <div className="card-body collapse">
                                <div className="table-responsive">
                                    <table className="table product-overview">
                                        <thead>
                                        <tr>
                                            <th>Customer</th>
                                            <th>Photo</th>
                                            <th>Quantity</th>
                                            <th>Date</th>
                                            <th>Status</th>
                                            <th>Actions</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>Steave Jobs</td>
                                            <td>
                                                <img src="../assets/images/gallery/chair.jpg" alt="iMac" width="80"/>
                                            </td>
                                            <td>20</td>
                                            <td>10-7-2017</td>
                                            <td>
                                                <span className="label label-success font-weight-100">Paid</span>
                                            </td>
                                            <td><a href="javascript:void(0)" className="text-inverse p-r-10" data-toggle="tooltip" title="" data-original-title="Edit"><i className="ti-marker-alt"></i></a> <a href="javascript:void(0)" className="text-inverse" title="" data-toggle="tooltip" data-original-title="Delete"><i
                                                className="ti-trash"></i></a></td>
                                        </tr>
                                        <tr>
                                            <td>Varun Dhavan</td>
                                            <td>
                                                <img src="../assets/images/gallery/chair2.jpg" alt="iPhone" width="80"/>
                                            </td>
                                            <td>25</td>
                                            <td>09-7-2017</td>
                                            <td>
                                                <span className="label label-warning font-weight-100">Pending</span>
                                            </td>
                                            <td><a href="javascript:void(0)" className="text-inverse p-r-10"
                                                   data-toggle="tooltip" title="" data-original-title="Edit"><i
                                                className="ti-marker-alt"></i></a> <a href="javascript:void(0)"
                                                                                      className="text-inverse" title=""
                                                                                      data-toggle="tooltip"
                                                                                      data-original-title="Delete"><i
                                                className="ti-trash"></i></a></td>
                                        </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="card card-default">
                                <div className="card-header">
                                    <div className="card-actions">
                                        <a className="" data-action="collapse"><i className="ti-minus"></i></a>
                                        <a className="btn-minimize" data-action="expand">
                                            <i className="mdi mdi-arrow-expand"></i></a>
                                        <a className="btn-close" data-action="close"><i className="ti-close"></i>
                                        </a>
                                    </div>
                                    <h4 className="card-title m-b-0">JEE Test</h4>
                                </div>
                                <div className="card-body collapse">
                                    <div className="table-responsive">
                                        <table className="table product-overview">
                                            <thead>
                                            <tr>
                                                <th>Test Name</th>
                                                <th>Score</th>
                                                <th></th>
                                                <th>Date</th>
                                                <th>Status</th>
                                                <th>Actions</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>Steave Jobs</td>
                                                <td>
                                                    <img src="../assets/images/gallery/chair.jpg" alt="iMac" width="80"/>
                                                </td>
                                                <td>20</td>
                                                <td>10-7-2017</td>
                                                <td>
                                                    <span className="label label-success font-weight-100">Paid</span>
                                                </td>
                                                <td><a href="javascript:void(0)" className="text-inverse p-r-10" data-toggle="tooltip" title="" data-original-title="Edit"><i className="ti-marker-alt"></i></a> <a href="javascript:void(0)" className="text-inverse" title="" data-toggle="tooltip" data-original-title="Delete"><i
                                                    className="ti-trash"></i></a></td>
                                            </tr>
                                            <tr>
                                                <td>Varun Dhavan</td>
                                                <td>
                                                    <img src="../assets/images/gallery/chair2.jpg" alt="iPhone" width="80"/>
                                                </td>
                                                <td>25</td>
                                                <td>09-7-2017</td>
                                                <td>
                                                    <span className="label label-warning font-weight-100">Pending</span>
                                                </td>
                                                <td><a href="javascript:void(0)" className="text-inverse p-r-10"
                                                       data-toggle="tooltip" title="" data-original-title="Edit"><i
                                                    className="ti-marker-alt"></i></a> <a href="javascript:void(0)"
                                                                                          className="text-inverse" title=""
                                                                                          data-toggle="tooltip"
                                                                                          data-original-title="Delete"><i
                                                    className="ti-trash"></i></a></td>
                                            </tr>


                                            </tbody>
                                        </table>
                                    </div>
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
