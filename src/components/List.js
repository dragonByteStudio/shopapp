import React from 'react';

//style
import '../assets/style/list.css';

//svg & img
import add from '../assets/svg/button_add.svg';
import dropDown from '../assets/svg/chevron_down_filled.svg';
import expand from '../assets/svg/chevron_down_outline.svg';
import search from '../assets/svg/magnifying_glass.svg';
import more from '../assets/svg/kabab_menu_icon.svg';
import obama from '../assets/image/obama.png';

function List() {
	return (
		<div className={'container content'}>
			<div className={'head header'}>
				<p>List</p>
				<div className={'user'}>
					<img src={obama} alt={'user'} />
					<p>Barrack Obama</p>
					<img src={expand} alt={'expand'} />
				</div>
			</div>

			<div className={'head subheader'}>
				<img src={add} alt={'add'} />
				<p>
					Sort by Date <img src={dropDown} alt={'drop down'} />
				</p>
				<div className={'group-info'}>
					<img src={search} alt={'search'} />
					<img src={more} alt={'more'} />
				</div>
			</div>

			<div className={'list'}>
				<div className={'list-card'}>
					<p className={'list-card__title'}>Lunch Food List</p>
					<p className={'list-card__desc'}>Kids weekly school lunch list.</p>
				</div>
				<div className={'list-card'}>
					<p className={'list-card__title'}>Food List</p>
					<p className={'list-card__desc'}>Family food list.</p>
				</div>
				<div className={'list-card'}>
					<p className={'list-card__title'}>Party Food</p>
					<p className={'list-card__desc'}>Party and events food.</p>
				</div>
				<div className={'list-card'}>
					<p className={'list-card__title'}>Work Food</p>
					<p className={'list-card__desc'}>My weekly work food.</p>
				</div>
			</div>
		</div>
	);
}

export default List;
