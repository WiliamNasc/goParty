import {http} from './config'

export default{

    listar: () => {

        return http.get('consultarTodos')
    },

    salvar: (evento) => {

        return http.post('incluir',evento)
    },

    atualizar: (evento) => {
        return http.put('atualizar', evento)
    },

    apagar: (evento) => {
        return http.delete('deletar', evento)
    }
}