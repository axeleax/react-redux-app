import ACCESS_TYPE from "../enum/accessType";

const  users = [
    {
        id: 'EK8805',
        firstName:'Axel',
        lastName:'Del Angel',
        password:'12345',
        access: ACCESS_TYPE.GRANTED,
        redirect:'/search'
    }
];

export default users;