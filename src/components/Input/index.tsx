import React, { InputHTMLAttributes, memo, useEffect, useState } from 'react';

import { useForm } from '../../hooks/useForm';

import { InputContainer } from './styles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	children?: React.ReactNode;
	name: string;
	label: string;
	email?: boolean;
	phone?: boolean;
	money?: boolean;
	cpfOrCnpj?: boolean;
	mask?: string;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	onFocus?: React.FocusEventHandler<HTMLInputElement>;
	onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
	onBlur?: React.FocusEventHandler<HTMLInputElement>;
	externalError?: {
		isVisible: boolean;
		error: Error;
	};
}

interface Error {
	refType: string;
	errorText: string;
}

type InputType = 'email' | 'text';

function Input({
	children,
	name,
	label,
	email,
	phone,
	money,
	mask,
	onChange,
	onFocus,
	onKeyUp,
	onBlur,
	externalError,
	cpfOrCnpj,
	...rest
}: InputProps): JSX.Element {
	const form = useForm();
	const error = handleError();

	const [isValid, setIsValid] = useState(true);
	const [errors, setErrors] = useState<Error[]>([]);
	const [inputMode, setInputMode] = useState<
		'email' | 'none' | 'tel' | 'numeric'
	>('none');
	const [inputType, setInputType] = useState<InputType>('text');

	const id = name + '_' + label.length + name.length;

	useEffect(() => {
		if (email) {
			setInputMode('email');
			setInputType('email');
		}

		if (phone) setInputMode('tel');

		if (money) setInputMode('numeric');
	}, [email, money, phone]);

	useEffect(() => {
        if (!externalError) return;

		if (externalError.isVisible) {
			error.add(externalError.error);
		} else {
            error.remove(externalError.error.refType);
        }
	}, [error, externalError]);

	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		onChange && onChange(event);
	}

	function handleKeyUp(event: React.KeyboardEvent<HTMLInputElement>) {
		const input = event.target as HTMLInputElement;

		onKeyUp && onKeyUp(event);

		mask && form.inputMask(event, mask);
		cpfOrCnpj &&
			form.inputMask(
				event,
				input.value.length <= 14
					? '###.###.###-##'
					: '##.###.###/####-##'
			);
		money && form.moneyMask(event);
	}

	function handleFocus(event: React.FocusEvent<HTMLInputElement>) {
		onFocus && onFocus(event);
	}

	function handleBlur(event: React.FocusEvent<HTMLInputElement>) {
		onBlur && onBlur(event);

		const value = event.target.value;

		email && value.length > 0 && emailValidation(value);
		cpfOrCnpj && value.length > 0 && cpfOrCnpjValidation(value);
	}

    function handleError() {
		function add({ refType, errorText }: Error) {
			const errorAlreadyExist = errors.find(
				(error) => error.refType === refType
			);
			if (errorAlreadyExist) return;

			const error: Error = {
				refType,
				errorText,
			};

			errors !== [error] && setErrors([error]);
		}


		function remove(refType: string) {
			const newErrorsList = errors.filter(
				(error) => error.refType !== refType
			);

            if (errors.length === 0 && newErrorsList.length === 0) return;

			newErrorsList !== errors && setErrors(newErrorsList);
		}

		function clear() {
			errors !== [] && setErrors([]);
		}

		return {
			add,
			remove,
			clear,
		};
	}

	function emailValidation(email: string) {
		const isValid = form.validateEmail(email);

		setIsValid(isValid);

		isValid
			? error.remove('email')
			: error.add({
					refType: 'email',
					errorText: 'Seu e-mail está inválido',
			  });
	}

	function cpfOrCnpjValidation(cpfOrCnpj: string) {
		const isValid = form.validateCpfOrCnpj(cpfOrCnpj);

		setIsValid(isValid);

		!isValid
			? error.add({
					refType: 'cpfOrCnpj',
					errorText: 'O CPF ou CNPJ digitado está inválido',
			  })
			: error.remove('cpfOrCnpj');
	}

	return (
		<InputContainer
			className={`input ${email && !isValid && 'invalid'} ${id}`}
		>
			<div className="errors">
				{errors.map((error) => (
					<span
						key={error.refType}
						className={`error ${error.refType}-error`}
					>
						{error.errorText}
					</span>
				))}
			</div>

			<input
				type={inputType}
				id={id}
				name={name}
				maxLength={mask ? mask.length : 1000}
				minLength={mask ? mask.length : 0}
				onChange={handleChange}
				onKeyUp={handleKeyUp}
				onFocus={handleFocus}
				onBlur={handleBlur}
				inputMode={inputMode}
				required
				{...rest}
			/>

			<label htmlFor={id}>{label}</label>

			{children}
		</InputContainer>
	);
}

const memoInput = memo(Input);

export default memoInput;
