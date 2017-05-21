import React from 'react';
import s from './style.styl';
import {fromJS} from 'immutable'
import testInput from '../util/testInput'
import {from} from 'immutable/contrib/cursor'
import PropTypes from 'prop-types'

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

    render() {
        const p = this.props;
        const $$data = from(this.state.$$s, ['data'], $$newS => this._setIn($$newS));
        var isWarn = this._isWarn();
        return (
          <div className={ this._rootClass({$$data, isWarn}) }>
              { p.label != '' && p.showLabel && (
                <div className={ s['BhyTextFile-label'] } style={ {width: p.layout == 'y' ? '100%' : p.labelWith} }>
                    <label className={ s['BhyTextFile-label-name'] } style={ {color: isWarn ? p.errorTextColor : null} }>{ p.label }</label>
                    { p.layout != 'y' && (
                      <label className={ s['BhyTextFile-label-mao'] } style={ {color: isWarn ? p.errorTextColor : null} }>:</label>
                    ) }
                </div>
              ) }

              <div className={ `${ s['BhyTextFile-input'] } ${ p.iconClass && s['hasIcon'] }` } style={ {width: p.full ? '100%' : p.inputWith} }>
                  { p.iconClass && (
                    <div className={ s['boxIcon'] }>
                        <i className={ p.iconClass }/>
                    </div>
                  ) }
                  <input
                    type={ p.type }
                    title={ p.title }
                    name={ p.name }
                    value={ p.value }
                    defaultValue={ p.defaultValue }
                    placeholder={ p.placeholder }
                    onChange={ e => this.change(e, $$data) }
                    onFocus={ e => this.focus(e, $$data) }
                    onBlur={ e => this.blur(e, $$data) }
                  />
                  { p.theme == 'line' && (
                    <div className={ `${ s['BhyTextFile-boxLine'] } ${ $$data.get('focus') && s['focus']  }`  }>
                        <p className={ `${ s['before'] }` } style={ {backgroundColor: isWarn ? p.lineErrorColor : p.lineBorderColor} }/>
                        <p className={ `${ s['after'] }` } style={ {backgroundColor: isWarn ? p.lineErrorColor : p.lineFocusColor} }/>
                    </div>
                  )}

                  { isWarn && (
                    <p className={ s['BhyTextFile-errorText'] } style={ {color: p.errorTextColor} }>{ p.errorText || $$data.get('errorText') }</p>
                  ) }
              </div>


          </div>
        );
    }


    _setIn($$s) {
        this.setState({$$s})
    }

    _isWarn() {
        const $$data = from(this.state.$$s, ['data']);
        const p = this.props;
        return p.errorText !== '' || $$data.get('errorText') !== '';
    }

    _rootClass({$$data, isWarn}) {
        const p = this.props;
        return p.className + ' ' +
          s['BhyTextFile'] + ' ' +
          (s[p.size] || '') + ' ' +
          (s[p.theme] || '') + ' ' +
          (s['layout' + p.layout] || '') + ' ' +
          (isWarn ? s['warn'] || '' : '') + ' ' +
          (p.full ? s['full'] || '' : '') + ' ' +
          ($$data.get('focus') ? s['focues'] || '' : '')
    }

    focus(e, $$data) {
        const p = this.props;
        $$data.set('focus', !0);
        p.onFocus(e);
    }

    blur(e, $$data) {
        const p = this.props;
        $$data.set('focus', !1);
        p.onBlur(e);
    }

    change(e, $$data) {
        const p = this.props;
        var value = e.target.value;
        var info = testInput(value, p);
        $$data.set('errorText', info.errorText);
        p.onChange({e, value, ...info});
    }
}
var cn = {
    maxErrorText: '[label]不可以超过[max]个字符！',
    minErrorText: '[label]不可少于[min]个字符！',
    rexErrorText: '[label]格式不对！',
    numberErrorText: '[label]必须是数组！',
    emptyErrorText: '[label]不可为空！',
};

var en = {
    maxErrorText: '[label] max length is [max]！',
    minErrorText: '[label] min length is [min]！',
    rexErrorText: '[label] format is wrong！',
    numberErrorText: '[label] must is number！',
    emptyErrorText: '[label] not allow empty！',
};
Text.defaultProps = {
    theme: 'border',
    full: !1,
    require: !0,
    max: 20,
    min: 2,
    value: '',
    label: '',
    errorText: '',
    showLabel: !0,
    rexPassIsRight: !0,
    className: '',
    inputWith: '200px',
    size: 'default', // sm
    layout: 'x',
    onFocus: () => {},
    onBlur: () => {},
    onChange: () => {},
    ...en,
};

Text.propTypes = {
    className: PropTypes.string,
    labelWith: PropTypes.string,
    layout: PropTypes.string,
    theme: PropTypes.string,
    language: PropTypes.string,
    size: PropTypes.string,
    showLabel: PropTypes.bool,
    inputWith: PropTypes.string,
    full: PropTypes.bool,
    label: PropTypes.string,
    type: PropTypes.string,
    title: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    passSetValue: PropTypes.bool,
    value: PropTypes.any.isRequired,
    defaultValue: PropTypes.any,

    max: PropTypes.number,
    min: PropTypes.number,
    maxErrorText: PropTypes.string,
    minErrorText: PropTypes.string,
    rexs: PropTypes.array,
    rex: PropTypes.any,
    rexErrorText: PropTypes.string,
    emptyErrorText: PropTypes.string,

    rexPassIsRight: PropTypes.bool,
    require: PropTypes.bool,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    errorText: PropTypes.string,

    lineBorderColor: PropTypes.string,
    lineFocusColor: PropTypes.string,
    lineErrorColor: PropTypes.string,
    errorTextColor: PropTypes.string,

    iconClass: PropTypes.string,
};

export default Text;