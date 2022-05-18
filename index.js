import React from 'react';
import reactDOM from 'react-dom';
import './index.css';
import App from './app';
import reporWebVitals from './reportWebVitals';

ReactDOM.RENDER {
    <React.StrictMode>
        <App/>
        </React.StrictMode>.StrictMode>
        document.getElementById. 'root')
        );
@installed react
        
}
import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'

import store from 'src/store'
import index from '../index'

describe('<index />', () => {
  const defaultProps = {}
  const wrapper = renderer.create(
    <Provider store={store}>
      <index {...defaultProps} />
    </Provider>,
  )

  test('render', () => {
    expect(wrapper).toMatchSnapshot()
  })
})

import React from 'react'
import PropTypes from 'prop-types'

export default (WrappedComponent) => {
  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />

  hocComponent.propTypes = {
  }

  return hocComponent
}
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export const mapStateToProps = state => ({

})

export const mapDispatchToProps = {
 
};

export const hocComponentName = (WrappedComponent) => {
  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />

  hocComponent.propTypes = {
  };

  return hocComponent
};

export default WrapperComponent => connect(mapStateToProps, mapDispatchToProps)(hocComponentName(WrapperComponent))
