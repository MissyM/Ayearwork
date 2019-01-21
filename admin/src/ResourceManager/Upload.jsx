import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'


import './styles.css'

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.orange,
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  textCenterCell: {
    textAlign: 'center',
  },

  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
})


let id = 0
function createData(name, tipo, peso) {
  id += 1
  return { id, name, tipo, peso }
}

const rows = [
  createData('Fracciones Propias', 'Fracciones', 9),
  createData('Fracciones Impropias', 'Fracciones', 9),
  createData('Resta de Fracciones', 'Fracciones', 9),
  createData('Suma de Fracciones', 'Fracciones', 9),
  createData('División de Fracciones', 'Fracciones', 9),
  createData('Fracciones Propias', 'Fracciones', 9),
  createData('Fracciones Impropias', 'Fracciones', 9),
  createData('Resta de Fracciones', 'Fracciones', 9),
  
];

    

  //  <Link to="/Upload">17 Fracciones impropias</Link>

function CustomizedTable(props) {
  const { classes } = props

  return (
    <div>
      <h1 className="temasTittle">Cargar Temas</h1>
      <div className="contentInput">
        <label for="name">Seleccionar Archivo:</label>
        <input type="file"
               id="avatar" name="avatar"
               accept="image/png, image/jpeg"/>
      </div>
      <div className = "contentTable">
      <Paper className={classes.root}  >
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <CustomTableCell>Nombre del Subtema</CustomTableCell>
              <CustomTableCell >Tema</CustomTableCell>
              <CustomTableCell >Peso (Megas)</CustomTableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => {
              return (
                <TableRow className={classes.row} key={row.id}>
                    <CustomTableCell component="th" scope="row">
                      {row.name}
                    </CustomTableCell>
                    <CustomTableCell>{row.tipo}</CustomTableCell>
                    <CustomTableCell>{row.tipo}</CustomTableCell>

                  </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </Paper>
      </div>
    </div>
  )
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(CustomizedTable)