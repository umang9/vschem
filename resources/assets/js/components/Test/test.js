import React, {Component} from 'react';
import axios from 'axios'


class Test extends Component {

    constructor(prop){
        super(prop);
        console.log(this.props.match.params);
        this.state = {
            data:[]
        };
    }
    componentWillReceiveProps(nextProps, nextState){
        console.log(nextProps, nextState);
        this.setState({
            data: []
        });
        // console.log('componentWillReceiveProps',nextProps.match.params);
        this.getCallApi(nextProps.match.params.test)
    }
    componentWillMount() {
    }
    componentWillUnmount() {
    }
    componentDidMount(){

        // let url = '/api/tests?type='+this.props.match.params.test;
        this.getCallApi(this.props.match.params.test)
    }

    getCallApi(test){
        let url = '/api/tests?type='+test;
        axios.get(url)
            .then(json => {

                let data = json.data;
                console.log('data',data);
                this.setState({
                    data: data
                });
            });
    }

    render() {
        let table_row;

        if(this.state.data.length>0){
            let tr;
            table_row = this.state.data.map((name, index)=>{

                return <tr key={index}>
                    <td>{name.test_name}</td>
                    <td>
                        {name.score ? name.score:'NA'}
                    </td>
                    <td>{name.highest_score ? name.highest_score:'NA'}</td>
                    <td>{name.end_date}</td>
                    <td>
                        {name.is_test_taken ? <a href={'#'} className="btn btn-rounded btn-block btn-outline-secondary">Review</a> :
                            <a href={'/onlinetest/instruction/' + name.test_id} target="_blank" className="btn btn-rounded btn-block btn-outline-primary">Take Test</a> }
                    </td>

                </tr>;

            });
        }else{
            table_row = null
        }
        return (
            <div className="page-wrapper">
                <div className="row page-titles">
                    <div className="col-md-5 align-self-center">
                        <h3 className="text-themecolor">Test</h3>
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
                                            <i className="mdi mdi-arrow-expand"></i>
                                        </a>
                                    </div>
                                    <h4 className="card-title m-b-0">{this.props.match.params.test} Test</h4>
                                </div>
                                <div className="card-body collapse show">
                                    <div className="table-responsive">
                                        <table className="table product-overview">
                                            <thead>
                                            <tr>
                                                <th>Test Name</th>
                                                <th>Your Score</th>
                                                <th>Highest Score</th>
                                                <th>Test Ends</th>
                                                <th>Review</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {table_row}

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

export default Test;
