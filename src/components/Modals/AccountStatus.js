import React, {Component} from 'react';
import {
    Button,
    FormGroup,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Label,
    Modal,
    ModalBody,
    ModalFooter,
    Progress
} from 'reactstrap';
import {GrClose} from "react-icons/gr";
import {FiDollarSign} from "react-icons/fi";
import {BsCalendar} from "react-icons/bs";

class AccountStatus extends Component<{}> {
    state = {step: 0, inPerson: true};

    processForm = () => {
        const {step} = this.state;
        if (step === 3) {
            this.props.togglePostATask()
        }
        this.setState({step: step + 1})


    };
    previousForm = () => {
        const {step} = this.state;
        this.setState({step: (step - 1)})
    };


    render() {
        const { togglePostATask, showPostTaskModal, className} = this.props;
        const {step, inPerson} = this.state;
        return (
            <div>
                <Modal isOpen={false}
                       toggle={togglePostATask} className={className}
                       backdrop={'static'}
                       keyboard>
                    <div className="d-flex justify-content-between align-items-center w-100 px-4 py-4">
                        {
                            step === 0 ? <h3 className="mx-auto mb-0">Tell us what you need done?</h3>
                                : step === 1 ? <h3 className="mx-auto mb-0">Say where & when</h3>
                                : <h3 className="mx-auto mb-0">Tell us what you need done?</h3>
                        }
                        <GrClose onClick={togglePostATask}/>
                    </div>
                    <Progress color="success" style={{borderRadius: 0, height: 2}} value={30 * (step + 1)}/>
                    <ModalBody className="py-2">
                        {step === 1 ?
                            <div>
                                <Label>Where do you need it done?</Label>
                                <FormGroup
                                    check
                                    className="input-group-alternative input-group mb-3"
                                >
                                    <Label check className="p-3">
                                        <Input type="radio"
                                               onChange={e => this.setState({inPerson: e.target.value === 'on'})}
                                               name="need_type"/> In Person <br/>
                                        Select this if you need the Tasker physically there.
                                    </Label>
                                </FormGroup>
                                <FormGroup
                                    check
                                    className="input-group-alternative input-group mb-3"
                                >
                                    <Label check className="p-3">
                                        <Input type="radio"
                                               onChange={e => this.setState({inPerson: e.target.value === 'off'})}
                                               name="need_type"/> Online<br/>
                                        Select this if the Tasker can do it from home
                                    </Label>
                                </FormGroup>

                                {
                                    inPerson && <Input
                                        placeHolder="Enter new area"
                                        className="input-group-alternative input-group mt-4"
                                        style={{width: '60%'}}/>
                                }


                                <FormGroup className={`mb-3 `}>
                                    <Label className="mt-3">When do you need it done?</Label>
                                    <InputGroup
                                        className="input-group-alternative pr-1 mr-0 input-group input-group-alternative"
                                        focused>
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <BsCalendar/>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input type="date" className="mr-0 pr-2" id="exampleDatetime"
                                               name="datetime" invalid/>
                                    </InputGroup>
                                    {<span className="invalid-feedback "
                                           style={{display: 'block'}}
                                           role="alert"><strong></strong></span>
                                    }
                                </FormGroup>


                            </div>
                            : step === 2 ?
                                <div>
                                    <div className="spaced aligned ">
                                        <label className="mb-0"> What is your budget?</label>
                                        Want help?
                                    </div>
                                    <small>
                                        Please enter the price you're comfortable to pay to get your task done.
                                        Taskers will use this as a guide for how much to offer.
                                    </small>

                                    <div className="pb-5 mx--3 pt-3 px-3 mb-5">
                                        <div className="aligned">
                                            <FormGroup check className="mr-5">
                                                <Label check>
                                                    <Input type="radio"
                                                           onChange={e => this.setState({hourly: e.target.value === 'off'})}
                                                           name="rate"/> Total
                                                </Label>
                                            </FormGroup>
                                            <FormGroup check>
                                                <Label check>
                                                    <Input type="radio"
                                                           onChange={e => this.setState({hourly: e.target.value === 'on'})}
                                                           name="rate"/> Per Hour
                                                </Label>
                                            </FormGroup>
                                        </div>
                                        <div className="aligned mt-4">
                                            <InputGroup
                                                className="input-group-alternative aligned pr-3 input-group  w-30"
                                                focused>
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                        <FiDollarSign/>
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input type="number" className="mr-0 pr-2"/>
                                                <span>/hr</span>
                                            </InputGroup>

                                            <span style={{
                                                paddingLeft: 10,
                                                paddingRight: 10,
                                                fontSize: 18,
                                                fontWeight: '100'
                                            }}>X</span>

                                            <InputGroup
                                                className="input-group-alternative pr-3 aligned input-group  w-20"
                                                focused>
                                                <Input className="mr-0 pr-2"/>
                                                <span>hrs</span>
                                            </InputGroup>
                                        </div>


                                    </div>
                                    <div className="bg-primary px-3 text-white py-3 mx--4 mb--4 mt-5 spaced aligned">
                                        <div>
                                            <h4 className="text-white">ESTIMATED BUDGET</h4>
                                            <div>Final payment will be agreed later</div>
                                        </div>
                                        <div className="flex-start">
                                            $
                                            <div style={{
                                                fontSize: 36,
                                                lineHeight: 1,
                                                marginLeft: 3,
                                                marginTop: -2
                                            }}>0
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                :
                                step === 3 ?
                                    <div className="aligned justify-content-center" style={{height: 350}}>

                                        <h3>Completed</h3>
                                    </div> :
                                    <div>
                                        <FormGroup>
                                            <Label className="mb-0">What do you need done?</Label>
                                            <small><br/>This'll be the title of your task</small>
                                            <Input maxLength="50" placeHolder="E.g. Help move my sofa"
                                                   className="mt-2 input-group-alternative input-group"/>
                                            <small className="invalid-feedback d-block" role="alert">
                                                Please enter at least 10 characters and a maximum of 50
                                            </small>
                                        </FormGroup>

                                        <FormGroup>
                                            <Label className="mb-0">What are the details?</Label>
                                            <small><br/>Be as specific as you can about what needs doing</small>
                                            <Input rows="5" type="textarea"
                                                   className="mt-2 input-group-alternative input-group"
                                                   placeHolder="I want ....."
                                                   name="text" id="exampleText"/>
                                            <small className="invalid-feedback d-block" role="alert">
                                                Please enter at least 25 characters and a maximum of 1000
                                            </small>
                                        </FormGroup>

                                    </div>}
                    </ModalBody>
                    <ModalFooter className="text-center">
                        {![0, 3].includes(step) &&
                        <button className="btn btn-round mx-auto btn-outline-primary"
                                style={{width: '40%'}} onClick={this.previousForm}>Back</button>
                        }
                        <Button color="success" className="btn btn-round mx-auto"
                                style={{width: [0, 3].includes(step) ? '60%' : '40%'}}
                                onClick={this.processForm}>{step === 0 ? 'Next' : step === 3 ? 'Close' : 'Continue'}</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default AccountStatus;

