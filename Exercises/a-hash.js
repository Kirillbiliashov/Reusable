'use strict';

const phonebook = {
    'Tom Ford': '080055553535',
    'Christopher Moltisanti': '+123456789',
    'Steve Jobs': '+6667772222',
};

const findPhoneByName = name => phonebook[name];

module.exports = { phonebook, findPhoneByName };
