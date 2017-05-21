import React from 'react'
import ReactDom from 'react-dom'
import Text from '../src/index'
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
                    theme: 'border',
                    size: 'default',
                    fullWidth: !1,
                    lineFocusColor: null,
                    lineErrorColor: null,
                    errorTextColor:null,
                },
                color: {
                    green: '#1ce02b',
                    orange: 'orange'
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
        const labelWith = '110px';
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
                      theme :{ $$common.get('size') }
                  </button>

                  <button
                    className=""
                    onClick={ e => $$common.update('fullWidth', v => !v) }>
                      fullWidth :{ $$common.get('fullWidth') ? 'true' : 'false' }
                  </button>

                  <div className="lineFocusColor">
                      <span>lineFocusColor:{ $$common.get('lineFocusColor') } -- </span>
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
                      <span>lineErrorColor:{ $$common.get('lineErrorColor') } -- </span>
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
                  </div>

                  <div className="">
                      <span>errorTextColor:{ $$common.get('errorTextColor') } -- </span>
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
              <div className="main-inputList">

                  <Text
                    labelWith={ labelWith }
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
                    type={ `text` }
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
                    lineErrorColor={ $$common.get('lineErrorColor') }
                    lineFocusColor={ $$common.get('lineFocusColor') }
                    full={ $$common.get('fullWidth') }
                    size={ $$common.get('size') }
                    min={ 4 }
                    theme={ $$common.get('theme') }
                    value={ $$cInput.get('password1') }
                    onChange={ ({value}) => $$cInput.set('password1', value)  }
                  />

                  <Text
                    labelWith={ labelWith }
                    label={ `password2` }
                    type={ `password`}
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

          </div>
        )
    }
}

ReactDom.render(<Main/>, document.getElementById('react'));
