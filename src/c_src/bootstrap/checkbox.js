var React = require('react');
var { View, Text, Switch } = require('react-native');

function checkbox(locals) {
  if (locals.hidden) {
    return null;
  }

  return (
    <View style={formGroupStyle}>
      {label}
      <Switch
        accessibilityLabel={locals.label}
        ref="input"
        disabled={locals.disabled}
        onTintColor={locals.onTintColor}
        thumbTintColor={locals.thumbTintColor}
        tintColor={locals.tintColor}
        style={checkboxStyle}
        onValueChange={(value) => locals.onChange(value)}
        value={locals.value}
      />
      {help}
      {error}
    </View>
  );
}

module.exports = checkbox;
