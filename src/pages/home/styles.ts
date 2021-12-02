import styled from 'styled-components';

export const HomeContainer = styled.div`
	display: flex;
	flex-direction: column;

	min-height: 90rem;
	min-height: 100vh;

	background: #f5f5f5;

	header,
	footer {
		display: flex;
		align-items: center;

		width: 100%;
		min-height: 4rem;
	}

	header {
		background: #fff;

		.content {
			display: flex;
			align-items: center;
			justify-content: space-between;

			padding: 2.8rem 0;

			h1 {
				font-size: 2.8rem;
			}

			.buttons {
				display: flex;

				.button-icon {
					position: relative;

					display: flex;
					align-items: center;
					justify-content: center;

					width: 4rem;
					height: 4rem;

					cursor: pointer;

					+ .button,
					+ .button-icon {
						margin-left: 2rem;
					}

					input {
						display: none;
					}

					i {
						font-size: 2rem;
					}

					.plus {
						position: absolute;
						top: 70%;
						left: 30%;
						transform: translate(-50%, -50%);
						z-index: 10;

						display: flex;
						align-items: center;
						justify-content: center;

						width: 1.4rem;
						height: 1.4rem;

						border-radius: 50%;
						background: var(--color-primary);
						color: #fff;

						i {
							font-size: 0.9rem;
						}
					}
				}
			}
		}
	}

	main {
		display: flex;
		align-items: center;

		flex: 1;
		width: 100%;
		min-height: 76.4rem;

		padding: 12rem;

		.content {
			display: flex;
			align-items: center;
			justify-content: center;

			canvas {
				display: none;
			}

			#editor {
				position: relative;
				width: 45rem;
				height: 65rem;

				background: #fff;
				box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
				border: 2px solid #ddd;

				.overlay {
					position: absolute;
					top: 0;
					left: 0;
					z-index: 2;

					width: 100%;
					height: 100%;

                    opacity: 0;
				}

				img.photo-preview {
					position: absolute;
					top: 0;
					left: 0;
					z-index: 1;

					width: 100%;
					height: 100%;

					object-fit: cover;
				}

				.text {
					position: absolute;

					z-index: 5;

					border: 2px dashed transparent;

					padding: 0.8rem 1.2rem;

					&.selected {
						border-color: var(--color-primary);
						cursor: move;
					}
				}
			}
		}
	}

	footer {
	}
`;

export default HomeContainer;
