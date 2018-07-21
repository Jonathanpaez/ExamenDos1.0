/**
 * Equipo.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre: {
      type: 'string',
      required: true
    },
    liga: {
      type: 'string',
      required: true
    },
    creacion: {
      type: 'string',
      required: true
    },
    copas: {
      type: 'string',
      required: true
    },
    campeonato: {
      type: 'string',
      required: true
    },
    idEquipo:{
      model: 'idEquipo',
    }



  },

};

