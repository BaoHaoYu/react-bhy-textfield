function replaceLabel(text, props) {
    return text.replace('[label]', props.label)
}

export default function test(value, props) {
    var info = {};

    info = testRequire(value, props);
    if (!info.pass) {
        return info
    }

    info = max(value, props);
    if (!info.pass) {
        return info
    }

    info = min(value, props);
    if (!info.pass) {
        return info
    }

    info = rex(value, props);
    if (!info.pass) {
        return info
    }

    return {pass: !0, errorText: ''}
}

function max(value, props) {
    if (props.max && value.length > props.max) {
        return {pass: !1, errorText: replaceLabel(props.maxErrorText, props).replace('[max]', props.max)}
    }
    return {pass: !0, errorText: ''};
}

function min(value, props) {
    if (props.min && value.length < props.min) {
        return {pass: !1, errorText: replaceLabel(props.minErrorText, props).replace('[min]', props.min)}
    }
    return {pass: !0, errorText: ''}
}

function testRequire(value, props) {
    if (props.require && value.length == 0) {
        return {pass: !1, errorText: replaceLabel(props.emptyErrorText, props)}
    }
    return {pass: !0, errorText: ''}
}

function rex(value, props) {
    if (props.rex) {
        if ((props.rex.test(value) && !props.rexPassIsRight) || (!props.rex.test(value) && props.rexPassIsRight)) {
            return {pass: !1, errorText: replaceLabel(props.rexErrorText, props)}
        }
    }

    else if (props.rexs) {
        for (var i = 0; i < props.rexs.length; i++) {
            var v = props.rexs[i];
            var rex = v.rex || v;
            if ((rex.test(value) && !v.passIsRight) || (!rex.test(value) && v.passIsRight)) {
                return {pass: !1, errorText: replaceLabel(v.errorText || props.rexErrorText, props)}
            }
        }
    }

    return {pass: !0, errorText: ''}
}

