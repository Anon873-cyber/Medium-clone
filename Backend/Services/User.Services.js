const Appwrite = require('appwrite');


class UserServices {
    #Client;
    #account;
    constructor() {
        this.#Client = new Appwrite.Client()
            .setEndpoint(process.env.APPWRITE_ENDPOINT)
            .setProject(process.env.APPWRITE_PROJECT_ID);
        this.#account = new Appwrite.Account(this.#Client);
    }

    async getLoggedInUser() {

        try {
            return await this.#account.get();
        } catch (error) {
            console.error('Error fetching logged-in user:', error);
            return null
        }
    }

    async updateLoggedInUser(name) {
        try {
            return await this.#account.updateName(name)
        } catch (error) {
            console.log('Error occured du updating the name of the user');
            return null;
        }
    };


}