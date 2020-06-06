import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import Providers from '../../components/providers/Providers';
import Services from '../../components/Services/Services';
import Grid from '@material-ui/core/Grid';
import './Layout.css';

class Layout extends Component {
  state = {
    name: null,
    profileImage: null,
    subspecialties: [],
  };
  componentDidMount () {
    this.props.onfetchAllServices ();
  }

  onServiceClickHandler = serviceName => {
    const filterSchedules = this.props.included.find (
      include =>
        include.type === 'schedules' &&
        include.attributes.service === serviceName
    );
    const {id} = filterSchedules;
    if (filterSchedules) {
      const providerDetail = this.props.providers.find (provider => {
        const data = provider.relationships.schedules.data.find (
          sched => sched.id === id
        );
        if (data) {
          return true;
        }
        return false;
      });
      this.setState ({
        name: providerDetail.attributes.name,
        profileImage: providerDetail.attributes['profile-image'],
        subspecialties: providerDetail.attributes.subspecialties,
      });
    }
  };

  render () {
    return (
      <div className="screen">
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Services
              services={this.props.services}
              onServiceClickHandler={this.onServiceClickHandler}
            />
          </Grid>
          <Grid item xs={6}>
            {this.state.name
              ? <Providers providerdetails={this.state} />
              : null}
          </Grid>
        </Grid>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    services: state.allservices.services,
    providers: state.allservices.providers,
    included: state.allservices.included,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onfetchAllServices: () => dispatch (actions.fetchAllServices ()),
  };
};

export default connect (mapStateToProps, mapDispatchToProps) (Layout);
