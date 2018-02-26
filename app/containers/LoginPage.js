import React, { Component } from 'react';
import { observer } from 'mobx-react';
// import { connect } from 'react-redux';
import MdArrowForward from 'react-icons/lib/md/arrow-forward';
// import { GOOGLE_API_KEY, BACKEND_ROOT } from '../constants';
// import Loader from '../components/Loader';
// import Input from '../components/Input';
import Button from '../components/Button';
import { Todo, User } from '../models';

@observer
class LoginPage extends Component {
	componentDidMount() {}
	render() {
		const btnProps = {
			label: 'Continue',
			size: 'lg',
			styles: ['white'],
			handleClick: e => {
				alert('Hello world!');
				console.log(e);
			}
		};
		console.log(this.props);
		const user = User.create();
		console.log(user.toJSON());
		return (
			<div className="login-page">
				<div className="logo-wrapper">
					<div className="logo">
						<div className="logo-letter">DP</div>
					</div>
					<div className="logo-text">Dating picker!</div>
				</div>
				<div className="login-form">
					<div className="input-wrapper">
						<input
							ref={input => {
								this.textInput = input;
							}}
							className="input"
							type="text"
							value={this}
							placeholder="Your name"
						/>
						<span className="help-text">Type your name</span>
					</div>
					<Button {...btnProps}>
						<span className="arrow">
							<MdArrowForward />
						</span>
					</Button>
				</div>
			</div>
		);
	}
}

export default LoginPage;
