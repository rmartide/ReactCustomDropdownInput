import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../src/CustomDropdownInput.css';

export default class CustomDropdownInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDropdown: false,
            inputValue: ''
        }
        this.node = undefined;
    }
    componentDidMount() {
        this.node = ReactDOM.findDOMNode(this);
    }

    handleClick = (value) => {
        this.props.handleSelected(value);
        this.setState({
            inputValue: value.label,
            showDropdown: false
        });
    }

    handleChange = (e) => {
        if(this.props.handleChange)
            this.props.handleChange(e.target.value);
        this.setState({
            inputValue: e.target.value
        });
    }

    showDropdown = () => {
        this.setState({
            showDropdown: true
        })
        document.addEventListener("click", (e) => {
            if (this.node && !this.node.contains(e.target)) {
                this.hideDropdown();
            }
        });
    }

    hideDropdown = () => {
        this.setState({
            showDropdown: false
        })
        document.removeEventListener("click", () => { });
    }

    inputValueExistsOnValues = () => {
        return this.props.values.find((element) => element.label === this.state.inputValue);
    }

    render() {
        return (
            <div style={{ position: 'relative' }}>
                <input type="text" value={this.state.inputValue} className='form-control' onChange={this.handleChange} onFocus={this.showDropdown} />
                {
                    this.state.showDropdown &&
                    <div className='custom-dropdown-container'>
                        {
                            this.props.values.map(value =>
                                <span
                                    className='custom-dropdown'
                                    key={value.id}
                                    onClick={() => this.handleClick(value)}
                                >
                                    {value.label}
                                </span>
                            )
                        }
                        {
                            !this.inputValueExistsOnValues() &&
                            <span
                                className='custom-dropdown'
                                key="input-value"
                                onClick={() => this.handleClick({ id: 'input-value', label: this.state.inputValue })}
                            >
                                {
                                    this.state.inputValue
                                }
                            </span>
                        }
                    </div>
                }
            </div>
        );
    }
}

CustomDropdownInput.propTypes = {
    values: PropTypes.array,
    handleSelected: PropTypes.func,
    handleChange: PropTypes.func
}

CustomDropdownInput.defaultProps = {
    handleChange: () => { },
    handleSelected: () => { }
}