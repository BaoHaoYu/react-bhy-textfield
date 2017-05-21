import React from 'react'
import ReactDom from 'react-dom'
import Text from '../src/index'
// import Text from '../dist/react-bhy-textfield'

import {fromJS} from 'immutable'
import {from} from 'immutable/contrib/cursor'
import './index.styl'

class Main extends React.Component {
    state = {
        $$s: fromJS({
            data: {
                cInput: {
                    username: '',
                    password: '',
                    phone: '',
                    password1: '',
                    password2: '',
                    email1: ''
                },
                common: {
                    layout: 'x',
                    theme: 'line',
                    size: 'default',
                    fullWidth: !1,
                    lineFocusColor: null,
                    lineErrorColor: null,
                    errorTextColor: null,
                },
                color: {
                    green: '#1ce02b',
                    orange: 'orange',
                    d1: '#ee40f1',
                    red: 'red'
                }
            },
        })
    };

    setIn($$s) {
        this.setState({$$s})
    }

    render() {
        const $$data = from(this.state.$$s, ['data'], $$newS => this.setIn($$newS));

        const $$cInput = $$data.get('cInput');
        const $$common = $$data.get('common');
        const $$color = $$data.get('color');
        const labelWith = '100px';
        return (
          <div className="main">
              <div className="main-top">
                  <button
                    className=""
                    onClick={ e => $$common.update('layout', v => v == 'x' ? 'y' : 'x') }>
                      layout :{ $$common.get('layout') }
                  </button>

                  <button
                    className=""
                    onClick={ e => $$common.update('theme', v => v == 'border' ? 'line' : 'border') }>
                      theme :{ $$common.get('theme') }
                  </button>

                  <button
                    className=""
                    onClick={ e => $$common.update('size', v => v == 'default' ? 'sm' : 'default') }>
                      size :{ $$common.get('size') }
                  </button>

                  <button
                    className=""
                    onClick={ e => $$common.update('fullWidth', v => !v) }>
                      fullWidth :{ $$common.get('fullWidth') ? 'true' : 'false' }
                  </button>

                  <div className="lineFocusColor">
                      <span style={ {color: $$common.get('lineFocusColor')} }>lineFocusColor:{ $$common.get('lineFocusColor') }
                          -- </span>
                      <button
                        style={ {backgroundColor: $$color.get('green')} }
                        onClick={ e => $$common.set('lineFocusColor', $$color.get('green')) }>
                          green
                      </button>

                      <button
                        style={ {backgroundColor: $$color.get('orange')} }
                        onClick={ e => $$common.set('lineFocusColor', $$color.get('orange')) }>
                          orgion
                      </button>
                  </div>

                  <div className="">
                      <span style={ {color: $$common.get('lineErrorColor')} }>lineErrorColor:{ $$common.get('lineErrorColor') }
                          -- </span>
                      <button
                        style={ {backgroundColor: $$color.get('green')} }
                        onClick={ e => $$common.set('lineErrorColor', $$color.get('green')) }>
                          green
                      </button>

                      <button
                        style={ {backgroundColor: $$color.get('orange')} }
                        onClick={ e => $$common.set('lineErrorColor', $$color.get('orange')) }>
                          orgion
                      </button>

                      <button
                        style={ {backgroundColor: $$color.get('d1')} }
                        onClick={ e => $$common.set('lineErrorColor', $$color.get('d1')) }>
                          d1
                      </button>
                  </div>

                  <div className="">
                      <span style={ {color: $$common.get('errorTextColor')} }>errorTextColor:{ $$common.get('errorTextColor') }
                          -- </span>
                      <button
                        style={ {backgroundColor: $$color.get('green')} }
                        onClick={ e => $$common.set('errorTextColor', $$color.get('green')) }>
                          green
                      </button>

                      <button
                        style={ {backgroundColor: $$color.get('orange')} }
                        onClick={ e => $$common.set('errorTextColor', $$color.get('orange')) }>
                          orgion
                      </button>
                  </div>
              </div>
              <div>
                  <h3>base</h3>
                  <Text
                    labelWith={ labelWith }
                    iconClass={ `fa fa-address-book` }
                    label={ `base` }
                  />
              </div>
              <form>
                  <h3>form</h3>
                  <div className="main-inputList">

                      <Text
                        labelWith={ labelWith }
                        iconClass={ `fa fa-address-book` }
                        label={ `username` }
                        type={ `text`}
                        full={ $$common.get('fullWidth') }
                        max={ 16 }
                        errorTextColor={ $$common.get('errorTextColor') }
                        lineFocusColor={ $$common.get('lineFocusColor') }
                        lineErrorColor={ $$common.get('lineErrorColor') }
                        size={ $$common.get('size') }
                        layout={ $$common.get('layout') }
                        placeholder={ `new username` }
                        theme={ $$common.get('theme') }
                        maxErrorText={ `out length(max [max])` }
                        min={ 5 }
                        value={ $$cInput.get('username') }
                        onChange={ ({value}) => $$cInput.set('username', value)  }
                      />

                      <Text
                        labelWith={ labelWith }
                        label={ `password` }
                        type={ `password`}
                        iconClass={ `fa fa-key` }
                        errorTextColor={ $$common.get('errorTextColor') }
                        lineErrorColor={ $$common.get('lineErrorColor') }
                        lineFocusColor={ $$common.get('lineFocusColor') }
                        full={ $$common.get('fullWidth') }
                        theme={ $$common.get('theme') }
                        layout={ $$common.get('layout') }
                        size={ $$common.get('size') }
                        max={ 16 }
                        min={ 4 }
                        placeholder={ '密码' }
                        value={ $$cInput.get('password') }
                        onChange={ ({value}) => $$cInput.set('password', value)  }
                      />

                      <Text
                        labelWith={ labelWith }
                        label={ `user phone` }
                        theme={ $$common.get('theme') }
                        type={ `text` }
                        iconClass={ `fa fa-phone` }
                        placeholder={ `phone` }
                        errorTextColor={ $$common.get('errorTextColor') }
                        lineErrorColor={ $$common.get('lineErrorColor') }
                        lineFocusColor={ $$common.get('lineFocusColor') }
                        full={ $$common.get('fullWidth') }
                        size={ $$common.get('size') }
                        value={ $$cInput.get('phone') }
                        layout={ $$common.get('layout') }
                        max={ null }
                        min={ null }
                        rex={ /^\d{4,18}$/ }
                        rexErrorText={ '[label] error !!!' }
                        onChange={ ({value}) => $$cInput.set('phone', value)  }
                      />

                      <Text
                        labelWith={ labelWith }
                        label={ `your gmail` }
                        placeholder={ `gmail , no outlook` }
                        iconClass={ `fa fa-envelope-o` }
                        type={ `text` }
                        errorTextColor={ $$common.get('errorTextColor') }
                        lineErrorColor={ $$common.get('lineErrorColor') }
                        lineFocusColor={ $$common.get('lineFocusColor') }
                        full={ $$common.get('fullWidth') }
                        layout={ $$common.get('layout') }
                        theme={ $$common.get('theme') }
                        value={ $$cInput.get('email') }
                        size={ $$common.get('size') }
                        rexs={ [
                            {
                                rex: /^.+@.+\..+$/, passIsRight: !0,
                            },
                            {
                                rex: /^.+@outlook\.com$/, passIsRight: !1, errorText: 'not allow outlook',
                            },
                            {
                                rex: /^.+@gmail\.com$/, passIsRight: !0, errorText: '[label] must be gmail',
                            }
                        ]}
                        onChange={ ({value}) => $$cInput.set('email', value)  }
                      />

                      <Text
                        labelWith={ labelWith }
                        label={ `password1` }
                        type={ `password`}
                        layout={ $$common.get('layout') }
                        max={ 16 }
                        placeholder={ `password 1` }
                        errorTextColor={ $$common.get('errorTextColor') }
                        lineErrorColor={ $$common.get('lineErrorColor') }
                        lineFocusColor={ $$common.get('lineFocusColor') }
                        full={ $$common.get('fullWidth') }
                        size={ $$common.get('size') }
                        iconClass={ `fa fa-key` }
                        min={ 4 }
                        theme={ $$common.get('theme') }
                        value={ $$cInput.get('password1') }
                        onChange={ ({value}) => $$cInput.set('password1', value)  }
                      />

                      <Text
                        labelWith={ labelWith }
                        label={ `password2` }
                        iconClass={ `fa fa-key` }
                        type={ `password`}
                        placeholder={ `password 2` }
                        errorTextColor={ $$common.get('errorTextColor') }
                        lineErrorColor={ $$common.get('lineErrorColor') }
                        lineFocusColor={ $$common.get('lineFocusColor') }
                        theme={ $$common.get('theme') }
                        size={ $$common.get('size') }
                        layout={ $$common.get('layout') }
                        full={ $$common.get('fullWidth') }
                        value={ $$cInput.get('password2') }
                        errorText={
                            $$cInput.get('password2') != $$cInput.get('password1') ?
                              `password2 must equal password1` : ''
                        }
                        onChange={ ({value}) => $$cInput.set('password2', value)  }
                      />
                  </div>
              </form>

          </div>
        )
    }
}

ReactDom.render(<Main/>, document.getElementById('react'));
