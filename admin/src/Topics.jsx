import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'


import './App.css'

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
  createData('Fracciones Propias', 'PDF', 6.0),
  createData('Fracciones Impropias', 'Video', 9.0),
  createData('Resta de Fracciones', 'PDF', 16.0),
  createData('Suma de Fracciones', 'Video', 3.7),
  createData('División de Fracciones', 'PDF', 16.0),
  createData('Fracciones Propias', 'PDF', 6.0),
  createData('Fracciones Impropias', 'Video', 9.0),
  createData('Resta de Fracciones', 'PDF', 16.0),
  
];

    

  //  <Link to="/Upload">17 Fracciones impropias</Link>

function CustomizedTable(props) {
  const { classes } = props

  return (
    <div>
      <h1 className="temasTittle">Temas</h1>
      <div className = "contentTable">
      <Paper className={classes.root}  >
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <CustomTableCell>Nombre del Tema</CustomTableCell>
              <CustomTableCell >Tipo</CustomTableCell>
              <CustomTableCell >Peso(Kb)</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => {
              return (
                <TableRow className={classes.row} key={row.id}>
                    <CustomTableCell component="th" scope="row">
                      <NavLink to="/upload">{row.name}</NavLink>
                    </CustomTableCell>
                    <CustomTableCell><NavLink to="/upload">{row.tipo}</NavLink></CustomTableCell>
                    <CustomTableCell ><NavLink to="/upload">{row.peso}</NavLink></CustomTableCell>
                
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