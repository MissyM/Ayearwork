import React, { useState } from 'react'
import { getIn } from 'formik'
import MUISelect from '@material-ui/core/Select'
import FormHelperText from '@material-ui/core/FormHelperText'
import FilledInput from '@material-ui/core/FilledInput'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import uniqueId from 'lodash/uniqueId'

export const fieldToSelect = ({
  field,
  form: { isSubmitting },
  disabled = false,
  ...props
}) => {
  return {
    disabled: isSubmitting || disabled,
    ...props,
    ...field,
  }
}

export const fieldToTextField = ({
  field,
  form,
  variant,
  disabled = false,
  ...props
}) => {
  const { name } = field;
  const { touched, errors, isSubmitting } = form

  const fieldError = getIn(errors, name)
  const showError = getIn(touched, name) && !!fieldError

  return {
    ...props,
    ...field,
    error: showError,
    helperText: showError ? fieldError : props.helperText,
    disabled: isSubmitting || disabled,
  };
};

const Select = ({
  field,
  form,
  variant,
  disabled = false,
  children,
  formControl = {},
  ...props
}) => {
  const [ id ] = useState(uniqueId('formik-select-'))
  const { name } = field;
  const { touched, errors, isSubmitting } = form

  const fieldError = getIn(errors, name)
  const showError = getIn(touched, name) && !!fieldError

  return <FormControl
    error={showError}
    {...formControl}
  >
    <InputLabel htmlFor={id}>Edad</InputLabel>
    <MUISelect
      disabled={isSubmitting || disabled}
      input={<FilledInput id={id} name={name} />}
      {...props}
      {...field}
    >
      {children}
    </MUISelect>
    <FormHelperText>{showError ? fieldError : props.helperText}</FormHelperText>
  </FormControl>
}

Select.displayName = 'FormikMaterialUISelect'

export default Select
