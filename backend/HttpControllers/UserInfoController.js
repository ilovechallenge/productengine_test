const UserInfoController = {
    getUsers: (req, res) => {
        let result = {
            ownerFirstName: 'John',
            ownerLastName: 'Doe',
            ownerAddress: '123 Main St, City, Country',
            dateCreated: '2022-04-20',
            isPaidAccount: true,
        };
        res.status(200).json(result);
    }
}

module.exports = UserInfoController;