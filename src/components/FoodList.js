import React from 'react';

//style
import '../assets/style/food-list.css';

//svg & img
//import add from '../assets/svg/button_add.svg';
import expand from '../assets/svg/chevron_down_outline.svg';
import more from '../assets/svg/kabab_menu_icon.svg';
import obama from '../assets/image/obama.png';
import unchecked from '../assets/svg/radio_selected.svg';
import checked from '../assets/svg/radio_unselected.svg';

function List() {
	return (
		<div className={'container content'}>
			<div className={'head header'}>
				<p>Food List</p>
				<div className={'user'}>
					<img src={obama} alt={'user'} />
					<p>Barrack Obama</p>
					<img src={expand} alt={'expand'} />
				</div>
			</div>
			<div className="two-column-list">
				<div className={'list'}>
					<div className="list-title">Meat & Fish</div>

					<div className={'list-card'}>
						<div className={'list-card-group'}>
							<img src={unchecked} alt={'unchecked'} />
							<p className={'list-card__quantity'}>1</p>
							<p className={'list-card__title'}>Chicken Breast</p>
						</div>

						<div className={'list-card-group'}>
							<p className={'list-card__price'}>$6.75</p>
							<img src={more} alt={'more'} />
						</div>
					</div>

					<div className={'list-card'}>
						<div className={'list-card-group'}>
							<img src={unchecked} alt={'unchecked'} />
							<p className={'list-card__quantity'}>1</p>
							<p className={'list-card__title'}>Tilapia</p>
						</div>

						<div className={'list-card-group'}>
							<p className={'list-card__price'}>$2.39</p>
							<img src={more} alt={'more'} />
						</div>
					</div>

					<div className={'list-card'}>
						<div className={'list-card-group'}>
							<img src={checked} alt={'checked'} />
							<p className={'list-card__quantity'}>1</p>
							<p className={'list-card__title checked'}>Pork Chop</p>
						</div>

						<div className={'list-card-group'}>
							<p className={'list-card__price'}>$10.28</p>
							<img src={more} alt={'more'} />
						</div>
					</div>

					<div className={'list-card'}>
						<div className={'list-card-group'}>
							<img src={unchecked} alt={'unchecked'} />
							<p className={'list-card__quantity'}>6</p>
							<p className={'list-card__title'}>Slices of Ham</p>
						</div>

						<div className={'list-card-group'}>
							<p className={'list-card__price'}>$8.75</p>
							<img src={more} alt={'more'} />
						</div>
					</div>

					<div className="list-title">Diary</div>

					<div className={'list-card'}>
						<div className={'list-card-group'}>
							<img src={checked} alt={'checked'} />
							<p className={'list-card__quantity'}>1</p>
							<p className={'list-card__title checked'}>Milk</p>
						</div>

						<div className={'list-card-group'}>
							<p className={'list-card__price'}>$3.26</p>
							<img src={more} alt={'more'} />
						</div>
					</div>

					<div className={'list-card'}>
						<div className={'list-card-group'}>
							<img src={unchecked} alt={'unchecked'} />
							<p className={'list-card__quantity'}>3</p>
							<p className={'list-card__title'}>Cheese</p>
						</div>

						<div className={'list-card-group'}>
							<p className={'list-card__price'}>$4.67</p>
							<img src={more} alt={'more'} />
						</div>
					</div>

					<div className={'list-card'}>
						<div className={'list-card-group'}>
							<img src={checked} alt={'checked'} />
							<p className={'list-card__quantity'}>4</p>
							<p className={'list-card__title checked'}>Yougurt</p>
						</div>

						<div className={'list-card-group'}>
							<p className={'list-card__price'}>$3.77</p>
							<img src={more} alt={'more'} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default List;
