import Head from 'next/head';

import Image from '../../components/Image';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Link from '../../components/Link';

import ImageLogo from '../../assets/logo.png';
import ImageBackground from '../../assets/login-background.svg';

import { LoginContainer } from './styles';

function Login(): JSX.Element {
	return (
		<LoginContainer>
			<Head>
				<title>Login | EasyInvite</title>
			</Head>

			<header>
				<div className="content">
					<div className="logo">
						<Image src={ImageLogo} alt="Logo" />
					</div>

					<Button>For users</Button>
				</div>
			</header>

			<main>
				<div className="content">
					<div className="overlay">
						<div className="image">
							<Image src={ImageBackground} alt={'Background'} />
						</div>
					</div>

					<form>
						<div>
						    <h1>
    							<strong>Welcome!</strong> <br />
    							<span>
    								Enter your email and password to continue
    							</span>
    						</h1>

    						<Input name="email" label="E-mail" email />

    						<Input
    							type="password"
    							name="password"
    							label="Password"
    						/>

    						<div className="forgot-password">
    							<Link to="/login">Forgot your password?</Link>
    						</div>

    						<Button>Continue</Button>
						</div>
					</form>
				</div>
			</main>

			<footer>
				<div className="content">
					<span>Copyright 2021</span>
				</div>
			</footer>
		</LoginContainer>
	);
}

export default Login;
