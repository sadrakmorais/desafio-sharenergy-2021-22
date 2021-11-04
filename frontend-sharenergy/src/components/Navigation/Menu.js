import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuUl, Container, MenuLink, ContainerIcons, ContainerLogOut } from './styles';
import BarChart from '@material-ui/icons/BarChart';
import AttachMoney from '@material-ui/icons/AttachMoney';
import PeopleAlt from '@material-ui/icons/PeopleAlt';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AddBox from '@material-ui/icons/AddBox';
import { AuthContext } from '../../store/Auth';

const Menu = () => {
	const { signOut } = useContext(AuthContext);
	const { pathname } = useLocation();
	return (
		<Container>
			<MenuUl>
				<MenuLink active={pathname === '/home'}>
					<ContainerIcons>
						<BarChart style={{ width: '100%' }} />
					</ContainerIcons>
					<Link to='/home'>Visualização de Dados</Link>
				</MenuLink>
				<MenuLink active={pathname === '/clientes'}>
					<ContainerIcons>
						<PeopleAlt style={{ width: '100%' }} />
					</ContainerIcons>
					<Link to='/clientes'>Clientes</Link>
				</MenuLink>
				<MenuLink active={pathname === '/addclientes'}>
					<ContainerIcons>
						<AddBox style={{ width: '100%' }} />
					</ContainerIcons>
					<Link to='/addclientes'>Adicione Clientes</Link>
				</MenuLink>
				<MenuLink active={pathname === '/financeiro'}>
					<ContainerIcons>
						<AttachMoney style={{ width: '100%' }} />
					</ContainerIcons>
					<Link to='/financeiro'>Financeiro</Link>
				</MenuLink>
				<MenuLink active={pathname === '/addadmin'}>
					<ContainerIcons>
						<AdminPanelSettingsIcon style={{ width: '100%' }} />
					</ContainerIcons>
					<Link to='/addadmin'>Adicionar Administrador</Link>
				</MenuLink>

				<ContainerLogOut>
					<button onClick={signOut}>SAIR</button>
				</ContainerLogOut>
			</MenuUl>
		</Container>
	);
};

export default Menu;
