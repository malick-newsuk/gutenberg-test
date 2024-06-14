import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { headline, kicker, subdeck, kickerBackgroundColor, headlineColor } = attributes;

	return (
		<div className={"gutenberg-game-day-2"}>
			<RichText.Content
				{...useBlockProps.save()}
				tagName="h5"
				value={ kicker }
				className='gutenberg-game-day-2-richtext gutenberg-game-day-2-kicker'
				style={{backgroundColor: kickerBackgroundColor}}
			/>
			<RichText.Content
			{...useBlockProps.save()}
			tagName="h2"
			value={ headline }
			className='gutenberg-game-day-2-richtext gutenberg-game-day-2-headline'
			style={{color: headlineColor}}
			/>
			<RichText.Content
				{...useBlockProps.save()}
				tagName="h3"
				value={ subdeck }
				className='gutenberg-game-day-2-richtext gutenberg-game-day-2-subdeck'
			/>
		</div>

	);
}
