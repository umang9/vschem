import React, {Component} from 'react';

class Question extends Component {

    constructor(prop){
        super(prop);
        this.state = {
            data:[
            {
                question_text:'test',
                question_category:'',
                question_type:'',
                options:[
                    {
                        option_text:''
                    }
                ]
            }
            ]
        }
        this.addMoreOptions = this.addMoreOptions.bind(this);
        // this.onChangeValue = this.onChangeValue.bind(this);
    }

    addMoreOptions(index){

        if(this.state.data[index].options.length<5) {
            this.state.data[index].options.push({
                option_text: ''
            });
            this.setState(
                this.state
            );
        }else{
            console.log('Not more than 5 object');
            return false;
        }

    }

    addMoreQuestion(index){
        this.state.data.push({
            question_text:'',
            question_category:'',
            question_type:'',
            options:[
                {
                    option_text:''
                }
            ]
        });
        this.setState(
            this.state
        );
    }

    onChangeValue(index,field,e){
        // Because we named the inputs to match their corresponding values in state, it's
        // super easy to update the state

        switch(field){
            case 'question_text':
                this.state.data[index].question_text = e.target.value;
                break;
            case 'question_category':
                this.state.data[index].question_category = e.target.value;
                break;
            case 'question_type':
                this.state.data[index].question_type = e.target.value;
                break;
        }
        this.setState(
            this.state
        );
    }

    onChangeRadioText(index,option_index,field,e){
        switch(field){
            case 'option_text':
                this.state.data[index].options[option_index] = e.target.value;
                break;
        }
        this.setState(
            this.state
        );
    }

    render() {

        let dataList = this.state.data.map((d,index)=>{

            let radio_options = d.options.map((option,option_key)=>{
                return   <div className="form-group row" key={option_key}>
                    <label htmlFor="example-text-input" className="col-md-2 col-form-label">{option_key+1}.</label>
                    <div className="col-md-10">
                        <input className="form-control" type="text" onChange={(e)=>this.onChangeRadioText(index,option_key,'option_text',e)}
                               placeholder="Enter option text"  id={"text-"+option_key+1}/>
                    </div>
                </div>

            });

            return <div key={index}>
                <div className="row">
                    <div className="col-md-12">
                        <h5><b>Question {index+1}</b></h5>
                        <hr/>
                    </div>

                    <div className="col-md-12">
                        <div className="form-group">
                            <label>Question Text</label>
                            <input type="text" name={"question_text"} value={d.question_text}
                                   onChange={(e)=>this.onChangeValue(index,'question_text',e)}
                                   className="form-control"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Category</label>
                            <select className="form-control custom-select">
                                <option>--Select your Category--</option>
                                <option> Maths </option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Type</label>
                            <select className="form-control custom-select">
                                <option>--Select your Type--</option>
                                <option>Text</option>
                                <option>Drop Down</option>
                                <option>MCQ's</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <div className="form-group">
                            <h5 className="card-title">Question Options</h5>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            {/*<button className={'btn btn-info'}>Add more</button>*/}
                            <button type="button" className="btn btn-info btn-circle btn-lg" onClick={()=>this.addMoreOptions(index)}><i className="fa fa-plus"></i></button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        {radio_options}
                    </div>

                </div>
            </div>
        });

        return (
            dataList
        );
    }
}

export default Question;
