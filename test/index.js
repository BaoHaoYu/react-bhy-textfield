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
                }
            }
        })
    };

    setIn($$s) {
        this.setState({$$s})
    }

    render() {
        const $$data = from(this.state.$$s, ['data'], $$newS => this.setIn($$newS));

        const $$cInput = $$data.get('cInput');
        const labelWith = '110px'
        return (
          <div className="main">
             <div className="main-inputList">
                 <Text
                   labelWith={ labelWith }
                   label={ `username` }
                   type={ `text`}
                   max={ 16 }
                   min={ 5 }
                   value={ $$cInput.get('username') }
                   onChange={ ({value}) => $$cInput.set('username', value)  }
                 />

                 <Text
                   labelWith={ labelWith }
                   label={ `password` }
                   type={ `password`}
                   max={ 16 }
                   min={ 4 }
                   placeholder={ '密码' }
                   value={ $$cInput.get('password') }
                   onChange={ ({value}) => $$cInput.set('password', value)  }
                 />

                 <Text
                   labelWith={ labelWith }
                   label={ `user phone` }
                   type={ `text` }
                   value={ $$cInput.get('phone') }
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
                   value={ $$cInput.get('email') }
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
                   max={ 16 }
                   min={ 4 }
                   value={ $$cInput.get('password1') }
                   onChange={ ({value}) => $$cInput.set('password1', value)  }
                 />

                 <Text
                   labelWith={ labelWith }
                   label={ `password2` }
                   type={ `password`}
                   full
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
