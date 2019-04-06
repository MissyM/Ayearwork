const rewireReactHotLoader = require('react-app-rewire-hot-loader')
const rewireStyledComponents = require('react-app-rewire-styled-components')
const { override } = require('customize-cra')

const reactHotLoader = env => config => {
  config = rewireReactHotLoader(config, env)
  return config
}

const styledComponents = obj => config => {
  config = rewireStyledComponents(config, process.env.NODE_ENV, obj)
  return config
}

module.exports = override(
  reactHotLoader(),
  styledComponents({
    displayName: process.env.NODE_ENV !== 'production'
  })
)
