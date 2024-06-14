import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InspectorControls, PanelColorSettings } from '@wordpress/block-editor';
import './editor.scss';
export default function Edit( { attributes, setAttributes } ) {
	const { headline, kicker, subdeck, kickerBackgroundColor, headlineColor } = attributes;

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
					className={"gutenberg-game-day-2-richtext gutenberg-game-day-2-kicker"}
					tagName="h5"
					value={ kicker }
					onChange={ (kicker) => setAttributes( { kicker } ) }
					placeholder={ __( 'Kicker...' ) }
					style={{backgroundColor: kickerBackgroundColor}}
				/>
				<RichText
					className={"gutenberg-game-day-2-richtext gutenberg-game-day-2-headline"}
					tagName="h2"
					value={ headline }
					onChange={ (headline) => setAttributes( { headline } ) }
					placeholder={ __( 'Headline...' ) }
					style={{color: headlineColor}}
				/>
				<RichText
					className={"gutenberg-game-day-2-richtext gutenberg-game-day-2-subdeck"}
					tagName="h3"
					value={ subdeck }
					onChange={ (subdeck) => setAttributes( { subdeck } ) }
					placeholder={ __( 'Subdeck...' ) }
				/>
			</div>
		</div>
	);
}
