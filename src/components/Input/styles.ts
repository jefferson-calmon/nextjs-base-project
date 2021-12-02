import styled from 'styled-components'

export const InputContainer = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	align-items: flex-start;
	flex-direction: column-reverse;

	+ .textarea,
	+ .input,
    + .autocomplete {
		margin-top: 2.5rem;
	}

	label {
		display: inline-block;
		font-size: 1.4rem;
		font-weight: 600;
		color: var(--color-gray-4);

		margin-bottom: 0.8rem;
		transition: all 0.2s;
	}

	.errors {
		span.error {
			display: flex;

			color: var(--color-red);
			font-size: 1.4rem;
			font-weight: 600;

			&:first-child {
				margin-top: 1rem;
			}

			+ span {
				margin-top: 0.3rem;
			}
		}
	}

	input {
		position: relative;
		width: 100%;
		height: 5rem;
		padding: 0 2rem;

		font-size: 1.6rem;
		font-weight: 500;
		color: var(--color-gray-4);
        background: var(--color-gray-1);

		border-radius: 1rem;
		box-shadow: 0 0 0 2px var(--color-gray-3);

		transition: 0.3s;

		&::placeholder {
			font-weight: 300;
			font-size: 1.6rem;
			opacity: 0.4;
		}

		&:focus {
			box-shadow: 0 0 0 1px var(--color-secondary);
		}
	}

	&.invalid input {
		box-shadow: 0 0 0 2px var(--color-red);
	}
`
