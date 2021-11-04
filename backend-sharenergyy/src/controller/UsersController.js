const User = require('../models/User');

module.exports = {
	async index(req, res) {
		const users = await User.find();
		res.json(users);
	},

	async detail(req, res) {
		const { _id } = req.params;
		const users = await User.findOne({ _id });
		res.json(users);
	},

	async store(req, res) {
		const { name, participation } = req.body;

		let dataCreate = {
			name,
			participation,
		};
		const users = await User.create(dataCreate);
		res.json(users);
	},

	async update(req, res) {
		const { _id } = req.params;
		const { name, participation } = req.body;

		let dataCreate = {
			name,
			participation,
		};
		const user = await User.updateOne({ _id }, { ...dataCreate });

		res.json(user);
	},

	async delete(req, res) {
		const { _id } = req.params;
		const users = await User.findByIdAndDelete({ _id });
		res.json(users);
	},
};
