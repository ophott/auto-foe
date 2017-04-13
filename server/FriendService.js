var util = require('../util');

exports.get = (userData, apiService, otherPlayerService) => {
	const serviceName = 'FriendService';
	const wls = util.writeLogService(userData);

	wls.writeLog(`Creating service ${serviceName}`);

	return {
		handleResponse: (rd) => {
			if (rd.requestMethod === 'acceptInvitation') {
				otherPlayerService.updatePlayers(rd.responseData);
			}
		},
		getServiceName: () => serviceName,
		process: () => {
		}
	};
};
