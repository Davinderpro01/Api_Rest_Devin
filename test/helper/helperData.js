const testAuthLogin = {
  email : "dsolorzano@gmail.com",
  password: "12345678"
}

const testAuthRegister = {
  name: "2Catman",
  age: 21,
  email: "dsolorzano@gmail.com",
  password: "12345678"
}

  const testAuthRegisterAdmin = {
    name: "User test",
    age: 20,
    email: "test@test.com",
    role: ["admin"],
    password: "12345678",
  };

  const testStorageRegister = {
    url: "http://localhost:3001/file-test.mp3",
    filename: "file-test.mp3"
  };

  const testDataTrack = {
    name :"hello",
    album :"new",
    cover :"silence",
    artist :{
        name :"Marco",
        nickname :"banda",
        nationality :"Gua"
    },
    duration :{
        start :1,
        end :0
    },
    mediaId :"3"
};
  

  module.exports = {
    testAuthRegister,
    testAuthLogin,
    testAuthRegisterAdmin,
    testStorageRegister,
    testDataTrack
  }