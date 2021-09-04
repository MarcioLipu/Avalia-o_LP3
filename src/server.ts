/**
 * IMPORTAÇÃO SIMPLES
 */
 
import {app} from  './app'

/**
 * CRIA PORTA PADRÃO
 */
const PORT=3000
/**
 * EXTARTAR APLICAÇÃO
 */
const server =app.listen(PORT,()=>console.log(`App rodando na porta ${PORT}`  ))
process.on('SIGINT', () => server.close())

/**
 * FINALIZANDO APP
 
 */
console.log('App finished')