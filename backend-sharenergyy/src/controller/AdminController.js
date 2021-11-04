const Yup = require('yup');

const Admin = require('../models/Admin');
const errors = require('../lib/errors');
const bcrypt = require('bcrypt');

class AdminController {
	index = async (req, res) => {
		try {
			const query = req.query;
			let filter = {};

			if (Object.keys(query).length) {
				for (const key in query) {
					if (query.hasOwnProperty(key)) {
						filter[key] = query[key];
					}
				}
			}

			const admins = await Admin.find(filter);

			return res.status(200).json({ admins });
		} catch (error) {
			console.error(error);

			return res.status(error.code || 500).json({
				message: error.message || errors.INTERNAL_SERVER_ERROR,
			});
		}
	};

	show = async (req, res) => {
		try {
			const { adminId } = req.params;
			const admin = await User.findOne({ _id: adminId });
			if (!admin) {
				throw errors.NOT_FOUND('Administrador');
			}

			return res.status(200).json({ admin });
		} catch (error) {
			console.error(error);

			return res.status(error.code || 500).json({
				message: error.message || errors.INTERNAL_SERVER_ERROR,
			});
		}
	};

	store = async (req, res) => {
		try {
			let payload = req.body;
			let admin = await Admin.findOne({ cpf: payload.cpf });
			const adminExists = admin ? true : false;

			if (adminExists) {
				throw errors.CONFLICT('Já existe um administrador com esse CPF no sistema');
			}

			const validationSchema = Yup.object().shape({
				cpf: Yup.string().required('Não informado'),
				password: Yup.string().required('Não informado'),
			});

			await validationSchema.validate(payload, { abortEarly: false });

			let { password } = payload;
			const salt = await bcrypt.genSalt(10);

			password = await bcrypt.hash(password, salt);
			admin = await Admin.create({ ...payload, password });

			return res.status(201).json({ admin });
		} catch (error) {
			console.error(error);

			if (error instanceof Yup.ValidationError) {
				return res.status(errors.BAD_REQUEST().code).json({ error: error.inner });
			}

			return res.status(error.code || 500).json({
				message: error.message || errors.INTERNAL_SERVER_ERROR,
			});
		}
	};

	destroy = async (req, res) => {
		try {
			const { adminId } = req.params;
			const admin = await Admin.findOne({ _id: adminId });

			if (!admin) {
				throw errors.NOT_FOUND('Administrador');
			}

			await Admin.deleteOne({ _id: adminId });

			return res.status(200).json({ message: 'Administrador excluido' });
		} catch (error) {
			console.error(error);

			return res.status(error.code || 500).json({
				message: error.message || errors.INTERNAL_SERVER_ERROR,
			});
		}
	};
}

module.exports = { AdminController };
