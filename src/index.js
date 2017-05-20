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
                    focus: !1,
                    errorText: ''
                }
            })
        };
    }

    _setIn($$s) {
        this.setState({$$s})
    }

    _isWarn() {
        const $$data = from(this.state.$$s, ['data']);
        const p = this.props;
        return p.errorText !== '' || $$data.get('errorText') !== '';
    }

    change(e, $$data) {
        const p = this.props;
        var value = e.target.value;
        var info = testInput(value, p);
        $$data.set('errorText', info.errorText);
        p.onChange({value, ...info});
    }

    render() {
        const p = this.props;
        const $$data = from(this.state.$$s, ['data'], $$newS => this._setIn($$newS));
        var isWarn = this._isWarn();
        var rootClass = `${ css.combine('BhyTextFile', isWarn && '-warn', p.full && '-full', $$data.get('focus') && '-focus') }`;
        return (
          <div className={  `${ p.className } ${ rootClass }`  }>
              { p.label != '' && p.showLabel && (
                <div className={ s['BhyTextFile-label'] } style={ {width: `${ p.labelWith }`} }>
                    <p>
                        <label className={ s['BhyTextFile-label-name'] }>
                            { p.label }
                        </label>
                        <label className={ s['BhyTextFile-label-mao'] }>
                            :
                        </label>
                    </p>
                </div>
              ) }

              <div className={ s['BhyTextFile-input'] } style={ {width: p.full ? '100%' : p.inputWith} }>
                  <input
                    type={ p.type }
                    title={ p.title }
                    name={ p.name }
                    value={ p.value }
                    placeholder={ p.placeholder }
                    onChange={ e => this.change(e, $$data) }
                    onFocus={ e => $$data.set('focus', !0) }
                    onBlur={ e => $$data.set('focus', !1) }
                  />

                  { isWarn && (
                    <p className={ s['BhyTextFile-errorText'] }>{ p.errorText || $$data.get('errorText') }</p>
                  ) }
              </div>

              <div className={ s['BhyTextFile-line'] }>
                  <span className={ s['BhyTextFile-line-focus'] }/>
                  <span className={ s['BhyTextFile-line-noFocus'] }/>
              </div>

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
};

var en = {
    maxErrorText: '[label] max length is [max]',
    minErrorText: '[label] min length is [min]',
    rexErrorText: '[label] format is wrong',
    numberErrorText: '[label] must is number',
    emptyErrorText: '[label]not allow empty',
};
Text.defaultProps = {
    theme: 'border',
    full: !1,
    max: 20,
    min: 2,
    label: '',
    errorText: '',
    showLabel: !0,
    rexPassIsRight: !0,
    className: '',
    inputWith: '200px',
    ...en,
};

Text.propTypes = {
    labelWith: React.PropTypes.string,
    inputWith: React.PropTypes.string,
    full: React.PropTypes.bool,
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