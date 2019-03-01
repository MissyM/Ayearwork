import * as api from './api'

const log = logObject => {
  //Cambiar por = new Date()
  logObject.timestamp = new Date(Date.now())

  api.log(logObject)
}
export const logUsuarioRegistrado = (username) => log({ 
  eventName: 'UsuarioRegistrado', 
  username,
})
export const logSesionIniciada = (username) => log({ 
  eventName: 'SesionIniciada', 
  username,
})

export const logNavego = pathname => log({
  eventName: 'Navegó',
  url: pathname,
})

//Componente TopicSelected
export const logSelectDelNavBarClickeado = () => log({
  eventName: 'SelectDelNavBarClickeado',
})
//Logs del componente Browser
export const logLogoLoboYupayClickeado = () => log({
  eventName: 'LogoLoboYupayClickeado',
})

//Logs del Componente FilterTitles
export const logTagTodoClickeado = () => log({
  eventName: 'TagTodoClickeado',
})
export const logTagPDFClickeado = () => log({
  eventName: 'TagPDFClickeado',
})
export const logTagVideoClickeado = () => log({
  eventName: 'TagVideoClickeado',
})

export const logTagTemaClickeado = (idTopic) => log({
  eventName: 'TagTemaClickeado',
  idTopic,
})


//Logs del Componente Learning

export const logIconoVisualizacionesClickeado = () => log({
  eventName: 'VisualizacionesClickeado',
})
export const logIconoLikesClickeado = () => log({
  eventName: 'IconoLikesClickeado',
})
export const logIconoSubirClickeado = () => log({
  eventName: 'IconoSubirClickeado',
})
export const logIconoCompartirClickeado = () => log({
  eventName: 'IconoCompartirClickeado',
})