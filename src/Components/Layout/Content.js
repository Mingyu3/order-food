import React from 'react';
import AdPhrase from '../AdPhrase';
import FoodList from '../FoodList';

const DUMMY_DATA = [
	{
		id: 1,
		name: '딤섬 새우하가우',
		description: '쫄깃한 투명피에 탱글한 새우',
		price: 11000,
	},
	{
		id: 2,
		name: '하와이안 아사이볼',
		description: '하와이 스타일의 신선한 과일이 들어간 아사이볼',
		price: 8000,
	},
	{
		id: 3,
		name: '햄가득 부대전골',
		description: '입맛 당기는 짭조름한 건더기가 가득해 자주 찾게 되는 부대찌개',
		price: 10000,
	},
	{
		id: 4,
		name: '푸짐한 소고기 콩불',
		description: '아삭한 콩나물과 쫄깃한 소고기에 칼칼한 감칠맛까지..',
		price: 9000,
	},
];

const Content = () => {
	return (
		<>
			<AdPhrase />
			<FoodList foodData={DUMMY_DATA} />
		</>
	);
};

export default Content;
