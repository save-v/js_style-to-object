'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  let res = sourceString.split(';');

  res = res.map((el) => el.split(':'));
  res = res.map((el) => el.map((item) => item.trim()));
  res = res.filter((item) => item.length > 1);

  res = res.reduce((acc, item) => {
    return {
      ...acc,
      [item[0]]: item[1],
    };
  }, {});

  return res;
}

module.exports = convertToObject;
