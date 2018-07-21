/**
 * Jugador.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    numeroC: {
      type: 'string',
      required: true
    },
    nombreC: {
      type: 'string',
      required: true
    },
    nombreJ: {
      type: 'string',
      required: true
    },
    ingreso: {
      type: 'string',
      required: true
    },
    goles: {
      type: 'string',
      required: true
    },
    equipo: {
      collection: 'equipo',
      via: 'idEquipo'
    }


  },

};

