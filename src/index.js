import React from 'react';
import s from './style.styl';
import CssCombine from '../util/cssCombine'
import {fromJS} from 'immutable'
import testInput from '../util/testInput'
import {from} from 'immutable/contrib/cursor'
var css = new CssCombine({style: s});

class Text extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            $$s: fromJS({
                data: {
                    focus: !0,
                    errorText: ''
                }
            })
        };
    }

    setIn($$s) {
        this.setState({$$s})
    }

    _change(e, $$data) {
        const p = this.props;
        var value = e.target.value;
        var info = testInput(value, p);

        $$data.set('errorText', info.errorText);

        p.onChange({value, ...info});
    }

    _isWarn() {
        const $$data = from(this.state.$$s, ['data']);
        const p = this.props;
        return p.errorText != '' || $$data.get('errorText') != '';
    }

    render() {
        const p = this.props;
        const $$data = from(this.state.$$s, ['data'], $$newS => this.setIn($$newS));
        var isWarn = this._isWarn();

        return (
          <div className={ `${ css.combine('BhyTextFile', isWarn && '-warn', $$data.get('focus') && '-focus') } ${ p.className }`  }>
              { p.label != '' && p.showLabel && (
                <div>
                    <label>
                        { p.label }
                    </label>
                    <label>
                        :
                    </label>
                </div>
              ) }

              <input
                type={ p.type }
                title={ p.title }
                name={ p.name }
                value={ p.value }
                placeholder={ p.placeholder }
                onChange={ e => this._change(e, $$data) }
                onFocus={ e => $$data.set('focus', !0) }
                onBlur={ e => $$data.set('focus', !1) }
              />

              <div className={ s['BhyTextFile-line'] }>
                  <span className={ s['BhyTextFile-line-focus'] }></span>
                  <span className={ s['BhyTextFile-line-noFocus'] }></span>
              </div>

              { isWarn && (
                <p>{ p.errorText || $$data.get('errorText') }</p>
              ) }
          </div>
        );
    }
}
var cn = {
    maxErrorText: '[label]不可以超过[max]个字符',
    minErrorText: '[label]不可少于[min]个字符',
    rexErrorText: '[label]格式不对',
    numberErrorText: '[label]必须是数组',
    emptyErrorText: '[label]不可为空',
    emailErrorText: '邮箱的格式不对',
};

var en = {
    maxErrorText: '[label] max length is [max]',
    minErrorText: '[label] min length is [min]',
    rexErrorText: '[label] format is wrong',
    numberErrorText: '[label] must is number',
    emptyErrorText: '[label]not allow empty',
    emailErrorText: 'The mailbox is out of format',
};
Text.defaultProps = {
    theme: 'theme1',
    max: 20,
    min: 2,
    label: '',
    errorText: '',
    showLabel: !0,
    rexPassIsRight: !0,
    className: '',
    ...en,
};


Text.propTypes = {
    language: React.PropTypes.string,
    theme: React.PropTypes.string,
    label: React.PropTypes.string,
    type: React.PropTypes.string,
    title: React.PropTypes.string,
    name: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    passSetValue: React.PropTypes.bool,
    value: React.PropTypes.string,

    max: React.PropTypes.number,
    min: React.PropTypes.number,
    maxErrorText: React.PropTypes.string,
    minErrorText: React.PropTypes.string,
    rexs: React.PropTypes.array,
    rex: React.PropTypes.any,
    rexErrorText: React.PropTypes.string,
    emptyErrorText: React.PropTypes.string,

    rexPassIsRight: React.PropTypes.bool,
    require: React.PropTypes.bool,
    onChange: React.PropTypes.fun,
    errorText: React.PropTypes.string,
    showLabel: React.PropTypes.bool,
    className: React.PropTypes.string,
};

export default Text;