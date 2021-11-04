require('dotenv').config();
const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const errors = require('../lib/errors');

class AuthController {
	show = async (req, res) => res.status(200).json({ message: 'Administrador autenticado' });

	store = async (req, res) => {
		try {
			const { cpf, password } = req.body;
			const admin = await Admin.findOne({ cpf });

			if (!admin) {
				throw errors.NOT_FOUND('usuário');
			}

			bcrypt.compare(password, admin.password, (err, passwordsMatch) => {
				if (err || !passwordsMatch) {
					return res.status(401).json({ message: 'Senha incorreta' });
				}

				const auth = jwt.sign({ admin }, process.env.SECRET);

				return res.status(200).json({ admin, auth });
			});
		} catch (error) {
			console.error(error);

			return res.status(error.code || 500).json({
				message: error.message || errors.INTERNAL_SERVER_ERROR,
			});
		}
	};
}

module.exports = { AuthController };
