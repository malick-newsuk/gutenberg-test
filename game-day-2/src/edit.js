import { __ } from '@wordpress/i18n';
import { useState, useRef } from '@wordpress/element';
import { useBlockProps, RichText, InspectorControls, PanelColorSettings } from '@wordpress/block-editor';
import './editor.scss';
export default function Edit( { attributes, setAttributes } ) {
	const { headline, kicker, subdeck, kickerBackgroundColor, headlineColor } = attributes;
	const [kickerHasError, setKickerHasError] = useState(false);
	const [headlineHasError, setHeadlineHasError] = useState(false);
	const [subdeckHasError, setSubdeckHasError] = useState(false);
	const kickerRef = useRef(null);
	const headlineRef = useRef(null);
	const subdeckRef = useRef(null);

	function characterLimitCheck(inputText, characterLimit, saveAttribute, setErrorFunction) {
			 const inputTextLength = inputText.length;
			 if (inputTextLength <= characterLimit ) {
				 setErrorFunction(false);
				 setAttributes( { [saveAttribute]: inputText } )
			 } else {
				 setErrorFunction(true);
			 }
	}

	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelColorSettings
					title={"Kicker Background Colour"}
					colorSettings={
						[
							{
								value: kickerBackgroundColor,
								onChange: (newColor) => setAttributes({kickerBackgroundColor: newColor}),
								label: "Kicker Background Colour"
							}
						]
					}
				/>
				<PanelColorSettings
					title={"Headline Colour"}
					colorSettings={
						[
							{
								value: headlineColor,
								onChange: (newColor) => setAttributes({headlineColor: newColor}),
								label: "Headline Colour"
							}
						]
					}
				/>
			</InspectorControls>

			<div className={"gutenberg-game-day-2"}>
				<RichText
					ref={kickerRef}
					className={`gutenberg-game-day-2-richtext gutenberg-game-day-2-kicker ${kickerHasError ? 'error' : ''}`}
					tagName="h5"
					value={kicker}
					onChange={(newKicker) => characterLimitCheck(newKicker, 20, 'kicker', setKickerHasError)}
					placeholder={__('Kicker...')}
					style={{backgroundColor: kickerBackgroundColor}}
				/>
				<div className={`char-limit-error-message error-kicker ${kickerHasError ? '' : 'hidden'}`}>
					Text is too long. Kicker must be less than 20 characters.
				</div>
				<RichText
					ref={headlineRef}
					className={`gutenberg-game-day-2-richtext gutenberg-game-day-2-headline ${headlineHasError ? 'error' : ''}`}
					tagName="h2"
					value={headline}
					onChange={(newHeadline) => characterLimitCheck(newHeadline, 80, 'headline', setHeadlineHasError)}
					placeholder={__('Headline...')}
					style={{color: headlineColor}}
				/>
				<div className={`char-limit-error-message error-headline ${headlineHasError ? '' : 'hidden'}`}>
					Text is too long. Headline must be less than 80 characters.
				</div>
				<RichText
					ref={subdeckRef}
					className={`gutenberg-game-day-2-richtext gutenberg-game-day-2-subdeck ${subdeckHasError ? 'error' : ''}`}
					tagName="h3"
					value={subdeck}
					onChange={(newSubdeck) => characterLimitCheck(newSubdeck, 120, 'subdeck', setSubdeckHasError)}
					placeholder={__('Subdeck...')}
				/>
				<div className={`char-limit-error-message error-subdeck ${subdeckHasError ? '' : 'hidden'}`}>
					Text is too long. Subdeck must be less than 120 characters.
				</div>
			</div>
		</div>
	);
}
