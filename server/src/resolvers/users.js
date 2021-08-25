const query = {
  login: (parent, args) => {
    const { email, password } = args;

    console.log('login:', email, password);

    return null;
  }
};

const mutation = {
  createUser: (_, args) => {
    const data = args.data;

    console.log('createUser:', data);
  }
};

module.exports = { query, mutation };
