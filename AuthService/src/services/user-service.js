const UserRepository = require('../repository/user-repository');

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');
const { JWT_KEY } = require('../config/serverConfig');

class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async create(data) {
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            console.log('Something went wrong in service layer');
            throw error;
        }
    }

    async signIn(email, plainPassword) {
        try {
            // step 1 -> 
            const user = await this.userRepository.getByEmail(email);

            // step 2 -> 
            const passwordsMatch = this.checkPassword(plainPassword, user.password);

            if(!passwordsMatch) {
                console.log("Password must be same");
                throw {error: 'Incorrect password'};
            }

            // step 3 -> 
            const newJWT = this.createToken({email: user.email, id: user.id});
            return newJWT;
        } catch (error) {
            console.log('Something went wrong in sign in process');
            throw error;
        }
    }

    createToken(user) {
        try {
            const result = jwt.sign(user, JWT_KEY, {expiresIn: '1d'});
            return result;
        } catch (error) {
            console.log('Something went wrong in token creation');
            throw error;
        }
    }

    verifyToken(token) {
        try {
            const response = jwt.verify(token, JWT_KEY);
            return response;            
        } catch (error) {
            console.log('Something went wrong in token validation', error);
            throw error;
        }
    }

    checkPassword(userInputPlainPassword, encryptedPassword) {
        try {
            return bcrypt.compareSync(userInputPlainPassword, encryptedPassword);
        } catch (error) {
            console.log('Something went wrong in password comparison');
            throw error;
        }
    }
}

module.exports = UserService;