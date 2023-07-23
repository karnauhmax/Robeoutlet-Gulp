function getRenderedKey(login, password) {
  return btoa(`${login}:${password}`);
}

const credentials = {
  password: "gnaI gOLi kYyx FyyR jh6t qtPS",
  login: "robeoutlet_admin",
  rendered: `Basic ${getRenderedKey("robeoutlet_admin", "gnaI gOLi kYyx FyyR jh6t qtPS")}`,
};




export default credentials;
