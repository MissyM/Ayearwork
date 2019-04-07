import React, { useState } from 'react'
import { getIn } from 'formik'
import MUISelect from '@material-ui/core/Select'
import FormHelperText from '@material-ui/core/FormHelperText'
import FilledInput from '@material-ui/core/FilledInput'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import uniqueId from 'lodash/uniqueId'

const Select = ({
  field,
  form,
  variant,
  disabled = false,
  label,
  children,
  formControl = {},
  ...props,
}) => {
  const [ id ] = useState(uniqueId('formik-select-'))
  const { name} = field
  const { touched, errors, isSubmitting } = form

  const fieldError = getIn(errors, name)
  const showError = getIn(touched, name) && !!fieldError

  return (
    <FormControl
      error={showError}
      {...formControl}
    >
      <InputLabel htmlFor={id} shrink={field.value}>{label}</InputLabel>
      <MUISelect
        name={name}
        disabled={isSubmitting || disabled}
        input={<FilledInput id={id} />}
        {...props}
        {...field}
      >
        {children}
      </MUISelect>
      <FormHelperText>{showError ? fieldError : props.helperText}</FormHelperText>
    </FormControl>
  )
}

Select.displayName = 'FormikMaterialUISelect'

export default Select
