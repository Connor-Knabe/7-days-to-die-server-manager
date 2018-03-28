module.exports = {


    friendlyName: 'Get fps',
  
    inputs: {
      serverId: {
        required: true,
        example: 4
      }
  
    },
  
    exits: {
      notFound: {
        description: 'Server with given ID was not found in the system'
      },
      badRequest: {
        responseType: 'badRequest'
      },
      notFound: {
        responseType: 'notFound',
        description: 'Server was not found in DB'
      }
    },
  
    fn: async function (inputs, exits) {
        let fps = await sails.helpers.sdtd.loadFps(inputs.serverId);
        return exits.success(fps);
    }
  
  
  };
  