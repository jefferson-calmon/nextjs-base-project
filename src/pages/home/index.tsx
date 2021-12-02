/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';

import * as htmlToImage from 'html-to-image';
import download from 'downloadjs';

import Button from '../../components/Button';
import BoxText from '../../components/BoxText';
import { Invite, InviteText } from '../../models/Invite';

import { HomeContainer } from './styles';

interface Selected {
	type: string;
	id: string;
}

function Home(): JSX.Element {
	const [image, setImage] = useState<File | null>(null);
	const [invite, setInvite] = useState<Invite>({
		width: 450,
		height: 650,
		text: [],
	});
	const [selected, setSelected] = useState<Selected | null>(null);
	const [downloadLoading, setDownloadLoading] = useState<boolean>(false);

	const photoPreviewRef = useRef<HTMLImageElement>(null);
	const photoFileRef = useRef<HTMLInputElement>(null);

	// Read image and convert to data url
	useEffect(() => {
		if (image) {
			const photoPreview = photoPreviewRef.current;

			if (!photoPreview) return;

			const reader = new FileReader();

			reader.readAsDataURL(image);
			reader.onload = ({ target }) => {
				photoPreview.src = target?.result as string;
			};
		}
	}, [image, invite.height, invite.width]);

	function addText() {
		const message = prompt('Digite algum texto:');

		if (!message) return;

		const [textContent, color, size] = message.split(', ');

		const text: InviteText = {
			id: 'id_' + Date.now(),
			content: textContent,
			style: {
				color,
				size: Number(size),
			},
		};

		setInvite((currentInvite) => ({
			...currentInvite,
			text: [...currentInvite.text, text],
		}));
	}

	function selectBackgroundImage() {
		const photoFile = document.querySelector(
			'#photo-file'
		) as HTMLInputElement;

		photoFile.click();
	}

	function changeBackgroundImage(event: React.ChangeEvent<HTMLInputElement>) {
		const photoFile = event.target as HTMLInputElement | null;

		if (!photoFile) return;

		const file = (photoFile.files as FileList)[0];

		setImage(file);
	}

	async function downloadInvite() {
		if (!image) return;

		setDownloadLoading(true);

		const editor = document.querySelector('#editor') as HTMLDivElement;
		const result = await htmlToImage
			.toPng(editor)
			.then((dataUrl) => dataUrl)
			.catch((error) => {
				console.error('oops, something went wrong!', error);
			});

		setDownloadLoading(false);

		if (!result) return;

		const inviteName = `easyinvite-${image.name}.png`;

		download(result, inviteName);
	}

	return (
		<HomeContainer>
            <Head>
                <title>EasyInvite</title>
            </Head>

			<header>
				<div className="content">
					<h1>EasyInvite</h1>

					<div className="buttons">
						<div
							className="button-icon"
							title="Adicionar texto"
							onClick={addText}
						>
							<i className="fal fa-text"></i>
							<div className="plus">
								<i className="fal fa-plus"></i>
							</div>
						</div>

						<div
							className="button-icon"
							onClick={selectBackgroundImage}
							title="Adicionar imagem de fundo"
						>
							<input
								type="file"
								id="photo-file"
								ref={photoFileRef}
								onChange={changeBackgroundImage}
							/>

							<i className="fal fa-images"></i>
							<div className="plus">
								<i className="fal fa-plus"></i>
							</div>
						</div>

						<Button
							loading={downloadLoading}
							onClick={downloadInvite}
						>
							Baixar grátis
						</Button>
					</div>
				</div>
			</header>

			<main>
				<div className="content">
					<div
						id="editor"
						style={{
							width: invite.width + 'px',
							height: invite.height + 'px',
						}}
					>
						<div
							className="overlay"
							onClick={() => setSelected(null)}
						/>

						<img ref={photoPreviewRef}  className="photo-preview" />

						{invite.text.map((text) => (
							<BoxText
								key={text.id}
								text={text}
								isSelected={
									!!(selected && selected.id === text.id)
								}
								onClick={() =>
									setSelected({
										type: 'text',
										id: text.id,
									})
								}
							/>
						))}
					</div>
				</div>
			</main>

			{/* <footer></footer> */}
		</HomeContainer>
	);
}

export default Home;
