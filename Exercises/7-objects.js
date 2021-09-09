'use strict';

const fn = () => {
   const objConst = {name: 'Kirill'};
   let objLet = {name: 'Kirill'};
   objConst.name = 'Robert';
 objLet.name = 'Chris';
 //objConst = {age: 37, country: 'Morocco'};  TypeError: Assignment to constant variable.
 objLet = { appointments: 3, day: 'Tuesday'}
};
fn();
module.exports = { fn };
