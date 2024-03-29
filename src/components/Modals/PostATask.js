import React, { Component } from 'react';
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
    Progress,
    Spinner
} from 'reactstrap';
import { GrClose } from "react-icons/gr";
import { FiCheckCircle } from "react-icons/fi";
import { BsCalendar } from "react-icons/bs";
import { connect } from "react-redux";
import { togglePostATask } from '../../store/modules/app'
import AppService from '../../services/app.service'
import { catchError } from "../../utils";
import { toast } from "react-toastify";


class PostTask extends Component<{}> {

    constructor(props) {
        super(props);
        this.state = {
            descriptionError: false,
            titleError: false,
            step: 'details',
            inPerson: true,
            user: props.user,
            hours: 1, budget: 200,
            isLoading: false,
            title: '',
            description: '',
        };
    }

    processSubmit = (e) => {
        e.preventDefault();
        this.processForm();
    };
    resetState = () => {
        this.setState({
            descriptionError: false,
            titleError: false,
            step: 'details',
            inPerson: true,
            hours: 1, budget: 200,
            isLoading: false,
            title: '',
            description: '',
        });
    }

    processForm = () => {
        const {
            step, inPerson, due_date,
            hourly, titleError, budget,
            hours, location,
            descriptionError, title, description
        } = this.state;

        if (step === 'money') {
            this.setState({ isLoading: true });
            const formData = new FormData();
            formData.append('due_date', due_date);
            formData.append('title', title);
            formData.append('description', description);
            formData.append('budget', budget);
            formData.append('price', hourly ? Number(hours * budget, 1) : Number(budget, 2));
            formData.append('rate_type', hourly ? 'Per Hour' : 'Session Based');
            formData.append('type', inPerson ? 'Online' : 'Remote');
            if (inPerson) {
                formData.append('location', location);
            }
            if (hourly) {
                formData.append('hours', hours);
            }
            AppService.createTask(formData).then(({ data }) => {
                this.setState({ step: 'completed', isLoading: false, })
            }).catch(() => {
                catchError()
                this.setState({ step: 'completed', isLoading: false, })
            });
        }


        if (step === 'completed') {
            this.resetState();
            this.props.togglePostATask()
        }
        if (step === 'payment') {
            if (due_date) {
                return this.setState({ step: 'money' });
            }
            if (inPerson && !location) {
                return toast.error('Enter Location');
            }
            return toast.error('Enter a Due Date');
        }

        if (step === 'details') {
            if (title.length === 0 || title.length > 50) {
                this.setState({ titleError: true })
            } else {
                this.setState({ titleError: false })
            }
            if (description.length < 25 || description.length > 1000) {
                this.setState({ descriptionError: true })
            } else {
                this.setState({ titleError: false, descriptionError: false })
            }

            if (description.length < 25 || description.length > 1000 || title.length === 0 || title.length > 50) {
                return
            }
            return this.setState({ step: 'payment' })
        }


    };
    previousForm = () => {
        const { step } = this.state;
        if (step === 'payment') {
            this.setState({ step: 'details' })
        }
        if (step === 'money') {
            this.setState({ step: 'payment' })
        }


    };


