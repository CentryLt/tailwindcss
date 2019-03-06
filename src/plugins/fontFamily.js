import _ from 'lodash'

export default function() {
  return function({ addUtilities, e, config }) {
    const utilities = _.fromPairs(
      _.map(config('theme.fontFamily'), (value, modifier) => {
        return [
          `.${e(`font-${modifier}`)}`,
          {
            'font-family': _.isArray(value) ? value.join(', ') : value,
          },
        ]
      })
    )

    addUtilities(utilities, config('variants.fontFamily'))
  }
}