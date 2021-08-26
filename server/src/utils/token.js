function encode(user) {
  const { id, firstName, middleName, lastName } = user;

  const token = `${id}|${firstName}|${middleName || ''}|${lastName}`;

  return token;
}

function decode(token) {
  const userId = parseInt(token.split('|')[0], 10);

  return userId;
}

module.exports = {
  encode,
  decode
};