    render() {
        const { togglePostATask, showPostTask, className } = this.props;
        const { step, inPerson } = this.state;

        return (
            <div>
                <Modal isOpen={showPostTask}
                    toggle={togglePostATask} className={className}
                    backdrop={'static'}
                    keyboard>
                    <div className="d-flex justify-content-between align-items-center w-100 px-4 py-4">
                        {
                            step === 'details' ? <h3 className="mx-auto mb-0">Tell us what you need done?</h3>
                                : step === 'payment' ? <h3 className="mx-auto mb-0">Say where & when</h3>
                                    : <h3 className="mx-auto mb-0">Tell us what you need done?</h3>
                        }
                        <GrClose onClick={() => {
                            this.resetState();
                            togglePostATask()
                        }} />
                    </div>
                    <Progress color="success" style={{ borderRadius: 0, height: 2 }} value={30 * (step + 1)} />
                    <ModalBody className="py-2">
                        <form onSubmit={this.processSubmit} id='post-form'>
                            {step === 'payment' ?
                                <div>
                                    <Label>Where do you need it done?</Label>
                                    <FormGroup
                                        check
                                        className="input-group-alternative input-group mb-3"
                                    >
                                        <Label check className="p-3">
                                            <Input type="radio"
                                                value="on site"
                                                checked={inPerson}
                                                onChange={e => this.setState({ inPerson: true })}
                                                name="need_type" /> In Person <br />
                                            Select this if you need the Tasker physically there.
                                        </Label>
                                    </FormGroup>
                                    <FormGroup check className="input-group-alternative input-group mb-3">
                                        <Label check className="p-3">
                                            <Input
                                                type="radio"
                                                checked={!inPerson}
                                                value="remote"
                                                onChange={e => this.setState({ inPerson: false })}
                                                name="need_type" /> Online<br />
                                            Select this if the Tasker can do it from home
                                        </Label>
                                    </FormGroup>

                                    {
                                        inPerson && <Input
                                            name="location"
                                            onChange={e => this.setState({ location: e.target.value })}
                                            placeHolder="Enter new area" value={this.state.location}
                                            className="input-group-alternative input-group mt-4"
                                            style={{ width: '60%' }} />
                                    }


                                    <FormGroup className={`mb-3 `}>
                                        <Label className="mt-3">When do you need it done?</Label>
                                        <InputGroup
                                            className="input-group-alternative pr-1 mr-0 input-group input-group-alternative"
                                            focused>
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <BsCalendar />
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                type="date" className="mr-0 pr-2"
                                                onChange={e => this.setState({ due_date: e.target.value })}
                                                placeHolder="Enter new area" value={this.state.due_date}
                                                id="exampleDatetime" name="due_date" invalid />
                                        </InputGroup>
                                    </FormGroup>
                                </div>
                                : step === 'money' ?
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
                                                        <Input
                                                            type="radio"
                                                            checked={!this.state.hourly}
                                                            value={"total"}
                                                            onChange={e => this.setState({ hourly: false })}
                                                            name="rate" /> Total
                                                    </Label>
                                                </FormGroup>
                                                <FormGroup check>
                                                    <Label check>
                                                        <Input type="radio"
                                                            checked={this.state.hourly}
                                                            value={"hourly"}
                                                            onChange={e => this.setState({ hourly: true })}
                                                            name="rate" /> Per Hour
                                                    </Label>
                                                </FormGroup>
                                            </div>
                                            <div className="aligned mt-4">
                                                <InputGroup
                                                    className="input-group-alternative aligned pr-3 input-group  w-30"
                                                    focused>
                                                    <InputGroupAddon addonType="prepend">
                                                        <InputGroupText>
                                                            {/*<FiDollarSign/>*/}
                                                            ₦
                                                        </InputGroupText>
                                                    </InputGroupAddon>
                                                    <Input
                                                        type="number"
                                                        min={1}
                                                        name="budget" value={this.state.budget}
                                                        onChange={e => this.setState({ budget: e.target.value })}
                                                        className="mr-0 pr-2" />
                                                    {this.state.hourly && <span>/hr</span>}
                                                </InputGroup>

                                                {
                                                    this.state.hourly &&
                                                    <>
                                                        <span style={{
                                                            paddingLeft: 10,
                                                            paddingRight: 10,
                                                            fontSize: 18,
                                                            fontWeight: '100'
                                                        }}>X</span>
                                                        <InputGroup
                                                            className="input-group-alternative pr-3 aligned input-group  w-20"
                                                            focused>
                                                            <Input
                                                                name={"hours"}
                                                                min={1}
                                                                type="number"
                                                                value={this.state.hours}
                                                                onChange={e => this.setState({ hours: e.target.value })}
                                                                className="mr-0 pr-2"
                                                            />
                                                            <span>hrs</span>
                                                        </InputGroup>
                                                    </>
                                                }

                                            </div>


                                        </div>
                                        <div
                                            className="bg-primary px-3 text-white py-3 mx--4 mb--4 mt-5 spaced aligned">
                                            <div>
                                                <h4 className="text-white">ESTIMATED BUDGET</h4>
                                                <div>Final payment will be agreed later</div>
                                                <input name="hourly" value={this.state.hourly} hidden />
                                            </div>
                                            <div className="flex-start">
                                                ₦
                                                <div style={{
                                                    fontSize: 36,
                                                    lineHeight: 1,
                                                    marginLeft: 3,
                                                    marginTop: -2
                                                }}>{this.state.hourly ? Number(this.state.hours * this.state.budget, 2) : Number(this.state.budget, 2)}
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    :
                                    step === 'completed' ?
                                        <div className="aligned flex-column justify-content-center"
                                            style={{ height: 380 }}>

                                            {
                                                this.state.isLoading ?
                                                    <Spinner color='success' size={90} /> :
                                                    <FiCheckCircle color='success' size={80} />
                                            }
                                            <br />
                                            <h3>{this.state.isLoading ? 'In Progress' : 'Done'}</h3>
                                        </div> :
                                        <div>
                                            <FormGroup>
                                                <Label className="mb-0">What do you need done?</Label>
                                                <small><br />This'll be the title of your task</small>
                                                <Input
                                                    name="title"
                                                    maxLength="50" placeHolder="E.g. Help move my sofa"
                                                    className="mt-2 input-group-alternative input-group"
                                                    value={this.state.title}
                                                    onChange={(e) => this.setState({ title: e.target.value })}
                                                />
                                                {this.state.titleError &&
                                                    <small className="invalid-feedback d-block" role="alert">
                                                        Please enter at least 10 characters and a maximum of 50
                                                </small>
                                                }
                                            </FormGroup>

                                            <FormGroup>
                                                <Label id="description" className="mb-0">What are the details?</Label>
                                                <small><br />Be as specific as you can about what needs doing</small>
                                                <Input
                                                    rows="5" type="textarea"
                                                    className="mt-2 input-group-alternative input-group"
                                                    placeHolder="I want ....." value={this.state.description}
                                                    onChange={(e) => this.setState({ description: e.target.value })}
                                                    name="description" id="description"
                                                />
                                                {
                                                    this.state.descriptionError &&
                                                    <small className="invalid-feedback d-block" role="alert">
                                                        Please enter at least 25 characters and a maximum of 1000
                                                    </small>
                                                }
                                            </FormGroup>

                                        </div>}

                        </form>
                    </ModalBody>
                    <ModalFooter className="text-center">
                        {!['details', 'completed'].includes(step) &&
                            <button className="btn btn-round mx-auto btn-outline-primary"
                                style={{ width: '40%' }} onClick={this.previousForm}>Back</button>
                        }
                        <Button color="success" className="btn btn-round mx-auto"
                            style={{ width: ['details', 'completed'].includes(step) ? '60%' : '40%' }}
                            onClick={() => this.processForm()}>{step === 'details' ? 'Next' :
                                step === 'completed' ? 'Close' : 'Continue'}</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default connect(({ Application: { showPostTask }, User: user }) => ({
    showPostTask,
    user
}), { togglePostATask })(PostTask);

