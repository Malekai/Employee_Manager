import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate, resetForm } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
  componentWillMount() {
    this.props.resetForm();
  }

  onButtonPress() {
    const { name, phone, role, shift } = this.props;

    this.props.employeeCreate({ name, phone, role, shift: shift || 'Monday' });
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, role, shift } = state.employeeForm;

  return { name, phone, role, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeCreate, resetForm })(EmployeeCreate);
