'use strict';

const phonebook = [
    { name: 'Tom Ford', phone: '080055553535'},
    { name: 'Christopher Moltisanti', phone: '+123456789'},
    { name: 'Steve Jobs', phone: '+6667772222'}
];

const findPhoneByName = name => {
   for (const obj of phonebook) {
       if (obj.name === name) return obj.phone;
   }
};
findPhoneByName('+123456789')
module.exports = { phonebook, findPhoneByName };
