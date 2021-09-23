/* eslint-disable prettier/prettier */
import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';

import product from '../../data/product';
import styles from './styles';

const ProductScreen = () => {
	const [selectOption, setSelectedOption] = useState(product.options?product.options[0]:null);
	return (
		<View style={styles.main}>
			{/* Title */}
			<Text style={styles.title}>{product.title}</Text>
			{/* image */}
			<Image source={{}}/>
			{/* option selector */}
			<Picker
				selectedValue={selectOption}
				onValueChange={(itemValue)=>
					setSelectedOption(itemValue)
				}
			>
				{product.options.map(option=>(
					<Picker.Item label={option} value={option} />
					))
				}
			</Picker>
			{/* price  */}
			<Text style={styles.price}>
				From Rs {product.price}
				{product.oldPrice && (
					<Text style={styles.oldPrice}> Rs {product.oldPrice}</Text>
				)}
			</Text>
			{/* description */}
			<Text>{product.description}</Text>
			{/* quantity */}
			{/* buttons */}
			{/* <Button title="submit" onPress={}/> */}


		</View>
	);
};

export default ProductScreen;
